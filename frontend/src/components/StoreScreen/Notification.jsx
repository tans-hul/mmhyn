const Notification = ({ num, className }) => {
  return (
    <div
      className={`flex items-center justify-center rounded-full ${className}`}
    >
      {num}
    </div>
  )
}

export default Notification
