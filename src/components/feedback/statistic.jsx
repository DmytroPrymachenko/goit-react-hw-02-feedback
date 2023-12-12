import React, { Component } from 'react';
import {
  StatisticCategori,
  StatisticElement,
  StatisticItem,
  StatisticList,
} from './feedback_Staled';

export default class Statistic extends Component {
  render() {
    return (
      <StatisticList>
        <StatisticItem>
          <StatisticCategori>good:</StatisticCategori>
          <StatisticElement>{this.props.good}</StatisticElement>
        </StatisticItem>
        <StatisticItem>
          <StatisticCategori>neutral:</StatisticCategori>
          <StatisticElement>{this.props.neutral}</StatisticElement>
        </StatisticItem>
        <StatisticItem>
          <StatisticCategori>bad:</StatisticCategori>
          <StatisticElement>{this.props.bad}</StatisticElement>
        </StatisticItem>
        <StatisticItem>
          <StatisticCategori>totalFeedback:</StatisticCategori>
          <StatisticElement>{this.props.totalFeedback}</StatisticElement>
        </StatisticItem>
        <StatisticItem>
          <StatisticCategori>positiveFeedback:</StatisticCategori>
          <StatisticElement>{this.props.positiveFeedback}</StatisticElement>
        </StatisticItem>
      </StatisticList>
    );
  }
}
