import React, { useState } from "react";
import { authService } from "../firebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    let data;
    if (newAccount) {
      data = await createUserWithEmailAndPassword(authService, email, password);
    } else {
      data = await signInWithEmailAndPassword(authService, email, password);
    }
    console.log(data);
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Email"
          onChange={emailHandler}
          value={email}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={passwordHandler}
          value={password}
        />
        <input
          type="submit"
          value={newAccount ? "create new Account" : "Log in"}
        />
      </form>
      <div>
        <button>Continue with Google</button>
      </div>
    </div>
  );
};

export default Auth;
