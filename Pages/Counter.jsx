import React from "react"

export default function Counter(){
    const [counter, setCounter]= React.useState(0)
    
    // fucntions for operations
    function increment(){
        setCounter(counter+1)
    }
    function decrement(){
        setCounter(prev => prev > 0 ? prev-1: prev)
    }
    function reset(){
        setCounter(0)
    }
    
    const backgroundHeight = `${(counter / 100) * 100}%` // background height, sensitivity
    const styles={
                height: `${backgroundHeight}%`, 
                background: `linear-gradient(to top, #ff7300 ${backgroundHeight}, #fed6e3 ${backgroundHeight})`, //  linear gradient with custom height 
                transition: "background 0.5s cubic-bezier(0.4, 0, 0.2, 1)", // for smooth transition
            }
        
    return (
        <div className="counter-page">
        
        <div className="counter" style={styles}>
        {counter}
        </div>
           <div className="counter-button">
            <button className="plus-btn" onClick={increment}> Increment </button>
            <button className="minus-btn" onClick={decrement}> Decrement </button>
            </div>
           
            {counter > 0 && <button className="reset-btn" onClick={reset}> Reset </button>}
        </div>
    )
}

// refer README.md file for detailed approach explanation

