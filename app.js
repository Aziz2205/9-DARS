function randomNum(){
  return Math.ceil(Math.random() * 10)
}
function twoRundomNum(){
  return Math.ceil(Math.random() * 4)
}


let ansplus = document.querySelector("#plus-one")
ansplus.textContent = randomNum();

let ansminus = document.querySelector("#plus-two")
ansminus.textContent = randomNum();

let sum = Number(ansplus.textContent) + Number(ansminus.textContent);

let ans1 = document.querySelector("#ansver-1")
ans1.textContent = randomNum();
let ans2 = document.querySelector("#ansver-2")
ans2.textContent = randomNum();
let ans3 = document.querySelector("#ansver-3")
ans3.textContent = randomNum();
let ans4 = document.querySelector("#ansver-4")
ans4.textContent = randomNum();
let down = document.querySelector(".down");
let next = document.querySelector(".next")

let optionVal = document.getElementById(`ansver-${twoRundomNum()}`);
optionVal.textContent = sum;

let as = ans1.textContent * 1
let as1 = ans2.textContent * 1
let as2 = ans3.textContent * 1
let as3 = ans4.textContent * 1

ans1.addEventListener("click", ()=>{
  ans1.style.background = "red"
})
ans2.addEventListener("click", ()=>{
  ans2.style.background = "red"
})
ans3.addEventListener("click", ()=>{
  ans3.style.background = "red"
})
ans4.addEventListener("click", ()=>{
  ans4.style.background = "red";
})


if(sum === as){
  ans1.addEventListener("click", ()=>{
    ans1.style.background = "green";
  document.location.reload(true)
  })
}else if(sum === as1){
 ans2.addEventListener("click", ()=>{
  ans2.style.background = "green";
  document.location.reload(true)
 })
}else if(sum === as2){
  ans3.addEventListener("click", ()=>{
    ans3.style.background = "green";
  document.location.reload(true)
  })
}else if(sum === as3){
 ans4.addEventListener("click", ()=>{
  ans4.style.background = "green";
  document.location.reload(true)
 })
}























next.addEventListener("click", ()=>{
  document.location.reload(true)
})