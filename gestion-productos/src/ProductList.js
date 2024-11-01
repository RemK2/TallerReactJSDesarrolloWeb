import React, { useEffect, useState } from 'react';
import { db } from './firebaseConfig';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsCollection = collection(db, 'products');
            const productsSnapshot = await getDocs(productsCollection);
            const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProducts(productsList);
        };
        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, 'products', id));
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <div>
            <h1>Listado De Producto</h1>
            <Link to="/add">Agregar Produto</Link>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - {product.description} - {product.category}
                        <Link to={`/edit/${product.id}`}>Edit</Link>
                        <button onClick={() => handleDelete(product.id)}>Borrar El Producto</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
