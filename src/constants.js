export const Actions = {
  APP_LOADING: 'APP_LOADING',
  APP_RESET: 'APP_RESET',
  APP_SET: 'APP_SET',
  USER_SET: 'USER_SET',
};

export const Colors = {
  black: '#2A2C2B',
  black80: '#545655',
  white: '#FCFCFC',
};

export const HeaderStyles = {
  header: {
    backgroundColor: Colors.black,
    height: 40,
    borderBottomWidth: 0,
    elevation: 0,
  },
  headerText: {
    color: Colors.white,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 18,
  },
  headerSide: {
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerSideText: {
    color: Colors.white80,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 13,
    fontWeight: 'bold',
  },
}