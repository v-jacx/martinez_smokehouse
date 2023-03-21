import React from 'react'

export const InstructionCard = (props) => {
    const {instruction} = props
    console.log(instruction)

  return (
    <div class='w-[95%] bg-slate-200 h-content self-center p-4 rounded-lg text-center uppercase'>
        {instruction}
    </div>
  )
}
