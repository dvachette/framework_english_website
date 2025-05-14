import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Menu from "./elements/Menu";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="header">
                <Menu />
            </div>
            <div className="navigation">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/social" element={<Social />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/action" element={<Action />} />
                    <Route path="/signal" element={<Signal />} />
                    <Route path="/stories" element={<Stories />} />
                    <Route path="*" element={<h2>404 Not Found</h2>} />
                </Routes>
            </div>
        </Router>
    );
}
function Home() {
  return <h2>Home Page</h2>;
}
function Social() {
  return <h2>Social Page</h2>;
}
function Support() {
  return <h2>Support Page</h2>;
}
function Action() {
  return <h2>Action Page</h2>;
}
function Signal() {
  return <h2>Signal Page</h2>;
}
function Stories() {
  return <h2>Stories Page</h2>;
}

export default App;
