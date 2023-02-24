import Events from "./componets/Events";
import Foods from "./componets/Foods";
import Hero from "./componets/Hero";
import Navbar from "./componets/Navbar";
import TopRatedMenu from "./componets/TopratedMenu";
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <Events/>
        <Foods/>
        <TopRatedMenu/>
    </div>
  );
}

export default App;
