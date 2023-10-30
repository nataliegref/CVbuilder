import { useState, useEffect} from 'react'
import { v4 as uuid } from 'uuid';
import {mockWorkExperience} from './DataWork'

export function List() {
  const [experiences, setExperiences] = useState([])

  function addItem() {
    experiences.map(i => i.id)
    setExperiences([...experiences, {
      id: uuid(), name: mockWorkExperience.name, 
      location:mockWorkExperience.location,
      description:mockWorkExperience.description
    }])
  }

  function removeItem(experience) {
    setExperiences(experiences.filter(i => i.id !== experience.id))
  }


  const handleSubmit = (event, experienceId, type) => {
    event.preventDefault();
    const updatedExperiences = experiences.map(experience => {
      if (experience.id === experienceId) {
        // Update the value property with the input value
        experience[type] = event.target.elements[`${experience.id}-${type}`].value;
      }
      return experience;
    });
    setExperiences(updatedExperiences);
  };


    // eslint-disable-next-line react/prop-types
    function AddField({value, experience, type, flex=true, row=10, col=50}) {

      const [formVisible, setFormVisible] = useState(false);
      const [textAreaWidth, setTextAreaWidth] = useState(col)

      function SmallFlexField({value, setTextAreaWidth}){
        useEffect(() => {
          const maxWidth = 40; 
          const width = Math.max(col, value.length)
          setTextAreaWidth(Math.min(maxWidth, width));
        }, [value, setTextAreaWidth]);
      }
    
      if (flex){
        row=1
        col=15
        SmallFlexField({value, setTextAreaWidth})
      }
      const handleFormSubmit = (event, experienceId, type) => {
        setFormVisible(false)
        handleSubmit(event, experience.id, type)
      }
      const handleEdit = (event) => {event.preventDefault();
        setFormVisible(true)
      }

      return(
          <>
          <div key={experience.id}>
          <form onSubmit={(event) => handleFormSubmit(event, experience.id, type)}>
          {  formVisible ? (<>
          <label className = 'item' id={`${experience.id}-${type}`}>{type}</label>{' '}
          <textarea rows={row} cols={textAreaWidth} 
          id={`${experience.id}-${type}`} defaultValue={value}></textarea>
          </>
          ):(<div id={'value'}>{value}</div>)}
          <input type='submit' disabled={!formVisible}/>
          <button onClick={handleEdit} disabled={formVisible}>Edit</button>
          </form>

        </div>
          </>
      )
    }

    // eslint-disable-next-line react/prop-types
    function WorkExperience({experience}) {
        return(
            <>
            <AddField value={experience.name} experience={experience} type={'name'}/>
            <AddField value={experience.location} experience={experience} type={'location'}/>
            <AddField value={experience.description} experience={experience} type={'description'} flex={false}/>
            <button onClick={() => removeItem(experience)}>remove</button>{' '}
            </>
        )
      }

  return (
    <>
      <div className="keys">
        {experiences.map(experience => (
        <ul key={experience.id}>
        <WorkExperience experience={experience}/>
        </ul>
        ))}
      <button  onClick={addItem}>Add another </button>
      
    </div>
    </>
  )
}
