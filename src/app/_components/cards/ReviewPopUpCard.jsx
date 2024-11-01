function ReviewPopUpCard({ onClose }) {
  return (
    <div>
      <div class=" bg-transparent md:mt-44  bg-gray-100 md:left-[600px] w-[400px] top-0 md:w-[560px] absolute  mx-auto  flex flex-col justify-center ">
        <div class="py-3 sm:max-w-xl sm:mx-auto">
          <div class="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg p-10">
            <div class="px-12 text-center pt-10">
              <h2 class="text-gray-800 text-2xl font-bold">
                Write a Review and Give a Rating
              </h2>
            </div>
            <div class="w-full flex flex-col ">
              <div class="flex flex-col  py-6 space-y-1 ">
                <span class="text-[15px] font-bold text-gray-800">Rating</span>
                <div class="flex space-x-1 bg-[#FF990014] px-20 py-2">
                  <svg
                    class="w-12 h-12 text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    class="w-12 h-12 text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    class="w-12 h-12 text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    class="w-12 h-12 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    class="w-12 h-12 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <div class="w-full flex flex-col">
                <span class="text-[15px] font-bold text-gray-800 mb-1">
                  Review
                </span>
                <textarea
                  rows="3"
                  class=" text-gray-500 rounded-md  border w-full border-[#DD2509] p-6"
                >
                  An Amazing welcome to my first time in Rome, a eficiently way
                  to enjoy and eficiently transported thru the main atraction of
                  Rome in one day. Lovely way you can explore en your own the
                  areas and come back and catch the bus back safely. I WILL DOIT
                  AGAIN IN THE SAME WAY.
                </textarea>
              </div>
              <div className="flex items-center justify-center gap-4">
                <button onClick={ onClose } class="py-3 px-10 my-8 text-lg bg-[#010A151A] border  text-black rounded-xl text-[15px] font-bold">
                  Cancel
                </button>
                <button class="py-3 px-10 my-8 text-lg bg-[#DD2509]  text-white rounded-xl text-[15px] font-bold">
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewPopUpCard;
