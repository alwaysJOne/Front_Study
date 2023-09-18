/**
 * Hoisting
 */



console.log(name);
var name = "jiwon";
console.log(name);

/**
 * Hoisting은 뭘까?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 */

console.log(name);
let name = "jiwon";
console.log(name);