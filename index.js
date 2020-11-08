// Task 1
var user = {};
user.surname = 'Mike';
user.surname = 'Peter';
delete user.surname;

// Task 2
var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};
var totalFruitCount = Object.values(fruit).reduce((a, c) => a + c, 0);
console.log(`total fruit count is ${totalFruitCount}`);