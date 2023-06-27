import React,{useReducer,createContext,useContext} from "react";

const cardstatecontext=createContext()
const carddispatchcontext=createContext()

const reducer=(state,action)=>{
    switch (action.type) {
        case "Add":
            return [...state,{id:action.id,name:action.name,qty:action.qty,size:action.size,price:action.price,img:action.img}]
            
    
        default:
            console.log("Error in reducer")
    }
}

export const Cartprovider=({children})=>{
    const [state,dispatch]=useReducer(reducer,[])
    return(
        <carddispatchcontext.Provider value={dispatch}>
            <cardstatecontext.Provider value={state}>
                {children}
            </cardstatecontext.Provider>
        </carddispatchcontext.Provider>
    )
}

export const useCart=()=>useContext(cardstatecontext)
export const useDispatchcart=()=>useContext(carddispatchcontext)
