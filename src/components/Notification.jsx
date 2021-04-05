const Notification = ({ message }) => {
  if (message === null) {
    return message
  }

  return (
    <div className='error'>
      {message}
    </div>
  )
}
export default Notification