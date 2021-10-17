//app.jsx
import Section from './components/Section';
import Profile from './components/Profile/Profile';
import user from './user.json';

 function App() {
    return (
        <div>
       <Section title="Задание 1" >
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
            </Section>
             <Section title="Задание 2" >
            
            </Section>
        </div>
       
    );
}

 // {user.map(user =>
        //         <Profile
        //     key={user.id}
        //     name={user.name}
        //     tag={user.tag}
        //     location={user.location}
        //     avatar={user.avatar}
        //     stats={user.stats}
        //     userFollow={user.stats.followers}
        //     userView={user.stats.views}
        //     userLike={user.stats.likes}
        //     />)}  

export default App;