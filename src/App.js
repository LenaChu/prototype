import "./App.css";
import Header from "./Components/Header/Header";
import Container from "./Components/Container/Container";
import MainNav from "./Components/MainNav/MainNav";

function App() {
  return (
    <div className="App">
      <MainNav />
      <Header />
      <Container />
    </div>
  );
}

export default App;
