import React,{useState} from 'react'
import Input from '../../components/input.jsx'
import ButtonSave from '../../components/buttonSave.jsx'
import { loginUser } from '../../services/apiUsers.jsx';
import { useNavigate } from 'react-router-dom'; 



import {useDispatch } from 'react-redux';
import { setUserDataRedux } from '../../redux/userSlice.jsx';


import { GoogleLogin } from '@react-oauth/google';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email:'',
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
         const response = await loginUser(formData);
          if(response && response.token){
            localStorage.setItem('token', response.token);
            
            const userid = response.userId
           // console.log('login response=> ',userid)
                const userForRedux = {
                   id: userid,
                }
                //  console.log(userForRedux)
               dispatch(setUserDataRedux(userForRedux));
                // Redirigir al usuario a una página protegida
                navigate('/profile');
            }

        } catch (error) {
          console.error('Error al enviar los datos:', error);
        }
      }



  return (
    <div className="w-full h-full flex justify-center">
      <form className="w-5/6 flex flex-col gap-2" >
        <Input type='email' name='email'  placeholder={"email"} onInputChange={handleInputChange} />
        <Input type='text' name='password'  placeholder={"password"} onInputChange={handleInputChange} />
        <div className="py-5 flex gap-2">
           <ButtonSave onClick={handleSubmit} Name={"Login"} />
        </div>
      </form>

      <div>
      <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </div>
    </div>
  )
}

export default Login