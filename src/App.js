import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import Destination from "./pages/destination/destination.component";
import Crew from "./pages/crew/crew.component";
import Technology from "./pages/technology/technology.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/destination/*" element={<Destination />}>
          {/* <Route path="/destination/*" element={<PlanetDetails />} /> */}
        </Route>
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
