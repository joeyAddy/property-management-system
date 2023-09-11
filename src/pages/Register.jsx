import { useState } from "react";
import { Link } from "react-router-dom";
import { server } from "../constants/server";
import useAxiosPost from "../hooks/useAxiosPost";
import { useEffect } from "react";
import { notify } from "../components/Notify";

const Register = () => {
  const { data, loading, error, postData } = useAxiosPost();

  // const [user, setUser] = useState();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirm: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form) return;
    postData(`${server}user/signup`, form);
  };

  useEffect(() => {
    if (error) {
      if (error?.response.status === 500) {
        notify(error.response.data.error?.message, "error");
      }
      notify(error.response.data.errorMessage, "error");

      console.log(error.response, "error");
    }
    if (data) {
      notify(
        "You have succesfully created your account. Logging you in",
        "success"
      );
      console.log(data, "data");
    }
  }, [data, error]);

  return (
    <section className="h-auto my-16 flex flex-col items-center justify-center md:mx-36 shadow-sm">
      <div className="h-full px-6 shadow-lg py-7">
        <p className="text-gray-600 font-bold text-3xl text-center ">
          Register
        </p>
        <p className="text-gray-600 font-bold text-base text-center py-4">
          Already have an account?{" "}
          <Link className="text-blue-600 font-extrabold" to="/login">
            Login
          </Link>
        </p>
        <div className="flex h-full items-center justify-center">
          <div className="md:w-[500px] lg:w-[500px">
            <form>
              <div className="p-4 border-2 rounded mb-6">
                <input
                  className="w-full outline-none"
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  required
                  onChange={handleFormChange}
                  placeholder="Full Name"
                />
              </div>
              <div className="p-4 border-2 rounded mb-6">
                <input
                  className="w-full outline-none"
                  type="email"
                  name="email"
                  value={form.email}
                  required
                  onChange={handleFormChange}
                  placeholder="Email"
                />
              </div>
              <div className="p-4 border-2 rounded mb-6">
                <input
                  className="w-full outline-none"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  required
                  onChange={handleFormChange}
                  placeholder="Phone Number"
                />
              </div>
              <div className="p-4 border-2 rounded mb-6">
                <input
                  className="w-full outline-none"
                  type="password"
                  name="password"
                  value={form.password}
                  required
                  onChange={handleFormChange}
                  placeholder="Password"
                />
              </div>
              <div className="p-4 border-2 rounded mb-6">
                <input
                  className="w-full outline-none"
                  type="password"
                  name="passwordConfirm"
                  value={form.passwordConfirm}
                  required
                  onChange={handleFormChange}
                  placeholder="Confirm Password"
                />
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                className=" bg-blue-600 inline-block w-full rounded px-7 py-4 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                {loading ? "Registering..." : "Sign Up"}
              </button>

              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                  OR
                </p>
              </div>

              <Link
                className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 py-4 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                style={{ backgroundColor: "#3b5998" }}
                to="#!"
                role="button"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                Continue with Facebook
              </Link>
              <Link
                className="mb-3 flex w-full items-center justify-center rounded bg-info px-7 py-4 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                style={{ backgroundColor: "#55acee" }}
                to="#!"
                role="button"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
                Continue with Twitter
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
