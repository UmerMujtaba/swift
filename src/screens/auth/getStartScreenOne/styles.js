import { Platform, StyleSheet } from 'react-native';
import { rwp, rhp, rfs, wp } from '../../../constants/dimensions';
import { colors } from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    ...Platform.select({
      web: {
        paddingHorizontal: wp(30),
      },
    }),
  },
  title: {
    fontWeight: '700',
    fontSize: Platform.OS === 'ios' ? rfs(28) : rfs(34),
    fontFamily: 'BasisGrotesque-Bold',
    color: colors.blacK,
    marginTop: rhp(20),
    lineHeight: 33.6,
    letterSpacing: 1,
  },
  btnStyle: (isButtonEnabled) => ({
    marginTop: rhp(24),
    width: wp(90),
    marginBottom: rhp(35),
    backgroundColor: isButtonEnabled ? colors.primary : colors.secondary,
    ...Platform.select({
      web: {
        width: wp(20),
        alignSelf: 'center',
        justifyContent: 'center',
      },
    }),
  }),
  inputText: { marginTop: 0 },
  iconStyle: { width: 24, height: 26.4 },
  flexStyle: { flex: 1 },
  checkBoxView: { paddingRight: 9 },
});
