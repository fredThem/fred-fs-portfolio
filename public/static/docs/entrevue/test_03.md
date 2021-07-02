---
title: Absolunet Test
---

# Test Front End

Entrevue v2.0.2

## 3. Améliorer ce code SCSS

(tout peut être changé)


### ✍️ [Codepen view](https://codepen.io/them-sayer/pen/jOmPaQe)


```scss
$color_primary: #334455 !default;
$color_secondary: #666 !default;

.foo-bar {
  $font-size: 16px;
  font-size: $font-size;
  padding: $font-size * 2;
  border: red solid 1px;
  & > .big {
    font-size: 2em;
    padding: 2em;
  }
}
.hello-world {
  color: $color_secondary;
  display: flex;
  flex-grow: 1;
  & > * {
    flex-grow: 1;
    box-sizing: border-box;
  }
  .col-9 {
    background-color: $color_primary;
    z-index: 37;
    @media (max-width: 64em) {
      width: 75%;
      background-color: #999999;
    }
  }
  .col-3 {
    color: $color_primary;
    background-color: $color_secondary;
    @media (max-width: 64em) {
      width: 25%;
    }
  }
}
.lorem-ipsum {
  padding: 0 2em;
}
.lorem-dolor {
  &::after {
    color: lighten($color_secondary, 20%);
    //     below is for clarity
    content: "Eeny, meeny, miny, moe.";
    background-color: $color_primary;
    padding: 10px;
    border-radius: 4px;
    font-size: 16px;
    margin-left: 10px;
  }
}
```



```html
<div class="hello-world">
    <div class="col-9">
        <p class="foo-bar">eenie meenie miney <span class="big">mo</span></p>
    </div>
    <div class="col-3"> 
        <p class="foo-bar">Catch a 🐯 by the <span class="big">toe</span></p>
    </div>

    </div>    
</div>
<div class="hello-world" style="text-align:center;">
        <h1 class="lorem-dolor">If he hollers, let him go,
</h1>
</div>

```