import { useState } from 'react'
import './App.css'

export function App() {

  return (
    <>
    <h1>Welcome to your custom CV builder</h1>
    </>
  )
}
// eslint-disable-next-line react/prop-types
function FormItem({name, setName, title}){

  const [formVisible, setFormVisible] = useState(true);
  const [formValue, setFormValue] = useState('')

  const handleSubmit = (event) => {event.preventDefault();
    setFormVisible(false)
  }
  const handleEdit = (event) => {event.preventDefault();
    setFormVisible(true)
    setFormValue(name)
  }

  return (<>
  <form onSubmit = {handleSubmit}>
  <span className = 'item'>{title} </span>  

{  formVisible &&  (
  <input type="text"
  value = {formValue}
    onChange={(event) => {
      setName(event.target.value)
    setFormValue(event.target.value)
  }}
    /> )}

</form>

{  formVisible ?(<button onClick={
  handleSubmit}>Submit</button>)
:(<button onClick={
    handleEdit}>Edit</button>)
    }
</>)
}


export function CV() {
  const [name, setName] = useState('')
  return (
    <>
    <h2>CV</h2>
    <FormItem name = {name} setName = {setName} title={'Full Name'}/>
    <div id='overview'>
    <div id='name'>{name}</div>
    </div>
    </>
  )
}

