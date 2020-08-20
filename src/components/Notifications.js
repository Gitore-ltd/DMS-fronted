import React from "react"
import Img from "../assets/images/avatar.png"
import "../assets/styles/components/Notifications.css"

const Notifications = (props) => {
  return (
    <>
      {props.notifications !== undefined
        ? props.notifications.map((notify) => (
            <a className="notification" key={notify.id} href={notify.url}>
              <div className="notification-details">
                <div className="notification-img">
                  <img src={Img} alt="" />
                </div>
                <div className="notification-info">
                  <div className="notification-msg">{notify.message}</div>
                  <div className="notification-time">{notify.createdAt}</div>
                </div>
              </div>
            </a>
          ))
        : null}
    </>
  )
}

export default Notifications
