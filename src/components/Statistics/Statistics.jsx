import PropTypes from 'prop-types';
import { StatisticValuesItem } from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul>
      <StatisticValuesItem>Good: {good},</StatisticValuesItem>
      <StatisticValuesItem>Neutral: {neutral},</StatisticValuesItem>
      <StatisticValuesItem>Bad: {bad}</StatisticValuesItem>
      <StatisticValuesItem>Total: {total}</StatisticValuesItem>
      <StatisticValuesItem>
        Positive feetback: {positivePercentage}%
      </StatisticValuesItem>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};