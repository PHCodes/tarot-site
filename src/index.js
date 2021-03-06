import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import * as Profiles from './profiles.json';
const currentListofItems = Profiles.items;
let profileSet = [];
for (let x = 0; x < currentListofItems.length; x++) {
    let newProfileItem = currentListofItems[x];
    newProfileItem.headshot = newProfileItem.headshot;
    //Generate a linked name. Necessary for proper linking on mobile version.
    newProfileItem.linkName = newProfileItem.name.replace(/ /g,'');
    if(newProfileItem.activity){
        if(newProfileItem.activity.toLowerCase() == "incomplete"){
            newProfileItem.incomplete = true;
        }
        if(newProfileItem.activity.toLowerCase() == "inactive"){
            newProfileItem.inactive = true;
            
        }
    }
    profileSet.push(newProfileItem);
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  profileSet = shuffle(profileSet);

let retiredPlayers = [
]

let profileFinishedSet = [];

let ownerArray = [];

let inactiveArray = [];

let incompleteArray = [];

for (let x = 0; x < profileSet.length; x++) {
    if (!retiredPlayers.includes(profileSet[x].player)) {

        if (profileSet[x].inactive) {
            inactiveArray.push(profileSet[x]);
        }else if(profileSet[x].incomplete){
            incompleteArray.push(profileSet[x]);
        }else {
            profileFinishedSet.push(profileSet[x]);
        }
    } 
}

let checkOwnerInArray = (item) => {
    return ownerArray.map(function (owner) {
        if (owner.name == item.player) {
            return owner;
        }
    })
}

let unknownOwnerArray = [];
let setup = (itemToCheck) => {
    let currentPresence = checkOwnerInArray(itemToCheck);
    let dataToAddTo;
    if (currentPresence) {
        currentPresence.forEach(function (resultToCheck) {
            if (resultToCheck) {
                dataToAddTo = resultToCheck;
            }
        })
    }
    if (!dataToAddTo) {
        if(!itemToCheck.inactive){
            dataToAddTo = {
                name: itemToCheck.player,
                linkName: itemToCheck.player.replace(/ /g,''),
                picture: itemToCheck.picture,
                headshot: itemToCheck.headshot,
                textbackgroundcolor: itemToCheck.textbackgroundcolor,
                backgroundcolor: itemToCheck.backgroundcolor,
                foregroundcolor: itemToCheck.foregroundcolor,
                shouldhaveblacktext: itemToCheck.shouldhaveblacktext,
                items: []
            }
            ownerArray.push(dataToAddTo);
        }
        else{
            unknownOwnerArray.push(itemToCheck);
        }
    }
    if(dataToAddTo){
        dataToAddTo.items.push(itemToCheck);
    }
}

profileFinishedSet.map(function(result){setup(result) })

inactiveArray.map(function(result){setup(result) });
incompleteArray.map(function(result){setup(result)} );
unknownOwnerArray.map(function(result){setup(result)});
ReactDOM.render(<App itemList={profileFinishedSet} incompleteList={incompleteArray}ownerList={ownerArray} inactiveList={inactiveArray} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
