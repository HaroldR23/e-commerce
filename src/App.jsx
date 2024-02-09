import './App.css'
import { Filter } from './components/Filter'
import { Navbar } from './components/Navbar'
import { ResultInfoBar } from './components/ResultInfoBar'
import { ResultTable } from './components/ResultTable'
import { SearchProvider } from './contexts/SearchContext'

function App() {
  return (
    <SearchProvider>
        <div>
        <Navbar />
        <ResultInfoBar />
        <div className='content-ResultandFilter'>
          <Filter/>
          <ResultTable />
        </div>
      </div>
    </SearchProvider>
  )
}

export default App
