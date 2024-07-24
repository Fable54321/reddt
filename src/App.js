import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Root from './Pages/Root';

const appRouter  = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root /> }>
    
  </Route>
))

function App() {
  return (
    <RouterProvider router={appRouter} />

  );
}

export default App;
