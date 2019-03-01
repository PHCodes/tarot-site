import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import * as Profiles from './profiles.json';
const krishnaBitching = Profiles.items;
let profileSet = [];
for(let x = 0; x < krishnaBitching.length; x++){
    let newProfileItem = krishnaBitching[x];
    profileSet.push(newProfileItem);
}

let retiredPlayers = [
]

let profileFinishedSet = [];

for (let x = 0; x < profileSet.length; x++) {
    if (!retiredPlayers.includes(profileSet[x].player)) {
        profileFinishedSet.push(profileSet[x]);
    }
}
ReactDOM.render(<App itemList={profileFinishedSet} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
