// let fname=["surakshya", "Suchana", "ojaswi"]
// // console.log(fname.toString())
// // fname.pop()
// // console.log(fname)
// fname.push("sujan")
// console.log(fname)


// let num=[1,2,3]
// console.log(num[0]+num[1]+num[2])

// let num1=[4,5,6,7,8,9,10]
// console.log(num1.length)

// let number=[1,2,3,4,5];
// let doublenum=number.map(item=> item+2);
// console.log(doublenum)

// let num=[1,2,3,4,5,6,7,8]
// let evenar=num.filter(item=> item%2===0)
// console.log(evenar)

// let num=[1,2,3,4]
// let number=num.map(item=> item*2)
// console.log(number)

// let fname=["surakshya", "suchana", "ojaswi"]
// let uppercase= fname.map(item=> item.toUpperCase())
// console.log(uppercase)

// let fname=["surakshya", "suchana", "ojaswi", "sujan","john"]
// let ffname=fname.filter(item=>item.lenght >4)
// console.log(ffname)


// let num=[1,2,3,4,5,6,7,8]
// let number=num.filter(item=> item<5) .map(item=> item*2)
// // let num1=number.map(i=>i*2)
// console.log(number)

// let language=["python","c++","java"]
//  let arr=language.map(item=>item[0])
//  console.log(arr)

// let num=[0,-3,4,-3,-6]
// let number=num.filter(item=> item<0)
// console.log(number)


// let variableh1=document.querySelector("h1")
// variableh1.innerHTML="new year new me"
// let heading=document.querySelector("#heading")
// heading.innerHTML="new year new me"
// let para=document.querySelector(".para")
// para.innerHTML="new year old me"
// console.log(para)
// console.log(heading)


// let para=document.querySelector(".para")
// // para.style.backgroundColor="red"
// para.style.color="blue"

// para.classList.remove("sample")

// let btn=document.querySelector(".btn")

// let para=document.querySelector(".para")
// btn.addEventListener("mouseover", function(){
//    para.innerHTML="hello i am surakshya"
// })

// function changecontent(){
// para.style.backgroundColor="red"
// }

// btn.addEventListener("click", changecontent)

let todoapp=document.querySelector(".todoapp");
let btn=document.querySelector(".btn");
let todos=document.querySelector(".todos")


btn.addEventListener("click", function(){

let todovalue=todoapp.value

let li=document. createElement("li")
let delbtn=document.createElement("button")
todos.appendChild(li)
li.innerHTML=todovalue
delbtn.innerHTML="delete todo"
todos.appendChild(delbtn)  




delbtn.addEventListener("click", function(){
todos.removeChild(li)
todos.removeChild(delbtn)
})

})

