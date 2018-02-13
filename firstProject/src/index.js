import { StackNavigator } from 'react-navigation';

import Posts from './scenes/posts';
import Profile from './scenes/profile';

const App = StackNavigator({
  Posts: { screen: Posts },
  Profile: { screen: Profile }
});

export default App;
