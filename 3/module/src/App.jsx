import './App.css'
import { SearchableList } from './SearchableList'

const list =[
  {
    id: '1',
    title: 'Арбуз'
  },
  {
    id: '2',
    title: 'Дыня'
  },
  {
    id: '3',
    title: 'Персик'
  }
]

function App() {
  return (
    <SearchableList list={list}/>
  )
}

export default App
