import React, {useState} from 'react'

export default function Textbox(props) {

    const [ text, setText ] = useState('Enter text here')

    const handleOnchange = (e) => {
        setText(e.target.value)
    }

    const handleUpClick = () => {
        setText(text.toUpperCase())
        props.showAlert("Convert to Upper Case", "success")
    }

    const handleLoClick = () => {
      setText(text.toLowerCase())
      props.showAlert("Convert to Lower Case", "success")
  }

  const handleClearClick = () => {
    setText('')
    props.showAlert("Text are cleared", "success")
  }

  const handleFirstCapital = () => {
    let arr = text.split(" ")
    let newArr = arr.map(e => {
      return e.charAt(0).toUpperCase() + e.slice(1)
    })
    
    setText(newArr.join(" "))
    props.showAlert("All first letter of words are capitalized", "success")
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard", "success")
  }

  const handleClearSpace = () => {
    let arr = text.split(/[ ]+/)
    setText(arr.join(" "))
    props.showAlert("Extra Space has been cleared", "success")
  }
    
  return (
    <>
    <div className='container' >
        <h1 style={{ color: props.mode === 'light' ? 'black' : 'white'}}>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#454549', color: props.mode === 'light' ? 'black' : 'white'}} value={text} onChange={handleOnchange} id="mybox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Upper Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to Lower Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleClearClick} >Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCopy} >Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleClearSpace} >Clear Extra Space</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleFirstCapital} >Convert Capital Letter to all words</button>
    </div>
    <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter(e => {return e.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(/\s+/).filter(e => {return e.length!==0}).length} minutes to read</p>
      <h2>Preview : </h2>
      <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
    </div>
    </>
  )
}
