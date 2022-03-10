import { createContext } from "react";

const initialState = {
  setBase: () => null,
}

const StateContext = createContext(initialState);

export default StateContext