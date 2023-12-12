import React, { Component } from 'react';
import { ButtonDiv, Feedback_Title } from './feedback_Staled';

export default class Button extends Component {
  render() {
    return (
      <div>
        <Feedback_Title>Please leave feedback</Feedback_Title>
        <ButtonDiv>
          <Button onClick={this.props.Goodlick}>Good</Button>
          <Button onClick={this.props.NeutralClick}>Neutral</Button>
          <Button onClick={this.props.BadClick}>Bad</Button>
        </ButtonDiv>
      </div>
    );
  }
}
