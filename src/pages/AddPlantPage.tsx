import { redirect } from "react-router-dom";
import Button from "../components/Button";
import { Plant } from "../types/PlantType";
import FormWrap from "../components/FormWrap";
import HeadWrap from "../components/HeadWrap";
import TextWrap from "../components/TextWrap";

export default function AddPlantPage() {
  return (
    <FormWrap method="post">
      <div className="flex flex-col justify-center items-center w-full max-w-lg space-y-6">
        <HeadWrap
          htmlFor="plantName"
          id="plantName"
          name="plantName"
          type="string"
        >
          Plant Name
        </HeadWrap>
        <TextWrap
          htmlFor="plantDescription"
          id="plantDescription"
          name="plantDescription"
        >
          Description
        </TextWrap>
      </div>
      <div className="w-full flex justify-end mt-6 md:justify-center md:ml-96 md:pl-6">
        <Button type="submit" value="add_plant" name="intent">
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

  if (intent === "add_plant") {
    const plantName = formData.get("plantName") as string;
    const plantDescription = formData.get("plantDescription") as string;

    const newPlant: Plant = {
      name: plantName,
      description: plantDescription,
      id: JSON.stringify(Date.now()),
    };

    const oldPlantsJson = localStorage.getItem("plants") as string | null;
    const oldPlants: Plant[] =
      oldPlantsJson === null ? [] : JSON.parse(oldPlantsJson);

    const newPlants: Plant[] = [...oldPlants, newPlant];
    localStorage.setItem("plants", JSON.stringify(newPlants));
  }

  return redirect("/shelf");
}
