import PropTypes from 'prop-types';
import s from './Statistics.module.css'

const color = item => {
  const colorArray = ['#E74C3C', '#8E44AD', '#3498DB', '#27AE60', '#F39C12'];
  return `${colorArray[Number(item.id.replace(/[^0-9]/g, '')) % 5]}`;
};

const Statistics =({stats}) =>  (
         <ul className={s.statList}>
        {stats.map(stat =>
           (<li className={s.item}  key={stat.id} style={{ backgroundColor: color(stat) }}>
            <span className={s.label}>{ stat.label}</span>
            <span className={s.percentage}>{ stat.percentage}%</span>
    </li>))}
  </ul>);
    

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


