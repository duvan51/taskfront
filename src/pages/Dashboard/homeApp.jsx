import React,{useEffect,useState} from 'react'
import { useParams} from 'react-router-dom';
import { getUserById } from "../../services/apiUsers.jsx";

import {useDispatch } from 'react-redux';
import { setUserDataRedux } from '../../redux/userSlice.jsx';


const HomeApp = () => {
  const dispatch = useDispatch();
  const {id} = useParams()
  const [userData, setUserData] = useState(null);




  
  useEffect(() => {
    const fetchUserData = async () => {
      if (id ) {
        try {
          const data = await getUserById(id);
          setUserData(data);  // Guardar los datos en el estado


          const userForRedux = {
            id: data.id,
            userName: data.userName || ''
          }
          console.log(userForRedux)
          dispatch(setUserDataRedux(userForRedux));
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, [id, dispatch]);



 






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