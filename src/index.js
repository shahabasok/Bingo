import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './styles/index';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSoundOn: true,
      isPlayActive: false,
    };
  }

  toggleSound = () => {
    if (this.state.isSoundOn === true) {
      Alert.alert('Audio is now OFF');
      this.setState({
        isSoundOn: !this.state.isSoundOn,
      });
    } else {
      Alert.alert('Audio is now ON');
      this.setState({
        isSoundOn: !this.state.isSoundOn,
      });
    }
  };

  togglePlay = () => {
    if (this.state.isPlayActive === true) {
      this.setState({
        isPlayActive: !this.state.isPlayActive,
      });
    } else {
      this.setState({
        isPlayActive: !this.state.isPlayActive,
      });
    }
  };

  renderBottomCircles = (index) => {
    return (
      <View
        style={{
          flex: 1,
          overflow: 'hidden',
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {index % 2 == 0 && index % 3 !== 0 && (
          <Image
            style={{flex: 1}}
            source={require('./assets/images/ball-draw-4.png')}
            resizeMode="center"
          />
        )}
        {index % 3 == 0 && index % 2 !== 0 && (
          <Image
            style={{flex: 1}}
            source={require('./assets/images/ball-draw-2.png')}
            resizeMode="center"
          />
        )}
        {index % 2 == 0 && index % 3 == 0 && (
          <Image
            style={{flex: 1}}
            source={require('./assets/images/ball-draw-1.png')}
            resizeMode="center"
          />
        )}
        {(index === 1 || index === 11) && (
          <Image
            style={{flex: 1}}
            source={require('./assets/images/ball-draw-3.png')}
            resizeMode="center"
          />
        )}
        {(index % 5 == 0 || index % 7 === 0) && index % 2 !== 0 && (
          <Image
            style={{flex: 1}}
            source={require('./assets/images/ball-draw-5.png')}
            resizeMode="center"
          />
        )}
        <Text
          style={{
            position: 'absolute',
            fontFamily: 'GROBOLD',
            fontSize: 8,
          }}>
          12
        </Text>
      </View>
    );
  };

  renderBingoText = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={styles.tableBCellColor}>
          <Text style={styles.nameText}>B</Text>
        </View>
        <View style={styles.tableICellColor}>
          <Text style={styles.nameText}>I</Text>
        </View>
        <View style={styles.tableNCellColor}>
          <Text style={styles.nameText}>N</Text>
        </View>
        <View style={styles.tableGCellColor}>
          <Text style={styles.nameText}>G</Text>
        </View>
        <View style={styles.tableOCellColor}>
          <Text style={styles.nameText}>0</Text>
        </View>
      </View>
    );
  };

  renderRow = () => {
    return (
      <View
        style={{
          flex: 1,
          alignSelf: 'stretch',
          flexDirection: 'row',
          backgroundColor: 'white',
        }}>
        <View style={styles.tableCellColor}>
          <Text style={styles.nameText}>{Math.floor(Math.random() * 10)}</Text>
        </View>
        <View style={styles.tableCellColor}>
          <Text style={styles.nameText}>{Math.floor(Math.random() * 10)}</Text>
        </View>
        <View style={styles.tableCellColor}>
          <Text style={styles.nameText}>{Math.floor(Math.random() * 10)}</Text>
        </View>
        <View style={styles.tableCellColor}>
          <Text style={styles.nameText}>{Math.floor(Math.random() * 10)}</Text>
        </View>
        <View style={styles.tableCellColor}>
          <Text style={styles.nameText}>{Math.floor(Math.random() * 10)}</Text>
        </View>
      </View>
    );
  };

  render() {
    const data = [1, 2, 3, 4, 5];
    const circles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
      <ImageBackground
        source={require('./assets/images/bg.jpg')}
        style={styles.container}>
        <StatusBar
          backgroundColor="#b3e6ff"
          barStyle="dark-content"
          hidden={true}
        />
        <View style={{flex: 1}}>
          <View style={styles.topContainer}>
            <View
              style={{
                flex: 1,
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <View>
                <Image
                  source={require('./assets/images/profile.jpg')}
                  style={styles.profile}
                />
              </View>
              <View>
                <Text style={styles.nameText}>Bobingo</Text>
                <Text style={styles.nameText}>WINS</Text>
                <Text style={styles.nameText}>BALANCE</Text>
              </View>
              <View>
                <View
                  style={{
                    borderColor: '#3C3CFF',
                    borderWidth: 1,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                  }}>
                  <Text style={styles.numberText}>9999.99$</Text>
                </View>
                <View
                  style={{
                    borderColor: '#3C3CFF',
                    borderWidth: 1,
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                  }}>
                  <Text style={styles.numberText}>9999.99$</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flex: 2,
                overflow: 'hidden',
                position: 'relative',
                alignItems: 'center',
              }}>
              <Image
                style={{flex: 1}}
                source={require('./assets/images/logo.png')}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flex: 1,
                  overflow: 'hidden',
                  position: 'relative',
                  alignItems: 'center',
                }}>
                <Image
                  style={{flex: 1}}
                  source={require('./assets/images/home.png')}
                  resizeMode="center"
                />
              </View>
              <View
                style={{
                  flex: 1,
                  overflow: 'hidden',
                  position: 'relative',
                  alignItems: 'center',
                }}>
                <Image
                  style={{flex: 1}}
                  source={require('./assets/images/settings.png')}
                  resizeMode="center"
                />
              </View>
              <TouchableOpacity
                style={{
                  flex: 1,
                  overflow: 'hidden',
                  position: 'relative',
                  alignItems: 'center',
                }}
                onPress={() => this.toggleSound()}>
                <Image
                  style={{flex: 1}}
                  source={
                    this.state.isSoundOn
                      ? require('./assets/images/audio-on.png')
                      : require('./assets/images/audio-off.png')
                  }
                  resizeMode="center"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 5,
              flexDirection: 'row',
              overflow: 'hidden',
              padding: 5,
            }}>
            <View
              style={{
                flex: 0.5,
                borderColor: 'yellow',
                borderWidth: 3,
                borderRadius: 10,
                alignItems: 'center',
                overflow: 'hidden',
              }}>
              <View>
                <View style={{flex: 1}}>
                  <Text style={styles.rankText}>TOP RANKS</Text>
                </View>
                <View style={{flex: 5, overflow: 'hidden'}}>
                  <ImageBackground
                    style={{flex: 1}}
                    source={require('./assets/images/top-rank-player-bg.png')}>
                    <View
                      style={{
                        flex: 1,
                        overflow: 'hidden',
                        position: 'relative',
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}>
                      <Image
                        style={{flex: 1}}
                        source={require('./assets/images/gold-rank.png')}
                        resizeMode="center"
                      />
                      <View
                        style={{
                          flex: 1,
                          overflow: 'hidden',
                          position: 'relative',
                          alignItems: 'center',
                          flexDirection: 'row',
                        }}>
                        <Image
                          style={{flex: 1}}
                          source={require('./assets/images/profile.jpg')}
                          resizeMode="center"
                        />
                      </View>
                      <View style={{flex: 2}}>
                        <Text style={styles.bingoName}>Spark Bingo</Text>
                        <Text style={styles.bingoScore}>$ 121155</Text>
                      </View>
                    </View>
                  </ImageBackground>
                  <ImageBackground
                    style={{flex: 1}}
                    source={require('./assets/images/top-rank-player-bg.png')}>
                    <View
                      style={{
                        flex: 1,
                        overflow: 'hidden',
                        position: 'relative',
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}>
                      <Image
                        style={{flex: 1}}
                        source={require('./assets/images/silver-rank.png')}
                        resizeMode="center"
                      />
                      <View
                        style={{
                          flex: 1,
                          overflow: 'hidden',
                          position: 'relative',
                          alignItems: 'center',
                          flexDirection: 'row',
                        }}>
                        <Image
                          style={{flex: 1}}
                          source={require('./assets/images/profile.jpg')}
                          resizeMode="center"
                        />
                      </View>
                      <View style={{flex: 2}}>
                        <Text style={styles.bingoName}>Spark Bingo</Text>
                        <Text style={styles.bingoScore}>$ 121155</Text>
                      </View>
                    </View>
                  </ImageBackground>
                  <ImageBackground
                    style={{flex: 1}}
                    source={require('./assets/images/top-rank-player-bg.png')}>
                    <View
                      style={{
                        flex: 1,
                        overflow: 'hidden',
                        position: 'relative',
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}>
                      <Image
                        style={{flex: 1}}
                        source={require('./assets/images/bronze-rank.png')}
                        resizeMode="center"
                      />
                      <View
                        style={{
                          flex: 1,
                          overflow: 'hidden',
                          position: 'relative',
                          alignItems: 'center',
                          flexDirection: 'row',
                        }}>
                        <Image
                          style={{flex: 1}}
                          source={require('./assets/images/profile.jpg')}
                          resizeMode="center"
                        />
                      </View>
                      <View style={{flex: 2}}>
                        <Text style={styles.bingoName}>Spark Bingo</Text>
                        <Text style={styles.bingoScore}>$ 121155</Text>
                      </View>
                    </View>
                  </ImageBackground>
                  <ImageBackground
                    style={{flex: 1}}
                    source={require('./assets/images/top-rank-player-bg.png')}>
                    <View
                      style={{
                        flex: 1,
                        overflow: 'hidden',
                        position: 'relative',
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}>
                      <View style={{flex: 1}}>
                        <Text style={styles.rank}>4</Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          overflow: 'hidden',
                          position: 'relative',
                          alignItems: 'center',
                          flexDirection: 'row',
                        }}>
                        <Image
                          style={{flex: 1}}
                          source={require('./assets/images/profile.jpg')}
                          resizeMode="center"
                        />
                      </View>
                      <View style={{flex: 2}}>
                        <Text style={styles.bingoName}>Spark Bingo</Text>
                        <Text style={styles.bingoScore}>$ 121155</Text>
                      </View>
                    </View>
                  </ImageBackground>
                  <ImageBackground
                    style={{flex: 1}}
                    source={require('./assets/images/top-rank-player-bg.png')}>
                    <View
                      style={{
                        flex: 1,
                        overflow: 'hidden',
                        position: 'relative',
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}>
                      <View style={{flex: 1}}>
                        <Text style={styles.rank}>5</Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          overflow: 'hidden',
                          position: 'relative',
                          alignItems: 'center',
                          flexDirection: 'row',
                        }}>
                        <Image
                          style={{flex: 1}}
                          source={require('./assets/images/profile.jpg')}
                          resizeMode="center"
                        />
                      </View>
                      <View style={{flex: 2}}>
                        <Text style={styles.bingoName}>Spark Bingo</Text>
                        <Text style={styles.bingoScore}>$ 121155</Text>
                      </View>
                    </View>
                  </ImageBackground>
                  <ImageBackground
                    style={{flex: 1}}
                    source={require('./assets/images/top-rank-player-bg.png')}>
                    <View
                      style={{
                        flex: 1,
                        overflow: 'hidden',
                        position: 'relative',
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}>
                      <View style={{flex: 1}}>
                        <Text style={styles.rank}>6</Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          overflow: 'hidden',
                          position: 'relative',
                          alignItems: 'center',
                          flexDirection: 'row',
                        }}>
                        <Image
                          style={{flex: 1}}
                          source={require('./assets/images/profile.jpg')}
                          resizeMode="center"
                        />
                      </View>
                      <View style={{flex: 2}}>
                        <Text style={styles.bingoName}>Spark Bingo</Text>
                        <Text style={styles.bingoScore}>$ 121155</Text>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      overflow: 'hidden',
                      position: 'relative',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{flex: 1, transform: [{rotate: '90deg'}]}}
                      source={require('./assets/images/bet-minus.png')}
                      resizeMode="contain"
                    />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      overflow: 'hidden',
                      position: 'relative',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{flex: 1, transform: [{rotate: '-90deg'}]}}
                      source={require('./assets/images/bet-minus.png')}
                      resizeMode="contain"
                    />
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                flex: 1,
              }}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 5,
                }}>
                {this.renderBingoText()}
                {data.map((datum, index) => {
                  return this.renderRow(index);
                })}
              </View>
              <View
                style={{
                  flex: 1,
                  padding: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {this.renderBingoText()}
                {data.map((datum, index) => {
                  return this.renderRow(index);
                })}
              </View>
            </View>
            <View
              style={{
                flex: 1,
              }}>
              <View
                style={{
                  flex: 1,
                  padding: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {this.renderBingoText()}
                {data.map((datum, index) => {
                  return this.renderRow(index);
                })}
              </View>
              <View
                style={{
                  flex: 1,
                  padding: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {this.renderBingoText()}
                {data.map((datum, index) => {
                  return this.renderRow(index);
                })}
              </View>
            </View>
            <View
              style={{
                flex: 1,
              }}>
              <View
                style={{
                  flex: 1,
                  padding: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {this.renderBingoText()}
                {data.map((datum, index) => {
                  return this.renderRow(index);
                })}
              </View>
              <View
                style={{
                  flex: 1,
                  padding: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {this.renderBingoText()}
                {data.map((datum, index) => {
                  return this.renderRow(index);
                })}
              </View>
            </View>
            <View
              style={{
                flex: 0.5,
                borderColor: 'yellow',
                borderWidth: 3,
                borderRadius: 10,
                alignItems: 'center',
                overflow: 'hidden',
              }}>
              <View style={{flex: 1}}>
                <Text style={styles.winningPatternsText}>WINNING PATTERNS</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  overflow: 'hidden',
                  position: 'relative',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Image
                  style={{flex: 1}}
                  source={require('./assets/images/winning-pattern-1.png')}
                  resizeMode="center"
                />
              </View>
              <View
                style={{
                  flex: 1,
                  overflow: 'hidden',
                  position: 'relative',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Image
                  style={{flex: 1}}
                  source={require('./assets/images/winning-pattern-1.png')}
                  resizeMode="center"
                />
              </View>
              <View
                style={{
                  flex: 1,
                  overflow: 'hidden',
                  position: 'relative',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Image
                  style={{flex: 1}}
                  source={require('./assets/images/winning-pattern-1.png')}
                  resizeMode="center"
                />
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}>
            <View
              style={{
                flex: 1,
                overflow: 'hidden',
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{flex: 1}}
                source={require('./assets/images/ball-draw-main.png')}
                resizeMode="center"
              />
              <Text
                style={{
                  position: 'absolute',
                  fontSize: 20,
                  fontFamily: 'GROBOLD',
                }}>
                30
              </Text>
            </View>
            <View style={{flex: 3}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                }}>
                {circles.map((datum, index) => {
                  return this.renderBottomCircles(index);
                })}
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                }}>
                {circles.map((datum, index) => {
                  return this.renderBottomCircles(index);
                })}
              </View>
            </View>
            <View style={{flex: 1}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                }}>
                <View style={{flex: 2}}>
                  <Text style={styles.nameText}>BET</Text>
                </View>
                <View style={{flex: 1}}>
                  <View
                    style={{
                      flex: 1,
                      overflow: 'hidden',
                      position: 'relative',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{flex: 1}}
                      source={require('./assets/images/bet-minus.png')}
                      resizeMode="center"
                    />
                  </View>
                </View>
                <View style={{flex: 2, alignItems: 'center'}}>
                  <Text style={styles.betText}>$99.9</Text>
                </View>
                <View style={{flex: 1}}>
                  <View
                    style={{
                      flex: 1,
                      overflow: 'hidden',
                      position: 'relative',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{flex: 1}}
                      source={require('./assets/images/bet-plus.png')}
                      resizeMode="center"
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    flex: 2,
                    overflow: 'hidden',
                  }}>
                  <Text style={styles.cardsText}>CARDS</Text>
                </View>
                <View style={{flex: 1}}>
                  <View
                    style={{
                      flex: 1,
                      overflow: 'hidden',
                      position: 'relative',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{flex: 1}}
                      source={require('./assets/images/bet-minus.png')}
                      resizeMode="center"
                    />
                  </View>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text style={styles.betText}>5</Text>
                </View>
                <View style={{flex: 1}}>
                  <View
                    style={{
                      flex: 1,
                      overflow: 'hidden',
                      position: 'relative',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{flex: 1}}
                      source={require('./assets/images/bet-plus.png')}
                      resizeMode="center"
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={() => this.togglePlay()}
                style={{
                  flex: 1,
                  overflow: 'hidden',
                  position: 'relative',
                  alignItems: 'center',
                }}>
                <Image
                  style={{flex: 1}}
                  source={
                    this.state.isPlayActive
                      ? require('./assets/images/btn-play-active.png')
                      : require('./assets/images/btn-play.png')
                  }
                  resizeMode="center"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
