import { action } from 'satcheljs';

export const signupAction = action('signupAction', (username: string, password: string) => {
  return { username, password };
});
