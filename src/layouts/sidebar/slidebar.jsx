import React,{useEffect, useState} from 'react';
import Logo from '../../assets/logo.png'
import Logo2 from '../../assets/react.svg'
import { getUserProjectById } from "../../services/apiUsers.jsx";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdAddCircleOutline } from "react-icons/md";

import ButtonTheme from '../../components/buttonTheme.jsx'


import {Flat, Heat, Nested} from '@alptugidin/react-circular-progress-bar'



const Slidebar = () => {

  const [data, setUserData] = useState({});
  
  const user = useSelector((state) => state.user);

  const id = user.id;


  const [stateCancelada, setStateCancelada] = useState(0)



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
    <div className={`overflow-auto bg-bgPrimary flex justify-center h-dvh p-6 text-white text-textPrimary`}  style={{ overflowY: 'scroll', scrollbarWidth: 'none' }}>
      
      <div className='w-full flex align-center flex-col gap-2  '>
         <ButtonTheme />
         
         <div className='w-full h-40 flex justify-center '>
          <div className='rounded-full w-4/3 h-full overflow-hidden' >
              <img src={Logo} className='object-cover w-full h-full' />
          </div>
         </div>
         <div className='w-full flex justify-center content-center'>
            <div className='sans no-underline'>
              <Link to={`/informacion`} className='no-underline text-textPrimary'>
                <div className="text-textPrimary">{data.Name}</div>
              </Link>
            </div>
         </div>

             <div className='border-borderBottom border-b-2 py-4 text-textPrimary'>
                <div className='py-2 font-bold text-lg flex items-center justify-between'>
                  <div>private</div>
                  <Link to={`/createProject/`} className='no-underline text-textPrimary'><MdAddCircleOutline /></Link>
                </div>
             { 
               (data.Proyects)?.filter(item => item.state = "programada")
                                   .map(filteredItem=> (

                                    




                          <div key={filteredItem.id}> 
                         

                            <Link to={`/project/${filteredItem.id}`} className='no-underline text-textPrimary'>
                                <div>{filteredItem.Name}</div>
                            </Link>


                            <div className='flex justify-between'>
                              <div className='flex flex-col gap-2 py-1'>
                              <div className='flex gap-2'> 
                                {
                                  (filteredItem.Tasks)?.filter(x => x.state === "programada")
                                  .map(filterx=> ( 

                                    <div key={filterx.id} className='bg-indigo-600 w-4 flex justify-center text-textPrimary'> 
                                        {filterx.id}  
                                    </div> 
                                  ))
                                  
                                }
                            </div>


                            <div className='flex gap-2'> 
                                {
                                  (filteredItem.Tasks)?.filter(x => x.state === "proceso")
                                  .map(filterx=> ( 
                                    <div key={filterx.id} className='bg-indigo-700 w-4 flex justify-center text-textPrimary'> 
                                        {filterx.id}  
                                    </div> 
                                  ))
                                  
                                }
                            </div>


                            <div className='flex gap-2'> 
                                {
                                  (filteredItem.Tasks)?.filter(x => x.state === "revision")
                                  .map(filterx=> ( 
                                    <div key={filterx.id} className='bg-indigo-700 w-4 flex justify-center text-textPrimary'> 
                                        {filterx.id}  
                                    </div> 
                                  ))
                                  
                                }
                            </div>

                            <div className='flex gap-2'> 
                           
                                {
                                  (filteredItem.Tasks)?.filter(x => x.state === "cancelada")
                                  .map(filterx=> ( 
                                    console.log(),
                                    <div key={filterx.id} className='bg-indigo-700 w-4 flex justify-center text-textPrimary'> 
                                        {filterx.id}  
                                    </div> 
                                  ))
                                }
                                
                            </div>
                              </div>

                              <div className='flex items-center'>
                                <div className='w-20'>
                                <Flat  
   progress={25}
   range={{ from: 0, to: 100 }}
   sign={{ value: '%', position: 'center' }}
   text={'Match'}
   showMiniCircle={true}
   showValue={true}
   sx={{
     strokeColor: '#ff0000',
     barWidth: 5, 
     bgStrokeColor: '#ffffff',
     bgColor: { value: '#000000', transparency: '20' },  
     shape: 'full',
     strokeLinecap: 'round',
     valueSize: 13,
     valueWeight: 'bold',
     valueColor: '#000000',
     valueFamily: 'Trebuchet MS',
     textSize: 13,
     textWeight: 'bold',
     textColor: '#000000',
     textFamily: 'Trebuchet MS',
     loadingTime: 1000,
     miniCircleColor: '#ff0000',
     miniCircleSize: 5,
     valueAnimation: true,
     intersectionEnabled: true
   }}
/>
                                </div>
                              </div>
                            

                            </div>
                            





                          </div>
                  )
                )
                        
              }
            </div>



            <div className='border-borderBottom border-b-2 py-4 text-textPrimary'>
                <div className='py-2 font-bold text-lg'>share</div>
             { 
               (data.Proyects)?.filter(item => item.state = "programada")
                                   .map(filteredItem=> (
                          <div key={filteredItem.id}> 
                          

                            <div> {filteredItem.Name} </div>

                            <div className='flex gap-2'> 
                                {
                                  filteredItem.Tasks.map(x=>(
                                    <div key={x.id} className='bg-indigo-700 w-4 flex justify-center text-textPrimary'> 
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



            <div className='border-borderBottom border-b-2 py-4 text-textPrimary'>
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