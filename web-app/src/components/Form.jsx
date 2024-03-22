import React, {useState} from "react";

function Form() {

     const [ageGroup, setAgeGroup] = useState("");
     const handleSelect = (e) => {
      setAgeGroup(e.target.value);
     }
    
     return (
      <div class="w-[500px]">
        <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">What's your age?</p>
        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
    value
    ={ageGroup} 
    onChange
    ={handleSelect}>
         <
    option
     
    value
    ="">-</option>
         <option value="< 18 years">Less than 18 years</option>
         <option value="18-24 years">18-24 years</option>
         <option value="25-29 years">25-29 years</option>
         <option value="> 30 years">30 years or older</option>
        </select>
         <div class="pointer-events-none  inset-y-0 right-0 flex items-center px-2 text-gray-700">
         
       </div>
    </div>
      );
    }


export default Form

// rfce funkcijos sukurimui