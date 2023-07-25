import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import UploadPage from "./components/UploadPage";

import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDrR0Q-xcD34Jo9Wk832cjcV-mdDHdtD8o",
  authDomain: "web3-2c700.firebaseapp.com",
  projectId: "web3-2c700",
  storageBucket: "web3-2c700.appspot.com",
  messagingSenderId: "899149372944",
  appId: "1:899149372944:web:9da5c5ff0607a56a6e7495"
}

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          
        </Route>
        <Route path="/upload" element={<UploadPage storage={storage} />}>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
