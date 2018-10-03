import React, { Component } from 'react';
import '../app/app.css';
import NavBar from '../navbar/NavBar.js';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
        <iframe 
          src="https://giphy.com/embed/3oo1rLu5RKHy58w28N"
          width="480" 
          height="480" 
          frameBorder="0" 
          class="giphy-embed">
        </iframe>
      </div>
    );
  }
};


export default About;
