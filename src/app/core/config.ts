import { NavigationStart } from '@angular/router';
import { MESSAGE, USER_LOGIN } from '../store/action-types';

export function config(store, ngRedux, authService, router) {
  ngRedux.provideStore(store);
  router.events.subscribe(ev => {
    if (ev instanceof NavigationStart) {
      ngRedux.dispatch({
        type: MESSAGE
      });
    }
  });

  if (authService.isUserAuthenticated()) {
    const token = authService.getToken();
    const familyname = authService.getUser();
    ngRedux.dispatch({
      type: USER_LOGIN,
      result: {
        success: true,
        token,
        user: {
          name: familyname
        }
      }
    });
  }
}
