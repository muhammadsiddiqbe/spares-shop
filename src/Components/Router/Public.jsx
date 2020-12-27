import { Fragment } from "react";
import { Route } from "react-router-dom";

function Public({ children, ...props }) {
  
  return(
    <Fragment>
      <Route {...props} /> 
    </Fragment>
  )
}

export default Public