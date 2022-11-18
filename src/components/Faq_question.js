import ChevronUp from "../svg/ChevronUp";


export default function Faq_question({ question }) {
    return (

        <div className="faq__question">

            <div className="faq__question__question">
                <h3>{question.question}</h3>
                <ChevronUp />

            </div>

            {question.isAnswerShown} <p>{question.answer}</p>


        </div>
    )

}
