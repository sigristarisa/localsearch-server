type Schedule = {
  start: string;
  end: string;
  type: string;
};

type Day = {
  tuesday: Schedule[];
  wednesday: Schedule[];
  thursday: Schedule[];
  friday: Schedule[];
  saturday: Schedule[];
  sunday: Schedule[];
};

export type OpeningHours = {
  days: Day;
};

export type PlaceData = {
  placeId: string;
  what: string;
  where: string;
  openingHours: OpeningHours;
};

export type StatusMessage = {
  [key: number]: string;
  200: string;
  400: string;
  500: string;
};
