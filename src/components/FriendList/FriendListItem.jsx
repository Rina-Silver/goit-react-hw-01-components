import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const { online, offline, userAvatar, userName } = styles;
// className={`box box-${type} ${classNames}`}

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span className={isOnline ? online : offline}></span>
      <img className={userAvatar} src={avatar} alt={name} width="48" />
      <p className={userName}>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
