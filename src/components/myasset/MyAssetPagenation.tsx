import React from 'react'

export const MyAssetPagenation = () => {
  return (
    <nav className=" mb-5 mt-5 flex justify-center border-b border-transparent-navy-30 pb-8">
      <ul className="inline-flex gap-3 -space-x-px">
        <li>
          <a
            href="#"
            className="ml-0 rounded px-3 py-2 leading-tight text-gray-500
             hover:bg-gray-100 hover:text-gray-700 "
          >
            prev
          </a>
        </li>
        <li>
          <a
            href="#"
            className=" rounded px-3 py-2 leading-tight text-gray-500
             hover:bg-gray-100 hover:text-gray-700 "
          >
            1
          </a>
        </li>
        <li>
          <a
            href="#"
            className="ml-0 rounded px-3 py-2 leading-tight text-gray-500
             hover:bg-gray-100 hover:text-gray-700 "
          >
            2
          </a>
        </li>
        <li>
          <a
            href="#"
            className="ml-0 rounded px-3 py-2 leading-tight text-gray-500
             hover:bg-gray-100 hover:text-gray-700 "
          >
            3
          </a>
        </li>

        <li>
          <a
            href="#"
            className="ml-0 rounded px-3 py-2 leading-tight text-gray-500
             hover:bg-gray-100 hover:text-gray-700 "
          >
            next
          </a>
        </li>
      </ul>
    </nav>
  )
}
