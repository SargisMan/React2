import {useState,useEffect, useRef} from 'react'

//useState
// const Hooks =()=>{
//     const [counter, setCounter]=useState(0);
    // const [inputValue,setValue]=useState("")
    // console.log('counter',counter);
    // console.log('setCounter',setCounter)
//     const [formData, setFormData]=useState({
//         name:"",
//         surname:"",
//         phoneNumber:""
//     })
//     // console.log('Hooks render')
//     const setFormValues=(e)=>{
//         const {name, value}=e.target;
//         setFormData({
//             ...formData,
//             [name]:value
//         })
//     }
//     return(
//         <div>
//             <h1>
//             Hooks Demo
//             </h1>
//                 <div style={{width:"50%",margin:"0 auto",border:"1px solid black"}}>
//                 <p>
//                     Count: {counter}
//                 </p>
//                 <button onClick={()=>setCounter(counter+1)}>Plus</button>
//                 <button onClick={()=>setCounter(counter-1)}>Minus</button>
//             </div>

//             <div style={{margin:"50px auto",border:"1px solid black"}}>
//                 <input 
//                 type="text"
//                 name="Name"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={setFormValues}
//                 />

// <input 
//                  type="text"
//                  name="Surname"
//                  placeholder="Surname"
//                  value={formData.surname}
//                  onChange={setFormValues}
//                 />
//                 <p>
                    
//                 </p>
//             </div>
            

//         </div>
//     );
// }


const Hooks=()=>{
        const [counter, setCounter]=useState(0);
        const [test, setTest]=useState(false);
        const focusInput=useRef(null)
        //ComponentDidUpdate
useEffect(()=>{
    console.log('componentDidUpdate//մաքուր componentDidUpdate');
    console.log('focusInput',focusInput);
    focusInput.current.focus()
    return function(){
        console.log('componentWillUnmount1')
    }
})
//componentDidUpdate
        useEffect(()=>{
            console.log("useEffect, update for counter");
            if(counter===5){
                setCounter(0);
                console.log("Barev")};
                if(test)console.log("Ayo test")
                return function(){
                    console.log('componentWillUnmount2')
                }
        }
        ,[counter,test]);

        //ComponentDidMount
        useEffect(()=>{
            console.log("useEffect 2, componentDidMount, counter");
            return function(){
                console.log('componentWillUnmount3')
            }
        },[]);

    return(
        <div>
                <div style={{width:"50%",margin:"0 auto",border:"1px solid black"}}>
            <p>
            Count: {counter}
            </p>
                <button onClick={()=>setCounter(counter+1)}>Plus</button>
                <button onClick={()=>setCounter(counter-1)}>Minus</button>
           </div>

           <div style={{width:"50%",margin:"0 auto",border:"1px solid black"}}>
            <p>
            Test: {test?"true":"false"}
            </p>
                <button onClick={()=>setTest(!test)}>Change</button>
           </div>
           <div style={{width:"50%",margin:"0 auto",border:"1px solid black"}}>
           <input 
           type="text"
           placeholder="focus"
           ref={focusInput}
           />
            
           </div>
        </div>
    )
}
export default Hooks;

