import React, { useState } from 'react';
import { db } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, 'products'), { name, description, category });
        navigate('/products');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} required />
            <input type="text" placeholder="Category" onChange={(e) => setCategory(e.target.value)} required />
            <button type="submit">Añadir Nuevo Producto </button>
        </form>
    );
};

export default AddProduct;
