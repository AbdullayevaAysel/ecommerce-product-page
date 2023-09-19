import { Link, NavLink } from "react-router-dom"
import { avatar, cart, closeIcon, logo, menu } from "../../assets"
import Cart from "../../components/Cart"
import { useRef} from "react"
import { useSelector } from "react-redux"

const Header = () => {
  const data = useSelector((state) => state.products.basket)

  const cardRef = useRef(null)
  const avatarRef = useRef(null)
  const basketRef = useRef(null)
  const showMenu = useRef(null)
  const overlay = useRef(null)

  const handleShowCard = () => {
    cardRef.current.classList.toggle("!block")
    basketRef.current.classList.toggle("active")
    avatarRef.current.classList.toggle("status-active")
  }

  const handleShowMenu = () => {
    showMenu.current.classList.add("!left-0")
    overlay.current.classList.add("!opacity-100", "!visible")
  }

  const handleCloseMenu = () => {
    showMenu.current.classList.remove("!left-0")
    overlay.current.classList.remove("!opacity-100", "!visible")
  }

  const menuItems = [
    { path: "collections", element: "Collections" },
    { path: "men", element: "Men" },
    { path: "women", element: "Women" },
    { path: "about", element: "About" },
    { path: "contact", element: "Contact" },
  ]

  return (
    <>
      <div
        ref={overlay}
        className="fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-[--Grayish-blue-opacity] z-[250] opacity-0 invisible transition-all duration-700 ease-in"
      ></div>
      <header className="md:w-[80%] mx-auto flex items-center justify-between border-b">
        <div className="flex items-center gap-[20px] md:gap-[50px] ps-4">
          
          <div className="w-[20px] md:hidden" onClick={() => handleShowMenu()}>
            <img className="w-full h-full object-cover" src={menu} alt="" />
          </div>
          <Link to={"/ecommerce-product-page"} className="py-[20px] md:py-[30px]">
            <img src={logo} alt="logo" />
          </Link>
          <nav>
            <ul className="hidden md:flex items-center gap-[20px] lg:gap-[30px]">
              {menuItems?.map((item, index) => (
                <NavLink
                  to={`${item.path}`}
                  key={index}
                  className="cursor-pointer border-b-[3px] border-transparent items py-[40px]"
                >
                  <li className="text-[--Dark-grayish-blue] font-medium text-[14px] lg:text-[16px]">
                    {item?.element}
                  </li>
                </NavLink>
              ))}
            </ul>
          </nav>
        </div>
        <div className="relative flex items-center justify-between gap-[20px] md:gap-[30px] pe-4 md:pe-0">
          <div
            onClick={handleShowCard}
            ref={basketRef}
            className="relative baskets"
          >
            <img
              className="cursor-pointer hover:drop-shadow basket"
              src={cart}
              alt=""
            />
            <span className="absolute top-[-10px] right-[-10px] bg-[--Orange] text-[--White] px-2 rounded-full text-[12px]">
              {data?.length}
            </span>
          </div>

          <div
            onClick={handleShowCard}
            ref={avatarRef}
            className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full cursor-pointer relative "
          >
            <img className="w-full h-full relative z-20" src={avatar} alt="" />
          </div>

          <div
            ref={cardRef}
            className="hidden bg-[--White] z-10 shadow-2xl absolute right-[12px] lg:right-0 top-[60px] md:top-[50px] w-[94vw] m-auto md:w-[350px] rounded-lg overflow-hidden"
          >
            <Cart />
          </div>
        </div>
      </header>

      <div
        ref={showMenu}
        className=" fixed top-0 left-[-100%] h-full bg-slate-50 w-[200px] p-4 transition-all duration-700 ease-in z-[255]"
      >
        <button onClick={handleCloseMenu}>
          <img src={closeIcon} alt="" />
        </button>
        <ul className="mt-10">
          {menuItems?.map((item, index) => (
            <NavLink
              to={`${item.path}`}
              key={index}
              className="cursor-pointer border-b-[3px] border-transparent items py-[40px]"
            >
              <li className="text-[--Black] font-bold text-[16px] lg:text-[16px] mb-4">
                {item?.element}
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Header
