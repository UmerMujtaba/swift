import { Platform, StyleSheet } from 'react-native';
import { hp, rfs, rhp, rwp, width, wp } from '../../../constants/dimensions';
import { colors } from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      web: {
        width: wp(30),
        alignSelf: 'center'
      },
    }),
  },
  bgImageStyle: {
    resizeMode: 'contain',
    height: rhp(375),
    width: wp(100),
    marginHorizontal: Platform.OS === 'web' ? 20 : 10,
    marginTop: hp(12),
  },
  logoImage: {
    width: rwp(170),
    height: rhp(40),
    alignSelf: 'center',
    resizeMode: 'contain',
    top: rhp(70),
  },
  bottomContainer: {
    backgroundColor: 'white',
    height: rhp(375),
    width: '100%',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    alignItems: 'center',
    paddingHorizontal: rwp(5),
  },
  heading: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '700',
    fontSize: Platform.OS === 'ios' ? rfs(29) : rfs(32),
    marginTop: rhp(32),
    fontFamily: 'BasisGrotesque-Bold',
    ...Platform.select({
      web: {
        fontSize: rfs(28)
      },
    }),
  },
  subHeading: {
    textAlign: 'center',
    color: colors.grey,
    fontWeight: '400',
    fontSize: Platform.OS === 'ios' ? rfs(15) : rfs(18),
    marginTop: rhp(15),
    lineHeight: 25,
    fontFamily: 'BasisGrotesque-Regular',
    ...Platform.select({
      web: {
        fontSize: rfs(16)
      },
    }),
  },
  btnContainer: {
    flexDirection: 'row',
    height: rhp(53),
    width: wp(90),
    marginTop: rhp(70),
    justifyContent: 'space-around',
    ...Platform.select({
      web: {
        flexDirection: 'row',
        width: 'auto',
        justifyContent: 'space-around',
        alignSelf:'center'
      },
    }),
  },
  gradientView: {
    flex: 1,
    alignItems: 'center'
  },
  flexStyle: {
    flex: 1
  },
  btn: {
    ...Platform.select({
      web: {
        width: 119,
        marginRight:12,
        marginLeft:15
      },
    }),
  },
  btn2: {
    ...Platform.select({
      web: {
        width: 214,
      },
    }),
  }
});
