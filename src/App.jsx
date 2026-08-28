import { useState } from 'react'
import database from './databasePlaceholder.json'
import PopularRecently from './components/PopularRecently'
import './App.css'
import Header from './components/Header/Header'
import { BrowserRouter } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
          <Header/>
      </BrowserRouter>
      <PopularRecently
              medium = "movie"  //this might be needed later when we re-use the PopularWorks component for Movies, Books, Comics, etc.  We'll need to tell the server which works to retrieve
              data = {database}  //will later sort by most new reviews
      />

    </>
  )
}

export default App

//questions asked
// how should the popular works component work?  Does it change the type of component it calls dynamically (movie, book, etc)?  Or should I have a single, more general 'Work' component that dynamically switches depending on what medium it is?
  //let's leave the data as data and the presentation as presentation.  A 'movie' component is carrying data: the medium.  a general Work component can handle most data, and if we need more specific additions to a component, we can add them later