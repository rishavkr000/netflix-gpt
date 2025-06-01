import Header from "./Header";
import { BACKGROUND_IMAGE } from "../utils/constant";
import { Link, useNavigate } from "react-router";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice/userSlice";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    // Validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isLoginForm) {
      // Signed up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRumeSpXjKUAxRdHv5mbaG_ixBJTCTRRm4SDw&s",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setError(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
        });
    } else {
      // Signed in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BACKGROUND_IMAGE} alt="background" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black absolute p-12 text-white w-3/12 mx-auto my-24 right-0 left-0 opacity-80"
      >
        <h1 className="my-2 text-3xl font-bold">
          {isLoginForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isLoginForm && (
          <>
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-2 w-full rounded-lg border border-gray-500 bg-gray-700"
            />
            {errorMessage === "Name is not valid" && (
              <p className="text-red-400">{errorMessage}</p>
            )}
          </>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full rounded-lg border border-gray-500 bg-gray-700"
        />
        {errorMessage === "Email is not valid" && (
          <p className="text-red-400">{errorMessage}</p>
        )}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full rounded-lg border border-gray-500 bg-gray-700"
        />
        {errorMessage === "Password is not valid" && (
          <p className="text-red-400">{errorMessage}</p>
        )}
        <button
          type="submit"
          className="p-3 my-2 w-full rounded-lg border border-gray-500 bg-red-600 cursor-pointer"
          onClick={handleSubmit}
        >
          {isLoginForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-red-400">{error}</p>
        <p className="text-center">OR</p>
        {isLoginForm ? (
          <div className="text-center">
            <Link to="#" className="flex justify-center underline mb-3">
              Forgot password?
            </Link>
            <div
              className="mt-3"
              onClick={() => setIsLoginForm((value) => !value)}
            >
              New to Netflix GPT?
              <p className="cursor-pointer mt-2">Sign Up Now</p>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <span
              className="mt-3"
              onClick={() => setIsLoginForm((value) => !value)}
            >
              Already have an Account?
              <br />
              <p className="cursor-pointer mt-2">Sign In</p>
            </span>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
