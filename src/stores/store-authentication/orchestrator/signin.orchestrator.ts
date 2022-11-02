import { orchestrator } from 'satcheljs';
import { signinAPI } from '../../../apis';
import { signinAction, updateAccessTokenAction } from '../action';
import { updateErrorSignin, updateLoadingSignin } from '../mutator-action';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { CoreMovieStore } from '../../store-movie';
import { CoreCinemaStore } from '../../store-cinema';
import { CoreShowtimeStore } from '../../store-showtime';

orchestrator(signinAction, async (actionMessage: { username: string; password: string }) => {
  const { username, password } = actionMessage;

  updateLoadingSignin(true);

  try {
    const { data } = await signinAPI(username, password);

    await withReactContent(Swal).fire({
      position: 'top-end',
      icon: 'success',
      title: '<h5 style="font-size: 24px">Sign in successfully</h5>',
      width: 300,
      iconColor: 'var(--secondary)',
      color: 'var(--secondary)',
      showConfirmButton: false,
      timer: 1000,
      iconHtml: `<i class="fa-solid fa-check" style="font-size: 32px"></i>`,
    });

    CoreMovieStore.updateMoviesByCinemaIdAction(undefined);
    CoreCinemaStore.updateCinemasByMovieIdAction(undefined);
    CoreShowtimeStore.updateShowtimeListByMovieAndCinemaAction(undefined);

    updateAccessTokenAction(data.accessToken);
  } catch (error) {
    if (error === 1) {
      return updateErrorSignin('The Username or Password is incorrect, please try again!');
    }
    updateErrorSignin('Something goes wrong!');
  } finally {
    updateLoadingSignin(false);
  }
});
