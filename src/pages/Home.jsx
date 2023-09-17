import { useDispatch } from "react-redux"
import {
  cart,
  minusIcon,
  plusIcon,
  product1,
  product2,
  product3,
  product4,
  productThumb1,
  productThumb2,
  productThumb3,
  productThumb4,
} from "../assets"
import { useState } from "react"
import { addToProducts } from "../features/products/productSlice"

const Home = () => {
  const [updateImg, setupdateImg] = useState("")
  const [count, setCount] = useState(0)

  const products = [
    {
      id: 1,
      name: "mehsul 1",
      title: "Fall Limited Edition Sneakers",
      subtitle: "SNEAKER COMPANY",
      text: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
      price: "125.00",
      oldprice: "250.00",
      percent: "50%",
      img1: product1,
      img2: product2,
      img3: product3,
      img4: product4,
      thumb1: productThumb1,
      thumb2: productThumb2,
      thumb3: productThumb3,
      thumb4: productThumb4,
      count: count,
      oldCount: count,
    },
  ]

  const dispatch = useDispatch()

  return (
    <>
      <div>
        {products &&
          products?.map((product) => (
            <div key={product.id} className="w-[80%] mx-auto mt-20 flex">
              <div className="w-[50%] h-full">
                <div className="w-[500px] m-auto">
                  <div className=" h-[450px] rounded-2xl overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={
                        updateImg.length > 0 && updateImg
                          ? updateImg
                          : product.img1
                      }
                      alt=""
                    />
                  </div>
                  <div className="grid grid-cols-4 gap-[30px]">
                    <div className="py-[30px]">
                      <img
                        onClick={() => setupdateImg(product.img1)}
                        className="w-full h-full object-cover rounded-2xl active-swiper cursor-pointer"
                        src={product.thumb1}
                        alt=""
                      />
                    </div>
                    <div className="py-[30px]">
                      <img
                        onClick={() => setupdateImg(product.img2)}
                        className="w-full h-full object-cover rounded-2xl cursor-pointer"
                        src={product.thumb2}
                        alt=""
                      />
                    </div>
                    <div className="py-[30px]">
                      <img
                        onClick={() => setupdateImg(product.img3)}
                        className="w-full h-full object-cover rounded-2xl cursor-pointer"
                        src={product.thumb3}
                        alt=""
                      />
                    </div>
                    <div className="py-[30px]">
                      <img
                        onClick={() => setupdateImg(product.img4)}
                        className="w-full h-full object-cover rounded-2xl cursor-pointer"
                        src={product.thumb4}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[50%] h-full">
                <div className="w-[500px] m-auto">
                  <p className="text-[--Orange] font-bold tracking-[2px] mt-20 mb-1 uppercase text-[14px]">
                    {product?.subtitle}
                  </p>
                  <p className="text-[35px] font-bold">{product?.title}</p>
                  <p className="mt-5 mb-10 text-justify text-[--Dark-grayish-blue]">
                    {product?.text}
                  </p>
                  <p className="flex items-center gap-[10px]">
                    <b className="text-[25px]">${product?.price}</b>
                    <span className="text-[--Orange] bg-[--Orange-opacity] px-2 text-[14px] rounded-md font-semibold">
                      {product?.percent}
                    </span>
                  </p>
                  <p className="text-[--Grayish-blue] line-through">
                    ${product?.oldprice}
                  </p>
                  <div className="flex w-full pt-5 gap-[20px]">
                    <div className="bg-[--Light-grayish-blue] flex items-center justify-between rounded-lg w-[40%]">
                      <img
                        onClick={() => 0 < count && setCount(count - 1)}
                        className="py-3 px-4 cursor-pointer"
                        src={minusIcon}
                        alt=""
                      />
                      <span className="py-3 px-4 font-bold">{count}</span>
                      <img
                        onClick={() => setCount(count + 1)}
                        className="py-3 px-4 cursor-pointer"
                        src={plusIcon}
                        alt=""
                      />
                    </div>

                    <button
                      onClick={() =>
                        0 < count && dispatch(addToProducts(product))
                      }
                      disabled={count <= 0}
                      className={`shadow-lg shadow-[--Orange-shadow] w-[60%] flex gap-[10px] justify-center items-center bg-[--Orange] text-white py-3 px-4 rounded-lg disabled:opacity-75 ${
                        count <= 0 && "cursor-not-allowed"
                      }`}
                    >
                      <img
                        style={{ filter: "brightness(0) invert(1)" }}
                        className="w-[14px]"
                        src={cart}
                        alt=""
                      />
                      <span className="text-[14px]">Add to cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}

export default Home
