import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import Container from "./Layout/Container";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container>
      <header className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <button className="cursor-pointer">
            <AiOutlineMenu size={30} onClick={() => setShowMenu(true)} />
          </button>
          <h1 className="text-2xl sm:text-3xl md:text-4xl px-2">
            Best <span className="font-bold">Eats</span>
          </h1>
          <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
            <p className="bg-black text-white rounded-full p-2">Delivery</p>
          </div>
        </div>

        <form className="bg-gray-200 rounded-full flex items-center justify-between w-[180px] lg:w-[300px]">
          <button className="p-2">
            <AiOutlineSearch size={20} />
          </button>
          <input
            className="focus:outline-none w-full bg-transparent"
            type="text"
            placeholder="Search food"
          />
        </form>

        <button className="bg-black hover:bg-gray-700 transition-colors text-white px-3 py-2 hidden lg:flex rounded-full justify-between items-center text-[14px]">
          <BsFillCartFill size={16} className="mr-2" />
          Cart
        </button>
      </header>

      {/* menu overlay */}
      {showMenu && (
        <div className="fixed bg-black/70 top-0 bottom-0 left-0 right-0 z-10"></div>
      )}

      <nav
        className={`bg-white transition-[left] duration-300 fixed top-0  w-[300px] max-w-[100%] h-[100vh] z-[999] ${
          showMenu ? "left-0" : "left-[-100%]"
        }`}
      >
        <div className="flex items-center justify-between w-[100%] p-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl px-2">
            Best <span className="font-bold">Eats</span>
          </h1>
          <button onClick={() => setShowMenu(false)}>
            <AiOutlineClose size={24}  />
          </button>
        </div>

        <ul className="mt-4 px-2">
          <li>
            <a href="#" className="text-xl py-4 px-3 flex">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </a>
          </li>
          <li>
            <a href="#" className="text-xl py-4 px-3 flex">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </a>
          </li>
          <li>
            <a href="#" className="text-xl py-4 px-3 flex">
              <FaWallet size={25} className="mr-4" /> Wallet
            </a>
          </li>
          <li>
            <a href="#" className="text-xl py-4 px-3 flex">
              <MdHelp size={25} className="mr-4" /> Help
            </a>
          </li>
          <li>
            <a href="#" className="text-xl py-4 px-3 flex">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </a>
          </li>
          <li>
            <a href="#" className="text-xl py-4 px-3 flex">
              <BsFillSaveFill size={25} className="mr-4" /> Best Ones
            </a>
          </li>
          <li>
            <a href="#" className="text-xl py-4 px-3 flex">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
