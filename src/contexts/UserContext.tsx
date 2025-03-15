import React, { createContext, useReducer, ReactNode } from "react";
interface UserState {
  token: string;
  email: string;
  userId: string;
}

interface UserAction {
  type: "SET_USER";
  payload: UserState;
}

const initialState: UserState = {
  email: "",
  token: "",
  userId: "",
};

const UserContext = createContext<{
  state: UserState;
  dispatch: React.Dispatch<UserAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        email: action.payload.email,
        token: action.payload.token,
        userId: action.payload.userId,
      };
    default:
      return state;
  }
};

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
