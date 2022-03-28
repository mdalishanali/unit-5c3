import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
     

        <Link to={"section/history"}>
          {<button className="history">History</button>}
        </Link>
        <Link to={"section/mystery"}>
          {<button className="mystery">Mystery</button>}
        </Link>
        <Link to={"section/mythology"}>
          {<button className="mythology">Mythology</button>}
        </Link>
        <Link to={"section/technology"}>
          {<button className="technology">Technology</button>}
        </Link>
        <Link to={"/"}>{<button className="home">Home</button>}</Link>
      </div>
    </>
  );
};
