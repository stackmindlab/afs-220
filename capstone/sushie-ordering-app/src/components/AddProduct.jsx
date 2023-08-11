export const AddProduct = ({ onAddProduct }) => {
    // AddProduct is a functional component that provides a button to add a product.
    // It receives a prop "onAddProduct" as a callback function to handle the product addition.

    return (
        // The outer container div with the "flex justify-end" class to align the button to the right end of the container.
        <div className="flex justify-end">
            {/* The button element with some styling classes */}
            <button onClick={onAddProduct} className="bg-yellow-400 hover:bg-yellow-500 rounded-full w-5 h-5 flex items-center justify-center text-lg">
                {/* The "span" element to display the "+" sign inside the button */}
                <span>+</span>
            </button>
        </div>
    )
}
