import styles from "./App.module.scss";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className={styles.app}>
      <Navbar />
    </div>
  );
}

export default App;
