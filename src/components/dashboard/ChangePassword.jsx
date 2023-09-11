import { useEffect } from "react";
import { server } from "../../constants/server";
import { notify } from "../Notify";
import { useState } from "react";
import useAxiosPatch from "../../hooks/useAxiosPatch";

const ChangePassword = () => {
  const { data, loading, error, patchData } = useAxiosPatch();

  const [form, setForm] = useState({
    passwordCurrent: "",
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
    patchData(`${server}user/update-password`, form);
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
      notify("Password was changed successful.", "success");
      setForm({
        ...form,
        password: "",
        passwordConfirm: "",
        passwordCurrent: "",
      });
      console.log(data, "data");
    }
  }, [data, error]);

  return (
    <div className="p-6 shadow-round">
      <p className="font-bold text-xl uppercase">My account</p>
      <form action="" className="mt-5 space-y-5">
        <div className="flex flex-col space-y-2">
          <label htmlFor="password" className="text-sm">
            Current Password
          </label>
          <input
            type="password"
            name="passwordCurrent"
            id="passwordCurrent"
            value={form.passwordCurrent}
            required
            onChange={handleFormChange}
            placeholder="Current Password"
            className="border border-solid py-2 px-4 rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="password" className="text-sm">
            New Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={form.password}
            required
            onChange={handleFormChange}
            placeholder="New Password"
            className="border border-solid py-2 px-4 rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="passwordConfirm" className="text-sm">
            Confirm New Password
          </label>
          <input
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            value={form.passwordConfirm}
            required
            onChange={handleFormChange}
            placeholder="Confirm New Password"
            className="border border-solid py-2 px-4 rounded-md"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="py-3 px-5 hover:drop-shadow-xl text-white uppercase font-medium rounded-md bg-blue-400"
        >
          {loading ? "updating..." : "Send Update"}
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
