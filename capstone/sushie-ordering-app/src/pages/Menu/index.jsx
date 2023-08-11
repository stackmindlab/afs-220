import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts,selectAllProducts, } from "../../stores/menu/productsSlice";
import ProductDetailCard from "../../components/ProductDetailCard";

const Menu = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);

    useEffect(() => {
        dispatch(fetchProducts())

}, [])

return (
    <div className="bg-white">
        {
            products.status === 'pending' ?
            <div>loading...</div> :
            <div className="menu-wrapper">
                {
                    products.products && products.products[0].products.map((product, index) => {
                        return (
                            <ProductDetailCard key={index} product={product} />
                        )
                    })
                }
            </div>

        }
    </div>
)

}

export default Menu;
