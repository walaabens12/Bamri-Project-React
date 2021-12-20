import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Me from '../myphoto.png'

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img style={{borderRadius : "70px"}}
              src={Me}
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

   
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
