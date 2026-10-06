const favoriteMovies = ["Commando", "Bodyguard", "Vikings"];

console.log(favoriteMovies[0]); 
console.log(favoriteMovies[2]); 


const fruits = ["Apple", "Banana"];

fruits.push("Mango", "Orange")
console.log(fruits)


const numbers = [10, 20, 30, 40];

// const removedNumber=numbers.pop()
console.log(numbers.pop())
console.log(removedNumber)
console.log(numbers)


const queue = ["User2", "User3"]

queue.unshift("User1")
console.log(queue)

const tasks = ["Task1", "Task2", "Task3"]

tasks.shift()
console.log(tasks)


const colors = ["Red", "Green", "Blue"];

colors[1] = "Yellow";
console.log(colors)
console.log(colors.length)

 
const playlist = ["Song A"];

playlist.push("Song B", "Song C");
playlist.pop();
console.log(playlist);


const guests = ["Bob", "Charlie"];
guests.unshift("Alice");
guests.shift();
console.log(guests);


const figures = [100, 200];
figures.pop();
figures.pop();
console.log(figures);
console.log(figures.length);


const todoList = [];

todoList.push("Study", "Workout");
todoList.unshift("Wake Up");
todoList.pop();
console.log(todoList);