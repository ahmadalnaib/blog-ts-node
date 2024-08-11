import { DateTime } from 'luxon';


export interface Post {
  id: number;
  title: string;
  created_at: string  ;
}

export const today:Post={
  id: 1,
  title: 'Hello World!',
created_at: DateTime.now().toISO(),
}

export const thisWeek:Post={
  id: 2,
  title: 'Hello World!',
created_at: DateTime.now().minus({days:5}).toISO(),
}
export const thisMonth:Post={
  id: 3,
  title: 'Hello World!',
created_at: DateTime.now().minus({week:3}).toISO(),
}



