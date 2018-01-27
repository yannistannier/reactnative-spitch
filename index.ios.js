import { AppRegistry } from 'react-native';
import setup from './js/setup';

import { Sentry } from 'react-native-sentry';

Sentry.config("xxx").install();


AppRegistry.registerComponent('spitchtv', () => setup);
