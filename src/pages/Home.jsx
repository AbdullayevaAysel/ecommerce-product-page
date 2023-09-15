import {
  product1,
  productThumb1,
  productThumb2,
  productThumb3,
  productThumb4,
} from "../assets"

const Home = () => {
  return (
    <>
      <div className="w-[80%] mx-auto mt-20 flex">
        <div className="w-[50%] h-full">
          <div className="w-[500px] m-auto">
            <div className=" h-[450px] rounded-2xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={product1}
                alt=""
              />
            </div>
            <div className="grid grid-cols-4 gap-[30px]">
              <div className="py-[30px]">
                <img
                  className="w-full h-full object-cover rounded-2xl active-swiper"
                  src={productThumb1}
                  alt=""
                />
              </div>
              <div className="py-[30px]">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  src={productThumb2}
                  alt=""
                />
              </div>
              <div className="py-[30px]">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  src={productThumb3}
                  alt=""
                />
              </div>
              <div className="py-[30px]">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  src={productThumb4}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[50%] h-full">
          <div className="w-[500px] m-auto">
            <p className="text-[--Orange] font-bold tracking-[2px] mt-20 mb-1 uppercase text-[14px]">
              Sneaker Company
            </p>
            <p className="text-[35px] font-bold">
              Fall Limited Edition Sneakers
            </p>
            <p className="mt-5 mb-10 text-justify text-[--Dark-grayish-blue]">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <p className="flex items-center gap-[10px]">
              <b className="text-[25px]">$125.00</b>
              <span className="text-[--Orange] bg-[--Orange-opacity] px-2 text-[14px] rounded-md font-semibold">50%</span>
            </p>
            <p className="text-[--Grayish-blue] line-through">$250.00</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
