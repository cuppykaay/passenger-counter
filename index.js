let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")


let count = 0


function increment() {
    count += 1
    countEl.innerText = count
}



function save() {
    const counter = count  + " - "
    saveEl.textContent += counter
    countEl.textContent = 0
    count = 0
}


// let welcomeEl = document.getElementById("welcome-el")




// const username = "per"
// const notification = "You have tree new notification";
// console.log(notification)

// const messageToUser = (notification +  "," + username + " !")
// console.log(messageToUser)

// const name = "Queen"
// const greeting = ("Hi, my name is " + name)
// const myGreeting = greeting
// console.log(myGreeting)

// const name = "Queen"
// const greeting  = "welcome back " 

// welcomeEl.innerText = greeting + name


