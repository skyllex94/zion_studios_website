import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import CurrentApps from "./pages/CurrentApps";
import Mission from "./pages/Mission";
import Services from "./pages/Services";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import OurWork from "./pages/OurWork";
import OptIn from "./pages/OptIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/apps" element={<CurrentApps />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/services" element={<Services />} />
        <Route path="/process" element={<Process />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/opt-in" element={<OptIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
