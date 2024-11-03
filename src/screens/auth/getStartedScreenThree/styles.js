import { Platform, StyleSheet } from 'react-native';
import { rfs, rhp, rwp, wp } from '../../../constants/dimensions';
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
    fontSize: Platform.OS === 'ios' ? rfs(27) : rfs(32),
    fontFamily: 'BasisGrotesque-Bold',
    color: colors.blacK,
    marginTop: rhp(20),
    lineHeight: 33.6,
    letterSpacing: 1,
  },
  subTitle: {
    fontSize: Platform.OS === 'ios' ? rfs(15) : rfs(18),
    fontWeight: '500',
    fontFamily: 'BasisGrotesque-Regular',
    color: colors.grey,
    marginTop: rhp(10),
  },
  phnText: {
    fontSize: Platform.OS === 'ios' ? rfs(15) : rfs(18),
    fontWeight: '400',
    marginTop: 4,
    fontFamily: 'BasisGrotesque-Regular',
    color: colors.grey,
  },
  editText: {
    color: colors.primary,
    fontSize: Platform.OS === 'ios' ? rfs(15) : rfs(18),
    fontWeight: '500',
    marginTop: 4,
    fontFamily: 'BasisGrotesque-Medium',
    marginLeft: rwp(8),
    ...Platform.select({
      web: {
        marginLeft: rwp(2),
      },
    }),
  },
  otpContainer: {
    marginTop: rhp(24),
  },
  cell: {
    borderRadius: 8,
    borderWidth: 0,
    backgroundColor: colors.bgColor,
    borderBottomWidth: 0,
    width: rwp(49),
    height: rhp(50),
    ...Platform.select({
      web: {
        width: rwp(15),
        height: rhp(50),
      },
    }),
  },
  cellText: {
    color: 'black',
    fontFamily: 'BasisGrotesque-Regular',
    fontSize: rfs(28),
    textAlign: 'center',
    paddingTop: rhp(8),
  },
  bottomTextRow: {
    flexDirection: 'row',
    marginTop: rhp(20),
    justifyContent: 'center',
  },
  codeText: {
    fontSize: Platform.OS === 'ios' ? rfs(14) : rfs(16),
    fontWeight: '600',
    color: colors.grey,
    fontFamily: 'PlusJakartaSans-Medium',
  },
  flexStyle: { flex: 1 },
  countryCodeStyle: { flexDirection: 'row', alignItems: 'center' },
  btnStyle: (isOtpComplete) => ({
    width: wp(90),
    marginBottom: rhp(35),
    backgroundColor: isOtpComplete ? colors.primary : colors.secondary,
    ...Platform.select({
      web: {
        width: wp(20),
        alignSelf: ' center',
        justifyContent: 'center',
      },
    }),
  }),
});
