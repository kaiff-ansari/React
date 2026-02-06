import { useEffect } from "react";

function CustomForm(){

    const [formData, setFormData] = useState({
    name : '',
    email : ''});

    useEffect(() =>{
        console.log('Basic form rendered')
    })

    const [error, setError] = useState({});

    const validate = () =>{

      const newErrors = {};

      if(!formData.name.trim()){
        newErrors.name = 'Name is required';
      }
      return newErrors;
    }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const validationError = validate();

    if(Object.keys(validationError).length > 0){
      setError(validationError);
    }
    else {
      console.log('Form data submitted', formData);
    }
    
    

  };

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    })

    if(error[name]){
      const newErrors = {...error};
      delete newErrors[name];
      setError(newErrors);
    }

  };

  return (
     
   <div>
    <h1>Forms in React</h1>

    <form onSubmit={handleSubmit}>
      <label >
        Name:
      
      <input
       type='text'
       name='name'
        value={formData.name} 
       onChange={handleChange}>
      </input>
      {error.name && <span style={{color : 'red'}}>{error.name}</span>}
      <br />
      </label>

      <label >
        Email:
      
      <input
       type='email'
       name='email'
        value={formData.email} 
       onChange={handleChange}>
      </input>
      </label>

      <button type='submit'>Submit</button>

    </form>
   </div>
  );
}

export default CustomForm;