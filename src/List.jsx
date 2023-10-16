
import * as React from 'react'
import { v4 as uuid } from 'uuid';

export function List() {
  const [experiences, setExperiences] = React.useState([])

  function addItem() {
    experiences.map(i => i.id)
    setExperiences([...experiences, {id: uuid(), value: 'Company A'}])
  }

  function removeItem(experience) {
    setExperiences(experiences.filter(i => i.id !== experience.id))
  }


  const handleSubmit = (event, experienceId) => {
    event.preventDefault();
    const updatedExperiences = experiences.map(experience => {
      if (experience.id === experienceId) {
        // Update the value property with the input value
        experience.value = event.target.elements[`${experience.id}-input`].value;
      }
      return experience;
    });
    setExperiences(updatedExperiences);
  };


  return (
    <>
    <div className="keys">
      <ul>
        {experiences.map(experience => (
        <>
        {/* <AddField experience={experience}/> */}
        <div key={experience.id}>
        <form onSubmit={(event) => handleSubmit(event, experience.id)}><>
        <label htmlFor={`${experience.id}-name`}>name</label>{' '}
        <input id={`${experience.id}-input`} defaultValue={experience.value} />
        </>
        </form>
        <div id={'here'}>{experience.value}</div>
        <button onClick={() => removeItem(experience)}>remove</button>{' '}
      </div>
      </>
        ))}
      </ul>
      <button  onClick={addItem}>Add another </button>
      
    </div>
    </>
  )
}
