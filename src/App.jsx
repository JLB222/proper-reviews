import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import WorkPage from './pages/WorkPage'
import CategoryPage from './pages/CategoryPage'
import database from './databasePlaceholder.json'


function App() {
  function findWork(arr=database, workId) {
    return arr.find((el) => el.id === workId)
  }
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<CategoryPage medium="all"/>} />
            <Route path="/movies" element={<CategoryPage medium="movies"/>} />
            <Route path="/tv" element={<CategoryPage medium="tv"/>} />
            <Route path="/games" element={<CategoryPage medium="games"/>} />
            <Route path="/books" element={<CategoryPage medium="books"/>} />
            <Route path="/work/:id" element={<WorkPage />} />
          </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

//questions asked
// how should the popular works component work?  Does it change the type of component it calls dynamically (movie, book, etc)?  Or should I have a single, more general 'Work' component that dynamically switches depending on what medium it is?
  //let's leave the data as data and the presentation as presentation.  A 'movie' component is carrying data: the medium.  a general Work component can handle most data, and if we need more specific additions to a component, we can add them later
//so are routes just components that conditionally render based on the URL?

//To Do
//what happens to the carousel if we have inconsistent image sizes?
//add some CSS to the carousel that makes it look like an actual box; currently it just looks like off-center images, at least on bigger screens
//is 'Proper Reviews' in the header actually centered?  It looks off, but it could be my eyes playing tricks on me
//Do we even need PopularRecently AND WorkCarousel?