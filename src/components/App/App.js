import booksData from '../../assets/data/books-data';
import Card from '../Card/Card'

function App() {
  return (
    <>
      <div className="books row">
        {
          booksData.map(book => <Card data={book}></Card>)
        }
      </div>
    </>
  )
}

export default App;