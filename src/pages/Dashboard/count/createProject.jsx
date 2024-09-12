import React from 'react'
import CreateProjectForm from '../../../layouts/forms/registerProject.jsx'

const CreateProject = () => {
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
               <CreateProjectForm />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default CreateProject