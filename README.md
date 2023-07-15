# Key-Values Splitter
A function that receives an input dictionary and displays a nested array of keys and values.
![web](https://user-images.githubusercontent.com/58778570/179086273-2a0ec4cf-f0d1-4be8-aca7-9182d28b3ee8.gif)
![terminal](https://user-images.githubusercontent.com/58778570/179098078-0382bd47-665a-4fae-9fb5-64b1da2c5326.gif)

## Requirements ⚙️
> Note: This app can be run in an installed terminal with node.js or in a web browser (node.js installed is not required).

- Node.js

Or

- Any web browser

## Clone the repository
```bash
git clone https://github.com/angcoder-c/Key-Values_Splitter.git
```
## Run 🏁
- Open Html file `index.html` in the browser
![web](https://user-images.githubusercontent.com/58778570/179086320-5890e3fc-55d7-4af6-948c-84dac8bc4b0b.gif)

---

- Run the `tester.js` file, followed by the word `show`. Then you can choose between two options:
![terminal](https://user-images.githubusercontent.com/58778570/179098099-093b0ae5-7bb7-466b-8fd8-28e6efb70765.gif)

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
