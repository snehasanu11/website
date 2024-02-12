import React from 'react'

const Contact = () => {
  var username=document.getElementById('username');
  var email=document.getElementById('email');
  function validate(){
    
      if(username.value.length===0){
      alert("please enter name");
      return false;
    }
    if(email.value.length===0){
      alert("please enter email");
      return false;
    }
  }
  return (
    <div className='contact'>
      <form action="action.js" onSubmit="return validate()">
        <input type='text' placeholder='name' className="name con" id="username"/>
        <br/>
        <input type='email' placeholder='Email' className='Email con' id="email"/>
        <br/>
        <input type='number' placeholder=' Mobile Number' min='0' max='9' className='number con' id="mobile no"/>
        <br/>
        <div className='texta' >
          <label htmlFor='msg'className='label'>Message</label><br/>
        <textarea rows='5' column='7' name='Message'id='msg' className='message' /></div>
        <br/>
        <input type='submit' className='submit con'/>

      </form>
      
      
       
  



      
    </div> 
  )
}


export default Contact