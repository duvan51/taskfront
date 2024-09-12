import React,{useEffect, useState} from 'react';
import Logo from '../../assets/logo.png'
import Logo2 from '../../assets/react.svg'
import { getUserProjectById } from "../../services/apiUsers.jsx";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdAddCircleOutline } from "react-icons/md";



const Slidebar = () => {

  const [data, setUserData] = useState({});
  
  const user = useSelector((state) => state.user);

  const id = user.id;



  useEffect(() => {
    const fetchUserData = async () => {
      if (id) {
        try {
          const data = await getUserProjectById(id);
          setUserData(data); // Guardar los datos en el estado
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [id]);





  return (
    <div className='flex justify-center h-dvh p-6 text-white'>
      <div className='w-full flex align-center flex-col gap-2'>
         <div className='w-full h-40 flex justify-center '>
          <div className='rounded-full w-4/3 h-full overflow-hidden' >
              <img src={Logo} className='object-cover w-full h-full' />
          </div>
         </div>
         <div className='w-full flex justify-center content-center'>
            <div className='sans no-underline'>
              <Link to={`/${id}/informacion`} className='no-underline text-white'>
                <div>{data.Name}</div>
              </Link>
            </div>
         </div>
             <div className='border-white border-b-2 py-4'>
                <div className='py-2 font-bold text-lg flex items-center justify-between'>
                  <div>private</div>
                  <Link to={`/${id}/createProject/`} className='no-underline text-white'><MdAddCircleOutline /></Link>
                </div>
             { 
               (data.Proyects)?.filter(item => item.state = "programada")
                                   .map(filteredItem=> (
                          <div key={filteredItem.id}> 
                         

                            <Link to={`/${id}/project/${filteredItem.id}`} className='no-underline text-white'>
                                <div>{filteredItem.Name}</div>
                            </Link>

                            <div className='flex gap-2'> 
                                {
                                  filteredItem.Tasks.map(x=>(
                                    <div key={x.id} className='bg-indigo-700 w-4 flex justify-center text-white'> 
                                      {x.id}  
                                    </div>
                                  ))
                                }
                            </div>
                          </div>
                  )
                )
                        
              }
            </div>



            <div className='border-white border-b-2 py-4'>
                <div className='py-2 font-bold text-lg'>share</div>
             { 
               (data.Proyects)?.filter(item => item.state = "programada")
                                   .map(filteredItem=> (
                          <div key={filteredItem.id}> 
                          

                            <div> {filteredItem.Name} </div>

                            <div className='flex gap-2'> 
                                {
                                  filteredItem.Tasks.map(x=>(
                                    <div key={x.id} className='bg-indigo-700 w-4 flex justify-center text-white'> 
                                      {x.id}  
                                    </div>
                                  ))
                                }
                            </div>




                          </div>
                  )
                )
                        
              }
            </div>



            <div className='border-white border-b-2 py-4'>
                <div className='py-2 font-bold text-lg'>private</div>
             { 
               (data.Proyects)?.filter(item => item.state = "programada")
                                   .map(filteredItem=> (
                          <div key={filteredItem.id}> 
                     

                            <div> {filteredItem.Name} </div>

                            <div className='flex gap-2'> 
                                {
                                  filteredItem.Tasks.map(x=>(
                                    <div key={x.id} className='bg-indigo-700 w-4 flex justify-center text-white'> 
                                      {x.id}  
                                    </div>
                                  ))
                                }
                            </div>




                          </div>
                  )
                )
                        
              }
            </div>
      </div>
    </div>
  )
}

export default Slidebar