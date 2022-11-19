import { faq_questions } from "../faq_questions";
import Faq_question from "./Faq_question";
import React from "react";

function Faq_container(){

    const [allQuestions, setAllQuestions] = React.useState(faq_questions);

    function handleClick(event, id){

        console.log(allQuestions);


      setAllQuestions((prevState)=>{

        const newArray = prevState.map((element)=>{
            if(element.id === id){
                console.log(element.isAnswerShown);
                element.isAnswerShown = element.isAnswerShown ? false : true;
            }

            return element;


        })

        return newArray
      })

       

     
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