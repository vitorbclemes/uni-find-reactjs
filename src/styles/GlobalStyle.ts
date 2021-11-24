import { createGlobalStyle } from 'styled-components';
import OpenSansCondensed from '../assets/fonts/OpenSansCondensed.ttf';
import OpenSansHebrew from '../assets/fonts/OpenSansHebrew.ttf';
import OverlockSC from '../assets/fonts/OverlockSC.ttf';
import Overpass from '../assets/fonts/Overpass.ttf';
import OpenSymbol from '../assets/fonts/OpenSymbol.ttf';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: var(--background);
  }
  html,body,#root{
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
  }

  *,button,input{
    border: 0;
    background:none;
  }

  html{
    background: var(--primary);
  }

  @font-face {
    font-family:'Open Sans Condensed' ;
    src: url(${OpenSansCondensed}) format('truetype');
  }

  @font-face {
    font-family:'Open Sans Hebrew' ;
    src: url(${OpenSansHebrew}) format('truetype');
  }

  @font-face {
    font-family:'OverlockSC' ;
    src: url(${OverlockSC}) format('truetype');
  }
  
  @font-face {
    font-family:'Overpass' ;
    src: url(${Overpass}) format('truetype');
  }

  @font-face {
    font-family:'OpenSymbol' ;
    src: url(${OpenSymbol}) format('truetype');
  }

  :root{
    --header-text:#4B4343;
    --text:#312C2C;
    --background:#E5E5E5;
    --container:#ECE9E9;
    --button:#442828;
    --button-text:#FCE2E2;
    --white:#FFF;
    --contrast:#E7E0E0;
  }
`;
