import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function WorkExperienceForm({ addWorkExperience }) {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a new work experience object
    const newWorkExperience = {
      company,
      position,
      startDate,
      endDate,
    };
    // Add it to the list of work experiences
    addWorkExperience(newWorkExperience);
    // Reset the form fields
    setCompany('');
    setPosition('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Company:</label>
        <input
          type="text"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
        />
      </div>
      <div>
        <label>Position:</label>
        <input
          type="text"
          value={position}
          onChange={(event) => setPosition(event.target.value)}
        />
      </div>
      <div>
        <label>Start Date:</label>
        <input
          type="text"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
        />
      </div>
      <div>
        <label>End Date:</label>
        <input
          type="text"
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

export function WorkCV() {
  const [workExperiences, setWorkExperiences] = useState([]);

  const addWorkExperience = (workExperience) => {
    // Add the new work experience to the list
    setWorkExperiences([...workExperiences, workExperience]);
  };

  return (
    <div>
      <h2>Add Work Experience</h2>
      <WorkExperienceForm addWorkExperience={addWorkExperience} />
      <div>
        <h3>Work Experience</h3>
        {workExperiences.map((experience, index) => (
          <div key={index}>
            <p>Company: {experience.company}</p>
            <p>Position: {experience.position}</p>
            <p>Start Date: {experience.startDate}</p>
            <p>End Date: {experience.endDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

