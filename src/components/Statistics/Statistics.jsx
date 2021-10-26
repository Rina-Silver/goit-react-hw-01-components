import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import color from './colorSelect';

const Statistics = ({ title, stats }) => (
  <>
    {title && <h2>{title}</h2>}
    <ul className={s.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li
          className={s.item}
          key={id}
          style={{ backgroundColor: color({ id }) }}
        >
          <span className={s.label}>{label}</span>
          <span className={s.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </>
);

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
