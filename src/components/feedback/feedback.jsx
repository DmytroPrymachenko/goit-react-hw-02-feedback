import { Component } from "react";
import { Button, ButtonBad, ButtonDiv, ButtonGood, ButtonNeutral, FeedbackDiv, Feedback_Title, NotFeedbackGiven, StatisticCategori, StatisticElement, StatisticItem, StatisticList, Statisticsh2 } from "./feedback_Staled";


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
                <ButtonDiv>
                <Button onClick={this.Goodlick}>Good</Button>
                <Button onClick={this.NeutralClick}>Neutral</Button>
                <Button onClick={this.BadClick}>Bad</Button>
                </ButtonDiv>
            <Statisticsh2>Statistics</Statisticsh2>   
                <NotFeedbackGiven>Not feedback given</NotFeedbackGiven>      
            </FeedbackDiv>
        }

    
            return (
                <FeedbackDiv>
                    <Feedback_Title>Please leave feedback</Feedback_Title>
                    <ButtonDiv>
                <Button onClick={this.Goodlick}>Good</Button>
                <Button onClick={this.NeutralClick}>Neutral</Button>
                <Button onClick={this.BadClick}>Bad</Button>
                </ButtonDiv>
                    <Statisticsh2>Statistics</Statisticsh2>
                    
                    <StatisticList>
  <StatisticItem>
    <StatisticCategori>good:</StatisticCategori>
    <StatisticElement>{good}</StatisticElement>
  </StatisticItem>
  <StatisticItem>
    <StatisticCategori>neutral:</StatisticCategori>
    <StatisticElement>{neutral}</StatisticElement>
  </StatisticItem>
  <StatisticItem>
    <StatisticCategori>bad:</StatisticCategori>
    <StatisticElement>{bad}</StatisticElement>
  </StatisticItem>
  <StatisticItem>
    <StatisticCategori>totalFeedback:</StatisticCategori>
    <StatisticElement>{totalFeedback}</StatisticElement>
  </StatisticItem>
  <StatisticItem>
    <StatisticCategori>positiveFeedback:</StatisticCategori>
  <StatisticElement>{positiveFeedback}</StatisticElement>
  </StatisticItem>
</StatisticList>
                </FeedbackDiv>
            );
        }
    }


