import React from 'react'

const Login = (props) => (
  <div>

    <label>
      Username:
      <input type="text"/>
    </label><br/>
    <label>
      Password:
      <input type="password"/>
    </label><br/>
    <input type="submit" value="Login"/>

  </div>
)

export default Login

