import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../store';

const Login = () => {
  const [newUsername, setNewUsername] = useState('');
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.value.username);

  return (
    <div>
      <h1>{username}</h1>
      <input onChange={(e) => setNewUsername(e.target.value)} />
      <button type="button" onClick={() => dispatch(login({ username: newUsername }))}>Login</button>
      <button type="button" onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Login;
