import { useState, useEffect } from "react";
import { getProductByID } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        console.log("itemId:", itemId);
        if (itemId) {
            getProductByID(itemId)
                .then(response => {
                    console.log("Product response:", response);
                    setProduct(response);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [itemId]);

    return (
        <div className='ItemDetailContainer'>
            {product ? <ItemDetail {...product} /> : <p>Loading...</p>}
        </div>
    );
}

export default ItemDetailContainer;
