
import "survey-core/defaultV2.min.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import Form from "./Form";
import Input from "./Input";
import CheckBox from "./CheckBox";
import HorizontalCheckBox from "./HorizontalCheckBox";

function Forms() {

   
  return( 
  <div className="flex space-y-8 flex-col  ">

  <div className="flex flex-col space-y-6 md:w-42 items-center sm:text-left mt-8 mb-8 py-12 md:shrink-0">
      
        <Form />
        <CheckBox/>
        <Input/>
        <HorizontalCheckBox/>
       <button class="bg-blue-500 hover:bg-blue-00 text-white font-bold py-1 px-24 border-b-4 border-blue-700 hover:border-blue-500 rounded buttonas">Sekantis</button>
    </div>
  </div >);
  
}

export default Forms