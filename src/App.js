//app.jsx
import Section from './components/Section/Section';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList'

import user from './components/Profile/user.json';
import statisticalData from './components/Statistics/statistical-data.json'
import friends from './components/FriendList/friends.json'

 function App() {
    return (
        <div className="container">
       <Section >
                <Profile {...user}/>
            </Section>
             <Section className="statistics" title="Upload stats" >
                <Statistics stats={statisticalData}
                    
                />
            </Section>
            <Section title="Задание 3" >
           <FriendList friends={friends} />,
            </Section>
            <Section title="Задание 4" >
          
            </Section>
        </div>
       
    );
}

export default App;