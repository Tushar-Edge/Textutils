
import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function Textform(props) {


    const handleupclick=()=>{

        // console.log("button clicked!!!!!" + text)
        let newText=text.toUpperCase();
        setText(newText);

        // setText(text.toUpperCase())

        if(text.length===0)
        {
            props.showAlert("Enter text First!!","warning");

        }
      
        else
        {
             props.showAlert("converted to upper case!!","success");
        }
    }

    const handleloclick=()=>{

      
        // console.log("button clicked!!!!!" + text)
        let newText=text.toLowerCase();
        setText(newText);

        // setText(text.toUpperCase())

        if(text.length===0)
        {
            props.showAlert("Enter text First!!","warning");

        }
       
        else
        {
            props.showAlert("converted to lower case!!","success");
        }
      
    }

    const handleclearclick=()=>{

      
        // console.log("button clicked!!!!!" + text)
        let newText='';
        setText(newText)

        // setText(text.toUpperCase())

        if(text.length===0)
        {
            props.showAlert("Enter text First!!","warning");

        }
      

        else{
            props.showAlert("text cleared!!","success")
        }
    }

    

    const extractEmail=()=>{

      
        let fullText=text.split(" ");
        var emails="";
        fullText.forEach( word=>{
         
            if(word.substr(-10)==="@gmail.com" && word.substr(-11,1)!=='')
                emails=emails + word;

        });
        setText(emails);

        if(text.length===0)
        {
            props.showAlert("Enter text First!!","warning");

        }
     
        else{
            props.showAlert("Email extracted!!","success")


        }


    }

    const copyText=()=>{

        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value)
       // navigator.vibrate(500);


       
       if(text.length===0)
       {
           props.showAlert("Nothing to copy!!","warning");

       }
       else
       {
        props.showAlert("text copied to clipboard!!","success")
       }
       



    }

    const removeExtraSpaces=()=>{

        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))

        props.showAlert("Extra spaces removed!!","success")

    }


    const handlechange=(event)=>{

        console.log("button clicked!!!!!")
       setText(event.target.value)
       

    }

    const [text, setText]=useState("");  //hook
  return (
  <>


        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>enter text here - {text}</h1>
        <div className="mb-3">
       
        <textarea  className="form-control" value={text} onChange={handlechange} id="mybox" rows="10" style={{backgroundColor:props.mode==='light'?'grey':'light',color:props.mode==='dark'?'white':'black'}}/>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleupclick}  style={{ margin: '10px'}}>To uppercase</button>
        
        <button className="btn btn-primary mx-2" onClick={handleloclick}  style={{ margin: '10px' }}>To lowecase</button>

        <button className="btn btn-primary mx-2" onClick={handleclearclick}  style={{ margin: '10px' }}>Clear Text</button>

        <button className="btn btn-primary mx-2" onClick={extractEmail}  style={{ margin: '10px' }}>extract the email</button>
       
       
        <button className="btn btn-primary mx-2" onClick={removeExtraSpaces}  style={{ margin: '10px' }}>remove extra spaces</button>
       
        <button className="btn btn-primary mx-2" onClick={copyText}  style={{ margin: '10px' }}>Copy Text</button>
        </div>

        <div className="container my-3" style={{color:props.mode==='dark'? 'white':'black'}}>
            <h2>your text summary</h2>
            <p> words: {text.split(" ").length}  characters:{text.length}</p>
            <p> {0.008 *  text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p> {text.length>0?text:"enter some text in the box above"}</p>

            
        </div>
        
    
            
        </>
  )
}


// function processtext()
// {
//  var textdom=document.getElementById("exampleFormControlInput1");

//  var text=textdom.value;
 
//  textdom.

  


// }


Textform.prototypes={

    headi: PropTypes.string.isRequired

}

