import { Link } from "react-router-dom";
import { Plant } from "../types/PlantType";

export default function ShelfPage() {
  const plantsJson = localStorage.getItem("plants");
  const plants: Plant[] = plantsJson ? JSON.parse(plantsJson) : [];

  return (
    <>
      <div className="p-10">
        <h1 className="text-2xl md:text-4xl font-extrabold text-left w-full text-stone-800">
          My shelf
        </h1>
      </div>
      <div className="flex flex-wrap justify-between md:justify-start items-start gap-2 px-10 h-[56%] overflow-auto relative z-40">
        <Link
          to="add-plant"
          className="flex items-center justify-center w-24 h-16 bg-bottleg-dark text-center text-white rounded-lg shadow-lg hover:bg-bottleg-darker active:bg-bottleg-dark transition-all duration-200"
        >
          +
        </Link>
        {plants?.map((plant) => (
          <Link
            to={`edit-plant/${plant.id}`}
            key={plant.id}
            className="flex items-center justify-center w-24 h-16 bg-bottleg-dark text-center text-white rounded-lg shadow-lg hover:bg-bottleg-darker active:bg-bottleg-dark transition-all duration-200"
          >
            {plant.name}
          </Link>
        ))}
      </div>
    </>
  );
}

