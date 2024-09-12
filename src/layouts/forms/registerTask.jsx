import { useState } from "react";

import Input from "../../components/inputModal.jsx";
import ButtonSave from "../../components/buttonSave.jsx";
import { createTask } from "../../services/apiTask.jsx";

import { useParams } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";



const RegisterUser = ({ show, handleClose }) => {
    
 

  const { id } = useParams();
  const dateCreated = new Date();

  const [formData, setFormData] = useState({
    Name: "",
    DateFinally: dateCreated,
    description: "",
    dateCreated: dateCreated,
    state: "programada",
    ProyectsTasks: id,
  });

  

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      await createTask(formData);
      // console.log('Datos enviados correctamente', formData);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };



  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="w-full h-full flex justify-center">
            <form className="w-5/6 flex flex-col gap-2">
            
              <Input
                type="text"
                name="Name"
                placeholder={"Name"}
                onInputChange={handleInputChange}
              />
             
        
              <Input
                type="date"
                name="dateFinally"
                placeholder={"fecha de entrega"}
                onInputChange={handleInputChange}
              />

              <Input
                type="textarea"
                name="description"
                placeholder={"description"}
                onInputChange={handleInputChange}
              />

              
              <div className="py-5">
                <ButtonSave onClick={handleSubmit} Name={"Register"} />
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
      
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default RegisterUser;
