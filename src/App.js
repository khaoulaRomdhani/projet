import AproposDeNous from "./pages/AproposDeNous";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import FinInscris from "./pages/FinInscris";
import Login from "./pages/Login";
import Inscription from "./pages/Inscription";
import Ingredients from "./pages/Ingredients";
import Navbar from "./pages/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <AproposDeNous />
      <Contact />
      <Admin />
      <FinInscris />
      <Login />
      <Inscription />
      <Ingredients />
    </div>
  );
}

export default App;
