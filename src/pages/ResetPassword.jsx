import { useEffect } from "react";
import { server } from "../constants/server";
import { notify } from "../components/Notify";
import { useState } from "react";
import useAxiosPatch from "../hooks/useAxiosPatch";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const { data, loading, error, patchData } = useAxiosPatch();

  const { token } = useParams();

  const navigate = useNavigate();

  const [form, setForm] = useState({
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
    patchData(`${server}user/reset-password/${token}`, form);
  };

  useEffect(() => {
    if (error) {
      if (error?.response?.status === 500) {
        notify(error.response.data.error?.message, "error");
      }
      notify(error.response.data.errorMessage, "error");

      console.log(error.response, "error");
    }
    if (data) {
      notify("Password reset was successful. Please log in", "success");
      navigate("/login");
      console.log(data, "data");
    }
  }, [data, error]);

  return (
    <section className="h-auto my-16 flex flex-col items-center justify-center md:mx-36 shadow-sm">
      <div className="h-full px-6 shadow-lg py-7">
        <p className="text-gray-600 font-bold text-3xl text-center pb-4">
          Reset Password
        </p>
        <div className="flex h-full items-center justify-center">
          <div className="md:w-[500px] lg:w-[500px">
            <form>
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
                {loading ? "Restting.." : "Rest Password"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
