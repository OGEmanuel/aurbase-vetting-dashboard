import React from 'react'

const Circle = () => {
  return (
    //  Circle 
    <div
      class=" inline-flex items-center justify-center  rounded-full"
    >
       {/* Building a Progress Ring: https://css-tricks.com/building-progress-ring-quickly/ */}
      <svg class="w-20 h-20">
        <circle
          class="text-gray-300"
          stroke-width="5"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
        />
        <circle
          class="text-blue-600"
          stroke-width="5"
          stroke-dasharray="50"
          stroke-dashoffset="circumference - percent / 100 * 5"
          stroke-linecap="round"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
        />
      </svg>
      <span class="absolute text-xl text-blue-700" x-text="`${percent}%`"></span>
    </div>

  )
}

export default Circle