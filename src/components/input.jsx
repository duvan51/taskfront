import React from 'react'

const input = ({onInputChange, placeholder, name, type}) => {

    const handleChange = (e) => {
        onInputChange(e.target.name, e.target.value); // Envía el valor al padre
      };

     
      
  return (
    


    <label className="block flex">
        <span className="block  text-slate-300 font-normal  w-1/5  font-bold flex items-center">{placeholder}</span>
        {(type === "textarea") ? (
            <textarea type={type} placeholder={placeholder} onChange={handleChange} name={name} rows="10"
        className='
           mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
           focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
           disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
           invalid:border-pink-500 invalid:text-pink-600
           focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black font-bold
        '
 
            /> ) : (

            <input type={type} placeholder={placeholder} onChange={handleChange} name={name}
        className='
           mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
           focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
           disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
           invalid:border-pink-500 invalid:text-pink-600
           focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black font-bold
        '
 
            /> )
    
    }
        
      </label>

  )
}

export default input