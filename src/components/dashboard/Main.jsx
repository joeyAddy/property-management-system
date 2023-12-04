import { CiChat1, CiLocationOn } from "react-icons/ci";
import { FaPenFancy, FaThumbsUp } from "react-icons/fa";
import Messages from "./Messages";
import avatar from "../../assets/images/agent4.jpg";
import avatar2 from "../../assets/images/agent3.jpg";
import useAuthContext from "../../hooks/useAuthContext";

const Main = () => {
  const { cookieUser } = useAuthContext();

  return (
    <div className="space-y-6">
      <div className="p-6 shadow-round">
        <p className="font-bold text-xl">Manage Dashboard</p>
        <div className="grid lg:grid-cols-3 gap-8 mt-2">
          <div className="col-span-1 flex flex-row items-center">
            <div className="pr-2 mr-3 border-r border-solid">
              <CiLocationOn className="text-3xl text-blue-400" />
            </div>
            <div className="">
              <p className="font-bold">12</p>
              <p className="text-gray-400 text-sm">Listings</p>
            </div>
          </div>
          <div className="col-span-1 flex flex-row items-center">
            <div className="pr-2 mr-3 border-r border-solid">
              <FaThumbsUp className="text-3xl text-blue-400" />
            </div>
            <div className="">
              <p className="font-bold">30</p>
              <p className="text-gray-400 text-sm">Reviews</p>
            </div>
          </div>
          <div className="col-span-1 flex flex-row items-center">
            <div className="pr-2 mr-3 border-r border-solid">
              <CiChat1 className="text-3xl text-blue-400" />
            </div>
            <div className="">
              <p className="font-bold">18</p>
              <p className="text-gray-400 text-sm">Messages</p>
            </div>
          </div>
        </div>
      </div>
      {cookieUser.role === "agent" && (
        <div className="p-6 shadow-round">
          <p className="font-bold text-xl">Listing</p>
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          Listing Name
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Rating
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Edit
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Amazing oceanfront apartment
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          17 May 2018
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">4.3</td>
                        <td className="whitespace-nowrap px-6 py-4">Active</td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <FaPenFancy className="text-blue-400" />
                        </td>
                      </tr>
                      <tr className="border-b bg-white dark:border-neutral-500 dark:bg-neutral-600">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Red Blue Restaurant
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          17 May 2018
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">4.5</td>
                        <td className="whitespace-nowrap px-6 py-4">Active</td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <FaPenFancy className="text-blue-400" />
                        </td>
                      </tr>
                      <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Amazing oceanfront apartment
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          12 June 2018
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">4.3</td>
                        <td className="whitespace-nowrap px-6 py-4">
                          Non-active
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <FaPenFancy className="text-blue-400" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="p-6 shadow-round">
        <p className="font-bold text-xl mb-5">Messages</p>
        <div className="space-y-6">
          <Messages
            name="Goodness Omenuko"
            image={avatar}
            time="4 Minutes"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore"
          />
          <Messages
            name="Kate Jim"
            image={avatar2}
            time="10 Minutes"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore"
            status="Unread"
          />
        </div>
      </div>
      {cookieUser.role === "agent" && (
        <div className="p-6 shadow-round">
          <p className="font-bold text-xl mb-5">Reviews</p>
          <div className="space-y-6">
            <Messages
              name="Goodness Omenuko"
              image={avatar}
              time="4 Minutes"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore"
            />
            <Messages
              name="Kate Jim"
              image={avatar2}
              time="10 Minutes"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore"
              status="Unread"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
