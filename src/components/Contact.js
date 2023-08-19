import React, { useState } from 'react'
import "./Profile.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

  const [inputvalue, setInputvalue] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    message: ""
  });

  const getvalue = (e) => {
    const { name, value } = e.target;
    setInputvalue(() => {
      return {
        ...inputvalue,
        [name]: value
      }
    })

  }

  const sentUserdata = async (e) => {
    e.preventDefault();

    const { fname, lname, email, mobile, message } = inputvalue;
    if (fname === "") {
      toast.error("First Name is require")
    } else if (lname === "") {
      toast.error("Last Name is require")
    } else if (email === "") {
      toast.error("E-mail is require")
    } else if (!email.includes("@")) {
      toast.error("Invalid email")
    } else if (mobile === "") {
      toast.error("Mobile No. is require")
    } else {
      const res = await fetch("http://localhost:8002/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fname, lname, email, mobile, message
        })
      });
      const data = await res.json();

      if (data.status === 201) {
        toast.success("Your Response Submitted"); 
        setInputvalue({
          ...inputvalue,
          fname: "",
          lname: "",
          email: "",
          mobile: "",
          message: ""
        })
      }
    }
  }

  return (
    <>
      <div className="container mb-3 contact">
        <h2 className='text-center mt-2 animated-heading' style={{fontSize:"40px"}}>✉️ Cold Mail Recruiters ✉️</h2>
        <p className='mx-2' style={{color:"grey"}}><strong>Note:</strong> This feature is just for the developer(Sahil Anand) who owns the crediantials of this Website, if you want to use this feature then Contact the creator.</p>
        <div className="container mt-2">
          <Form className='row mt-2'>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" name='fname' value={inputvalue.fname} onChange={getvalue} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6"  controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" name='lname' value={inputvalue.lname}  onChange={getvalue} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" name='email' value={inputvalue.email}  onChange={getvalue} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Mobile No.</Form.Label>
              <Form.Control type="text" name='mobile' value={inputvalue.mobile}  onChange={getvalue} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} onChange={getvalue} value={inputvalue.message}  name="message" />
            </Form.Group>
            <div className='d-flex justify-content-center'>
              <Button variant="primary" className='col-lg-6' type="submit" onClick={sentUserdata}>
                Submit
              </Button>
            </div>

          </Form>
          <ToastContainer />
        </div>
      </div>
    </>
  )
}

export default Contact