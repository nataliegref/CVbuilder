import { useState, useEffect } from 'react'
import './App.css'

export function App() {

  return (
    <>
    <h1>Welcome to your custom CV builder</h1>
    </>
  )
}

// eslint-disable-next-line react/prop-types
function FormItem({item, setItem, title, row=1, col=15}){

  const [formVisible, setFormVisible] = useState(true);
  const [formValue, setFormValue] = useState('')
  const [textAreaWidth, setTextAreaWidth] = useState(col)

  useEffect(() => {
    const maxWidth = 40; 
    const width = Math.max(col, formValue.length)
    setTextAreaWidth(Math.min(maxWidth, width));
  }, [formValue, col]);

  const handleSubmit = (event) => {event.preventDefault();
    setFormVisible(false)
  }
  const handleEdit = (event) => {event.preventDefault();
    setFormVisible(true)
    setFormValue(item)
  }

  return (<>
  <form onSubmit = {handleSubmit}>
  <span className = 'item'>{title} </span>  

{  formVisible &&  (
  <textarea rows={row} 
  cols={textAreaWidth}
  value = {formValue}
    onChange={(event) => {
      setItem(event.target.value)
    setFormValue(event.target.value)
  }}
    ></textarea> 
    )}


</form>

{  formVisible ?(<>
<button onClick={handleSubmit}>Submit</button>
<button disabled={true} className="disabled-button" onClick={
handleEdit}>Edit</button>
</>
  )
:(<>
  <button disabled={true} className="disabled-button" onClick={handleSubmit}>Submit</button>
  <button onClick={
  handleEdit}>Edit</button>
  </>
    )
    }
  
</>
)
}




export function Overview() {
  const [name, setName] = useState('Jane Smith')
  const [email, setEmail] = useState('jane@gmail.com')
  const [phoneNumber, setPhoneNumber] = useState('+99 999 9999')
  const [exp1, setExp1] = useState('')
  return (
    <>
    <h2>CV</h2>
    <FormItem item = {name} setItem = {setName} title={'Full name'}/>
    <FormItem item = {email} setItem = {setEmail} title={'Email address'}/>
    <FormItem item = {phoneNumber} setItem = {setPhoneNumber} title={'Phone number'}/>
    
    <FormItem item = {exp1} setItem = {setExp1} title={'Experience'} row ={8} col = {50}/>
    <div id='overview'>
      <h2>Overview</h2>
    <div id='name'>{name}</div>
    <div id='email'>{email}</div>
    <div id='phone'>{phoneNumber}</div>
    </div>

    <div id='Experience'>
    <h2>Education</h2>
    <div id='exp1'>{exp1}</div>
    </div>

    </>
  )
}

