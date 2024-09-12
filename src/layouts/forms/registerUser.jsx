import { useState } from "react";

import Input from '../../components/input.jsx'
import ButtonSave from '../../components/buttonSave.jsx'
import { createUser } from "../../services/apiUsers.jsx";

const RegisterUser = () => {
  const [formData, setFormData] = useState({
    Name: '',
    whattsap: '',
    email:'',
    identificacion: '',
    password: ""
  });


  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 

  const handleSubmit =async()=>{
    try {
      await createUser(formData);
      console.log('Datos enviados correctamente', formData);
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  }
  

  return (
    <div className="w-full h-full flex justify-center">
      <form className="w-5/6 flex flex-col gap-2" >
        <Input type='text' name="Name" placeholder={"Name"} onInputChange={handleInputChange} />
        <Input type='text' name='whattsap'  placeholder={"WhattSapp"} onInputChange={handleInputChange} />
        <Input type='text' name='identificacion'  placeholder={"ID"} onInputChange={handleInputChange} />
        <Input type='email' name='email'  placeholder={"email"} onInputChange={handleInputChange} />
        <Input type='text' name='password'  placeholder={"password"} onInputChange={handleInputChange} />
        <div className="py-5">
           <ButtonSave onClick={handleSubmit} Name={"Register"} />
        </div>
      </form>
    </div>
  );
};
export default RegisterUser;
