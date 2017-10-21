import { StackNavigator } from 'react-navigation';
import CalendarScreen from '../components/CalendarScreen';

export default StackNavigator({
  CalendarHome: { screen: CalendarScreen, navigationOptions: { title: 'PLNR' } }
});
