import { Event } from "./EventType";

export type EventCtx = {
  events: Event[];
  addEvent: (event: Event) => void;
};
