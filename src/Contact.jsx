import React, { useState } from 'react'





const Contact = () => {
  const [data, setData] = useState(
    {
      fullname: '',
      email: '',
      Mnumber: '',
      msg: ''
    }
  );
    const InputEvent = (event)=>{
      const {name,value} = event.target;

      setData(
        (preVal)=>{
          return{
            ...preVal,[name]:value,
          }
        }
      )
    }
  const formSubmit = (e) => { 
    e.preventDefault();
    alert(`My name is ${data.fullname}. My Contact number is ${data.Mnumber}. My email id is ${data.email}. Here is what i want to say ${data.msg}`)
  };
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'> Contact Us</h1>
      </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto' >

            <form onSubmit={formSubmit} >
              <div className="mb-3">
                <label  className="form-label">Full Name </label>
                <input type="text" className="form-control" id="exampleFormControlInput1" onChange={InputEvent} value={data.fullname } name='fullname' placeholder="Enter Your name" />
              </div>
              <div className="mb-3">
                <label  className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" onChange={InputEvent} value={data.email } name='email' placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label  className="form-label">Phone</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" onChange={InputEvent} value={data.Mnumber} name='Mnumber' placeholder="mobile number" />
              </div>
              <div className="mb-3">
                <label  className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" onChange={InputEvent} value={data.msg } name='msg' rows="3"></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
