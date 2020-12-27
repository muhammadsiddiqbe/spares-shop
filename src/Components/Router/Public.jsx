import { Fragment } from "react";
import { Switch ,Route } from "react-router-dom";

function Public({ children, ...props }) {
  
  return(
    <Fragment>
      <Switch>
        <Route { ...props } /> 
      </Switch>

    </Fragment>
  )
}

export default Public