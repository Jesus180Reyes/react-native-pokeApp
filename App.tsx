import { NativeRouter } from 'react-router-native';
import { HomePage } from './src/screens/HomePage';
import { PaperProvider } from 'react-native-paper';

export default function App() {

    return (
    <PaperProvider>
      <HomePage/>
    </PaperProvider>
  );
}


