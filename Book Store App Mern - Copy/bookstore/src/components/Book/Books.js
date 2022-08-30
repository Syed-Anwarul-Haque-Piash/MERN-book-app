import React, { useEffect, useState } from 'react';
import Book from './Book';
import '../Book/Book.css';

const Books = () => {
    const [books,setBooks]=useState()
    useEffect(()=>{
        fetch('http://localhost:3000/books/')
        .then(res=>res.json())
        .then(data=>{
            setBooks(data.books)
            console.log(data.books)
        })
    },[])
    return (
        <div>
            
            {/* {books && books.map(book =><Book book={book}/>)} */}
            <ul>
            {books && books.map((book,i)=>(
                <li key={i}>
                    <Book book={book}/>
                </li>
            ))}
            </ul>
        </div>
    );
};

export default Books;