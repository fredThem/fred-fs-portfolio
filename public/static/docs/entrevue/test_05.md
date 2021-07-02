---
title: Absolunet Test
---

# Test Front End

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

