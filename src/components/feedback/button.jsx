import React, { Component } from 'react';
import { Button, ButtonDiv, Feedback_Title } from './feedback_Staled';

export default class Buttons extends Component {
  render() {
    return (
      <div>
        <Feedback_Title>Please leave feedback</Feedback_Title>
        <ButtonDiv>
          <Button onClick={this.props.onGoodClick}>Good</Button>
          <Button onClick={this.props.onNeutralClick}>Neutral</Button>
          <Button onClick={this.props.onBadClick}>Bad</Button>
        </ButtonDiv>
      </div>
    );
  }
}
