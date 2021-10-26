import PropTypes from 'prop-types';
import defaultImage from './default.jpg';
import style from './Profile.module.css';

// ?? оператор в js src={avatar ?? defaultImage}
function Profile(props) {
  const { avatar = defaultImage, name, tag, location, stats } = props;
  const { followers, views, likes } = stats;

  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt="Аватар пользователя" className={style.avatar} />
        <p className={style.name}>{name}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li>
          <span className="label">Followers</span>
          <span className={style.quantity}>{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className={style.quantity}>{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className={style.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

//* isRequired - обязательный prop
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

Profile.defaultProps = {
  name: 'User name',
  tag: '@User tag',
  location: 'User location',
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg',
  stats: {
    followers: '0',
    views: '0',
    likes: '0',
  },
};

export default Profile;
