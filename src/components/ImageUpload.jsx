// import React from 'react'

// const ImageUpload = () => {
//   return (
//     <div className="space-y-4">
//       <label className="block text-sm font-medium text-gray-700">
//         Upload Photo
//       </label>
//       <div className="flex items-center space-x-4">
//         {form.photo ? (
//           <img
//             src={form.photo}
//             alt="Selected"
//             className="w-32 h-32 object-cover rounded-lg border border-gray-300"
//           />
//         ) : (
//           <div className="w-32 h-32 bg-gray-100 border border-gray-300 rounded-lg">
//             <label
//               htmlFor="imageInput"
//               className="cursor-pointer text-gray-600 hover:text-gray-800 text-center w-full h-full flex flex-col items-center justify-center"
//             >
//               <span className="text-lg">+</span>
//               <span className="mt-2 block text-xs">Upload Photo</span>
//             </label>
//           </div>
//         )}
//         <input
//           type="file"
//           id="imageInput"
//           name="photo"
//           accept="image/*"
//           onChange={handleChange}
//           className="hidden"
//         />
//       </div>
//       {form.photo && (
//         <button
//           onClick={() => setForm({ ...form, photo: null })}
//           className="text-red-500 hover:text-red-700"
//         >
//           Remove Image
//         </button>
//       )}
//     </div>
//   );
// }

// export default ImageUpload
