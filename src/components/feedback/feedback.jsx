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

  handlerClick = e => {
    const { name } = e.currentTarget;

    switch (name) {
      case 'good':
        this.setState(prevState => ({ good: prevState.good + 1 }));
        break;
      case 'neutral':
        this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
        break;
      case 'bad':
        this.setState(prevState => ({ bad: prevState.bad + 1 }));
        break;
      default:
    }
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
    const options = ['Good', 'Neutral', 'Bad'];

    return (
      <div>
        <Buttons options={options} onLeaveFeedback={this.handlerClick} />

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
