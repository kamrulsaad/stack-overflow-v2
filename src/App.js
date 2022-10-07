import Home from "./Components/Home/Home";
import SideNav from "./Components/Sidebar/SideNav";

function App() {
  return (
    <div className="flex">
      <SideNav />
      <Home/>
    </div>
  );
}

export default App;
