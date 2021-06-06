import React, { useState } from 'react';

import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';

function App() {

  const [users, setUsers] = useState([
    {
      name: 'demo',
      age: '99'
    }
  ]);

  return (
    <div>
      <AddUser onAddUser={setUsers}/>
      <UserList users={users}/>
    </div>
  );
}

export default App;