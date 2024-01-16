import React ,{useState} from 'react'

export default function TextForm(probs) {
    const func1=(event)=>{
        console.log('message has been shown')
        setText(event.target.value)
    }
    const func2=()=>{
        console.log('button is clicked')
        let newText=text.toUpperCase()
        setText(newText)
    }
    const [text,setText]=useState('Enter the text')
  return (
    <div>    
            <h1>{probs.heading}</h1>
            <div class="mb-3">
            <textarea class="form-control" value={text} onChange={func1} id="mybox" rows="8"></textarea>
            <button className="btn btn-primary" onClick={func2}>Click to Convert</button>
            </div>
    </div>
  )
}
