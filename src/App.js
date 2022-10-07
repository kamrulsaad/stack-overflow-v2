import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import SideNav from "./Components/Sidebar/SideNav";

function App() {
  return (
    <div>
      <div className="flex">
        <SideNav />
        <Home />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
