import '@/assets/style/main.css'

const app = document.querySelector<HTMLDivElement>('#app')!

const place = document.createElement('canvas')
// place.height = 100006
// place.width = 100006
place.setAttribute('id', 'place')
app.appendChild(place)
