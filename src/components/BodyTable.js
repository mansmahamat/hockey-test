import React from "react"

function colorChanger(color) {
  switch (color) {
    case "Atlantic Division":
      return "bg-red-300 py-2 px-2"

    case "Central Division":
      return "bg-green-300 py-2 px-2"

    case "Metropolitan Division":
      return "bg-purple-300 py-2 px-2"

    case "Pacific Division":
      return "bg-blue-300 py-2 px-2"

    default:
      return "bg-blue-300 py-2 px-2"
  }
}

function BodyTable({ id, teamName, statsGP, statsW, statsL, statsOTW, group }) {
  return (
    <tr key={id}>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {teamName}
      </td>
      <td className="px-6 py-4  whitespace-nowrap text-sm text-gray-500">
        {statsGP}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {statsW}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {statsL}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {statsOTW}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <span className={` ${colorChanger(group)} text-white`}>{group}</span>
      </td>
    </tr>
  )
}

export default BodyTable
