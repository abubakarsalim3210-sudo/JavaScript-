// 1.
const favoriteMovies = ["Commando", "Bodyguard", "Vikings"];

console.log(favoriteMovies[0]); 
console.log(favoriteMovies[2]); 

// 2.
const fruits = ["Apple", "Banana"];

fruits.push("Mango", "Orange")
console.log(fruits)

// 3.
const numbers = [10, 20, 30, 40];

const removedNumber=numbers.pop()
console.log(removedNumber)
console.log(numbers)

// 4.
const queue = ["User2", "User3"]

queue.unshift("User1")
console.log(queue)
// 5.
const tasks = ["Task1", "Task2", "Task3"]

tasks.shift()
console.log(tasks)

// 6.
const colors = ["Red", "Green", "Blue"];

colors[1] = "Yellow";
console.log(colors)
console.log(colors.length)

// 7. 
const playlist = ["Song A"];

playlist.push("Song B", "Song C");
playlist.pop();
console.log(playlist);

//8. 
const guests = ["Bob", "Charlie"];
guests.unshift("Alice");
guests.shift();
console.log(guests);

//9. 
const figures = [100, 200];
figures.pop();
figures.pop();
console.log(figures);
console.log(figures.length);

// //10. 
const todoList = [];

todoList.push("Study", "Workout");
todoList.unshift("Wake Up");
todoList.pop();
console.log(todoList);