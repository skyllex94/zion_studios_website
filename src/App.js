import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import CurrentApps from "./pages/CurrentApps";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/apps" element={<CurrentApps />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
