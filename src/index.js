import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import * as Profiles from './profiles.json';
const currentListofItems = Profiles.items;
let profileSet = [];
for(let x = 0; x < currentListofItems.length; x++){
    let newProfileItem = currentListofItems[x];
    newProfileItem.headshot = newProfileItem.headshot;
    profileSet.push(newProfileItem);
}

let retiredPlayers = [
]

let profileFinishedSet = [];

let ownerArray = [];

for (let x = 0; x < profileSet.length; x++) {
    if (!retiredPlayers.includes(profileSet[x].player)) {
        profileFinishedSet.push(profileSet[x]);
    }
}

let checkOwnerInArray = (item) => {
    return ownerArray.map(function(owner){
        if(owner.name == item.player){
            return owner;
        }
    })
}

profileFinishedSet.map(function(itemToCheck){
    let currentPresence = checkOwnerInArray(itemToCheck);
    let dataToAddTo;
    if(currentPresence){
        currentPresence.forEach(function(resultToCheck){
            if(resultToCheck){
                dataToAddTo = resultToCheck;
            }
        })
    }
    if(!dataToAddTo){
        dataToAddTo = {
            name: itemToCheck.player,
            picture: itemToCheck.picture,
            headshot: itemToCheck.headshot,
            textbackgroundcolor: '#1b5181',
            shouldhaveblacktext: false,
            items: []
        }
        ownerArray.push(dataToAddTo);
    }
    dataToAddTo.items.push(itemToCheck);
})
ReactDOM.render(<App itemList={profileFinishedSet} ownerList={ownerArray} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
