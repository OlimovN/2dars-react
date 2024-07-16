import React from "react";
import UserList from "./components/UserList";
import users from "./user.json";

const App = () => {
  return (
    <div>
      <h1>User List</h1>
      <UserList users={users} />
    </div>
  );
};

export default App;
