import Calendar from "react-calendar";
import { ReactNode, useContext, useState } from "react";
import { Event, EventOption } from "../types/EventType";
import { EventCtx } from "../types/EventCtxType";
import "react-calendar/dist/Calendar.css";
import EventForm from "../components/EventForm";
import { json } from "react-router-dom";
import { isSameDay } from "date-fns";
import { GiWateringCan, GiFertilizerBag } from "react-icons/gi";
import { FaShower } from "react-icons/fa";
import { BsMoisture } from "react-icons/bs";
import { EventContext } from "../store/event-context";

type Value = Date | null;

export default function CalendarPage() {
  const [value, setValue] = useState<Value>(new Date());
  const eventCtx = useContext(EventContext);
  const events = eventCtx.events;

  function handleChange(nextValue: any) {
    setValue(nextValue);
  }

  function tileContent({
    date,
    view,
  }: {
    date: Date;
    view: string;
  }): ReactNode {
    if (view === "month") {
      const eventsForDay = events.filter((event) =>
        isSameDay(date, event.date)
      );
      return eventsForDay.map((eventForDay, index) => {
        if (eventForDay.description.valueOf() == EventOption.Check.valueOf()) {
          return <BsMoisture key={index} />;
        } else if (
          eventForDay.description.valueOf() == EventOption.Clean.valueOf()
        ) {
          return <FaShower key={index} />;
        } else if (
          eventForDay.description.valueOf() == EventOption.Fertilize.valueOf()
        ) {
          return <GiFertilizerBag key={index} />;
        } else if (
          eventForDay.description.valueOf() == EventOption.Water.valueOf()
        ) {
          return <GiWateringCan key={index} />;
        }
      });
    }
  }

  return (
    <>
      <div className="p-10">
        <h1 className="text-2xl md:text-4xl font-extrabold text-left w-full text-stone-800">
          Planner
        </h1>
      </div>
      <div className="flex flex-col items-center w-5/6 m-auto relative z-40">
        <Calendar
          value={value}
          onChange={handleChange}
          tileContent={tileContent}
        />
      </div>
      <div className="sm:flex sm:justify-center sm:m-auto ">
        <EventForm value={value as Date} />
      </div>
    </>
  );
}

type Props = {
  request: Request;
  events: EventCtx;
};

export async function action({ request, events }: Props) {
  const formData = await request.formData();
  const intent = formData.get("intent") as string;

  if (intent === "add_event") {
    const eventDate = formData.get("eventDate") as string;
    const eventDescription = formData.get("eventDescription") as string;

    const newEvent: Event = {
      date: new Date(Number(eventDate)),
      description: eventDescription as EventOption,
      id: JSON.stringify(Date.now()),
    };
    events.addEvent(newEvent);
  }
  return json({ message: "Event added." }, { status: 201 });
}
