import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

function App () {
  return (
    <div className="App">
      <h1>
        react-router-V6
      </h1>
      <Routes>
        <Route path="/" element={<Home message='test' />} />
      </Routes>
    </div>
  );
}

export default App;
