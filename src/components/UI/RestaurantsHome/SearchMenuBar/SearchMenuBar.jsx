import './SearchMenuBar.css'
const SearchMenuBar =()=> {
  return (
    <input type="text" className="input input-primary search-menu" placeholder="Search For Dishes"
     aria-describedby='search for menu' required/>
  )
}

export default SearchMenuBar