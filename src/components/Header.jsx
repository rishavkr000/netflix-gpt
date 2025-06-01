import React from "react";
import { NETFLIX_LOGO, USER_ICON } from "../utils/constant";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user );
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="absolute z-10 w-screen bg-gradient-to-b from-black flex justify-between">
      <img className="w-48" src={NETFLIX_LOGO} alt="logo" />
      { user && <div className="flex">
        <img
          src={user.photoURL ? user.photoURL : USER_ICON}
          alt="usericon"
          className="w-8 h-8 rounded-4xl mt-6 mr-6"
        />
        <button
          className="mr-6 font-bold text-white cursor-pointer"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>}
    </div>
  );
};

export default Header;
