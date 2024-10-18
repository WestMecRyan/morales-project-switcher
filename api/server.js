import express from 'express';
import simpleGit from 'simple-git';

const git = simpleGit();
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// API route to display branches at /git-admin
app.get('/git-admin', async (req, res) => {
    try {
        const branchSummary = await git.branch();
        const branches = branchSummary.all; // Array of all branches
        let html = '<h1>Git Branches</h1><ul>';

        // Create an HTML response listing all branches with buttons to checkout
        branches.forEach(branch => {
            html += `
                <li>
                    ${branch} 
                    <button onclick="checkoutBranch('${branch}')">Checkout</button>
                </li>`;
        });
        html += '</ul>';

        // Add script to handle the button clicks
        html += `
        <script>
            async function checkoutBranch(branch) {
                const response = await fetch('/git-admin/checkout', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ branch })
                });
                const result = await response.json();
                console.log(result.message);
            }
        </script>`;

        res.send(html); // Send the list of branches as HTML with buttons
    } catch (err) {
        console.error('Error fetching branches:', err);
        res.status(500).send('Error fetching branches');
    }
});

// API route to checkout a branch
app.post('/git-admin/checkout', async (req, res) => {
    const { branch } = req.body;
    if (!branch) {
        return res.status(400).json({ message: 'Branch name is required' });
    }

    try {
        await git.checkout(branch);
        res.json({ message: `Checked out branch: ${branch}` });
    } catch (err) {
        console.error('Error checking out branch:', err);
        res.status(500).json({ message: `Error checking out branch: ${branch}` });
    }
});

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
