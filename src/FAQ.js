import logo from './logo.svg';
import './App.css';
import db from './firebase.config';
import React, {useEffect, useState} from "react";

function FAQ() {
    const [answers, setAnswers] = useState()
    const [questions, setQuestions] = useState([])

    const fetchFaqs = () => {
        db.collection("team-collection")
            .doc('faq')
            .get()
            .then(doc => {
                setAnswers(doc.data().answers)
                setQuestions(doc.data().questions)
            });
    }

    useEffect(() => {
        fetchFaqs()
    }, [])

    const faqStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };
    return (
        <div>
            <h3>FAQ</h3>

            <div style={faqStyle}>
                <ul>
                    {answers && answers.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>

                <ul>
                    {questions && questions.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}


export default FAQ;
