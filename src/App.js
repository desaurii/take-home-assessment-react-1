import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Users from "./pages/Users/Users";
import AnonymousRoute from "./routes/AnonymousRoute";
import ProtectedRoute from "./routes/ProtectedRoute";
import Spinner from "./components/Spinner/Spinner";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setLoading(false);
          return;
        }

        const res = await fetch("https://dummyjson.com/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          localStorage.removeItem("token");
          return;
        }

        const user = await res.json();
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

 if (loading) {
   return (
     <div className="loaderWrapper">
       <Spinner />
     </div>
   );
 }
  return (
    <BrowserRouter basename="/take-home-assessment-react-1">
      <div className="app">
        <Header />

        <main className="content">
          <Routes>
            <Route element={<AnonymousRoute />}>
              <Route path="/" element={<Main />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/users" element={<Users />} />
            </Route>
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
