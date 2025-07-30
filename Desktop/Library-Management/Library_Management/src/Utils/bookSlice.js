import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
  {
    id: '1',
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Sci-Fi',
    description: 'Epic space saga',
    rating: 4.8
  },
  {
    id: '2',
    title: '1984',
    author: 'George Orwell',
    category: 'Fiction',
    description: 'Dystopian society',
    rating: 4.6
  },
  {
    id: '3',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    category: 'Classic',
    description: 'Justice and morality in the Deep South',
    rating: 4.9
  },
  {
    id: '4',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    category: 'Non-Fiction',
    description: 'A brief history of humankind',
    rating: 4.7
  },
  {
    id: '5',
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Self-Help',
    description: 'Tiny changes, remarkable results',
    rating: 4.8
  },
  {
    id: '6',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    category: 'Fantasy',
    description: 'A journey through Middle-earth',
    rating: 4.7
  },
  {
    id: '7',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    category: 'Fiction',
    description: 'A journey of destiny and dreams',
    rating: 4.5
  },
  {
    id: '8',
    title: 'Educated',
    author: 'Tara Westover',
    category: 'Memoir',
    description: 'A woman’s quest for education and escape',
    rating: 4.6
  },
  {
    id: '9',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    category: 'Thriller',
    description: 'A twisty psychological suspense',
    rating: 4.4
  },
  {
    id: '10',
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt & David Thomas',
    category: 'Tech',
    description: 'Tips and tricks for software developers',
    rating: 4.9
  }
 ]
}
const generateId = () => String(Date.now())

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers:{
        addBooks: (state, action) => {
            const newBook = {
                id: generateId(),
                ...action.payload
            }
            state.books.push(newBook)
        }
    }
})

export const {addBooks} = bookSlice.actions
export default bookSlice.reducer