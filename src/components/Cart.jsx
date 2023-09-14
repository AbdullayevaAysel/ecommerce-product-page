import CartItem from "./CartItem"

const Cart = () => {
  return (
    <>
      <div className="bg-[--White]">
        <div className="border-b p-4 font-bold">Cart</div>
        <div className="p-4">
          <CartItem />
          <CartItem />
          <button className="bg-[--Orange] text-[--Light-grayish-blue] text-[14px] p-2 w-full rounded-md font-semibold">Checkout</button>
        </div>
      </div>
    </>
  )
}

export default Cart
