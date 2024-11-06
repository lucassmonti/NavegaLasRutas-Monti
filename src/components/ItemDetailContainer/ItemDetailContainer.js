import { useState, useEffect } from "react";
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            const docRef = doc(db, 'products', itemId);
            try {
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setProduct({ id: docSnap.id, ...docSnap.data() });
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching product: ", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [itemId]);

    return (
        <div className='ItemDetailContainer'>
            {loading ? <p>Loading...</p> : product ? <ItemDetail {...product} /> : <p>Producto no encontrado</p>}
        </div>
    );
}

export default ItemDetailContainer;
