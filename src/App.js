import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseState from "./pages/useState/UseState";
import UseEffect from "./pages/useEffect/UseEffect";
import Nav from "./components/nav";
import UseContext from "./pages/useContext/UseContext";
import Redux from "./pages/reduxPage/Redux";
import TaskForm from "./components/TaskForm";
import ReactQuery from "./pages/reactQuery/ReactQuery";

function App() {
  return (
    <div className="bg-neutral-200">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<UseState />} />
          <Route path="/useEffect" element={<UseEffect />} />
          <Route path="/useContext" element={<UseContext />} />
          <Route path="/redux" element={<Redux />} />
          <Route path="/redux/edit/:id" element={<TaskForm />} />
          <Route path="/redux/form" element={<TaskForm />} />
          <Route path="/query" element={<ReactQuery />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
