// import functions and grab DOM elements
import { renderMushroom, renderFriend } from './render-utils.js';
// import { findFriendByName } from './data-utils.js';

const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const mushroomsEl = document.querySelector('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');
// initialize state

let mushroomCount = 3;

const friendData = [
    {
        name: 'Erich',
        satisfaction: 2
    },
    {
        name: 'Sarah',
        satisfaction: 3
    },
    {
        name: 'Missael',
        satisfaction: 1
    },
    {
        name: 'Soraya',
        satisfaction: 2
    },
];

addFriendButton.addEventListener('click', () => {
    // get the name from the input
    const newInput = friendInputEl.value;
    
    // create a new friend object
    const newFriend = {
        name: newInput,
        satisfaction: Math.ceil(Math.random() * 4)
    };
    // create a new friend with a random default name if none is provided and add them to the page

    if (newFriend.name === '') {
        const randomName = ['Becky', 'Tom', 'Lila', 'Oliver', 'Bob', 'Reese'];
        let i = Math.floor(Math.random() * 5);
        newFriend.name = randomName[i];
    }
    // push it into the friends state array, passed in as an argument
    friendData.push(newFriend);
    // reset the input
    friendInputEl.value = '';
    // display all the friends (use a function here)
    displayFriends();
});


addMushroomButton.addEventListener('click', () => {
    if (Math.random() > .5) {
        alert('You found a mushroom!');

        mushroomCount++;
        displayMushrooms();
    } else {
        alert('No luck! Keep scouting!');
    }
});


function displayFriends() {
    // clear out the friends in DOM
    friendsEl.textContent = '';
    // for each friend in state . . .
    for (let friend of friendData) {
        const eachFriendEl = renderFriend(friend);

        // this is a clickable list, so . . .
        // add an event listener to each friend
        // on click, go find the clicked friend in state
        eachFriendEl.addEventListener('click', () => {
            // findFriendByName(friend.name, friendData);
        // and if the friend's satisfaction level is below 5 and you have mushrooms left
            if (friend.satisfaction < 5 && mushroomCount > 0) {
            // increment the friends satisfaction and decrement your mushrooms
                friend.satisfaction++;
                mushroomCount--;
            // then display your friends and mushrooms with the updated state
                displayFriends();
                displayMushrooms();
            }

            if (mushroomCount === 0) {
                alert('You ran out of mushrooms, go forage for more to feed your friends!');
            }

            if (friend.satisfaction >= 5) {
                alert('I\'m full!');
            }
        }); 
        // append the friendEl to the friends list in DOM
        friendsEl.append(eachFriendEl);
    }
}

function displayMushrooms() { 
    // clear out the mushroom div
    mushroomsEl.textContent = '';

    // if i have three mushrooms, do this three times
    for (let i = 0; i < mushroomCount; i++) { 
        // for each mushroom in your mushroom state, render and append a mushroom
        const eachMushroom = renderMushroom();
       
        mushroomsEl.append(eachMushroom);
    }
}

displayFriends();
displayMushrooms();
