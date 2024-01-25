import React, {useState} from 'react'



export default function TextForm(props) {
    const handleupCase = ()=> {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case", "success")
    }

    const handleloCase = ()=> {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case", "success")
    }

    const handleClear = ()=> {
        let newText = ('');
        setText(newText)
        props.showAlert("Text is cleared", "success")
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[  ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Spaces is Removed", "success")
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value)
    }

    const [text, setText] = useState(" ");
    return (
        <>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="6"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleupCase}>Covert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleloCase}>Covert to lowercase</button>
                <button className="btn btn-primary" onClick={handleClear}>Clear text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
