import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../Styles/_colors'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  statusContainer: {},
  trianguloContainer: {
    alignItems: 'baseline',
    marginBottom: 35
  },
  trianguloCima: {
    width: 0,
    height: 0,
    borderRightWidth: width,
    borderRightColor: 'transparent',
    borderTopWidth: width,
    borderTopColor: colors.complementary,
    margin: 0
  },
  superiorContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 5
  },
  firstLineContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconContainer: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    padding: 20,
    borderRadius: 100,
    borderColor: '#fff'
  },
  textContainer: {},
  nameText: {
    marginLeft: 14,
    color: '#fff',
    fontFamily: 'Montserrat-Medium',
    fontSize: 20
  },
  ageText: {
    marginLeft: 14,
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
    fontSize: 14
  },
  buttonToDos: {
    marginTop: 70,
    marginLeft: 1,
    width: 155,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center'
  },
  buttonToDosText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 12.5,
    color: colors.complementaryLight
  },
  inferiorContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 15,
    alignItems: 'center'
  },
  buttonAdvice: {
    marginTop: 10,
    width: 155,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center'
  },
  nameAdviceText: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Montserrat-Medium',
    fontSize: 20
  },
  buttonAdviceText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 12.5,
    color: colors.complementaryDark
  },
  /* ================================================== */
  statusBarContainer: {
    alignItems: 'center'
  },
  progressBarContainer: {
    alignItems: 'center',
    marginBottom: 14
  },
  labelProgessBar: {
    width: width,
    color: '#fff',
    textAlign: 'left',
    marginLeft: 47,
    fontFamily: 'Roboto-Bold'
  }
})

export default styles
