import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import RouterNavigation from './router';

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <RouterNavigation />
    </BrowserRouter>
  );
}

export default App;
