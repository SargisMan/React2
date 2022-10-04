import { createContext, useState } from "react";

export const HooksContext=createContext();
console.log('HooksContext',HooksContext);

const HooksStateProvider=(props)=>{
    const [counter,setCounter]=useState(0);
    return <HooksContext.Provider
    value={
        {
            counter,
            setCounter,
            test:true,
            name:"ashot",
            foo:()=>5
        }
        }
    >
        {props.children}
    </HooksContext.Provider>
}

export default HooksStateProvider;