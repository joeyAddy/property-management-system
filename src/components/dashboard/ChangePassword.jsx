const ChangePassword = () => {
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
            name="password"
            id="password"
            placeholder="Current Password"
            className="border border-solid py-2 px-4 rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="newPassword" className="text-sm">
            New Password
          </label>
          <input
            type="password"
            name="newPassword"
            id="newPassword"
            placeholder="New Password"
            className="border border-solid py-2 px-4 rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="confirmNewPassword" className="text-sm">
            Confirm New Password
          </label>
          <input
            type="password"
            name="confirmNewPassword"
            id="confirmNewPassword"
            placeholder="Confirm New Password"
            className="border border-solid py-2 px-4 rounded-md"
          />
        </div>
        <button className="py-3 px-5 hover:drop-shadow-xl text-white uppercase font-medium rounded-md bg-blue-400">
          Send Update
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
