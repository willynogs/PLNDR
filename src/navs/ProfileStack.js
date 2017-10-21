import { StackNavigator } from 'react-navigation';
import ProfileScreen from '../components/ProfileScreen';

export default StackNavigator({
  ProfileHome: { screen: ProfileScreen, navigationOptions: { title: 'PLNR' } }
});
