import React , {useState} from "react"
import {omit} from 'lodash'


const initState = {
    name : "",
    email :"",
    image : "",
    mobile : "",
    address : ""
}

function useForm(callback) {
    const [contact,setContact] = useState(initState)
    const [errors,setErrors] = useState({ })
 
   

    // error logic

    const errPrint = (prop ,msg) => {
        setErrors({...errors, [prop] :msg})
    } 

    // validation function 
    const validate = (event , name , value) => {
        switch(name) {
            case "name" :
                if (value.length === 0){
                   errPrint(name , "Name field must be filled")
                }else if (value.length < 4) {
                    errPrint(name , "Name Alteast have 4 characters")
                }else if(!new RegExp(/^[a-z A-Z \s]+$/).test(value)){
                    errPrint(name , "Invalid Name")
                }else {
                    let newObj = omit(errors ,name);
                    setErrors(newObj)
                }   
                break;
            case "email" :
                if(value.length === 0){
                    errPrint(name , "Email field must be filled")
                }else if (!new RegExp (/^[-a-z A-Z 0-9 \S]+@[a-z \s]+\.[c][o][m]+$/).test(value)){
                    errPrint(name , "Invalid email format")
                }else{
                    let newObj = omit (errors , name)
                    setErrors(newObj)
                }
                break;
            case "image" :
                if(value.length === 0){
                    errPrint(name , "Image field must be filled")
                }else if (!new RegExp(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g).test(value)){
                    errPrint(name , "Invalid Image url Address")
                }else{
                    let newObj = omit(errors , name)
                    setErrors(newObj)
                }
                break;
            case "mobile" :
                if(value.length === 0){
                    errPrint(name , "mobile field must be filled")
                }else if (!new RegExp(/^[6-9]\d{9}$/).test(value)){
                        errPrint(name , "Invalid Mobile Number")
                }else{
                    let newObj = omit(errors , name);
                    setErrors(newObj)
                }
                break;
            case "address" :
                if(value.length === 0){
                    errPrint(name , "address must be filled")
                }else if (!new RegExp (/^[a-z A-Z 0-9\s,.#-]+$/).test(value)){
                    errPrint(name, "Invalid Address")
                }else{
                    let newObj = omit(errors , name);
                    setErrors(newObj)
                }
                break;
            default:
            break;

        }
    }

    // to read value form input

    const readValue = (e) => {
        // console.log('event =', e.target.name +"-" + e.target.value)
         const {name ,value} = e.target;
         validate(e, name , value)
         setContact({...contact,[name] : value})
    }

  

    
return {
 contact,
 errors,
 readValue,
 initState,
 setContact

}


}

export default useForm