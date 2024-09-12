import React from "react";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

import Register from '../../layouts/forms/registerUser.jsx'
import Login from "../../layouts/forms/login.jsx";

const Home = () => {
  return (
    <div className="">
      <div>
        <div className="background w-full h-dvh relative">
          <div className="OneBanner w-full h-full content-center justify-center">


            <div className="flex flex-col w-full h-full align-center">
              <div>
                <h1 className="text-5xl">
                  TaskMaster te ayuda a gestionar mejor tu tiempo con tus
                  proyectos y tu equipo
                </h1>
              </div>
              <div>
                <h3 className="text-2xl">Manten organizados tus proyectos</h3>
              </div>
            </div>

            <div className="h-96">
              <Tabs aria-label="Tabs with icons" variant="underline" className="flex gap-6 justify-center">
                <Tabs.Item active title="Login" icon={HiUserCircle} >
                     <Login />
                </Tabs.Item>
                <Tabs.Item title="Register" icon={MdDashboard} className="w-full">
                    <Register />
                </Tabs.Item>
              </Tabs>
            </div>


          </div>
          <div className="-mt-60">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#f3f4f5"
                fillOpacity="1"
                d="M0,128L40,122.7C80,117,160,107,240,112C320,117,400,139,480,144C560,149,640,139,720,117.3C800,96,880,64,960,85.3C1040,107,1120,181,1200,186.7C1280,192,1360,128,1400,96L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
