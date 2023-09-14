import { deleteIcon, productThumb1 } from "../assets"

const CartItem = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <div className="w-[50px] rounded-md overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={productThumb1}
            alt=""
          />
        </div>
        <div className="text-[--Dark-grayish-blue]">
          <p>Fall Limited Edition Sneakers</p>
          <p>
            $125.00 x 3 <b className="text-[--Black]">$375.00</b>
          </p>
        </div>
        <div className="w-[15px]">
          <img className="w-full h-full object-cover" src={deleteIcon} alt="" />
        </div>
      </div>
    </>
  )
}

export default CartItem
