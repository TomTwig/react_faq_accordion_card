import { faq_questions } from "../faq_questions";
import Faq_question from "./Faq_question";
import React from "react";

function Faq_container(){




    const displayQuestions = faq_questions.map((question)=> <Faq_question key={question.id} question={question} />
    )

return(

    <div>

   {displayQuestions}



    </div>
)

}

export default Faq_container;