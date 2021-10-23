//app.jsx
import Section from "./components/Section/Section";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import user from "./components/Profile/user.json";
import statisticalData from "./components/Statistics/statistical-data.json";
import friends from "./components/FriendList/friends.json";
import transactions from "./components/TransactionHistory/transactions.json";

function App() {
    return (
        <div className="container">
            <Section title="Задание 1">
                <Profile {...user} />
            </Section>
            <Section className="statistics" title="Upload stats">
                <Statistics stats={statisticalData} />
            </Section>
            <Section >
                <FriendList friends={friends} />
            </Section>
            <Section title="Задание 4">
                <TransactionHistory items={transactions} />
            </Section>
        </div>
    );
}

export default App;
