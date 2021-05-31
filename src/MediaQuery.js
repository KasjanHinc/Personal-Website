import { createContext } from "react"

// CONTEXT MEDIA QUERY USED TO TURN OFF TILT FEATURE GLOBALLY
export const MediaQuery = createContext({
  mediaQuery: null,
  setMediaQuery: () => { },
});