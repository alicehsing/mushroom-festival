export function findFriendByName(name, friendsArr) {
    // iterate through the friends array
    for (let item of friendsArr) {
        // when you find a friend with the correct name, return that friend
        if (item.name === name) {
            return item;
        }
    }
}