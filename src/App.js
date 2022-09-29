import "./App.css";
import Header from "./components/Header/Index";
import Footer from "./components/Footer/Index";
import Home from "./views/Home/Index";
import { UserDataProvider } from "./context/UserData";

function App() {
  return (
    <UserDataProvider>
      <div className="app">
        <Header />
        <Home />
        <Footer />
      </div>
    </UserDataProvider>
  );
}

export default App;
