import { useState, useEffect } from "react";
import { server } from "../constants/server";
import useAxiosPost from "../hooks/useAxiosPost";
import { notify } from "../components/Notify";
import { FaCheckCircle } from "react-icons/fa";

const ForgotPassword = () => {
  const { data, loading, error, postData } = useAxiosPost();

  const [email, setEmail] = useState("");

  const handleFormChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    postData(`${server}user/forgot-password`, { email });
  };

  useEffect(() => {
    if (error) {
      if (error?.response?.status === 500) {
        notify(error.response.data.error?.message, "error");
      }
      notify(error.response.data.errorMessage, "error");

      console.log(error, "error");
    }
    if (data) {
      notify(
        `A password reset email has been sent this email. Check your inbox and reset your password`,
        "success"
      );

      console.log(data.data, "data");
    }
  }, [data, error]);
  return (
    <section className="h-auto my-16 flex flex-col items-center justify-center md:mx-36 shadow-sm">
      <div className="h-full px-6 shadow-lg py-7">
        <p className="text-gray-600 font-bold text-3xl text-center mb-4">
          Forgot password
        </p>
        {data && !loading && (
          <div className="flex items-center justify-center space-x-4 w-full pb-4">
            <FaCheckCircle className="text-7xl text-green-600" />
            <p className="font-bold w-1/2 text-lg">
              A password reset email has been sent this email. Check your inbox
              and reset your password
            </p>
          </div>
        )}
        <div className="flex h-full items-center justify-center">
          <div className="md:w-[500px] lg:w-[500px">
            <form>
              <div className="p-4 border-2 rounded mb-6">
                <input
                  className="outline-none w-full"
                  type="email"
                  name="email"
                  value={email}
                  required
                  onChange={handleFormChange}
                  placeholder="Email"
                />
              </div>
              <button
                onClick={handleSubmit}
                type="submit"
                className=" bg-blue-600 inline-block w-full rounded px-7 py-4 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                {loading ? "Please wait..." : "Reset Password"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
