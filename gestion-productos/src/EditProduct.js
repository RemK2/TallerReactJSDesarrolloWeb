import React, { useEffect, useState } from 'react';
import { db } from './firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useParams, useNavigate } from 'react-router-dom';

const EditProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({ name: '', description: '', category: '' });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            const productDoc = await getDoc(doc(db, 'products', id));
            if (productDoc.exists()) {
                setProduct(productDoc.data());
            } else {
                console.log("¡No existe tal documento!");

            }
        };
        fetchProduct();
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        await updateDoc(doc(db, 'products', id), product);
        navigate('/products');
    };

    return (
        <form onSubmit={handleUpdate}>
            <input
                type="text"
                placeholder="Name"
                value={product.name}
                onChange={(e) => setProduct({ ...product, name: e.target.value })}
                required
            />
            <input
                type="text"
                placeholder="Description"
                value={product.description}
                onChange={(e) => setProduct({ ...product, description: e.target.value })}
                required
            />
            <input
                type="text"
                placeholder="Category"
                value={product.category}
                onChange={(e) => setProduct({ ...product, category: e.target.value })}
                required
            />
            <button type="submit">Actualizar Producto</button>

        </form>
    );
};

export default EditProduct;
// info sacada de:https://medium.com/front-end-weekly/building-a-crud-app-with-react-and-firebase-a-step-by-step-guide-b2a5e95c59b0
//https://firebase.google.com/docs/database/web/read-and-write
//https://www.youtube.com/watch?v=azdwN_4IDKA