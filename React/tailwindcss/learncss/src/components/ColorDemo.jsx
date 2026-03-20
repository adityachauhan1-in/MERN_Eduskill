import React from "react";

function ColorDemo () {
    return (
        <>
        <div className="p-8">
            <h1 className="text-2xl font-extrabold text-green-400 mb-5"> Brand Demo Color </h1>
            <p className="text-lg text-red-400 mb-4 ">
This section use custom brand color
            </p>
              <button className='px-6 py-3 rounded-lg text-white font-semibold mr-4 bg-brand-primary'>
        Primary Button
      </button>

      <button className='px-6 py-3 rounded-lg text-white font-semibold bg-brand-secondary'>
        Secondary Button
      </button>
         <div className='mt-8 p-4 rounded-md bg-brand-primary text-white'>
        Using custom class: bg-brand-primary
      </div>

      <div className='mt-4 p-4 rounded-md bg-brand-secondary text-white'>
        Using custom class: bg-brand-secondary
      </div>
        </div>
        </>
    )
}
export default ColorDemo