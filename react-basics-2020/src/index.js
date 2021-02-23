import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'
// Components
import Book from './Book'
// Data
import { books } from './books'
// Tests
import {greeting} from './testing/testing'

function BookList() {
  console.log(greeting)
  return (
    <section className='booklist'>
      {books.map((book) => {
        return (
          <Book key={book.id} {...book} />
        )
      })}
    </section>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))