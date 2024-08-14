import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Reset from './pages/Reset';
import NotFound from "./pages/NotFound.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";

function App() {
    return (
      <Router>
    <div>

    <Routes>
        <Route element={<PrivateRoute/>}>
          <Route path="/" element={<Home />} exact/>
            <Route path="/home" element={<Home />} />
        </Route>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/reset" element={<Reset />} />
            <Route path="*" element={<NotFound/>} />

    </Routes>

</div>
      </Router>
  )
}

export default App
