import React from 'react';
import { useState, useRef, useEffect } from 'react';
import './style.css';

export default function App() {
  const [questionboxId,setQuestionboxId]=useState('defaultQid')
  useEffect(() => {
    startCountdown(20);
  }, []);
  const [countdown, setCountdown] = useState(0);

  const interval = useRef();

  const startCountdown = (value) => {
    clearInterval(interval.current);
    setCountdown(value);

    interval.current = setInterval(() => {
      value--;
      if (value == 0) {
        clearInterval(interval.current);
      }
      setCountdown(value);
    }, 1000);
    if(value==0){
      setQuestionboxId('setdefaultQid')
    }
  }

    return (
      <div>
        <div id="top"></div>
        <div id="container">
          <div id={questionboxId}>
          <p>Question 2</p>
              <p>
               <b>
                 What is your inspiration behind choosing Quantum physics as your
                 career?
               </b>
             </p>
             {}
             <p>CountDown:{countdown}</p>
          </div>
        
        <div id="answerbox"></div>
        </div>
      </div>
    );
  };
