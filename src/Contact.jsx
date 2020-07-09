import React from 'react';
import { useState } from 'react';

const Contact =()=>{

      const [data,setData] = useState({
         fullname:"",
         mobile:"",
         email:"",
         message:"",
      });

      const InputEvent = (event)=>{
         const{name, value} = event.target;

         setData((preVal)=>{
            return{
               ...preVal,
               [name]:value,
            }
         })
      }
      const formSubmit = (e)=>{
         e.preventDefault();
         alert(`My name is ${data.fullname}. My mobile number is ${data.mobile}.My Email id is ${data.email}.And I will Say ${data.message}`);
      };
      return (
      <>
         <div className="my-5">
            <h1 className="text-center">
               Contact Us
            </h1>
         </div>
         <div className="container contact_div">
            <div className="row">
               <div className="col-md-6 col-10 mx-auto">
                  <form onSubmit={formSubmit}>
                  <div class="mb-3">
                     <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                        <input type="text" class="form-control" name="fullname" value={data.fullname} onChange={InputEvent} id="exampleFormControlInput1" placeholder="Enter Your FullName"/>
                  </div>
                  <div class="mb-3">
                     <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
                        <input type="number" class="form-control" id="exampleFormControlInput1" name="mobile" value={data.mobile} onChange={InputEvent} placeholder="Enter Your Mobile Number"/>
                  </div>
                  <div class="mb-3">
                     <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com"/>
                  </div>
                  
                  <div class="mb-3">
                     <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                     <textarea class="form-control" id="exampleFormControlTextarea1" name="message" value={data.message} onChange={InputEvent} rows="3"></textarea>
                  </div>
                  <div class="col-12">
                     <button class="btn btn-outline-success" type="submit">Submit</button>
                  </div>
               </form>
               </div>
            </div>
         </div>
         
      </>
         );
   }
export default Contact;