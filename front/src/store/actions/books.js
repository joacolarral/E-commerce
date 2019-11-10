import axios from "axios";
import { GET_BOOKS, GET_BOOK, FILTER_BOOKS, FILTER_GENRE } from "../constants";

const receiveBooks = books => ({
  type: GET_BOOKS,
  books
});

const receiveBook = book => ({
  type: GET_BOOK,
  book
});

const filteredBooks = books => ({
  type: FILTER_BOOKS,
  books
});

const filterGenre = genres => ({
  type: FILTER_GENRE,
  genres
})

export const fetchBooks = () => dispatch =>
  axios
    .get("/api/books")
    .then(res => res.data)
    .then(books => dispatch(receiveBooks(books)));

export const fetchBook = id => dispatch =>
  axios
    .get(`/api/books/${id}`)
    .then(res => res.data)
    .then(book => dispatch(receiveBook(book)));


export const fetchGenre = () => dispatch => 
  axios
  .get("/api/books/genre")
  .then(res => res.data)
  .then(genres => dispatch(filterGenre(genres)));


export const filterBooks = (searchValue, books) => dispatch => {
  const filtBooks = books.filter(book =>
    book.titulo.toLowerCase().match(searchValue.toLowerCase())
  );
  dispatch(filteredBooks(filtBooks));
};
