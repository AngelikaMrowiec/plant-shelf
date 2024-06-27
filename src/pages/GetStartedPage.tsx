import { Link, useNavigate } from "react-router-dom";

export default function GetStartedPage() {
  const navigate = useNavigate();

  const handleDismiss = () => {
    localStorage.setItem("hasSeenGreeting", "true");
    navigate("/");
  };

  return (
    <div className="bg-[url('src/assets/small-bg2.png')] md:bg-[url('src/assets/mid-bg.png')] bg-fixed bg-cover bg-center h-dvh w-full flex items-center justify-center">
      <div className="bg-white bg-opacity-50 p-4 rounded-xl shadow-2xl max-w-2xl px-20 flex flex-col items-center">
        <p className="text-3xl font-extrabold text-gray-800 text-center mt-10">
          Are your plants not in the best shape?
        </p>
        <p className="text-xl font-bold text-gray-700 text-center mb-10">
          Do you constantly forget to water and fertilize them? Let us start
          scheduling plant care so they can thrive and strive for their best
          growing potential!
        </p>
        <Link to="/shelf" onClick={handleDismiss}>
          <div className="m-10 w-40 h-12 bg-bottleg-dark text-center font-medium text-white flex items-center justify-center rounded-full shadow-lg hover:bg-bottleg-darker hover:text-stone-100 active:bg-bottleg-dark transition-all duration-200">
            GET STARTED
          </div>
        </Link>
      </div>
    </div>
  );
}
