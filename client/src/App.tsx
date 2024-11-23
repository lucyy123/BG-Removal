import { Container } from "@mui/material";
import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./shared/Navbar";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Loader from "./shared/Loader";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Footer from "./shared/Footer";

const Pricing = lazy(() => import("./pages/Pricing"));
const Result = lazy(() => import("./pages/Result"));

const App = () => {
  const user = true;
  return (
    <Router>
      <Container maxWidth={"lg"}>
        <Navbar />
      </Container>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* -------------------home page-------------------- */}
          <Route path="/" element={<Home />} />
          {/* -------------------------protected routes-------------------- */}
          <Route
            element={<ProtectedRoutes isAuthenticate={user ? true : false} />}
          >
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/result" element={<Result />} />

          </Route>
          {/* --------------------------------- 404 Not found page */}
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Suspense>

      <Container maxWidth={"lg"}>
       <Footer />
      </Container>


    </Router>
  );
};

export default App;

{
  /* <Route element={<Pr̥otectedRoute isAuthenticated={user? true:false}/>} >
<Route path="/shipping" element={<Shipping />} />
<Route path="/orders" element={<Orders />} />
</Route> */
}