import React, { Component } from 'react';
import { Button, ButtonDiv, FeedbackTitle } from './feedback_Staled';

export default class Buttons extends Component {
  render() {
    return (
      <div>
        <FeedbackTitle>Please leave feedback</FeedbackTitle>
        <ButtonDiv>
          {this.props.options.map(el => (
            <Button
              key={crypto.randomUUID()}
              onClick={this.props.onLeaveFeedback}
              name={el.toLowerCase()}
            >
              {el}
            </Button>
          ))}
        </ButtonDiv>
      </div>
    );
  }
}
