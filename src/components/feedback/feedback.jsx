import { Component } from 'react';
import { NotFeedbackGiven, Statisticsh2 } from './feedback_Staled';
import Statistic from './statistic';

import Buttons from './button';

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

    return (
      <div>
        <Buttons
          onGoodClick={this.Goodlick}
          onNeutralClick={this.NeutralClick}
          onBadClick={this.BadClick}
        />

        <Statisticsh2>Statistics</Statisticsh2>
        {totalFeedback <= 0 && (
          <NotFeedbackGiven>Not feedback given</NotFeedbackGiven>
        )}
        {totalFeedback > 0 && (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        )}
      </div>
    );
  }
}
