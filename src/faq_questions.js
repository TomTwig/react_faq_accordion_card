
import {nanoid} from "@reduxjs/toolkit";


const question1 ={
    id: nanoid(),
    question: "How many team members can I invite?",
    answer: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    isAnswerShown: false
}

const question2 ={
    id: nanoid(),
    question: "What is the maximum file upload size?",
    answer: "No more than 2GB. All files in your account must fit your allotted storage space.",
    isAnswerShown: false
}

const question3 ={
    id: nanoid(),
    question: "How do I reset my password?",
    answer: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    isAnswerShown: false
}

const question4 ={
    id: nanoid(),
    question: "Can I cancel my subscription?",
    answer: "Yes! Send us a message and we’ll process your request no questions asked.",
    isAnswerShown: false
}

const question5 ={
    id: nanoid(),
    question: "Do you provide additional support?",
    answer: "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    isAnswerShown: false
}







export const faq_questions =[question1, question2, question3, question4, question5]




