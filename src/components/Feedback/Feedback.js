
import React, { useState } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions"
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const valueIncrement = (value) => {
    
    switch (value) {
      case "good":
        setGood(good + 1);
        break;
    
      case "neutral":
        setNeutral(neutral + 1);
        break;
    
      case "bad":
        setBad(bad + 1);
        break;
    
      default:
        console.log("Invalid value type");
    }
  };
  
  const countTotalFeedback = () => {
      return good + neutral + bad
  };
  
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return  Math.round(good / total * 100)
  };
 
  return (
        
        <div>

          <Section title="Please leave feedback">
          
            <FeedbackOptions  onLeaveFeedback={valueIncrement} />
          
          </Section>

          <Section title="Statistics">           
            {countTotalFeedback() ? 
              <Statistics 
                  good={good} 
                  neutral={neutral} 
                  bad={bad} 
                  total={countTotalFeedback()} 
                  positivePercentage={countPositiveFeedbackPercentage()} /> :

              <Notification message="There is no feedback" /> }
          </Section>
                      
        </div>
)}


export default Feedback


