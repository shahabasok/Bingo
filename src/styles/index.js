import {StyleSheet, PixelRatio, Dimensions} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export default StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  profile: {
    height: '75%',
    width: undefined,
    aspectRatio: 1,
    borderRadius: 100,
  },
  logo: {
    height: undefined,
    width: undefined,
  },
  nameText: {
    fontFamily: 'GROBOLD',
    color: 'white',
    fontSize: normalize(7),
  },
  numberText: {
    fontFamily: 'GROBOLD',
    color: 'white',
    fontSize: normalize(5),
    padding: 3,
  },
  rankText: {
    fontFamily: 'GROBOLD',
    color: 'white',
    fontSize: normalize(6),
  },
  bingoName: {
    fontFamily: 'GROBOLD',
    color: 'white',
    fontSize: normalize(3),
  },
  bingoScore: {
    fontFamily: 'GROBOLD',
    color: 'yellow',
    fontSize: normalize(4),
  },
  rank: {
    fontFamily: 'GROBOLD',
    color: 'white',
    textAlign: 'center',
    fontSize: normalize(6),
  },
  winningPatternsText: {
    fontFamily: 'GROBOLD',
    color: 'white',
    textAlign: 'center',
    fontSize: normalize(6),
  },
  tableCellColor: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#45e6dd',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 2,
  },
  tableBCellColor: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#781c5f',
    alignItems: 'center',
    borderTopLeftRadius: 5,
  },
  tableICellColor: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#d6bf2b',
    alignItems: 'center',
  },
  tableNCellColor: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#c921cf',
    alignItems: 'center',
  },
  tableGCellColor: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#262bd1',
    alignItems: 'center',
  },
  tableOCellColor: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#22c72d',
    alignItems: 'center',
    borderTopRightRadius: 5,
  },
  betText: {
    fontFamily: 'GROBOLD',
    fontSize: normalize(6),
    color: '#f7e77e',
  },
  cardsText: {
    fontFamily: 'GROBOLD',
    fontSize: normalize(6),
    color: 'white',
  },
  ballDrawText: {
    position: 'absolute',
    fontSize: normalize(12),
    fontFamily: 'GROBOLD',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    opacity: 0.8,
    zIndex: 1,
  },
});
