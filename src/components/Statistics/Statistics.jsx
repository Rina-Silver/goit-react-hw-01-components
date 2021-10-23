import PropTypes from 'prop-types';

const color = item => {
  const colorArray = ['#E74C3C', '#8E44AD', '#3498DB', '#27AE60', '#F39C12'];
  return `${colorArray[Number(item.id.replace(/[^0-9]/g, '')) % 5]}`;
};

function Statistics({stats}) {
    return (
         <ul className="stat-list">
        {stats.map(stat =>
           (<li className="item"  key={stat.id} style={{ backgroundColor: color(stat) }}>
            <span className="label">{ stat.label}</span>
            <span className="percentage">{ stat.percentage}%</span>
    </li>))}
       
   
  </ul>);
    
}
Statistics.propTypes = {
  
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};


export default Statistics;
