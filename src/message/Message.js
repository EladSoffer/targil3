function Message({ side, content, time, color }) {
  const currentTime = new Date();
  const messageTime = new Date(time);
  let formattedTime;

  if (
    currentTime.getFullYear() === messageTime.getFullYear() &&
    currentTime.getMonth() === messageTime.getMonth() &&
    currentTime.getDate() === messageTime.getDate()
  ) {
    // If the message is from today, display only the hour
    formattedTime = messageTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  } else {
    // If the message is from a different day, display only the date
    formattedTime = messageTime.toLocaleDateString();
  }

  return (
    <div className="d-flex flex-row justify-content-start mb-4 mr-8 ms">
      <div
        className={`p-3 text-white ${side}`}
        style={{
          borderRadius: 15,
          display: "inline-block",
          backgroundColor: color
        }}
      >
        <p className="small mb-0">{content}</p>
        <p className="small mb-0 mesTime">{formattedTime}</p>
      </div>
    </div>
  );
}

  
export default Message;
