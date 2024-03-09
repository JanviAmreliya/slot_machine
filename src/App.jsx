import React from 'react';
import SlotM from './SlotM'

const App = ()=>{
    return (
      <>
          <h1 className="heading_style"> 🎰 welcome to{" "}
           <span style={{color:'red'}}>Slot machine game 🎰 </span>
            </h1>
            <div className="slotmachine">
            <SlotM x='😆'   y='😆'  z='😆'/>
            <SlotM x='🤐'   y='😼'  z='🤩'/>
            <SlotM x='💗'   y='🙄'  z='😆'/>
            </div>
      </>
    )
   
}
export default App;