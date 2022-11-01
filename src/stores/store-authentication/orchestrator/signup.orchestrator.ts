import { orchestrator } from 'satcheljs';
import { signupAPI } from '../../../apis';
import { signupAction } from '../action';
import { updateErrorSignup, updateLoadingSignup } from '../mutator-action';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { updateIsRegisterSuccess } from '../mutator-action/update-is-register-success.mutator';
// import { useHistory } from 'react-router-dom';

orchestrator(signupAction, async (actionMessage: { username: string; password: string }) => {
  const { username, password } = actionMessage;

  updateLoadingSignup(true);

  try {
    await signupAPI(username, password);

    await withReactContent(Swal).fire({
      position: 'top-end',
      icon: 'success',
      title: '<h5 style="font-size: 24px">Sign-up successfully</h5>',
      width: 300,
      iconColor: 'var(--secondary)',
      color: 'var(--secondary)',
      showConfirmButton: false,
      timer: 1000,
      iconHtml: `<i class="fa-solid fa-check" style="font-size: 32px"></i>`,
    });

    updateIsRegisterSuccess(true);
  } catch (error) {
    if (error === 1) {
      return updateErrorSignup('Username is already exists!');
    }
    updateErrorSignup('Something goes wrong!');
  } finally {
    updateLoadingSignup(false);
  }
});
