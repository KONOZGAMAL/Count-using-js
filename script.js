let count = document.querySelector("#count");

let one = document.querySelector("#one");

let two = document.querySelector("#two");
let three = document.querySelector("#three");

one.onclick = () => {
  count.innerHTML -= 1;
  if (count.innerHTML < 0) {
    count.style.color = 'red'
  }
 };
two.onclick = () => {
 count.innerHTML++ ;
 if (count.innerHTML > 0) {
  count.style.color = 'blue'
}
};
three.onclick = () => {
  count.innerHTML = 0 ;
  if (count.innerHTML == 0) {
   count.style.color = 'black'
 }
 };
 