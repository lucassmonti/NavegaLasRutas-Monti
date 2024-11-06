import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const collectionRef = collection(db, 'products');
            let q = query(collectionRef);
            if (categoryId) {
                q = query(collectionRef, where('category', '==', categoryId));
            }
            try {
                const querySnapshot = await getDocs(q);
                const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(items);
            } catch (error) {
                console.error("Error fetching products: ", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [categoryId]);

    return (
        <div>
            <h1>{greeting}</h1>
            {loading ? <p>Loading...</p> : <ItemList products={products} />}
        </div>
    );
};

export default ItemListContainer;
