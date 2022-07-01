import "./Search.css"
import SearchPage from '../components/SearchPage'
import Sidebar from '../components/Sidebar'
import { useParams } from 'react-router-dom'

function Search() {
  const { searchTerm } = useParams()
  return (
    <div className='search'>
        <Sidebar />
        <SearchPage query={searchTerm} />
    </div>
  )
}

export default Search