import { Component } from "react";
import { ButtonBad, ButtonGood, ButtonNeutral, FeedbackDiv, Feedback_Title } from "./feedback_Staled";


export class Feedback extends Component {


    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    Goodlick = () => {
        this.setState(prev => ({ good: prev.good + 1 }))
    };
    NeutralClick = () => {
        this.setState(prev => ({ neutral: prev.neutral + 1 }))
    };
    BadClick = () => {
        this.setState(prev => ({ bad: prev.bad + 1 }))
    };

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    };
    countPositiveFeedbackPercentage = () => {
        if (this.countTotalFeedback() > 0) {
            const result = (this.state.good / this.countTotalFeedback()) * 100;
            return result.toFixed(0) + '%';
        }
    };

    render() {
        const { good, neutral, bad } = this.state;
        const totalFeedback = this.countTotalFeedback();
        const positiveFeedback = this.countPositiveFeedbackPercentage();

        if (totalFeedback <= 0) {

            return <FeedbackDiv>
                <Feedback_Title>Please leave feedback</Feedback_Title>
                <ButtonGood onClick={this.Goodlick}>Good</ButtonGood>
                <ButtonNeutral onClick={this.NeutralClick}>Neutral</ButtonNeutral>
                <ButtonBad onClick={this.BadClick}>Bad</ButtonBad>
            
                <h2>Not feedback given</h2>


                
                  
            </FeedbackDiv>
        }

    
            return (
                <FeedbackDiv>
                    <Feedback_Title>Please leave feedback</Feedback_Title>
                    <ButtonGood onClick={this.Goodlick}>Good</ButtonGood>
                    <ButtonNeutral onClick={this.NeutralClick}>Neutral</ButtonNeutral>
                    <ButtonBad onClick={this.BadClick}>Bad</ButtonBad>
                    {good} {neutral} {bad} {totalFeedback}
                    <h1>{good}</h1>
                </FeedbackDiv>
            );
        }
    }


