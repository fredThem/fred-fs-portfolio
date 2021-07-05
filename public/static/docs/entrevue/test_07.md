---
title: Absolunet Test
---

# Test Front End [#](https://docs.google.com/document/d/1mURG0b29iJtbO4kfVlAEnshyOFawCPOZqvI9ODrwPwU/)

Entrevue v2.0.2

## 7. Améliorer ce code JS (tout le JS peut être changé)


### ✍️ [Codepen view](https://codepen.io/them-sayer/pen/PomqREj)  


[Contexte HTML] 


```html
<div id="mine"></div>
<div class="welcome" data-hello="qwertyuiop"></div>
<div data-dolor="12"></div>
```


### Before

```javascript
const test = hello_world('welcome'); // 'helloWorld' was used before it was defined.
console.log(test + ' [test]');

function hello_world(foo = 'ipsum', bar) { // 'bar' is defined but never used.
    const $foo = $('.' + foo); //'$' is not defined.
    return foo + ': ' + $foo.data('hello');
}

const loremIpsum = (dolor) => {
    dolor = dolor || 'dolor';
    let test = '123456';
    let val = $('[data-'+dolor+']').data(dolor);
    return `<p>Result [${test}]: ${test * val}</p>`;
};

const myDiv = $('#mine');
myDiv.html(loremIpsum());
myDiv.css("background-color", "cyan");
myDiv.on('click', () => {
    $(this).find('p').css('color', 'red');
});

let abc = { x:'1', y:'2', z:'3' };
const x = abc.x;
const y = abc.y;
console.log(x == 1 && y >= 2 ? 'yeah' : 'boo');
```

### after 
```javascript
function helloWorld(foo) {
  console.log(`input is: ${foo}`);
  const cardGreetings = document.querySelector('.welcome');

  if (typeof (foo) === 'string') {
    cardGreetings.innerHTML = foo;
    // console.log(`${foo} is a string`);
  } else {
    console.warn(`${foo} is not a string`);
  }
}
console.log(helloWorld('welcome'));
helloWorld('welcome');
helloWorld(1);

function loremIpsum(dolor) {
  const ipsummary = ('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.').split(' ');
  const cardContent = document.querySelector('[data-dolor]');
  if (typeof (dolor) === 'number') {
    cardContent.innerHTML = ipsummary.slice(0, (ipsummary.length - dolor)).join(' ');
  } else {
    console.warn(`${dolor} is not a number`);
  }
}

const myDiv = document.getElementById('mine');
myDiv.style.backgroundColor = 'cyan';
myDiv.style.padding = '30px';
myDiv.innerHTML = '<p>Click to add 12 lorem Ipsum</p>';
myDiv.addEventListener('click', () => {
  loremIpsum(12);
  myDiv.style.color = 'red';
});
```