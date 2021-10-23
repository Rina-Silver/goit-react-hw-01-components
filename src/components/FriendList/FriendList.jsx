import PropTypes from 'prop-types';


const FriendList =({friends}) =>  (
        <ul className="friend-list">
            {friends.map(friend =>
                (<li className="item" key={friend.id}>
                <span className={`status ${friend.isOnline ? "styles.statusOnline": "styles.statusOffline"}`} ></span>
                <img classMane="avatar" src={friend.avatar } alt={friend.name } width="48" />
                <p className="name">{friend.name }</p>
            </li>))}
        </ul>);
    

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
  id: PropTypes.string.isRequired,
};
FriendList.defaultProps = {
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg',
  name: 'User name',
  isOnline: false,
};

export default FriendList;