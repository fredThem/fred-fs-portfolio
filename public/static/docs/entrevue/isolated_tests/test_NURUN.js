function computeClosestToZero(ts) {
  // Write your code here
  // To debug: console.error('Debug messages...');
  // console.log(ts);
  // console.log(Array.isArray(ts)); // is an array
  ts.forEach(element => {
      let closestToZero = 0;
      console.log(closestToZero)
      // console.log(element)
      // if (element < closestToZero) {
      //     // return "element is smaller than closestToZero"
      //     closestToZero.push()
      // }
      items.forEach(function(item){
copyItems.push(item)
})
      });
  return 0;
}
/* Ignore and do not change the code below */
// #region main
const n = parseInt(readline());
const ts = readline().split(' ').map(j => parseInt(j)).slice(0, n);
const oldWrite = process.stdout.write;
process.stdout.write = chunk => { console.error(chunk); return true }
const solution = computeClosestToZero(ts);
process.stdout.write = oldWrite;
console.log(solution);
// #endregion
