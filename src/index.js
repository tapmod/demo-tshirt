import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// eslint-disable-next-line no-console
console.log(`
MMMMMMMMMWKkoc;'........',cokKWMMMMMMMMM
MMMMMMW0d;.                  .;o0NMMMMMM
MMMMNO:.                        .:kNMMMM
MMW0c.                            .:0WMM
MWk'     .',,,,,,,,,,,,,,,,,,'.     'xNM
Wx.      .d000000KXNNNK000000x'      .dN
O'        .......;OMM0:........       .k
:                .xMMO'                :
.          .,coooxXMMXxoooc,.          .
.         'xXXOxxkXMMNkxxOXXx'         .
.        .oNXc.  .kMMO'  .:KWd.        .
,        .dW0'   .xMMO'   .OMx.        '
o.       .dW0'   .xMMO'   .OMx.       .l
K:       .dW0'   .xMMO'   .kMx.       ;K
MK:.     .;dc.   .:ddc.   .:d:.      ;0M
MMXl.                              .lKMM
MMMWO:.                          .;kNMMM
MMMMMNOc'.                     .ckNMMMMM
MMMMMMMWXkl;..            ..,lxKWMMMMMMM
MMMMMMMMMMWN0dc,........,cdONWMMMMMMMMMM

Demo Project by Tapmod Studio© 2019
`);

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

ReactDOM.render(<App />, document.getElementById('root'));
