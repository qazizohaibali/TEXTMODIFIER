import React, { useState } from 'react'

export default function TextForm(props) {
    const [text1]=useState('(Write any type of text to modify)')
    const [text2,setText2 ]=useState('')
    // const [mode,setMode]=useState('light');
    // setText("write here")
    const handleUpClick1 = ()=>{
          console.log("It is clicked on UPPER CASE button")
          let newtext = text2.toUpperCase()
          setText2(newtext)
    }
     const handleUpClick2=()=>{
         console.log("It is clicked on lower case button")
         let newtext = text2.toLowerCase()
          setText2(newtext)
    }

    const handleToClear=()=>{
        let newtext="";
        setText2(newtext)
    }
    const handleExSpaces=()=>{
        let WiOExSp= text2.split(/[ ]+/)
        setText2(WiOExSp.join(" "))
    }
    const handleToCopy=()=>{
        let text=document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value);
    }
   
    const handleOnChange =(event)=>{
        console.log("A textarea is OnChanged ")
        setText2(event.target.value)
    }
    return (
    <>
    <div className='container mt-4' style={{color: props.mode==='dark'?'white':'black'}}>
    {/* className={'header mx-5'} */}
    <h1> {props.heading} - {text1} </h1>
    <div className="mb-3">
    <label htmlfor="myBox" class="form-label"></label>
    <textarea className="form-control" value={text2}  onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'#505255':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="10"></textarea>
    </div>
    </div>  
        <div className="container">
    <button className=' btn btn-dark mx-1 my-2' onClick={handleUpClick1}>UPPER CASE</button>  
    <button className=" btn btn-dark mx-1 my-2" onClick={handleUpClick2} > lower case</button>  
    <button className=" btn btn-dark mx-1 my-2" onClick={handleToCopy} >Copy Text</button>  
    <button className=" btn btn-dark mx-1 my-2" onClick={handleToClear} >To Clear Text</button>  
    <button className=" btn btn-dark mx-1 my-2" onClick={handleExSpaces} >Remove Extra Spaces</button>  
    </div>
    <div className="container" style={{color : props.mode === 'dark'?'white':'black'}}>

    <h2 className="conatiner my-3">Character Counter</h2>
    <p>
        {text2.length} are characters
        </p>    
    <h2 className='container my-3'>Words Counter</h2>
    
    <p>
        {text2.split(" ").length} are words
        </p>
    {/* <h2 className="container">Time To Read OneWord</h2>     */}
        {/* <p>
         { 0.008 *  text2.split(" ").lenght} minutes read 
         {text2}
        </p>  */}
        </div>
        </>
)
} 