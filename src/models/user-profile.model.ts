import { ITicket } from './ticket.model';

export interface IUserProfile {
  id: string;
  avatar: string | 'default';
  username: string;
  role: string;
  seats: Array<ITicket>;
}
