import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import profileData from './profileData';
import Typewriter from "typewriter-effect";
import './Profile.css'; // Import the CSS file

const Profile = () => {
  return (
    <div className="container about_container">
      <h2 className='text-center mt-2 animated-heading'>🏆 Coding Profiles 🏆</h2>
      <div className="row d-flex justify-content-around align-items-center card_div">
        {profileData.map((el, index) => (
          <Card key={index} className='card mt-4 mb-4'>
            <Card.Img variant="top" src={el.imgsrc} />
            <Card.Body>
              <Card.Title>{el.profileName}</Card.Title>
              <Button variant="primary" className="card-button" href={el.demo} target="_blank">Click here!</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Profile;
