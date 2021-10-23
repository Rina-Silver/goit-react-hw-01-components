//app.jsx
import Section from './components/Section/Section';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import user from './components/Profile/user.json';
import statisticalData from "./components/Statistics/statistical-data.json"

 function App() {
    return (
        <div className="container">
       <Section >
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
             <Section className="statistics" title="Upload stats" >
            <Statistics stats={statisticalData}/>
            </Section>
            <Section title="Задание 3" >
           
            </Section>
            <Section title="Задание 4" >
          
            </Section>
        </div>
       
    );
}

export default App;