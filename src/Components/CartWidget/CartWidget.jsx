import { GrCart } from "react-icons/gr";

const CartWidget = () => {
    return (
        <div className="container">
            <button>
            <GrCart className='icon'/> <strong>5</strong>
            </button>
        </div>
    )  
}

export default CartWidget
