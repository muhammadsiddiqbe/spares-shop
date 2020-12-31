import { Fragment } from "react";
import { Redirect } from "react-router-dom";

function LoginPage() {
  function LoginToAccount() {
    localStorage.setItem('token', true)

    return <Redirect to='/' />
  }

  
  return(
    <Fragment>
      <button className='center' onClick={ LoginToAccount }>Login</button>
    </Fragment>
  )
}

export default LoginPage