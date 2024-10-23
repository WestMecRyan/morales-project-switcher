// src/components/Intersection.jsx
const Intersection = ({ title, children }) => {
  return (
    <section className="hidden">
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
};
export default Intersection;
