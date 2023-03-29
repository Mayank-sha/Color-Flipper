// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click", function(){

  let hexcol= "#" + Math.random().toString(16).substring(2,8); 
  // for(let i =0; i<6; i++){
  //   hexcol += hex[getRandom()]
  // }
  color.textContent = hexcol;
  document.body.style.backgroundColor = hexcol;
})

// function getRandom(){
//    return Math.floor(Math.random()*hex.length);
// }
