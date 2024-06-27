import { useParams, redirect } from "react-router-dom";
import { Plant } from "../types/PlantType";
import FormWrap from "../components/FormWrap";
import Button from "../components/Button";

export default function DeletePlantPage() {
  const params = useParams<{ plantId: string }>();
  const plantsJson = localStorage.getItem("plants");
  const plants: Plant[] = plantsJson ? JSON.parse(plantsJson) : [];
  const plant = plants.find((plant) => plant.id === params.plantId);

  return (
    <FormWrap method="delete">
      <div className="flex flex-col justify-center items-center w-full max-w-md p-4 space-y-6">
        <input className="hidden" name="id" defaultValue={plant?.id} />
        <h1 className="text-center text-2xl font-extrabold text-gray-800 mb-4">
          Did you kill your plant? Not again! Better luck next time!
        </h1>
        <p className="text-center text-gray-600 mb-4">
          Are you sure you want to delete <strong>{plant?.name}</strong>?
          This action cannot be undone.
        </p>
        <div className="w-full flex justify-around mt-6 md:px-20">
          <Button type="submit" value="delete" name="intent">
            DELETE
          </Button>
        </div>
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

  if (intent === "delete") {
    const plantId = formData.get("id") as string;
    console.log("Plant ID to delete:", plantId);

    const oldPlantsJson = localStorage.getItem("plants") as string | null;
    const oldPlants: Plant[] =
      oldPlantsJson === null ? [] : JSON.parse(oldPlantsJson);

    const newPlants = oldPlants.filter((plant) => plant.id !== plantId);
    console.log("Updated plants list:", newPlants);
    localStorage.setItem("plants", JSON.stringify(newPlants));
  }

  return redirect("/shelf");
}
