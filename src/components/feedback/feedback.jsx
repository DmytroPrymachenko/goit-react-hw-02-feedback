import { Component } from 'react';
import { NotFeedbackGiven, Statisticsh2 } from './feedback_Staled';
import Statistic from './statistic';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  Goodlick = () => {
    this.setState(prev => ({ good: prev.good + 1 }));
  };
  NeutralClick = () => {
    this.setState(prev => ({ neutral: prev.neutral + 1 }));
  };
  BadClick = () => {
    this.setState(prev => ({ bad: prev.bad + 1 }));
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
      return (
        <div>
          <Statisticsh2>Statistics</Statisticsh2>
          <NotFeedbackGiven>Not feedback given</NotFeedbackGiven>
        </div>
      );
    }

    return (
      <div>
        <Statisticsh2>Statistics</Statisticsh2>
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      </div>
    );
  }
}
