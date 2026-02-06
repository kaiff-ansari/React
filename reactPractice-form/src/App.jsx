import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

function App() {

  const {register, handleSubmit, watch, formState:{errors}, reset} = useForm({
    mode : 'onChange'
  });

  
  const onSubmit = (data) =>{
    console.log(data);
    reset();
  }

  const watchName = watch('name');
  const watchPassword = watch('password');

  useEffect(() => {

    console.log('Name ', watchName);

  } ,[watchName])

  useEffect(() => {

    console.log('Password ', watchPassword);

  } ,[watchPassword])
 

  return (
    <div>
      <h1>React Form</h1>

      <form onSubmit={handleSubmit(onSubmit)} >

        <label>
          Name
         <input {...register('name', 
          {required:'Name is required',
             minLength: {
              value : 2,
              message : "name must be 2 charcater"
             },
            validate : {isNotNumber : (value) => isNaN(value) || 'Number can not be allowd'}
          }) } />
        </label>

        {errors.name && <p>{errors.name.message}</p>}
        
        <br />

        <label >
          Password
          <input {...register('password', {
            required : 'password is required',
            minLength : {
              value : 4,
              message : 'password must be atleast 4 character'
            }
          })} />
        </label>
        {errors.password && <p>{errors.password.message}</p>}
        
        <br />

        <label >
          Confirm Password
          <input {...register('confirmPassword', {
            required : 'confirm password is required',
            minLength: {
              value : 4,
              message : 'confirm password must be 4 characters'
            },
            validate : value => value === watch('password') || 'Password do not match'})} />
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
