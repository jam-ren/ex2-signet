import avatar from '../images/avatar.png';
import './Entete.scss';
import React from 'react';
import { Avatar } from '@material-ui/core';

export default function Entete() {
  return (
    <header className="Entete">
      <div className="logo">Signets</div>
      <div className="avatar">Camille Semaan </div>
      <Avatar src={avatar} alt="Camille Semaan"/>
    </header>
  );
}