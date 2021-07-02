---
title: Absolunet Test
---

# Test Front End

Entrevue v2.0.2

## 6. Écrire un script qui change la couleur du texte du <p> selon le titre cliqué

[Contrainte: Ne pas modifier le HTML]
[Langage: Javascript ECMAScript 6+]

```html
<div id="Lorem">
  <h1>Lorem ipsum dolor sit amet</h1>
  <aside data-colour="red">
    <h1>Rouge</h1>
    <p>Lorem ipsum dolor sit amet</p>
  </aside>
  <section data-colour="green">
    <h1>Vert</h1>
    <p>Lorem ipsum dolor sit amet</p>
  </section>
  <aside data-colour="blue">
    <h2>Bleu</h2>
    <p>Lorem ipsum dolor sit amet</p>
  </aside>
</div>

<script>
  const containers = document.querySelectorAll("[data-colour]");
  containers.forEach((container) => {
    var colour = container.dataset.colour;
    container.children[0].addEventListener("click", function () {
      container.children[1].style.color = colour;
    });
  });
</script>
```
