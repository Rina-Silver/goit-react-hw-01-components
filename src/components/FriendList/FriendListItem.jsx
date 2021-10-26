import styles from './FriendList.module.css';

const { online, offline, userAvatar, userName } = styles;

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span className={isOnline ? online : offline}></span>
      <img className={userAvatar} src={avatar} alt={name} width="48" />
      <p className={userName}>{name}</p>
    </>
  );
};

export default FriendListItem;
