import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Users from "./pages/Users/Users";

function App() {
  return (
    <BrowserRouter basename="/take-home-assessment-react-1">
      <div className="app">
        <Header />

        <main className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
