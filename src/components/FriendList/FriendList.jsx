import PropTypes from 'prop-types';
import s from './FriendList.module.css'


const FriendList =({friends}) =>  (
        <ul className={s.FriendList}>
            {friends.map(friend =>
                (<li className={s.item} key={friend.id}>
                <span className={s.status} style={{backgroundColor: friend.isOnline ? "green": "red"}} ></span>
                <img className={s.avatar} src={friend.avatar } alt={friend.name } width="48" />
                <p className={s.name}>{friend.name }</p>
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