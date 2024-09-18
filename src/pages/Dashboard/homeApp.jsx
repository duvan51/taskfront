import React,{useEffect,useState} from 'react'
import { useParams} from 'react-router-dom';
import { getUserById } from "../../services/apiUsers.jsx";

import { useSelector } from "react-redux";


const HomeApp = () => {

  const [userData, setUserData] = useState(null);

  const user = useSelector((state) => state.user);


  
  useEffect(() => {
    const fetchUserData = async () => {
      if (user.id ) {
        try {
          const data = await getUserById(user.id);
          setUserData(data);  // Guardar los datos en el estado

        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, [user.id]);



 






  return (
    <div>
      <div className='px-10'>
        <div>
          menu- header - dash
        </div>
        <div>
          <div className='backgroundCristal flex flex-col px-10 py-5 text-amber-50 rounded-md gap-4'>
              <div className='flex flex-col gap-2'>
                <div>projects me</div>
                <div>
                  <div className='card'>
                    <div>img</div>
                    <div>Name</div>
                  </div>
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <div>projects share</div>
                <div>
                  <div className='card'>
                    <div>img</div>
                    <div>Name</div>
                  </div>
                </div>
              </div>


              <div className='flex flex-col gap-2'>
                <div>projects private</div>
                <div>
                  <div className='card'>
                    <div>img</div>
                    <div>Name</div>
                  </div>
                </div>
              </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeApp