
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './pages/Header';
import Questions from './pages/Questions';
import Answers from './pages/Answers';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "answers",
        element: <Answers />
      },
      {
        path: "questions", 
        element: <Questions />
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router = {router}></RouterProvider>
  );
}

export default App;
