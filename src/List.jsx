
import * as React from 'react'
import { v4 as uuid } from 'uuid';
import {mockWorkExperience} from './DataWork'

export function List() {
  const [experiences, setExperiences] = React.useState([])

  function addItem() {
    experiences.map(i => i.id)
    setExperiences([...experiences, {id: uuid(), name: mockWorkExperience.name, location:mockWorkExperience.location}])
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
  function AddField({value, experience, type}) {
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

    // eslint-disable-next-line react/prop-types
    function WholeExperience({experience}) {
        return(
            <>
            <AddField value={experience.name} experience={experience} type={'name'}/>
            <AddField value={experience.location} experience={experience} type={'location'}/>
            <button onClick={() => removeItem(experience)}>remove</button>{' '}
            </>
        )
      }

  return (
    <>
    <div className="keys">
      <ul>
        {experiences.map(experience => (
        <>
        <WholeExperience experience={experience}/>
      </>
        ))}
      </ul>
      <button  onClick={addItem}>Add another </button>
      
    </div>
    </>
  )
}
