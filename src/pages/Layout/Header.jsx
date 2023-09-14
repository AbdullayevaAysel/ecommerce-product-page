import { Link, NavLink } from "react-router-dom"
import { avatar, cart, logo } from "../../assets"

const Header = () => {
  const menuItems = [
    { path: "collections", element: "Collections" },
    { path: "men", element: "Men" },
    { path: "women", element: "Women" },
    { path: "about", element: "About" },
    { path: "contact", element: "Contact" },
  ]
  return (
    <>
      <header className="w-[80%] mx-auto flex items-center justify-between border-b">
        <div className="flex items-center gap-[50px] ">
          <Link to={"/"} className="py-[30px]">
            <img src={logo} alt="logo" />
          </Link>
          <nav>
            <ul className="flex items-center gap-[30px]">
              {menuItems?.map((item, index) => (
                <NavLink
                  to={`${item.path}`}
                  key={index}
                  className="cursor-pointer border-b-[3px] border-transparent items py-[40px]"
                >
                  <li className="text-[--Dark-grayish-blue] font-medium">
                    {item?.element}
                  </li>
                </NavLink>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center justify-between gap-[30px]">
          <div className="relative">
            <img className="cursor-pointer sepia" src={cart} alt="" />
            <span className="absolute top-[-10px] right-[-10px] bg-[--Orange] text-[--White] px-2 rounded-full text-[12px]">
              3
            </span>
          </div>

          <div className="w-[50px] h-[50px]">
            <img className="w-full h-full" src={avatar} alt="" />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
