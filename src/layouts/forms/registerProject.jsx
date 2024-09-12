import { useState } from "react";

import Input from '../../components/input.jsx'
import ButtonSave from '../../components/buttonSave.jsx'
import { createProyect } from "../../services/apiProyects.jsx";
import { useSelector } from "react-redux";


const RegisterUser = () => {

  const user = useSelector((state) => state.user);
  const dateCreated = new Date();

  const [formData, setFormData] = useState({
    Name: '',
    DateFinally: '',
    description: '',
    dateCreated: dateCreated,
    userCreated: user.id,
    UserProyects: user.id
  });




  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 

  const handleSubmit =async()=>{
    try {
      await createProyect(formData);
     // console.log('Datos enviados correctamente', formData);
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  }
  

  return (
    <div className="w-full h-full flex justify-center">
      <form className="w-5/6 flex flex-col gap-2" >
        <Input type='text' name="Name" placeholder={"Name"} onInputChange={handleInputChange} />
        <Input type='text' name='description'  placeholder={"description"} onInputChange={handleInputChange} />
        <Input type='date' name='dateFinally'  placeholder={"fecha de entrega"} onInputChange={handleInputChange} />
        <div className="py-5">
           <ButtonSave onClick={handleSubmit} Name={"Register"} />
        </div>
      </form>
    </div>
  );
};
export default RegisterUser;
