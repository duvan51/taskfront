import React, { useEffect, useState } from "react";
import icono from "../../../assets/iconNext.svg";
import Image1 from "../../../assets/logo.png";
import { useSelector } from "react-redux";
import { getUserById } from "../../../services/apiUsers.jsx";
import SectionInfo from "../../../components/sectionInfo.jsx";

const Informacion = () => {
  const [data, setUserData] = useState({});
  
  const user = useSelector((state) => state.user);

  const id = user.id;



  useEffect(() => {
    const fetchUserData = async () => {
      if (id) {
        try {
          const data = await getUserById(id);
          setUserData(data); // Guardar los datos en el estado
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [id]);

  
  
  


  return (
    <div className="">
      <div>
        <div>Informacion personal subtitle</div>
        <div>inormacion de tu persil de servicios sera tra</div>
      </div>

      <div className="backgroundCristal flex flex-col px-10 py-5 text-amber-50 rounded-md gap-4">
        <div className="flex flex-col gap-20">

          <div className="cardBig py-4 flex flex-col gap-8">
            <div className="px-4">
              <div>title</div>
              <div>subtitle</div>
            </div>
            <div className="">
              <SectionInfo 
                titleItem={"imagen de perfil"}
                ContenidoItem={""}
                descriptionContenido={"una imagen que nos ayuda a personalizar tu perfil"} 
                Image={data.photo} 
               
              />
              <SectionInfo 
                titleItem={"Nombre"}
                ContenidoItem={data.Name} 
                descriptionContenido={""} 
                Icon = {icono}
               
              />
              <SectionInfo 
                titleItem={"userName"}
                ContenidoItem={data.userName} 
                descriptionContenido={""} 
                Icon = {icono}
               
              />
            </div>
          </div>


          <div className="cardBig py-4 flex flex-col gap-8">
            <div className="px-4">
              <div>Informacion Importante</div>
              <div>ojo esta informacion suele ser muy valiosa y delicada, no la compartas con nadie</div>
            </div>
            <div className="">
              <SectionInfo 
                titleItem={"ID"}
                ContenidoItem={data.identificacion} 
                descriptionContenido={"identificacion nacional del usuario"} 
                Icon = {icono}
               
              />
              <SectionInfo 
                titleItem={"E-mail"}
                ContenidoItem={data.email} 
                descriptionContenido={"correo electronico unioco por usuario"} 
                Icon = {icono} 
               
              />
              <SectionInfo 
                titleItem={"Date birth"}
                ContenidoItem={data.dateBirth} 
                descriptionContenido={"fecha de nacimiento del usuario"} 
                Icon = {icono}
               
              />
              <SectionInfo 
                titleItem={"whattsap"}
                ContenidoItem={data.whattsap} 
                descriptionContenido={"Wahttsap permite mejoras en el rendimiento y .."} 
                Icon = {icono}
               
              />
            </div>
          </div>



          <div className="cardBig py-4 flex flex-col gap-8">
            <div className="px-4">
              <div>Contrasena</div>
              <div>Elije una contrasena que sea facil de recordar pero segura</div>
            </div>
            <div className="">
              <SectionInfo 
                titleItem={"ID"}
                ContenidoItem={data.identificacion} 
                descriptionContenido={"identificacion nacional del usuario"} 
                Icon = {icono}
               
              />
            </div>
          </div>




          
        </div>
      </div>
    </div>
  );
};

export default Informacion;
