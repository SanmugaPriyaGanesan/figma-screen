import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainscreen from './mainscreen';
function App() {
  return (
    <div className="App">
    <Router >
 <div className="main">
 <Routes>

  <Route exact path="/" element={<Mainscreen />} />

 </Routes>
   </div>
   </Router>

  </div>
  );
}

export default App;
