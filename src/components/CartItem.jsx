import { deleteIcon } from "../assets"
import { useDispatch, useSelector } from "react-redux"
import { deleteProducts } from "../features/products/productSlice"

const CartItem = () => {
  const data = useSelector((state) => state.products.basket)
  const dispatch = useDispatch()

  return (
    <>
      {data &&
        data?.map((item) => (
          <div
            key={item?.id}
            className="flex items-center justify-between mb-5"
          >
            <div className="w-[50px] rounded-md overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={item.thumb1}
                alt=""
              />
            </div>
            <div className="text-[--Dark-grayish-blue]">
              <p>{item?.title}</p>
              <p>
                ${item?.price} x {item?.oldCount}
                <b className="text-[--Black] ps-2">
                  ${(item?.price * item?.oldCount).toFixed(2)}
                </b>
              </p>
            </div>
            <div className="w-[15px]">
              <img
                onClick={() => dispatch(deleteProducts(item))}
                className="w-full h-full object-cover cursor-pointer"
                src={deleteIcon}
                alt=""
              />
            </div>
          </div>
        ))}
    </>
  )
}

export default CartItem
