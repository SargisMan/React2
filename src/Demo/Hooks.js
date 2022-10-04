import {useState, useRef, useContext} from 'react';
import  '../Context/ContextDemo';
import {HooksContext} from '../Context/ContextDemo'

//example1
// const Hooks=(props)=>{
//         console.log('props',props)
//     return(
//         <HooksContext.Consumer>
//             {(context)=>{
//                 console.log('Hooks Component context',context);
//                 const {counter,setCounter}=context;
//                 return (                    
//                     <div>
//                 <div style={{width:"50%",margin:"0 auto",border:"1px solid black"}}>
//             <p>
//             Count: {counter}
//             </p>
//                 <button onClick={()=>setCounter(counter+1)}>Plus</button>
//                 <button onClick={()=>setCounter(counter-1)}>Minus</button>
//            </div>
//          </div>
//                 )
//             }
//         }
//         </HooksContext.Consumer>
        
//     )
// }


//example2
const Hooks=(props)=>{

    const context=useContext(HooksContext);
        
    return(
        <div style={{width:"50%",margin:"0 auto",border:"1px solid black"}}>
            <p>
            Count: {context.counter}
            </p>
                <button onClick={()=>context.setCounter(context.counter+1)}>Plus</button>
                <button onClick={()=>context.setCounter(context.counter-1)}>Minus</button>
           </div>
        
    )
}


export default Hooks;

