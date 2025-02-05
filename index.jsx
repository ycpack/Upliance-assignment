import React from "react"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Header"
import Counter from "./Pages/Counter"
import Form from "./Pages/Form"
import Editor from "./Pages/Editor"




function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Counter />}/>
        <Route path="/form" element={<Form />}/>
        <Route path="/editor" element={<Editor />}/>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)