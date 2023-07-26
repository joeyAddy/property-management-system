import SectionTitle from "./SectionTitle";
import { Carousel } from "react-responsive-carousel";

const Testimonials = () => {
  return (
    <section className="h-auto mt-10 mx-6 md:mx-36 ">
      <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
        <SectionTitle title="Testimonials" />
        <h4 className="text-lg text-gray-400 text-center -mt-9 mb-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </h4>
      </div>
      <div className="mt-5">
        <Carousel
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            if (isSelected) {
              return (
                <li
                  className="shadow-md shadow-blue-900 rounded-full bg-blue-600 border-2 border-blue-600 h-4 w-4 inline-block mx-2"
                  aria-label={`Selected: ${label} ${index + 1}`}
                  title={`Selected: ${label} ${index + 1}`}
                />
              );
            }
            return (
              <li
                className="shadow-md shadow-blue-900 rounded-full bg-white border-2 border-blue-600 h-4 w-4 inline-block"
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                title={`${label} ${index + 1}`}
                aria-label={`${label} ${index + 1}`}
              />
            );
          }}
        >
          <div className="grid gap-6 text-center md:grid-cols-3 mb-20 md:mx-5">
            <div>
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
                <div className="mx-auto -mt-12 w-24 h-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                  <img
                    src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                    loading="lazy"
                    alt="avatar"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h4 className="mb-4 text-2xl font-semibold text-gray-600">
                    Maria Smantha
                  </h4>
                  <hr />
                  <p className="mt-4 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="inline-block h-7 w-7 pr-2 text-gray-600"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                    </svg>
                    Lorem ipsum dolor sit amet eos adipisci, consectetur
                    adipisicing elit.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                <div className="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
                <div className="mx-auto -mt-12 w-24 h-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                  <img
                    src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                    loading="lazy"
                    alt="avatar"
                  />
                </div>
                <div className="p-6">
                  <h4 className="mb-4 text-2xl font-semibold text-gray-600">
                    Lisa Cudrow
                  </h4>
                  <hr />
                  <p className="mt-4 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="inline-block h-7 w-7 pr-2 text-gray-600"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                    </svg>
                    Neque cupiditate assumenda in maiores repudi mollitia
                    architecto.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                <div className="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
                <div className="mx-auto -mt-12 w-24 h-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                  <img
                    src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                    loading="lazy"
                    alt="avatar"
                  />
                </div>
                <div className="p-6">
                  <h4 className="mb-4 text-2xl font-semibold text-gray-600">
                    John Smith
                  </h4>
                  <hr />
                  <p className="mt-4 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="inline-block h-7 w-7 pr-2 text-gray-600"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                    </svg>
                    Delectus impedit saepe officiis ab aliquam repellat rem unde
                    ducimus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-6 text-center md:grid-cols-3 mb-20 mx-5">
            <div>
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
                <div className="mx-auto -mt-12 w-24 h-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                  <img
                    src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                    loading="lazy"
                    alt="avatar"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h4 className="mb-4 text-2xl font-semibold text-gray-600">
                    Maria Smantha
                  </h4>
                  <hr />
                  <p className="mt-4 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="inline-block h-7 w-7 pr-2 text-gray-600"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                    </svg>
                    Lorem ipsum dolor sit amet eos adipisci, consectetur
                    adipisicing elit.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                <div className="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
                <div className="mx-auto -mt-12 w-24 h-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                  <img
                    src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                    loading="lazy"
                    alt="avatar"
                  />
                </div>
                <div className="p-6">
                  <h4 className="mb-4 text-2xl font-semibold text-gray-600">
                    Lisa Cudrow
                  </h4>
                  <hr />
                  <p className="mt-4 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="inline-block h-7 w-7 pr-2 text-gray-600"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                    </svg>
                    Neque cupiditate assumenda in maiores repudi mollitia
                    architecto.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                <div className="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
                <div className="mx-auto -mt-12 w-24 h-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                  <img
                    src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                    loading="lazy"
                    alt="avatar"
                  />
                </div>
                <div className="p-6">
                  <h4 className="mb-4 text-2xl font-semibold text-gray-600">
                    John Smith
                  </h4>
                  <hr />
                  <p className="mt-4 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="inline-block h-7 w-7 pr-2 text-gray-600"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                    </svg>
                    Delectus impedit saepe officiis ab aliquam repellat rem unde
                    ducimus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
