import React, {useState} from 'react'
import './style.css'

export default function TextForm(props) {


    const [text, setText] = useState(''); 
    const [find, setFind] = useState('0');

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }

    // Credits: A
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    // Credits: Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
   
    const handleFindReplace = () => {
        let find_value = document.getElementById("find").value; 
        let replace_value = document.getElementById("replace").value; 
        setText(text.replaceAll(find_value,replace_value));        

    }
    
    const handleFind = () => {
        let find_value = document.getElementById("find").value;
        let find_length = text.split(find_value).length
       
        setFind(find_length-1)
    }
    
    const handleCapitalizeText = () => {
        // let newText = text.split(" ");
        // newText.map(element=> capitalize(element)).join(' ');
        // setText(newText);
        // props.showAlert("Extra spaces removed!", "success");

        setText(text.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }))
    }
    
    const handleVovelsRed = () => {

        let a = text.split("");

        let final = a.map(function(word) {
        if(word==="a" || word==="e" || word==="i" || word==="o" || word==="u" || word==="A" || word==="E" || word==="I" || word==="O" || word==="U")
        {
            return '<span class="yellow">' + word + '</span>'
        } else {
            return word
        }
        })

        var e = document.getElementById('result')
        e.innerHTML = final.join('')

    }

     
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="5"></textarea>
            <input className="mr-3" type="text" placeholder='Find' id="find"/>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleFind}>Find</button>
            <input className="m-3" type="text" placeholder='Replace' id="replace" />
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleFindReplace}>Find and Replace</button>
            <span style={{marginLeft:"5px"}}>Total of Finding word = {find} </span>
            </div>

            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleVovelsRed}>Vovels Red</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalizeText}>Capitalize text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <div className="row">
                <div className='col-4'>
                    <h2>Your text summary</h2>
                    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                    {/* <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p> */}
                </div>
                <div  className='col-8'>
                    <h2>Preview</h2>
                    <p>{text.length>0?text:"Nothing to preview!"}</p>
                    <div id="result"></div>
                </div>
            </div>
        </div>
        </>
    )
}   
