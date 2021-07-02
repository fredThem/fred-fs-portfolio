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

// console.log(hellowWorld('welcome'));

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
