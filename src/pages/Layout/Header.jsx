import { Link, NavLink } from "react-router-dom"
import { avatar, cart, logo, menu } from "../../assets"
import Cart from "../../components/Cart"
import { useRef } from "react"

const Header = () => {
  const cardRef = useRef(null)
  const avatarRef = useRef(null)
  const basketRef = useRef(null)

  const handleShowCard = () => {
    cardRef.current.classList.toggle("!block")
    basketRef.current.classList.toggle("active")
    avatarRef.current.classList.toggle("border-[--Orange]")
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
      <header className="w-[90%] md:w-[80%] mx-auto flex items-center justify-between border-b">
        <div className="flex items-center gap-[20px] md:gap-[50px] ">
          <div className="w-[20px] md:hidden">
            <img className="w-full h-full object-cover" src={menu} alt="" />
          </div>
          <Link to={"/"} className="py-[20px] md:py-[30px]">
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
        <div className="relative flex items-center justify-between gap-[20px] md:gap-[30px]">
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
              3
            </span>
          </div>

          <div
            onClick={handleShowCard}
            ref={avatarRef}
            className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] border-[3px] rounded-full border-transparent hover:border-[--Orange] cursor-pointer transition ease-linear"
          >
            <img className="w-full h-full" src={avatar} alt="" />
          </div>

          <div
            ref={cardRef}
            className="hidden shadow-2xl absolute right-0 top-[50px] w-[350px] rounded-lg overflow-hidden"
          >
            <Cart />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
