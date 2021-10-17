import defaultImage from './default.jpg'

export default function Profile(props) {
  const {avatar = defaultImage, name, tag, location, userFollow,userView, userLike  } = props;

    return (<div class="profile">
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
        {/* {user.stats} */}
        <ul class="stats">
            <li>
                <span class="label">Followers</span>
                <span class="quantity">{userFollow}</span>
            </li>
            <li>
                <span class="label">Views</span>
                <span class="quantity">{userView}</span>
            </li>
            <li>
                <span class="label">Likes</span>
                <span class="quantity">{userLike}</span>
            </li>
        </ul>
    </div>);
}