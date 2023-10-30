import { useState, useEffect } from 'react'
import './App.css'
import {mockWorkExperience} from './DataWork'


// eslint-disable-next-line react/prop-types
function AddField({item, setItem, id, title, divName, flex=false, row=10, col=50}){
  const [formVisible, setFormVisible] = useState(false);
  const [formValue, setFormValue] = useState('')
  const [textAreaWidth, setTextAreaWidth] = useState(col)

  function SmallFlexField({formValue, setTextAreaWidth}){
    useEffect(() => {
      const maxWidth = 40; 
      const width = Math.max(col, formValue.length)
      setTextAreaWidth(Math.min(maxWidth, width));
    }, [formValue, setTextAreaWidth]);
  }

  if (flex){
    row=1
    col=15
    SmallFlexField({formValue, setTextAreaWidth})
  }
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
  <div id={id}>{item}</div>
    <button disabled={true} className="disabled-button" onClick={handleSubmit}>Submit</button>
    <button onClick={
    handleEdit}>Edit</button>
    </>
      )
      }
    
  </div>
  )
  }


export function WorkExperience() {
    const [experiences, setExperiences] = useState([])
    const [showFormItem, setShowFormItem] = useState(false);

    const addExperience = (experience) => {
        setExperiences([...experiences, experience]);
      };

    const handleAdding = (event => {
        event.preventDefault();
        setShowFormItem(true)
        addExperience(mockWorkExperience)
    })

    // eslint-disable-next-line react/prop-types
    function AddWorkExperience({index, experience, experiences, setExperiences}){
      // eslint-disable-next-line react/prop-types
      const [company, setCompany] = useState(experience.company)
      // eslint-disable-next-line react/prop-types
      const [description, setDescription] = useState(experience.description)

      // const newExperience = {company: company, d: description}
      // console.log('new exp', newExperience)
      // const updatedExperiences = [...experiences]
      // updatedExperiences[index] = newExperience
      // setExperiences(updatedExperiences)

      console.log('exps', experiences)
      return (
        <><AddField item = {company} setItem = {setCompany} id={index}  title={'Company'} flex={true} />
        <AddField item = {description} setItem = {setDescription} id={index}  title={'Experience'} />
        </>
      )
    }

    return (
      <>
         <div id='workExp'>
        <h2>Work Experience</h2>
        {showFormItem &&(
        experiences.map((experience, index) => (
        <AddWorkExperience key={index} experience={experience} experiences={experiences} setExperiences={setExperiences}/>
        ))
        )}
      <button onClick={handleAdding}>Add another</button>
  </div>
      </>
    )
  }
  

  //can add new fields but when i add a new it resets the experiences to the original > doesnt save the edits



  function OldAddField({value, experience, type}) {
    return(
        <>
        <div key={experience.id}>
        <form onSubmit={(event) => handleSubmit(event, experience.id, type)}><>
        <label htmlFor={`${experience.id}-${type}`}>{type}</label>{' '}
        <input id={`${experience.id}-${type}`} defaultValue={value} />
        </>
        </form>
        <div id={'here'}>{value}</div>
      </div>
        </>
    )
  }
  