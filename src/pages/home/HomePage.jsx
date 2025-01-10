import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div>
        This is HomePage
        <p>Still working on Homepage /:</p>
        <Link to="./search" className="text-blue-300 font-bold">
          click me
        </Link>
      </div>
    </>
  );
}

export default HomePage;
