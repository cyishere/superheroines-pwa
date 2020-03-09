const container = document.querySelector('.container')
const heroines = [
  { name: "Ellen Ripley", image: "images/ellen-ripley.png" },
  { name: "Sarah Connor", image: "images/sarah-connor.jpg" },
  { name: "Imperator Furiosa", image: "images/imperator-furiosa.png" },
  { name: "Wonder Woman", image: "images/wonder-woman.jpeg" },
  { name: "Captain Marvel", image: "images/captain-marvel.jpg" },
  { name: "Black Widow", image: "images/black-widow.jpg" }
]

const showHeroines = () => {
  let output = ""
  heroines.forEach(({ name, image }) => 
    (output += `
              <div class="card">
                <img class="card-avatar" src=${image} />
                <h1 class="card-title">${name}</h1>
                <a class="card-button">Love</a>
              </div>
            `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showHeroines)

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}