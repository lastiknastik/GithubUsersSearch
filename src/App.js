import "./App.css";
import SearchBar from "./components/searchBar";
import UsersList from "./components/usersList";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <SearchBar />
        <UsersList />
      </div>
    </div>
  );
}

export default App;
