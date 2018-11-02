import { Actions } from '../constants';

const handleError = (dispatch, err) => {
  console.log('ERROR', err);

  dispatch({
    type: Actions.APP_SET,
    payload: {
      error: {
        message: err.message || 'Failed',
      },
    },
  });
};

export const commit = (message, date, navigation) => async (dispatch) => {
  try {
    dispatch({
      type: Actions.USER_SET,
      payload: {
        message,
        date,
      },
    });

    navigation.navigate('Counter');
  } catch (err) {
    handleError(dispatch, err);
  }
};