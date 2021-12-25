import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppProvider from "./contexts/AppProvider";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <BrowserRouter>
        <AppProvider>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
          </Routes>
        </AppProvider>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
