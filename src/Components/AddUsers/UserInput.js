import React, { useState } from 'react';
import '../../Styles/index.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Modal from '../UI/Modal';


const UserInput = (props) => {

    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [show, setShow] = useState(false);
    let errorMessage = "Name or User Age is not correct!";

    const handleNameChange = (e) =>{
      setUserName(e.target.value);
    }

    const handleAgeChange = (e) =>{
      setUserAge(e.target.value);
    }

    const handleSubmit = (e) => {
      
      if(userName.trim().length === 0 || userAge.trim().length === 0 || userAge < 1){
        setShow(true);
        return;
      } 
      console.log(userName, userAge)
      props.onAddUser(userName, userAge);
        e.preventDefault();
       setUserAge('');
       setUserName('');
    }

    
  const hideModal = ()=>{
    console.log("hide modal");
    setShow(false)
    Modal.addClassName("display-none")
    console.log(show);
  }


    return(
      <div>
        <Modal handleClose={hideModal} title="Please try again!" message={errorMessage}></Modal>
        <Card>
          <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username</label>
              <input onChange={handleNameChange} id="username" name="username" type="text" value={userName} ></input>
              <label htmlFor="age">Age</label>
              <input onChange={handleAgeChange} id="age" name="age" type="number" value={userAge} ></input>
            <Button value="Add User" type="submit">Add User</Button>
          </form>
        </Card>
      </div>
    )
};

export default UserInput;