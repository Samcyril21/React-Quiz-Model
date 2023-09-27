import React from 'react';
import { useState, useRef, useEffect } from 'react';
import './style.css';

export default function App() {
  const [questionboxId, setQuestionboxId] = useState('defaultQid');

  useEffect(() => {
    startCountdown(5);
  }, []);

  const [countdown, setCountdown] = useState();

  const interval = useRef();

  const startCountdown = (value) => {
    clearInterval(interval.current);
    setCountdown(value);

    interval.current = setInterval(() => {
      value--;
      if (value == 0) {
        clearInterval(interval.current);
        setQuestionboxId('setdefaultQid');
      }
      setCountdown(value);
    }, 1000);
  };

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
          {countdown === 0 ? (
            <p id='speaknow'>Speak Now</p>
          ) : (
            <p id="countdown">
              <span id="beforecount">Start speaking in </span><b>
              {countdown} Seconds</b>
            </p>
          )}
        </div>

        <div id="answerbox"></div>
      </div>
    </div>
  );
}
