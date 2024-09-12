import React from "react";

const ButtonSave = ({onClick, Name}) => {
  
  
    return(
    <button type="button" onClick={onClick}
                      className="bg-violet-500 
                       hover:bg-violet-600 
                       active:bg-violet-700 
                       focus:outline-none 
                       focus:ring 
                       focus:ring-violet-300
                       py-2
                       px-4
                       rounded-md
                       text-white
                       "
                       >
        {Name}
    </button>
  ) 
};

export default ButtonSave;
