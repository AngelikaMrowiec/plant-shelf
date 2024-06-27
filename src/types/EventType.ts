export type Event = {
  id: string;
  date: Date;
  description: EventOption;
};

export enum EventOption {
  Water = "Water all plants",
  Fertilize = "Fertilize all plants",
  Check = "Check soil moisture",
  Clean = "Clean plant leaves",
}