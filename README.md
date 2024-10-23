# UseEffect and UseRef

Use effect fires on every render unless it has a depency array.

An empty dependency array will fire on the first 'mounting' of the component.

A dependency array can be passed a variable and will only fire if it sees that variable change.
