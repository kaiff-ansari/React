import React, { useEffect } from 'react'
import './App.css'
import { useForm, useWatch } from 'react-hook-form'


function App() {

  const {register, handleSubmit, reset, watch, formState: {errors}} = useForm({
    mode : 'onChange'
  });

  const existingUsername = ['admin', 'ravi' ,'huehue']

  const checkIfUsernameExist = async(username) =>{
    await new Promise(resolve => setTimeout(resolve, 1000));

    return existingUsername.includes(username);
  };

  const onSubmit = (data) =>{
    console.log(data);
    reset();
  }

  //console.log(watch('name'));
  
  const watchedName = watch('name');
  const watchedEmail = watch('email');

  useEffect(() =>{
    console.log('Name', watchedName);
   
  },[watchedName]);

  useEffect(() =>{
    console.log('Email', watchedEmail);
   
  },[watchedEmail]);

  /* const validateName = (value) =>{
    if(value === 'admin'){
      return 'admin is not allowed'
    }
    return true;
  } */



  return (
   <div>
    <h1>Forms in React</h1>

    <form onSubmit={handleSubmit(onSubmit)}>
      <label >
        Name:

        <input {...register('name', 
          { required: 'Name is required' ,
           minLength: {value : 2, message: 'Name should be atleast 2 characters'},
           validate : { notAdmin :  (value) => value != "admin" || "Admin is not allowed",
            isNotNumber : (value) => isNaN(value) || "Name cannot be number",
            checkUsername :async (value) => {
              const exist = await checkIfUsernameExist(value);
              return !exist || 'Username is already taken'
            }
           }
           })} />
      
      </label>

      {errors.name && <p>{errors.name.message}</p>}

      <label >
        Email:
        
        <input {...register('email', {required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} />
      
      </label>
      {errors.email && <p>Invalid email format</p>}

      <label >
        Password:
        <input type='password' {...register('password', {
          required: true,
          minLength : 2
        })}></input>

      </label>

       {errors.password && <p>{errors.password.message}</p>}
      <label >
        Confirm Password:
        <input type='password' {...register('confirmPassword', {
          required : true,
          minLength : 2,
          validate : value => value === watch('password') || 'Passwords do not match'
        })}></input>
      </label>
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

      <br />


      <button type='submit'>Submit</button>
      <button type='button' onClick={() => reset()}>Reset</button>

    </form>
   </div>
  )
}

export default App
