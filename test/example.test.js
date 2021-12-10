// IMPORT MODULES under test here:
import { renderMushroom } from '../render-utils.js';
import { findFriendByName } from '../data-utils.js';

const test = QUnit.test;

test('renderMushroom function returns a div element with the class of mushroom', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="mushroom"></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderMushroom();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual.outerHTML, expected, 'returns a div element with the class of mushroom: <div class="mushroom"></div>');
});

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

test('findFriendByName function returns a friend with the correct name', (expect) => {

    //Arrange
    // Set up your arguments and expectations
    const expected = friendData.name;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findFriendByName(friendData.name, friendData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, 'return friend when you find the correct name');
});