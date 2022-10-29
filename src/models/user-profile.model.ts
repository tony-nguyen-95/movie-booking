export interface IUserProfile {
  id: string;
  avatar: string | 'default';
  username: string;
  role: string;
  seats: Array<ITicket>;
}

export interface ITicket {
  id: string;
  seatPosition: string;
  seatStatus: string;
}
