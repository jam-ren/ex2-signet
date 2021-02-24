import './Dossier.scss';
import React from 'react';
import SortIcon from '@material-ui/icons/Sort';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';

export default function Dossier({id, titre, couleur, dateModif}) {
  return (
    <article className="Dossier" style={{backgroundColor : couleur}}>
      <div className="couverture">
        <span className="deplacer"><SortIcon /></span>
        <img src={`images-dossiers/${id}.png`} alt={titre}/>
      </div>
      <div className="info">
        <h2>{titre}</h2>
        <p>Modifié : {dateModif}</p>
      </div>
      <span className="modifier"><MoreVertRoundedIcon /></span>
    </article>
  );
}