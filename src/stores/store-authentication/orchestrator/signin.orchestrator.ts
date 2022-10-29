import { orchestrator } from 'satcheljs';
import { signinAPI } from '../../../apis';
import { signinAction, updateAccessTokenAction } from '../action';

orchestrator(signinAction, async (actionMessage: { username: string; password: string }) => {
  const { username, password } = actionMessage;

  // CoreLoadingStore.updateLoadingAction(true);

  try {
    const { data } = await signinAPI(username, password);

    await updateAccessTokenAction(data.accessToken);
  } catch (error) {
    // 400 bad resquest ko dung dinh dang
    // 401 ten dang nhap sai hoac mat khau sai
    if (error === 1) {
      console.log('check');
    }

    // CommonMessageStore.updateErrorAction(error);
  } finally {
    // CoreLoadingStore.updateLoadingAction(false);
  }
});
