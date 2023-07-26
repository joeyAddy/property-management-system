const Profile = () => {
  return (
    <div className="p-6 shadow-round">
      <p className="font-bold text-xl uppercase">My account</p>
      <form action="" className="mt-5 space-y-5">
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-sm">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            className="border border-solid py-2 px-4 rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="title" className="text-sm">
            Your Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            className="border border-solid py-2 px-4 rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="phone" className="text-sm">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone"
            className="border border-solid py-2 px-4 rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="border border-solid py-2 px-4 rounded-md"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="about" className="text-sm">
            About Me
          </label>
          <textarea
            rows={5}
            name="about"
            id="about"
            placeholder="About Me"
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

export default Profile;
