import { styles } from './functionalityAndStyling/styles';
import Header from './components/headerComponents/Header';
import Footer from './components/footer'

function App() {
  return (
    <div style={styles.App}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
