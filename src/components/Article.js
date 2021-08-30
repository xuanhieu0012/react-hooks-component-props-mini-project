import React from "react"

function MinutesToRead(minutes){
  const minute = minutes < 30 ? 5 :10;
  const emoji = minutes <30 ? "☕️" : "🍱";
  let displayEmoji ="";
  for (let i = 0; i < minutes; i += minute){
    displayEmoji += emoji
  }
  return displayEmoji
}

function Article({title, date="January 1, 1970", preview, minutes}){
    const emoji = MinutesToRead(minutes)
    return (
      <article>
        <h3>{title}</h3>
        <small>{date} {emoji}{minutes}</small>
        <p>{preview}</p>
    </article>
    )
}

export default Article