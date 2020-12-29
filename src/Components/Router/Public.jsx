import { Route } from "react-router-dom";

function Public({ children, ...props }) {
  return(
    <Route {...props} />
  )
}

export default Public