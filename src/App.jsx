import { useState, useEffect } from 'react'
import './App.css'
import mockData from './Data'

export function App() {

  return (
    <>
    <h1 id='welcome'>Welcome to your custom CV builder</h1>
    </>
  )
}

// eslint-disable-next-line react/prop-types
export function FormItem({itemDefault, id, title, divName, row=1, col=15}){

  const [item, setItem] = useState(itemDefault)
  const [formVisible, setFormVisible] = useState(false);
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

  return (<div className={divName}>
  <form onSubmit = {handleSubmit}> 
{  formVisible &&  (<>
   <span className = 'item'>{title} </span> 
  <textarea rows={row} 
  cols={textAreaWidth}
  value = {formValue}
    onChange={(event) => {
      setItem(event.target.value)
    setFormValue(event.target.value)
  }}
    ></textarea> 
    </>
    )}

</form>

{  formVisible ?(<>
<button onClick={handleSubmit}>Submit</button>
<button disabled={true} className="disabled-button" onClick={
handleEdit}>Edit</button>
</>
  )
:(<>
{id.includes('URL') ? (<div id={id}><a href={item} target="_blank">{title}</a></div>) : (<div id={id}>{item}</div>)}
  <button disabled={true} className="disabled-button" onClick={handleSubmit}>Submit</button>
  <button onClick={
  handleEdit}>Edit</button>
  </>
    )
    }
  
</div>
)
}


export function Overview() {
  return (
    <>
       <div id='overview'>
    <FormItem itemDefault = {mockData.name} id={'personName'}  title={'Full name'}/>
    <FormItem itemDefault = {mockData.email} id={'email'} divName = "horizontal-layout" title={'Email address'}/>
    <FormItem itemDefault = {mockData.phone} id={'phone'} divName = "horizontal-layout" title={'Phone number'}/> 
    <FormItem itemDefault = {mockData.linkedin} id={'linkedinURL'} divName = "horizontal-layout" title={'Linkedin'}/> 
</div>
    </>
  )
}

