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


  //esto es para subir imagen ------------------
  const handleImageChange = (e) => {
    setImagePrincipal(e.target.files[0]);
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", imagePrincipal);
    formData.append("upload_preset", "images-hoteles-backend");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dlkky5xuo/image/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const imageUrl = response.data.secure_url;
      setImageUrl(imageUrl);

      return imageUrl;
    } catch (err) {
      console.error("Error uploading image:", err.message);
      console.error(
        "Detalles del error:",
        err.response ? err.response.data : "Sin detalles de error de red"
      );
      throw err;
    }
  };

  // fin de imagen  ---------------------------
 

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
