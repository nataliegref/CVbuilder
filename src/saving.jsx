export function App() {

  return (
    <>
    <h1>Welcome to your custom CV builder</h1>
    </>
  )
}

export function CV() {
    const [name, setName] = useState('')
    const handleSubmit = (event) => {event.preventDefault();
      setName(value)}
    return (
      <>
      <h2>CV</h2>
      <form onSubmit = {handleSubmit}>
        <span className = 'item'>Full Name </span>  
        <input type="text"
          onChange={(event) => {
            setName(event.target.value)
          }}
        />
      </form>
      <div>{name}</div>
      </>
    )
  }


  {/* {  formVisible &&  (
  <input type="text"
  value = {formValue}
    onChange={(event) => {
      setItem(event.target.value)
    setFormValue(event.target.value)
  }}
    /> )} */}


        {/* <FormItem item = {exp1} setItem = {setExp1} title={'Experience'} row ={8} col = {50}/> */}


                {/* {experiences.map((experience, index) => (
            console.log(experience, index),
        <FormItem itemDefault={experience.text} id={index}  title={experience.title} row={8} col={50} />
      ))} */}

      const addExperience = (experience) => {
        setExperiences([...experiences, experience])
    }



    eslint-disable-next-line react/prop-types
function SmallField({itemDefault, id, title, divName, row=1, col=15}){

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

// eslint-disable-next-line react/prop-types
export function LargeField({itemDefault, id, title, divName, row=10, col=50}){

    {console.log("new field")}
    const [item, setItem] = useState(itemDefault)
    const [formVisible, setFormVisible] = useState(false);
    const [formValue, setFormValue] = useState('')
  
  
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
    cols={col}
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