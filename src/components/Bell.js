import React from "react";
import { Popup } from "semantic-ui-react";
import Notifications from "./Notifications";

const Bell = props => {
  const notifications = [
    {
      id: 1,
      message: "Hello there!"
    },
    {
      id: 2,
      message: "Hello there!"
    },
    {
      id: 3,
      message: "Hello there!"
    },
  ];
  return (
    <div className="btn-notification">
       <Popup
        className="notification-wrapper"
        on="click"
        trigger={<i className="fa fa-bell" aria-hidden="true"></i>}
        content={
          <Notifications
            notifications={notifications}
          />
        }
        position="bottom right"
      />
     <sup>
          <sup>
            {props.totalNotification !== 0 ? (
              <span className="unread-notification">
                10
              </span>
            ) : null}
          </sup>
        </sup>
    </div>
  );
};
export default Bell;
