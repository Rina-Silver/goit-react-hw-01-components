//app.jsx
import Section from 'components/Section/Section';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

import user from 'components/Profile/user.json';
import statisticalData from 'components/Statistics/statistical-data.json';
import friends from 'components/FriendList/friends.json';
import transactions from 'components/TransactionHistory/transactions.json';

function App() {
  return (
    <div className="container" style={{ maxWidth: '50vw', margin: '0 auto' }}>
      <Section title="Задание 1">
        {/* <Profile {...user} /> */}
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section className="statistics">
        <Statistics title="Upload stats" stats={statisticalData} />
      </Section>
      <Section>
        <FriendList friends={friends} />
      </Section>
      <Section title="Задание 4">
        <TransactionHistory items={transactions} />
      </Section>
    </div>
  );
}

export default App;
