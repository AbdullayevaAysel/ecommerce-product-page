import { useSelector } from "react-redux"
import CartItem from "./CartItem"

const Cart = () => {
  const data = useSelector((state) => state.products.basket)

  return (
    <>
      <div className="bg-[--White]">
        <div className="border-b p-4 font-bold">Cart</div>
        {data.length > 0 ? (
          <>
            <div className="pt-4 px-4 max-h-[250px] overflow-y-auto scroll-smooth custom-scroll">
              <CartItem />
            </div>
            <div className="pb-4 px-4">
              <button className="bg-[--Orange] text-[--Light-grayish-blue] text-[14px] p-2 w-full rounded-md font-semibold">
                Checkout
              </button>
            </div>
          </>
        ) : (
          <p className="px-10 py-14 text-[--Dark-grayish-blue] text-center text-[14px] font-semibold">
            Your cart is empty.
          </p>
        )}
      </div>
    </>
  )
}

export default Cart
