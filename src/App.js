import "./App.css";
import Header from "./components/Header/Index";
import Footer from "./components/Footer/Index";
import { UserDataProvider } from "./context/UserData";
import Pages from "./routes/Index";

function App() {
  return (
    <UserDataProvider>
      <Header />
      <Pages />
      <Footer />
    </UserDataProvider>
  );
}

export default App;
