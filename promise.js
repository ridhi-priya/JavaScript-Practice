// // // promise in js
// // // synchronous vs asynchronous code 

// // // javascript is single threated language:- it runs the synchronous code 1st then comes to asynchronous code


// // // synchronous:- it runs the code line by line

// // console.log("start")
// // console.log('applied synchronous code in js')
// // console.log('finish')

// // // asynchronous:- it runs the line by line but setTimeout will execuite after all line


// // console.log("start")
// // setTimeout(()=>{
// //     console.log("applied asynchronous () code in js")
// // },1000)
// // console.log("finish")

// *******************coder dost ************************ //

// code with finally():- finally runs after promise gets complete either resolve or reject 
console.log("start")
const p1=new Promise((resolve,reject) =>{
    setTimeout(()=>{
        // resolve("p1 executed")
        reject("error")
    },3000)
})

p1.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err, ": ok error catched")
}).finally(()=>{
    console.log("finally")
})

// code with two promises and promise.all()















// **********************Roadside coader******************************** //

// // callback example


// document.getElementById("demo").innerHTML = "hello";

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//     }
    
//     function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//     }
    
//     myCalculator(5, 5, myDisplayer);

//     // another ecapmle of callback with setTimeout

// console.log("start")

// function importantAvction(userName,cb){
//     setTimeout(()=>{
//         cb(`suscribe to ${userName}`)
//     },4000)
// }
// function likeTheVideo(video,cb){
//     setTimeout(()=>{
//         cb(`like the ${video}`)
//     },1000)
// }

// const message= importantAvction("RoadSide coder", function (message){
//     console.log(message)
// },)

// likeTheVideo("Javascript interview video", (action)=>{
//     console.log(action)
// })
// console.log("stop")

// // start promises
// console.log("start promises")

// const sub=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         const result=true
//         if(result) resolve("good you have success message")
//         else reject(new Error("bad you got an error"))
//     },1000)
// })

// console.log(sub)
// sub.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

// console.log("finish promises")


// implement same Promise in our previous example

