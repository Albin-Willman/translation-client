/**
 * App's Redux Reducers
 * --------------------
 *
 * here are listed all the reducers that will compose the state of the app.
 * if you want/need to disable a reducer just comment it out in the exported object.
 *
 * NOTE: do not remove nor alter the reapp comments,
 *       they are used during scaffolding operations!
 *
 */

import { translationsReducer } from 'reducers/translations-reducer';
import { routeReducer } from 'reducers/route-reducer';
import { userReducer } from 'reducers/user-reducer';
import { languagesReducer } from 'reducers/languages-reducer';
import { ymlReducer } from 'reducers/yml-reducer';

/* reapp: import new reducer */

export const reducers = {
  translations: translationsReducer,
  user: userReducer,
  routes: routeReducer,
  languages: languagesReducer,
  yml: ymlReducer,
  /* reapp: append new reducer */
};
