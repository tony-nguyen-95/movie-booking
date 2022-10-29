import { action } from 'satcheljs';

export const signinAction = action('signinAction', (username: string, password: string) => {
  return { username, password };
});
