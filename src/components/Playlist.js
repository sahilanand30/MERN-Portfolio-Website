import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Data from './data';

import './Profile.css'; // Import the CSS file 

const Playlist = () => {
  return (
    <div className="container about_container">
      <h5 className='text-center mt-2 animated-heading' style={{fontSize:"40px"}}>🛠️ Projects 🛠️</h5>
      <div className="row d-flex justify-content-around align-items-center card_div">
        {Data.map((el, index) => (
          <Card key={index} className='card mt-4 mb-4'>
            <Card.Img variant="top" src={el.imgsrc} />
            <Card.Body>
              <Card.Title>{el.projectName}</Card.Title>
              <p>{el.desc}</p>
              <Button variant="primary" className="card-button" href={el.demo} target="_blank">Click here!</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Playlist;