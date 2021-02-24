import './BtnAjoutRessource.scss';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { createMuiTheme , MuiThemeProvider } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import React from 'react';

export default function BtnAjoutRessource() {
  const theme = createMuiTheme ({
    palette: {
      primary: {
        main: grey[900],
      }
    }
  });

  return (
    <button className="BtnAjoutRessource" >
     <MuiThemeProvider theme={theme}>
       <Fab color="primary" aria-label="add">
         <AddIcon/>
       </Fab>
     </MuiThemeProvider>
    </button>
  );
}