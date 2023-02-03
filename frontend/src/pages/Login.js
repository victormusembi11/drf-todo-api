import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import authService from '../services/auth.service';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

//   const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await authService.login(
        username,
        password
      )
      .then(() => {
        //   navigate('/');
          window.location.reload();
          console.log('success');
        },
        (error) => {
            console.log(error);
        }
      );
    } catch (err) {
        console.log(err);
    }
  }

  return (
    <div className='container'>
    <form onSubmit={handleLogin}>
      <div className="mb-3">
        <label className="form-label">Username</label>
        <input
          type="text"
          className="form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
    </div>
    <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
    </div>
    <button type="submit" name="submit" className="btn btn-primary">Login</button>
    </form>
    </div>
  )
}

export default Login