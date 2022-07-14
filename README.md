# Key-Values Splitter
A function that receives an input dictionary and returns a nested array of keys and values.

## Requirements ⚙️
> Note: This app can be run in a terminal with node.js installed or in a web browser (node.js installed is not required).

- Node.js

Or

- Any web browser

## Clone the repository
```bash
git clone https://github.com/Angel-Gabriel-Chavez/Key-Values_Splitter.git
```
## Run 🏁
- Open Html file `index.html` in the browser

---

- Run the `tester.js` file, followed by the word `show`. Then you can choose between two options:

1. Show a list of preset tests:

```bash
node tester.js show tests
```

2. Create your own entry as follows:

```bash
node tester.js show a:1 b:2 c:3
```

You would get an output like the following:

```bash
>>> [ [ 'a', 'b', 'c' ], [ '1', '2', '3' ] ]
```
