import { Link } from "react-router-dom";

function DynamicPage() {
  return (
    <div>
      <p>DynamicPage</p>
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Signup</Link>
    </div>
  );
}

export default DynamicPage;
