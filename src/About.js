import './App.css';

import db from './firebase.config';
import React, {useEffect, useState} from "react";

function About() {
  const [zagolovok, setZagolovok] = useState()
  const [easyText, setEasyText] = useState([])

  const fetchAbout = () => {
      db.collection("team-collection")
          .doc('about')
          .get()
          .then(doc => {
            setZagolovok(doc.data().zagolovok)
            setEasyText(doc.data().easyText)
          });
  }

  useEffect(() => {
      fetchAbout()
  }, [])


  

  return (
    <div>
      {zagolovok && zagolovok.map(item => (
                        <h1 key={item}>{item}</h1>
                    ))}
      {easyText && easyText.map(item => (
                        <p key={item}>{item}</p>
                    ))}
    </div>
  );
}

export default About;
