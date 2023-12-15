import React, { Component } from 'react';
import { Button, ButtonDiv, FeedbackTitle } from './feedback_Staled';

export default class Buttons extends Component {
  render() {
    return (
      <div>
        <FeedbackTitle>Please leave feedback</FeedbackTitle>
        <ButtonDiv>
          <Button onClick={this.props.onGoodClick}>Good</Button>
          <Button onClick={this.props.onNeutralClick}>Neutral</Button>
          <Button onClick={this.props.onBadClick}>Bad</Button>
        </ButtonDiv>
      </div>
    );
  }
}
