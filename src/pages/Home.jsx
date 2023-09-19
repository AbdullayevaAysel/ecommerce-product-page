import { useDispatch } from "react-redux"
import {
  cart,
  closeIcon,
  minusIcon,
  next,
  plusIcon,
  previous,
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
  const [active, setActive] = useState(1)
  const [count, setCount] = useState(0)
  const [open, setOpen] = useState(false)
  const [limit, setLimit] = useState(1)

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
      images: [
        {
          id: 1,
          img: product1,
          thumb: productThumb1,
        },
        {
          id: 2,
          img: product2,
          thumb: productThumb2,
        },
        {
          id: 3,
          img: product3,
          thumb: productThumb3,
        },
        {
          id: 4,
          img: product4,
          thumb: productThumb4,
        },
      ],
      count: count,
      oldCount: count,
    },
  ]

  const handleUpdateImg = (img, id) => {
    setupdateImg(img)
    setActive(id)
  }

  const dispatch = useDispatch()

  const handleNext = (length) => {
    if (length != limit) {
      length > limit && setLimit(limit + 1)
    } else {
      setLimit(1)
    }
  }

  const handlePrevios = (length) => {
    limit > 1 ? setLimit(limit - 1) : setLimit(length)
  }

  const handleAddProducts = (product) => {
    if (0 < count) {
      dispatch(addToProducts(product))
      setCount(0)
    }
  }

  return (
    <>
      <div>
        {products &&
          products?.map((product) => (
            <div
              key={product.id}
              className="lg:w-[80%] mx-auto lg:mt-20 flex flex-col lg:flex-row"
            >
              <div className="w-full lg:w-[50%] h-full">
                <div className="w-full lg:w-[80%] m-auto relative">
                  <div
                    onClick={() => handlePrevios(product?.images?.length)}
                    className={`bg-[--White] w-[40px] h-[40px] absolute top-[50%] left-[5%] translate-y-[-50%] rounded-full flex lg:hidden items-center justify-center cursor-pointer`}
                  >
                    <img className="w-[10px]" src={previous} alt="" />
                  </div>
                  {product?.images?.slice(limit - 1, limit)?.map((img) => (
                    <div
                      key={img?.id}
                      className="w-full h-[300px] lg:h-[450px] lg:rounded-2xl overflow-hidden cursor-pointer"
                      onClick={() => setOpen(true)}
                    >
                      <img
                        className="w-full h-full object-cover"
                        src={
                          updateImg?.length > 0 && updateImg
                            ? updateImg
                            : img?.img
                        }
                        alt=""
                      />
                    </div>
                  ))}

                  <div
                    onClick={() => handleNext(product?.images?.length)}
                    className={`bg-[--White] w-[40px] h-[40px] absolute top-[50%] right-[5%] translate-y-[-50%] rounded-full flex lg:hidden items-center justify-center cursor-pointer`}
                  >
                    <img className="w-[10px]" src={next} alt="" />
                  </div>
                  <div className="hidden lg:grid grid-cols-4 gap-[30px]">
                    {product?.images?.map((img) => (
                      <div key={img?.id} className="py-[30px]">
                        <div
                          className={`slider-img ${
                            active == img?.id ? "active" : ""
                          }`}
                          onClick={() => handleUpdateImg(img?.img, img?.id)}
                        >
                          <img
                            className="w-full h-full object-cover rounded-2xl cursor-pointer"
                            src={img?.thumb}
                            alt=""
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-[50%] h-full">
                <div className="lg:w-[80%] p-7 lg:p-0 m-auto">
                  <p className="text-[--Orange] font-bold tracking-[2px] lg:mt-20 mb-1 uppercase text-[12px] lg:text-[14px]">
                    {product?.subtitle}
                  </p>
                  <p className="text-[25px] lg:text-[35px] font-bold">
                    {product?.title}
                  </p>
                  <p className="mt-3 mb-5 lg:mt-5 lg:mb-10 text-justify text-[--Dark-grayish-blue] text-[14px] md:text-[16px]">
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
                  <div className="flex flex-col md:flex-row w-full pt-5 gap-[20px]">
                    <div className="bg-[--Light-grayish-blue] flex items-center justify-between rounded-lg md:w-[40%]">
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
                      onClick={() => handleAddProducts(product)}
                      disabled={count <= 0}
                      className={`shadow-lg shadow-[--Orange-shadow] md:w-[60%] flex gap-[10px] justify-center items-center bg-[--Orange] text-white py-3 px-4 rounded-lg disabled:opacity-75 ${
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

              <div
                className={`${
                  open ? "lg:fixed" : "hidden"
                } bg-[rgba(0,0,0,0.7)] h-screen w-full left-0 top-0 z-[10000] flex items-center justify-center`}
              >
                <div className="w-[50%]">
                  <div className="w-[500px] m-auto relative">
                    <div
                      onClick={() => setOpen(false)}
                      className=" absolute top-[-5%] right-0 cursor-pointer sepia"
                    >
                      <img className="w-[15px]" src={closeIcon} alt="" />
                    </div>

                    <div
                      onClick={() => handlePrevios(product?.images?.length)}
                      className="bg-[--White] w-[50px] h-[50px] absolute top-[40%] left-[-5%] translate-y-[-50%] rounded-full flex items-center justify-center cursor-pointer"
                    >
                      <img className="" src={previous} alt="" />
                    </div>
                    {product?.images?.slice(limit - 1, limit)?.map((img) => (
                      <div
                        key={img?.id}
                        className="w-full h-[300px] lg:h-[450px] lg:rounded-2xl overflow-hidden cursor-pointer"
                        onClick={() => setOpen(true)}
                      >
                        <img
                          className="w-full h-full object-cover"
                          src={
                            updateImg?.length > 0 && updateImg
                              ? updateImg
                              : img?.img
                          }
                          alt=""
                        />
                      </div>
                    ))}
                    <div className="grid grid-cols-4 gap-[30px]">
                      {product?.images?.map((img) => (
                        <div key={img?.id} className="py-[30px]">
                          <div
                            className={`slider-img ${
                              active == img?.id ? "active" : ""
                            }`}
                            onClick={() => handleUpdateImg(img?.img, img?.id)}
                          >
                            <img
                              className="w-full h-full object-cover rounded-2xl cursor-pointer"
                              src={img.thumb}
                              alt=""
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div
                      onClick={() => handleNext(product?.images?.length)}
                      className="bg-[--White] w-[50px] h-[50px] absolute top-[40%] right-[-5%] translate-y-[-50%] rounded-full flex items-center justify-center cursor-pointer"
                    >
                      <img src={next} alt="" />
                    </div>
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
