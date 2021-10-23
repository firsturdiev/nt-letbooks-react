import booksData from '../../assets/data/books-data';
import Filters from '../Filters/Filters';
import Header from '../Header/Header'
import Card from '../Card/Card';
import { useState } from 'react';

function App() {
  const [books, setBooks] = useState(booksData);
  return (
    <>
      <Header />

      <Filters action={setBooks} />

      <div className="books row">
        {
          books.length
          ? books.map(book => <Card data={book}></Card>)
          : <strong className="h4 text-center text-white">No movie found</strong>
        }
      </div>
    </>
  );
}

export default App;