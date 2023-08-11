const ProductDetailCard = ({ product, onAddProduct }) => {
    return (
        <div className="p-4 m-4 rounded-lg bg-slate-50">
            <div className="flex flex-col items-center justify-between">
            <h2 className="text-5xl">{product.name}</h2>
            <p className="text-2xl text-gray-500">
                {product.description}
            </p>
            <div className="flex items-center justify-between">
                <div className="text-3xl text-black">{product.price}</div>

            </div>

            </div>
            <div className="w-full flex items-center justify-center">
                <img src={product.imageUrl} className="w-40 h-40 rounded-xl object-cover" alt={product.name} />
            </div>

        </div>
    )
}

export default ProductDetailCard;