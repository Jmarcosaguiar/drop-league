import { Groups } from '@screens/Groups';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme'
import Loading from '@components/Loading';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content"
      backgroundColor="transparent"
      translucent/>
      <Groups/>
    </ThemeProvider>
  );
};
