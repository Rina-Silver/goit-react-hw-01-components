import PropTypes from 'prop-types';


const FriendList =({friends}) =>  (
        <ul className="friend-list">
            {friends.map(friend =>
                (<li className="item" key={friend.id}>
                <span className={`status ${friend.isOnline ? "styles.statusOnline": "styles.statusOffline"}`} ></span>
                <img className="avatar" src={friend.avatar } alt={friend.name } width="48" />
                <p className="name">{friend.name }</p>
            </li>))}
        </ul>);
    

FriendList.propTypes = {
   friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

FriendList.defaultProps = {
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg',
  name: 'User name',
  isOnline: false,
};

export default FriendList;