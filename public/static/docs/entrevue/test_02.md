---
title: 2. Écrire les styles
---

# Test Front End [#](https://docs.google.com/document/d/1mURG0b29iJtbO4kfVlAEnshyOFawCPOZqvI9ODrwPwU/)

Entrevue v2.0.2

## 2. Écrire les styles

      ### Contraintes
      - Ne pas modifier le HTML
      - Langage: SCSS

### ✍️ [Codepen view](https://codepen.io/them-sayer/pen/jOmPaQe)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Lorem</title>
  </head>
  <body>
    <div>
      <h1>Lorem ipsum</h1>
      <ul>
        <li>dolor</li>
        <li>sit</li>
        <li>amet</li>
        <li>consectetur</li>
        <li>adipiscing</li>
        <li>elit</li>
        <li>mauris</li>
        <li>posuere</li>
      </ul>
    </div>
  </body>
</html>
```

```scss
@mixin last-half($selector, $num) {
  $count: 1;
  $return-value: ();
  $string: ();

  @while $count <= $num {
    @if $count == 1 {
      $string: "#{$selector}:first-child:last-child,";
    } @else {
      $string: "#{$selector}:nth-child(n+#{$count}):nth-last-child(-n+#{$count}),";
    }

    $return-value: append($return-value, $string);
    $count: $count + 1;
  }

  #{$return-value} {
    @content;
  }
}
body {
  font-family: sans-serif;
  div {
    width: fit-content;
    margin: 30px;
    &::after {
      content: url(https://res.cloudinary.com/hhdcknvdc/image/upload/c_scale,w_100/v1625174893/Screen_Shot_2021-07-01_at_5.21.42_PM_eoiopr.png);
      height: auto;
      left: 300px;
      margin-bottom: -70px;
      margin-left: 60px;
      position: absolute;
      top: 30px;
      width: 30px;
    }
    &::before {
      color: #f1a747;
      content: "\2605"; /* Full star in UTF8 */
      float: left;
      font-size: 2.3em;
      margin-bottom: -10px;
      margin-right: 10px;
      margin-top: -8px;
    }
  }
  ul {
    -moz-columns: 2;
    -webkit-columns: 2;
    background-color: #f7f7f7;
    clear: both;
    columns: 2;
    display: block;
    list-style: none;
    margin: 40px 30px;
    padding: 20px 80px 20px 20px;
    width: fit-content;

    @include last-half("li", 8) {
      &::before {
        content: "-";
        color: inherit;
        font-size: 1.1em;
        margin-right: 0.5em;
      }
    }
    li {
      margin-right: 30px;
      &:nth-of-type(2)::before {
        opacity: 30%;
      }
      &:nth-of-type(4) {
        color: limegreen;
      }
      &::before {
        color: red;
        content: "•";
        font-size: 1.1em;
        margin-right: 0.5em;
      }
    }
  }
}

h1 {
  &::first-letter {
    color: blue;
  }
  clear: right;
  color: #808080;
  float: left;
  font-size: 1.8rem;
  margin: 0;
  padding-bottom: 10px;
  text-transform: uppercase;
}
```
