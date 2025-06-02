import React, { useState, useEffect, useRef } from "react";
import {
  DROPDOWN_ICON,
  NETFLIX_LOGO,
  SUPPORTED_LANGUAGES,
  USER_AVATAR,
} from "../utils/constant";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/slice/userSlice";
import { isToggleGptSearchPage } from "../redux/slice/gptSlice";
import { changeLanguage } from "../redux/slice/configSlice";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const menuRef = useRef(null);
  const isGptPageOpen = useSelector((store) => store.gpt.isToggleGptSearchPage);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleGptToggleButton = () => {
    dispatch(isToggleGptSearchPage());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute z-10 w-screen bg-gradient-to-b from-black flex justify-between">
      <img className="w-48" src={NETFLIX_LOGO} alt="logo" />
      {user && (
        <div className="flex" ref={menuRef}>
          {isGptPageOpen && (
            <select
              className="bg-white my-6 mx-2 px-4"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptToggleButton}
            className="bg-red-800 my-6 mx-2 px-4 cursor-pointer hover:opacity-80 text-white"
          >
            {isGptPageOpen ? "Homepage" : "GPT Search"}
          </button>
          <img
            src={user.photoURL ? user.photoURL : USER_AVATAR}
            alt="usericon"
            className="w-8 h-8 mt-6 mr-1 cursor-pointer"
            onClick={handleMenu}
          />
          <img
            src={DROPDOWN_ICON}
            alt="dropdown"
            className="mt-9 mr-6 cursor-pointer w-2 h-2 bg-white"
            onClick={handleMenu}
          />
          {menuOpen && (
            <div className="absolute right-0 mt-16 w-40 mr-8 bg-white text-black rounded-md shadow-lg">
              <ul className="py-2">
                <li>
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
