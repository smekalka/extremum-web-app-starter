import React, {useState} from "react";
import "./login.css";
import config from '../../../../config.json';
import {useNavigate} from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [isError, setIserror] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const details:{[key:string]:string} = {
      client_id: 'crud-test',
      username: e.target.email.value,
      password: e.target.password.value,
      grant_type: 'password'
    };

    let formBody = [];
    for (const property in details) {
      const encodedKey = encodeURIComponent(property);

      const encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    console.log(config,"CONFIG")
    const tokenData = await fetch(
      `${config.url}/realms/extremum/protocol/openid-connect/token`,
      {
        method: 'POST',
        headers: {
          'x-app-id': config['app-id'].toString(),
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody.join("&")
      }
    ).then((res) => {
      if (res.status === 200) {
        setIserror(false);
        return res.json();
      } else if (res.status === 401) {
        setIserror(true);
      }
    });

    if (tokenData) {
      localStorage.setItem('token', JSON.stringify(tokenData));
      navigate("/app");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="LoginContainer">
      <div className="Login">
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Username or email</label>
            <input name="email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          {isError && <div>Incorrect username or password</div>}
          <button className="SignIn">Sign in</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
