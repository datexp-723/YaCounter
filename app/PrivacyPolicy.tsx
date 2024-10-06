import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { Platform, StyleSheet } from 'react-native';
import Markdown from 'react-native-markdown-display';

export default function PrivacyPolicy() {

  const file = require('../PRIVACY_POLICY.md');

  return (
    <Markdown>
    {file}
  </Markdown>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});