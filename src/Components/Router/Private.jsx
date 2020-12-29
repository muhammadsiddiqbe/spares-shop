import { Route } from "react-router-dom";

function Private({ children, ...props }) {
  return(
    <Route {...props} />
  )
}

export default Private