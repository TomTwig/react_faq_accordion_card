import ChevronUp from "../svg/ChevronUp";


export default function Faq_question({ question, myFunction }) {
    return (

        <div className="faq__question">

            <div className="faq__question__question">
                <h3>{question.question}</h3>
                <button onClick={(event)=>{myFunction(event, question.id)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                </button>



            </div>

            {question.isAnswerShown} <p>{question.answer}</p>


        </div>
    )

}
