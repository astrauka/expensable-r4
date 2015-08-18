import React, {Component} from 'react';
import {Link} from 'react-router';

export default
class Expensable_Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    const logoImage = require('images/logo.gif');

    return (
      <div className="container">
        <div className={styles.logo}>
          <p>
            <img src={logoImage}/>
          </p>
        </div>
        <h1>Expensable</h1>
      </div>
    );
  }
}
