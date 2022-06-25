import "./Search.css"
import SearchPage from '../components/SearchPage'
import Sidebar from '../components/Sidebar'

function Search() {
  return (
    <div className='search'>
        <Sidebar />
        <SearchPage />
    </div>
  )
}

export default Search