---
title: Absolunet Test
---

# Test Front End [#](https://docs.google.com/document/d/1mURG0b29iJtbO4kfVlAEnshyOFawCPOZqvI9ODrwPwU/)

Entrevue v2.0.2

## 5. Écrire un script qui change le texte A en B

---

### A

```js
Lorem ipsum dolor sit amet, consectetur adipiscing elit
```

### B

```html
tile gnicsipida rutetcesnoc ,tema tis rolod muspi meroL
```

### SOLUTION

```javascript

function reverseString(str) {
    return str.split("").reverse().join("");
}

reverseString("Lorem ipsum dolor sit amet, consectetur adipiscing elit");
// "tile gnicsipida rutetcesnoc ,tema tis rolod muspi meroL"

```

