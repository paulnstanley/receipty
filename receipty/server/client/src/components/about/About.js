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
        <a href="https://www.eventbrite.com/e/project-shift-demo-night-tickets-50455825733" className="demo-night">More Info</a>
      </div>
    );
  }
};


export default About;
