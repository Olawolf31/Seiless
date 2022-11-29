import { Routes, Route } from "react-router-dom";
import SeilessProvider from "./context/SeilessProvider";
import Homepage from "./pages/Homepage";
import SharedHeader from "./components/header/SharedHeader";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SinglePage from "./pages/SinglePage";
import Error from "./pages/Error";

function App() {
  return (
    <SeilessProvider>
      <Routes>
        <Route path="/" element={<SharedHeader />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/photos/:ID" element={<SinglePage />} />
         
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </SeilessProvider>
  );
}

export default App;
