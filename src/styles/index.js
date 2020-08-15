import {StyleSheet} from 'react-native';

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
  },
  numberText: {
    fontFamily: 'GROBOLD',
    color: 'white',
    fontSize: 10,
    padding: 3,
  },
  rankText: {
    fontFamily: 'GROBOLD',
    color: 'white',
  },
  bingoName: {
    fontFamily: 'GROBOLD',
    color: 'white',
    fontSize: 6,
  },
  bingoScore: {
    fontFamily: 'GROBOLD',
    color: 'yellow',
    fontSize: 6,
  },
  rank: {
    fontFamily: 'GROBOLD',
    color: 'white',
    textAlign: 'center',
  },
  winningPatternsText: {
    fontFamily: 'GROBOLD',
    color: 'white',
    textAlign: 'center',
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
    fontSize: 14,
    color: '#f7e77e',
  },
  cardsText: {
    fontFamily: 'GROBOLD',
    fontSize: 10,
    color: 'white',
  },
});
