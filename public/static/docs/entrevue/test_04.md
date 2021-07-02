---
title: Absolunet Test
---

# Test Front End

Entrevue v2.0.2

## 4. Lequel est le meilleur sémantiquement et pourquoi ?
[Contexte: Page de contact du site d'Absolunet]

### A
```html
<section>
    <header><h1>Lorem ipsum</h1></header>
    <p>Lorem ipsum dolor sit amet</p>
    <p>Lorem ipsum dolor sit amet</p>
    <footer>Lorem ipsum</footer>
</section>
```

### B
```html
<section>
    <header><hgroup><h1><span>Lorem ipsum</span></h1></hgroup></header>
    <div class="Contenu>
        <p>Lorem <span>ipsum dolor</span> sit amet</p>
        <p>Lorem ipsum dolor sit amet</p>
    </div>
    <footer class="Auteur"><em>Lorem ipsum</em></footer>
</section>
```


## Réponse : A

### Pourquoi A ?

- Le regroupement des éléments respecte le [Content Flow](https://html.spec.whatwg.org/multipage/sections.html#the-section-element)
- L'ordre de la structure est approprié pour le type de contenue
- Tous les tags ont une valeur sémantique et peuvent être correctement lus par des lectrices digitales

### Pourquoi pas B ?

- [ span, em, div ], n'apporte aucune valeur sémantique
- les class="..."  n'ont pas de valeur sémantique
- hgroup doit optimalement avoir plus de 1 header




https://html.spec.whatwg.org/multipage/semantics.html#semantics