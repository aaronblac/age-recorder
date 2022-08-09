
import { useState } from 'react';
import './Styles/App.css';
import UserInput from './Components/AddUsers/UserInput';
import UserListItem from './Components/AddUsers/UserListItem';
import Modal from './Components/UI/Modal';


function App() {
  
  const [user, setUser] = useState([]);
 
  let errorMessage = '';
  const addUserHandler = (userName, userAge) => {
    console.log("triggered addUserHandler");
    
    setUser((prevUsers) => {
      return(
        [...prevUsers, {name: userName, age: userAge, id:Math.random().toString()}]
      )
    })
    console.log(user)
  }




  return (
    <div>
      <UserInput onAddUser={addUserHandler} />
      <UserListItem users={user}/> 
    </div>
  );
}

export default App;
