import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/About";
import BookDetails from "./components/Book/BookDetails";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Header/>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} exact></Route>
            <Route path='/add' element={<AddBook/>} exact></Route>
            <Route path="/books" element={<Books/>} exact></Route>
            <Route path="/about" element={<About/>} exact></Route>
            <Route path="/books/:id" element={<BookDetails/>} exact></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
