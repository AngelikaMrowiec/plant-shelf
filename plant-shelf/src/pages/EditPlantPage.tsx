import { useParams, redirect, Link } from "react-router-dom";
import { Plant } from "../types/PlantType";
import FormWrap from "../components/FormWrap";
import HeadWrap from "../components/HeadWrap";
import TextWrap from "../components/TextWrap";
import Button from "../components/Button";

export default function EditPlantPage() {
  const params = useParams<{ plantId: string }>();
  const plantsJson = localStorage.getItem("plants");
  const plants: Plant[] = plantsJson ? JSON.parse(plantsJson) : [];
  const plant = plants.find((plant) => plant.id === params.plantId);

  return (
    <FormWrap method="patch">
      <div className="flex flex-col justify-center items-center w-full max-w-md p-4 space-y-6">
        <input className="hidden" name="id" defaultValue={plant?.id} />
        <HeadWrap
          id="plantName"
          htmlFor="plantName"
          name="plantName"
          type="text"
          defaultValue={plant?.name}
        >
          Plant Name
        </HeadWrap>

        <TextWrap
          id="plantDescription"
          htmlFor="plantDescription"
          name="plantDescription"
          defaultValue={plant?.description}
        >
          Description
        </TextWrap>
      </div>
      <div className="w-full flex justify-around mt-6 md:px-20">
        <Link
          to={`/shelf/delete-plant/${plant?.id}`}
          className="flex items-center justify-center w-28 h-12 bg-bottleg-dark font-medium text-white rounded-full shadow-xl hover:bg-bottleg-darker hover:text-stone-100 active:bg-bottleg-dark transition-all duration-200"
          >
          DELETE
        </Link>
        <Button type="submit" value="edit" name="intent">
          SAVE
        </Button>
      </div>
    </FormWrap>
  );
}

type RequestProps = {
  request: Request;
};
export async function action({ request }: RequestProps) {
  const formData = await request.formData();
  const intent = formData.get("intent") as string;

  if (intent === "edit") {
    const plantId = formData.get("id") as string;
    const plantName = formData.get("plantName") as string;
    const plantDescription = formData.get("plantDescription") as string;

    const oldPlantsJson = localStorage.getItem("plants") as string | null;
    const oldPlants: Plant[] =
      oldPlantsJson === null ? [] : JSON.parse(oldPlantsJson);

    const newPlants = oldPlants.map((plant) =>
      plant.id === plantId
        ? { ...plant, name: plantName, description: plantDescription }
        : plant
    );
    localStorage.setItem("plants", JSON.stringify(newPlants));
  }
  // } else if (intent === "delete") {
  //   const plantId = formData.get("id") as string;

  //   const oldPlantsJson = localStorage.getItem("plants") as string | null;
  //   const oldPlants: Plant[] =
  //     oldPlantsJson === null ? [] : JSON.parse(oldPlantsJson);

  //   const newPlants = oldPlants.filter((plant) => plant.id !== plantId);
  //   localStorage.setItem("plants", JSON.stringify(newPlants));
  // }

  return redirect("/shelf");
}
