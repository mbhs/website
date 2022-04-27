

const CalendarCard = ({ children, date}) => {
  return (
    <div className='m-1 border-2 rounded-md p-2 bg-white'>
      <p className='font-bold mb-1'>{date}</p>
      { children }
    </div>
  )
}

export default CalendarCard;