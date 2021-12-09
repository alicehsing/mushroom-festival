// IMPORT MODULES under test here:
import { renderMushroom } from '../render-utils.js';

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
    expect.equal(actual.outerHTML, expected, 'returns a div element with the class of mushroom: <div class="mushroom"></div>');
});


// test('findFriendByName function returns a friend with the correct name', (expect) => {
//     //Arrange
//     // Set up your arguments and expectations
//     const expected = 'Peter';
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = findFriendByName('Peter', 'let friendsArr = ['May', 'Jeff', 'Daisy', 'Peter', 'Amelia', 'Tom']');

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual, expected);
// });