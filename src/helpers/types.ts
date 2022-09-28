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

export type PlaceId = {
  place_id: string;
};
