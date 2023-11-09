import React, {useState} from 'react'

export default function Textbox(props) {

    const [ text, setText ] = useState('Enter text here')

    const handleOnchange = (e) => {
        setText(e.target.value)
    }

    const handleUpClick = () => {
        setText(text.toUpperCase())
    }

    const handleLoClick = () => {
      setText(text.toLowerCase())
  }

  const handleClearClick = () => {
    setText('')
}
    
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnchange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Upper Case</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to Lower Case</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear Text</button>
    </div>
    <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes to read</p>
      <h2>Preview : </h2>
      <p>{text}</p>
    </div>
    </>
  )
}
