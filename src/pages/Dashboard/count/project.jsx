import React,{useState} from "react";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";

import { MdDashboard } from "react-icons/md";


import RegisterTask from "../../../layouts/forms/registerTask.jsx";

import Button from "react-bootstrap/Button";


import DragAndDrop from "../../../components/DragAndDrop2.jsx";

const Proyect = () => {


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);





  return (
    <div className="h-full">
    
      <div className="bg-bgPrimary text-textPrimary flex flex-col px-10 py-5 text-amber-50 rounded-md gap-4 mt-4">
        <div>
          <Button variant="primary" onClick={handleShow}>
            {" "}
            createTask{" "}
          </Button>
          <RegisterTask show={show} handleClose={handleClose} />
        </div>

        <div className="flex justify-between">
          <div>{"xxxx"}</div>
          <div>limite : {"xx/xx/xx"}</div>
        </div>
        <div>barra progress</div>
          <DragAndDrop />
      </div>
    </div>
  );
};

export default Proyect;
