

const CalendarCard = ({ children, date}) => {
  return (
    <div className='m-2 border-2 rounded-md p-6'>
      <p className='font-bold mb-2'>{date}</p>
      { children }
    </div>
  )
}

export default CalendarCard;