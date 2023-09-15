import CartItem from "./CartItem"

const Cart = () => {
  return (
    <>
      <div className="bg-[--White]">
        <div className="border-b p-4 font-bold">Cart</div>
        <div className="pt-4 px-4 max-h-[250px] overflow-y-auto scroll-smooth custom-scroll">
          <CartItem />
        </div>
        <div className="pb-4 px-4">
          <button className="bg-[--Orange] text-[--Light-grayish-blue] text-[14px] p-2 w-full rounded-md font-semibold">
            Checkout
          </button>
        </div>
      </div>
    </>
  )
}

export default Cart
