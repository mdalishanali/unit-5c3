import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
        <Link to={"section/history"}>{<button>History</button>}</Link>
        <Link to={"section/mystery"}>{<button>Mystery</button>}</Link>
        <Link to={"section/mythology"}>{<button>Mythology</button>}</Link>
        <Link to={"section/technology"}>{<button>Technology</button>}</Link>
      </div>
    </>
  );
};
