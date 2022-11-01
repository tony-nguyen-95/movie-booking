import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';

export const updateErrorSignup = mutatorAction('updateErrorSignup', (errorText: string) => {
  getStore().signupError = errorText;
});
