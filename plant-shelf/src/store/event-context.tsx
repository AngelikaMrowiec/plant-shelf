import { ReactNode, createContext, useState } from "react";
import { EventCtx } from "../types/EventCtxType";
import { Event } from "../types/EventType";

export const EventContext = createContext<EventCtx>({
  events: [],
  addEvent: (_: Event) => {}
});

type Props = {
  children: ReactNode;
};

export default function EventContextProvider({ children }: Props) {
    const oldEventsJson = localStorage.getItem("events") as string | null;
    const oldEvents: Event[] =
      oldEventsJson === null ? [] : JSON.parse(oldEventsJson);
      
  const [events, setEvents] = useState<Event[]>(oldEvents);

  function addEvent(event: Event) {
    setEvents(prevState =>  [...prevState, event]);
    localStorage.setItem("events", JSON.stringify(events));
  }

  const ctxValue: EventCtx = {
    events: events,
    addEvent: addEvent
  };

  return (
    <EventContext.Provider value={ctxValue}>{children}</EventContext.Provider>
  );
}
