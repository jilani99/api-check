import React, { useEffect, useState } from "react";
import './App.css'
import axios from 'axios'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.css'


const UserList = () =>{
   const [listOfUSer, setListOfUSer] = useState([]);
   
   const getUser = () => {axios.get("https://jsonplaceholder.typicode.com/users").then((response) => setListOfUSer(response.data))
   }


 useEffect(() => getUser(), []);

 return (
   <div>
    <h2>Users List with Axios</h2>
    <ListGroup className= "list" as="ol" numbered>
     {listOfUSer.map(user => (
        
  <ListGroup.Item
    
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">{user.name}</div>
      <a href={user.username}>{user.email}</a> 
    </div>
    <Badge bg="primary" pill>
{user.id}
    </Badge>
  </ListGroup.Item>

        
       ))}
       </ListGroup>
     
   </div>
 );
};

export default UserList;