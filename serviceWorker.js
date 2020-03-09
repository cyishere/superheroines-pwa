const staticDevHeroine = "dev-heroine-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/ellen-ripley.png",
  "/images/sarah-connor.jpg",
  "/images/imperator-furiosa.png",
  "/images/wonder-woman.jpeg",
  "/images/captain-marvel.jpg",
  "/images/black-widow.jpg"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevHeroine).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})