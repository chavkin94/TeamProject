import './App.css';

import db from './firebase.config';
import React, {useEffect, useState} from "react";

function About() {
  const [Zagolovok, setZagolovok] = useState()
  const [easyText, setEasyText] = useState([])

  const fetchFaqs = () => {
      db.collection("team-collection")
          .doc('About')
          .get()
          .then(doc => {
            setZagolovok(doc.data().Zagolovok)
            setEasyText(doc.data().easyText)
          });
  }

  useEffect(() => {
      fetchFaqs()
  }, [])


  const AboutStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div className="App" style={AboutStyle}>
      {Zagolovok && Zagolovok.map(item => (
                        <h1 key={item}>{item}</h1>
                    ))}
      {easyText && easyText.map(item => (
                        <p key={item}>{item}</p>
                    ))}
    </div>
  );
}

export default About;
