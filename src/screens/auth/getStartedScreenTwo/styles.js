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
        width: wp(30),
        alignSelf:'center',
      },
    }),
  },
  title: {
    fontWeight: '700',
    fontSize: Platform.OS === 'ios' ? rfs(28) : rfs(32),
    fontFamily: 'BasisGrotesque-Bold',
    color: colors.blacK,
    marginTop: rhp(20),
    lineHeight: 33.6,
    letterSpacing: 1,
  },
  subTitle: {
    fontSize: Platform.OS === 'ios' ? rfs(15) : rfs(18),
    fontWeight: '400',
    fontFamily: 'BasisGrotesque-Regular',
    color: colors.grey,
    marginTop: rhp(10),
  },
  countryCodePhnRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: rhp(26),
  },
  countryHeading: {
    color: colors.grey,
    fontSize: rfs(15),
    fontWeight: '400',
  },
  countryContainer: {
    paddingVertical: 5,
    borderBottomColor: colors.disabled,
    borderRadius: 0,
    borderWidth: 0,
    borderBottomWidth: 1,
    maxWidth: 100
  },
  countryInsideRow: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  countryText: {
    fontSize: rfs(15),

  },
  dropDownContainer: {
    width: 180,

  },
  searchBar: {
    width: 150,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: colors.disabled,

  },
  phoneInputField: {
    borderBottomColor: colors.disabled,
    borderRadius: 0,
    borderWidth: 0,
    borderBottomWidth: 1,
    marginTop: 1.5,
    opacity: 0.5,
    fontSize: 15
  },

  inputStyle: {
    marginLeft: rwp(12),
    width: rwp(261),
    borderRadius: 4,
    borderBottomWidth: 1,
    textAlignVertical: 'bottom',
  },
  countryCode: {
    fontSize: rfs(16),
    color: '#373F46',
    marginLeft: 5,
    marginTop: 3,
    fontWeight: '400',
    fontFamily: 'BasisGrotesque-Regular',
  },
  agreementText: {
    fontSize: Platform.OS === 'ios' ? rfs(14) : rfs(16),
    fontWeight: '500',
    fontFamily: 'BasisGrotesque-Regular',
    color: colors.grey,
    textAlign: 'auto',
    marginBottom: rhp(24),
  },
  flex: {
    flex: 1
  },
  containerBtnStyle: {
    width: 50
  },
  btnStyle: isPhoneNumberFilled => ({
    width: wp(90),
    marginBottom: rhp(35),
    backgroundColor: isPhoneNumberFilled ? colors.primary : colors.secondary,
    ...Platform.select({
      web: {
        width: wp(20),
        alignSelf: ' center',
        justifyContent: 'center',
      },
    }),
  }),
});
