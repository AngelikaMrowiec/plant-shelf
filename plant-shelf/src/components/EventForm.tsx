import { Form } from "react-router-dom";
// import { EventOption } from "../types/EventType";
import Button from "./Button";
import CustomSelect from "./CustomSelect";

type Props = {
  value: Date;
};

export default function EventForm({ value }: Props) {
  if (!(value instanceof Date)) {
    return "Wrong selection";
  }

  return (
    <Form method="post">
      <div className="w-full flex flex-col items-end relative pr-10 sm:pr-0 z-40">
        <input name="eventDate" className="hidden" value={value.getTime()} onChange={() => {}} />
        <label
          htmlFor="eventDescription"
          className="block w-48 text-xl text-left font-extrabold text-gray-800 my-4"
        >
          add new event
        </label>
        {/* <select
          required
          id="eventDescription"
          name="eventDescription"
          className="w-full p-3 shadow-xl bg-white rounded-xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-bottleg-dark focus:border-transparent"
        >
          <option value={EventOption.Water}>Water all plants</option>
          <option value={EventOption.Fertilize}>Fertilize all plants</option>
          <option value={EventOption.Check}>Check soil moisture</option>
          <option value={EventOption.Clean}>Clean plant leaves</option>
        </select> */}
        <CustomSelect />
        <div className="flex justify-end mt-6">
          <Button type="submit" value="add_event" name="intent">
            SAVE
          </Button>
        </div>
      </div>
    </Form>
  );
}
