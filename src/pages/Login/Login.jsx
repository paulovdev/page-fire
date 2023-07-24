import "./Login.css";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthGoogleContext } from "../../context/authGoogle";

const Login = () => {
  const { signInGoogle, signed } = useContext(AuthGoogleContext);
  async function handleLoginFromGoogle() {
    await signInGoogle();
  }

  if (!signed) {
    return (<div id="login">
      <div className="grid">
        <button onClick={handleLoginFromGoogle}>Logar com o Google</button>
      </div>
    </div>)
  }
  else {
    return <Navigate to="/home" />;
  }
};

export default Login;
