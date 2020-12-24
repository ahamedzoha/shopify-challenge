import React, { createContext, useReducer, useContext } from "react";
import { v4 } from "uuid";
import Notification from "./Notification";
import "./styles/notification.styles.scss";

export const NotificationContext = createContext(undefined);

const NotificationProvider = (props) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_NOTIFICATION":
        return [...state, { ...action.payload }];
      case "REMOVE_NOTIFICATION":
        return state.filter((el) => el.id !== action.id);
      default:
        return state;
    }
  }, []);
  return (
    <NotificationContext.Provider value={dispatch}>
      <div className="notification-wrapper">
        {state.map((note) => (
          <Notification dispatch={dispatch} key={note.id} {...note} />
        ))}
      </div>
      {props.children}
    </NotificationContext.Provider>
  );
};
export const useNotification = () => {
  const dispatch = useContext(NotificationContext);
  if (dispatch === undefined) {
    throw new Error(`Context Provider is missing`);
  }
  return (props) => {
    dispatch({
      type: "ADD_NOTIFICATION",
      payload: {
        id: v4(),
        ...props,
      },
    });
  };
};

export default NotificationProvider;
