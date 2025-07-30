import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './Utils/Store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './pageComponent/NotFound.jsx'
import BrowseBooks from './pageComponent/BrowseBooks.jsx'
import Home from './pageComponent/Home.jsx'
import AddBook from './pageComponent/AddBook.jsx'
import BookDetails from './pageComponent/BookDetails.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <NotFound/>,
    children: [
      {
        path: 'books',
        element: <BrowseBooks/>
      },
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'add-book',
        element: <AddBook/>
      },
      {
        path: 'book/:id',
        element: <BookDetails/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}>
    </RouterProvider>
    </Provider>
)
