import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex-col hero-signup-container">
      <span>
        Ready to watch? Enter your email to create or restart your membership.
      </span>
      <div className="flex hero-form-container">
        <input type="text" placeholder="Email address" />
        <Link to="/Movies">
          <button>{"Get Started >"}</button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
