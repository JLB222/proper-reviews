import { useState } from 'react'
import PopularWorks from './components/popular_works'
function App() {

  return (
    <>
      <h1>Proper Reviews</h1>
      <p>Reviews from real people, but only if they're helpful.</p>
      <PopularWorks
              titles = {["Spiderman", "Superman", "Supergirl"]}
      />

    </>
  )
}

export default App
