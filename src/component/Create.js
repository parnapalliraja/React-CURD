import React, {useState} from 'react';
import useForm from '../middleware/FormValidate';
import { toast } from "react-toastify"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const baseURL = "http://localhost:4000"

function Create(props){     
    const {contact , errors , readValue , setContact, initState} = useForm()   

     //Internal Navigation
     const navigate = useNavigate()


      //submit handler function

      const submitHandler = async (e) => {
        e.preventDefault();// to avoid page refresh
        if (Object.keys(errors).length === 0 && Object.keys(contact).length  !== 0 ) {
            console.log( 'new contact  =', contact)
            // post Handler 
            await axios.post(`${baseURL}/contacts`, contact)
            .then(res => {
                setContact(initState)
                toast.success("user Created")
                navigate('/');
            }).catch(err => toast.error(err.message))
        }else {
            toast.error("Input Values are in Valid or Field inputs are empty")
        }
        console.log('new contact= ',contact)

        
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3">Create</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form autoComplete='off' onSubmit={submitHandler}>
                                <div className="form-group mt-2">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" value={contact.name} onChange={readValue} className="form-control" required  />
                                    {
                                        errors && errors.name  ? (
                                            <div className="alert alert-danger"> {errors.name}</div>
                                        ) : null
                                    }
                                </div>
                                <div className="form-group mt-2">
                                <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" value={contact.email} onChange={readValue} className="form-control" placeholder="username@domain.com" required />
                                    
                                    {
                                        errors && errors.email  ? (
                                            <div className="alert alert-danger"> {errors.email}</div>
                                        ) : null
                                    }
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="image">Profile Image</label>
                                    <input type="url" name="image" value={contact.image} onChange= {readValue} id="image" placeholder="Enter url format of image link"  className = "form-control"  required />
                                    {
                                        errors && errors.image  ? (
                                            <div className="alert alert-danger"> {errors.image}</div>
                                        ) : null
                                    }
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="Mobile">Mobile</label>
                                    <input type="number" name="mobile" value={contact.mobile} onChange= {readValue} id="mobile" className="form-control"   required />
                                    {
                                        errors && errors.mobile  ? (
                                            <div className="alert alert-danger"> {errors.mobile}</div>
                                        ) : null
                                    }
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="address">Address</label>
                                    <textarea type="address" name="address" value={contact.address} onChange={readValue} id="address" cols="30" rows="5" className="form-control"></textarea>
                                    {
                                        errors && errors.address  ? (
                                            <div className="alert alert-danger"> {errors.address}</div>
                                        ) : null
                                    }
                                    </div> 

                                    <div className="form-group mt-2">
                                        <input type="submit" value="Create" className="btn btn-outline-success" />
                                    </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create