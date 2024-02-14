import React, { useState, useEffect } from 'react' 
import axios from 'axios'
import Card from './Card'

const URL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'


function App() {
  const [apod, setApod] = useState()
  useEffect( () => {
    function fetchPhoto() {
      axios.get(URL)
      .then ( res => {
        console.log (res.data)
        setApod(res.data)
      })
      .catch (err => {
        console.log(err.message)
      })
  }
  // //fetchPhoto()
  setApod({
        "date": "2024-02-06",
        "explanation": "What's different about this galaxy? Very little, which makes the Spanish Dancer galaxy, NGC 1566, one of the most typical and photogenic spirals on the sky. There is something different about this galaxy image, though, because it is a diagonal combination of two images: one by the Hubble Space Telescope on the upper left, and the other by the James Webb Space Telescope on the lower right.  The Hubble image was taken in ultraviolet light and highlights the locations of bright blue stars and dark ...",
        "hdurl": "https://apod.nasa.gov/apod/image/2402/Ngc1566_HubbleWebb_2125.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "NGC 1566: A Spiral Galaxy from Webb and Hubble",
        "url": "https://apod.nasa.gov/apod/image/2402/Ngc1566_HubbleWebb_960.jpg"
  })
},[])
  if (!apod) return "Fetching Photo of The Day..."
  return (
   <section>
    <Card
    title={apod.title}
    text = {apod.explanation}
    imageURL={apod.url}
    date={apod.date}
    />

    </section>
  )
}
  


export default App
