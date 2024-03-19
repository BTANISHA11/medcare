import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/mediaquery.scss";
import SignIn from "./SignIn";
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from "./firebase";
import HomePage from "./HomePage";

function App() {

  const[user] = useAuthState(auth)
  return (
    <>
      {user ? <HomePage/> : <SignIn/>}
    </>
  );
}

export default App;