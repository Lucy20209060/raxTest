import {createElement, Component} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import styles from './App.css';

export default class App extends Component {
  render() {
    return (
      <View style={styles.app} className='app-page-wrap'>
        <View style={styles.appHeader}>
          <Text style={styles.appBanner}>Welcome to Rax</Text>
        </View>
        <Text style={styles.appIntro} onClick={this.touch}>
          To get started, edit src/App.js and save to reload11.
        </Text>
      </View>
    );
  }

  touch = () => {
    console.log(11)
    
  }
}
