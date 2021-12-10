export function findFriendByName(name, friendsArr) {
    // iterate through the friends array
    for (let friend of friendsArr) {
        // when you find a friend with the correct name, return that friend
        if (friend.name === name) {
            return friend;
        }
    }
}