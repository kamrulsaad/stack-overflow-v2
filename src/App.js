import Home from "./Components/Home/Home";
import SideNav from "./Components/Sidebar/SideNav";

function App() {
  return (
    <div>
      <div className="flex">
        <SideNav />
        <Home />
      </div>
      <footer>Hello Footer</footer>
    </div>
  );
}

export default App;
