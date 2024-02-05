import { Link } from "react-router-dom";

function WebPage() {
  return (
    <div>
      <p>WebPage</p>
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Signup</Link>
    </div>
  );
}

export default WebPage;
