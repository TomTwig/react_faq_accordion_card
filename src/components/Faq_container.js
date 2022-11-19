import { faq_questions } from "../faq_questions";
import Faq_question from "./Faq_question";
import React from "react";

function Faq_container(){

    function handleClick(event, id){
      
        console.log(id)
    }




    const displayQuestions = faq_questions.map((question)=> <Faq_question key={question.id} myFunction={handleClick} question={question} />
    )

return(

    <div>

   {displayQuestions}



    </div>
)

}

export default Faq_container;