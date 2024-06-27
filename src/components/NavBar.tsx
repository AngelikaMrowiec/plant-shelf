import { Link } from "react-router-dom";
import { PiPottedPlant, PiCalendarDots } from "react-icons/pi";
import mid from "../assets/mid.png";
import left from "../assets/left.png";
import right from "../assets/right.png";

export default function NavBar() {
  return (
    <>
      <div className="relative pointer-events-none">
        <img src={mid} className="fixed -bottom-6 right-32 w-32 z-30 xs:right-36" />
        <img src={left} className="fixed bottom-14 left-8 w-40 z-20 xs:left-12" />
        <img src={right} className="fixed bottom-14 right-1 w-64 z-20 xs:right-4" />
      </div>
      <div className="fixed bottom-0 left-0 right-0 flex justify-around items-center w-full h-16 bg-neutral-400 z-10">
        <Link to="/shelf" className="z-40">
          <PiPottedPlant
            size="30"
            color="white"
            className="transition duration-300 ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-110"
          />
        </Link>
        <Link to="shelf/calendar" className="z-40">
          <PiCalendarDots
            size="30"
            color="white"
            className="transition duration-300 ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-110"
          />
        </Link>
      </div>
    </>
  );
}
