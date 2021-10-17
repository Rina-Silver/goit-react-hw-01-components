//app.jsx
import user from './user.json';
import Profile from './components/Profile/Profile';

export default function App() {
    return (
        <div>
            <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
            userFollow={user.stats.followers}
            userView={user.stats.views}
            userLike={user.stats.likes}
            />
        </div>
    );
}