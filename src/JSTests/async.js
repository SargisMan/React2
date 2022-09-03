// console.log("Hello Async");
  
//version1
// setTimeout(()=>{
//     console.log("Timeout1")
// },5000)

// setTimeout(()=>{
//     console.log("Timeout2")
// },2000)

// console.log("Third action")

//version 2
// setTimeout(()=>{
//     console.log("Timeout1");
//     setTimeout(()=>{
//         console.log("Timeout2")
//     },2000)
// },5000)


//version 3
// const a=5;
// const b=7;

// function Sum (x,y){
//     setTimeout(()=>{
//         console.log('Sum= ',x+ y)
//     },3000);
// };

// function Mult(x,y){
//     setTimeout(()=>{
//         console.log('Mult= ', x * y)
//     },3000)
// }

// Sum(a,b);
// Mult(a,b)

//version 4
// const d=3;
// const g=9;

// function sum2 (z,s, callback2){
//     setTimeout(()=>{
//         console.log('Sum1= ',z+s);
//         callback2 && callback2(z,s)
//     },3000)
// }

// function mult2(z,s,callback){
//     setTimeout(()=>{
//         console.log('mult2= ',z*s);
//         //1000 another command rows
//         callback && callback(z,s)
//     },5000)
// }

// mult2(d,g,sum2);
// //or
// mult2(d,g,function foo(){
//     sum2(0,5)
// })
// sum2(d,g,()=>{
//     mult2(10,10,()=>{
//         sum2(8,9,()=>mult2(11,22,()=>{
//             sum2(1,1,()=>{
//                 sum2(4,4)
//             })
//         }))
//     })
// })


//Promisis
// const t=5;
// const q=6;
// function sump(t,q,callback){
//     setTimeout(()=>{
//         console.log(`${t}+${q}=`,t+q)
//         callback && callback({
//             data:t+q,
//             resolve:callback
//         })
//     },1000)
// }
// function mult3(t,q,callback){
//     setTimeout(()=>{
//         console.log(`${t}*${q}=`,t*q);
//         callback && callback({
//             data:t*q,
//             resolve:callback
//         })
//     },1000)
// }


// function Success(){
//     setTimeout(()=>{
//         console.log('Success');
//     },2000)
// }

// function Failed(){
//     setTimeout(()=>{
//         console.log('Failed');
//     },2000)
// }

// const p=new Promise((resolve, reject)=>{
//     sump(4,5,resolve)
// });



// console.log('p',p)
// p.then((result)=>{ 
//     console.log('result ',result);
//     return "Second Promise";
// })
// .then((text)=>{
//     console.log('text',text);
// })


// p.then((result)=>{
//     console.log('result',result);
//     return new Promise ((resolve, reject)=>{
//         mult3(4,5,resolve);
//     }).then((data)=>{
//         // console.log('data',data);
//     })
//     .then((result2)=>{
//         return new Promise((resolve,reject)=>{
//             sump(2,4,resolve)
//         }).then((data)=>{
//             // console.log('data',data)
//         })
//     }) 
// })



