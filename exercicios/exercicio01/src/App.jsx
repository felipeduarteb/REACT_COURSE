import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import RouterNavigation from "./routes";
import { Container } from "./style/App-styled";


function App() {

  return (
    <Container>
      <BrowserRouter>
        <Nav />
        <RouterNavigation />
      </BrowserRouter>
    </Container>
  );
}

export default App;
