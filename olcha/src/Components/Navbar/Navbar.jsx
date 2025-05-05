import React, { useEffect, useState } from "react";
import { BsCart2, BsMoonFill, BsSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useStore } from "../../store/store";
import { useTranslation } from "react-i18next";
import { BiBarChart, BiMenu } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { LiaUser } from "react-icons/lia";
import { LuSearch } from "react-icons/lu";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("ru");
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setdarkMode] = useState(() => {
    const saqlangan = localStorage.getItem("darkMode");
    return saqlangan ? saqlangan : false;
  });

  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  const { comparison, favorite, cart, user } = useStore();
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  function changeLanguage() {
    if (language === "uz") {
      i18n.changeLanguage("ru");
      setLanguage("ru");
    } else {
      i18n.changeLanguage("uz");
      setLanguage("uz");
    }
  }
  return (
    <div>
      <div className="w-full bg-olcha p-2 md:px-10 flex flex-wrap justify-between items-center">
        <div className="flex gap-4 flex-wrap justify-center md:justify-start w-full md:w-auto">
          <button className="items-center h-8 px-5 bg-white text-olcha rounded-xl dark:bg-dark">
            0% Muddatli to'lov
          </button>
          <button className="items-center h-8 px-5 border-2 text-white rounded-xl dark:border-dark dark:text-dark">
            Chegirmalar
          </button>
          <button className="items-center h-8 px-5 bg-white text-olcha rounded-xl dark:bg-dark">
            Yutuqli o'yinlar
          </button>
          <Link className="text-white dark:text-dark" to="/delivery-points">
            Magazin xaritasi
          </Link>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-4 w-full md:w-auto">
          <a href="tel:+998712022021" className="text-white text-lg font-bold">
            +998 (71) 202 2021
          </a>
          <button className="h-9 px-4 border-2 text-white rounded-xl dark:border-dark dark:text-dark">
            Olcha'da soting
          </button>
          <div className="flex border-x">
            <a href="" className="text-white px-2">
              Ўзб
            </a>
            <a href="" className="text-white px-2">
              O'z
            </a>
            <a href="" className="text-white px-2">
              Рус
            </a>
          </div>
        </div>
      </div>

      <div className="w-full p-3 flex flex-wrap justify-between items-center px-4 md:px-10">
        <Link to="/">
          <img
            src="https://olcha.uz/_nuxt/plus.lRzD4Jf7.png"
            alt="Logo"
            className="w-[80px] md:w-[100px]"
          />
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-xl md:hidden"
        >
          <BiMenu className="size-7" />
        </button>
        <div className="hidden md:flex items-center border-2 rounded-xl p-1 bg-gray-100 dark:bg-dark">
          <input
            type="text"
            placeholder="Qidirish..."
            className="px-4 py-2 outline-none w-[250px] md:w-[600px] bg-transparent"
          />
          <button className="px-4 py-2 bg-olcha rounded-xl">
            <LuSearch className="size-5 text-white" />
          </button>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => setdarkMode(!darkMode)} className="text-lg">
            {darkMode ? (
              <BsSunFill className="size-5" />
            ) : (
              <BsMoonFill className="size-5" />
            )}
          </button>
          <Link to="/comparison" className="relative">
            <BiBarChart className="size-6" />
            <span className="absolute -right-2 -top-2 text-xs text-olcha">
              {favorite.length || ""}
            </span>
          </Link>
          <Link to="/favorite" className="relative">
            <FiHeart className="size-6" />
            <span className="absolute -right-2 -top-2 text-xs text-olcha">
              {favorite.length || ""}
            </span>
          </Link>
          <Link to="/cart" className="relative">
            <BsCart2 className="size-6" />
            <span className="absolute -right-2 -top-2 text-xs bg-olcha text-white rounded-full w-5 h-5 flex justify-center">
              {cart.length || "0"}
            </span>
          </Link>
          <Link to="/auth" className="flex items-center gap-2">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt="avatar"
                className="w-8 rounded-full"
              />
            ) : (
              <LiaUser className="size-6" />
            )}
            <span className="hidden md:block">
              {user?.displayName || "Kirish"}
            </span>
          </Link>
        </div>
      </div>
      {menuOpen && (
        <div className="flex flex-col items-center mt-4 space-y-2 md:hidden">
          <input
            type="text"
            placeholder="Qidirish..."
            className="px-4 py-2 w-full border rounded-xl"
          />
          <button className="w-full px-4 py-2 bg-olcha text-white rounded-xl">
            Qidirish
          </button>
          <Link to="/comparison">Taqqoslash</Link>
          <Link to="/favorite">Sevimlilar</Link>
          <Link to="/cart">Savatcha</Link>
          <Link to="/auth">Kirish</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
