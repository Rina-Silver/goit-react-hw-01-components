import PropTypes  from 'prop-types';
import defaultImage from './default.jpg'

// ?? оператор в js src={avatar ?? defaultImage}
 function Profile(props) {
  const {avatar = defaultImage, name, tag, location, stats } = props;

    return (
     
        <div class="profile">
        <div class="description">
            <img
                src={avatar}
                alt="Аватар пользователя"
                class="avatar"
            />
            <p class="name">{name}</p>
            <p class="tag">@{tag}</p>
            <p class="location">{location}</p>
        </div>
      
        <ul class="stats">
            <li>
                <span class="label">Followers</span>
                <span class="quantity">{stats.followers}</span>
            </li>
            <li>
                <span class="label">Views</span>
                <span class="quantity">{stats.views}</span>
            </li>
            <li>
                <span class="label">Likes</span>
                <span class="quantity">{stats.likes}</span>
                </li>
                
        </ul>
        
            </div>);
}

//* isRequired - обязательный prop
Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,

}

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