import React from 'react'
import ThemeSelector from '../ThemeSelector/ThemeSelector'
import SearchBar from '../SearchBar/SearchBar';

function Navbar() {
    const [showSearchBar , setShowSearchBar] = React.useState(false);
  return (
    <div className="navbar bg-base-300 shadow-sm fixed w-full z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>
  {
    showSearchBar ?
        <SearchBar/>
    : <a className={`btn btn-ghost text-xl font-bold tracking-tighter transition-all duration-300 ${showSearchBar ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`}>
          <span className="text-primary">Movie</span>Flix
        </a>
  }
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle" onClick={() => setShowSearchBar(!showSearchBar)}>
    {!showSearchBar ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => setShow(!show)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => setShow(!show)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
    </button>
    <ThemeSelector/>
  </div>
</div>
  )
}

export default Navbar