import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../Pages/HomePage'));
const Layout = lazy(() => import('../Pages/Layout'));
const MovieDetailsPage = lazy(() => import('../Pages/MovieDetailsPage'));

function Routing() {
  return (
    <Routes>
        <Route path='/' element = {<Layout />} >
            <Route index element={<Home />} />
            <Route path=':movieId' element={<MovieDetailsPage />} />
        </Route>
    </Routes>
  )
}

export default Routing