import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthProvider';
import Login from './Login';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';

function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/add" element={<AddProduct />} />
                    <Route path="/edit/:id" element={<EditProduct />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;
//info sacada de https://blog.openreplay.com/build-a-crud-app-with-react-and-firebase/