type Time = {
  start: string;
  end: string;
  type: string;
};

type Day = {
  monday: Time[];
  tuesday: Time[];
  wednesday: Time[];
  thursday: Time[];
  friday: Time[];
  saturday?: Time[];
  sunday?: Time[];
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
