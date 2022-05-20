import React from 'react';
// import { Link } from 'react-router-dom';

import { Container, List, ListItem, LinkMedia, Icon } from './styled';
import Linkedin from '../../assets/img/logo-linkedin.png';
import Facebook from '../../assets/img/logo-facebook.png';
import Instagram from '../../assets/img/logo-instagram.png';
import Twitter from '../../assets/img/logo-twitter.png';

function SocialMedia() {
  return (
      <Container>
          <List>
              <ListItem><LinkMedia><Icon src={Linkedin} alt='logo linkedin' /></LinkMedia></ListItem>
              <ListItem><LinkMedia><Icon src={Facebook} alt='logo facebook' /></LinkMedia></ListItem>
              <ListItem><LinkMedia><Icon src={Instagram} alt='logo instagram' /></LinkMedia></ListItem>
              <ListItem><LinkMedia><Icon src={Twitter} alt='logo twitter' /></LinkMedia></ListItem>
          </List>
      </Container>
  );
}

export default SocialMedia;