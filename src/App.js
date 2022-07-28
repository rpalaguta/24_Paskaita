import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import routeCollection from './collections/routeCollection';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {
            <Route path='/' element={<Layout />}>
              {
                routeCollection.map(route => (
                  <Route path={route.path} element={route.element} />
                ))
              }
            </Route>
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
