import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Mana from './Mana.jpg';
import Mana2 from './Mana2.gif';
import AdamantHeadshot from './Adamant.jpg';
import Adamant from './Adamant2.jpg';
import Sofia from './Sofia.PNG';
import SofiaHeadshot from './Sofia2.gif';
import CalypsoHeadshot from './Calypso.jpg';
import Calypso from './Calypso2.PNG';
import HenrexHeadshot from './Henrex.png';
import Henrex from './Henrex2.png';
import YasukoHeadshot from './Yasuko.PNG';
import Yasuko from './Yasuko2.jpg'
import SuzuHeadshot from './Suzu.PNG';
import Suzu from './Suzu2.jpg';

let profileMana = {
    name: 'Mana Asthavon',
    title: 'Queen of Demons',
    race: 'Demon',
    organization: 'Shadowfall',
    primaryColor: 'lime',
    secondaryColor: 'green',
    textBackgroundColor: 'hsl(125, 82%, 28%)',
    textDark: true,
    traits: 'none',
    picture: Mana2,
    headshot: Mana,
    player: 'The Frost'
}

let profileAdamant = {
    name: 'Adamant',
    title: '???',
    race: 'Race Unknown',
    organization: 'Unaffiliated',
    primaryColor: '#b30000',
    secondaryColor: '#ff6666',
    textBackgroundColor: '#ff99cc',
    textDark: true,
    traits: 'none',
    picture: Adamant,
    headshot: AdamantHeadshot,
    player: 'Watamote'
}

let profileSofia = {
    name: 'Sofia',
    title: 'The Melody',
    race: 'Quincy',
    organization: 'Vandenreich',
    primaryColor: '#bc9e08',
    secondaryColor: '#ecc60ecc',
    textBackgroundColor: '#8f673a',
    textDark: false,
    traits: 'none',
    picture: SofiaHeadshot,
    headshot: Sofia,
    player: 'The Owl'
}

let profileCalypso = {
    name: 'Calypso',
    title: 'Crybaby',
    race: 'Danava of Dreams/Nightmares',
    organization: 'Unaffiliated',
    primaryColor: '#fb9327de',
    secondaryColor: '#ea0f0f',
    textBackgroundColor: '#ea0f0f',
    textDark: false,
    traits: 'none',
    picture: Calypso,
    headshot: CalypsoHeadshot,
    player: 'Lillian'
}

let profileHenrex = {
    name: 'Henrex Astillon',
    title: 'Stealth Force Captain',
    race: 'Shinigami/Demon Hybrid',
    organization: 'Gotei 13, Vastime, Guild of Heroes',
    primaryColor: '#5A178C',
    secondaryColor: '#316AD5',
    textBackgroundColor: '#6131d5',
    textDark: false,
    traits: 'none',
    picture: Henrex,
    headshot: HenrexHeadshot,
    player: 'Henrex'
}

let profileYasuko = {
    name: 'Yasuko',
    title: 'Stealth Force Captain',
    race: 'Shinigami/Demon Hybrid',
    organization: 'Gotei 13, Vastime, Guild of Heroes',
    primaryColor: '#8B008B',
    secondaryColor: '#4B0082',
    textBackgroundColor: '#8B008B',
    textDark: false,
    traits: 'none',
    picture: Yasuko,
    headshot: YasukoHeadshot,
    player: 'MWD'
}

let profileSuzu = {
    name: 'Suzu Hebi',
    title: 'Wife of the Doctor',
    race: 'Shinigami/Demon Hybrid',
    organization: 'Gotei 13, Vastime, Guild of Heroes',
    primaryColor: '#9400D3',
    secondaryColor: '#9400D3',
    textBackgroundColor: '#9400D3',
    textDark: false,
    traits: 'none',
    picture: Suzu,
    headshot: SuzuHeadshot,
    player: 'Zetsurin'
}



let mockArray = [];
let mockArray2 = []
mockArray.push(profileMana);
mockArray.push(profileAdamant);
mockArray.push(profileSofia);
mockArray.push(profileCalypso);
mockArray.push(profileHenrex);
mockArray.push(profileYasuko);
mockArray.push(profileSuzu);

let retiredPlayers = [
]


for (var item of mockArray) {
    if (!retiredPlayers.includes(item.player.toString())) {
        mockArray2.push(item);
    }
}
ReactDOM.render(<App itemList={mockArray2} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
