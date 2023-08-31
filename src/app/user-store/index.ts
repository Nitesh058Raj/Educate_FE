import { UserInterface } from '../models/common.model';

export interface UserState {
  user: UserInterface | null;
  loading: boolean;
  error: string | null;
}
