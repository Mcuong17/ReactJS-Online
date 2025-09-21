
import './styles/main.scss'
import styles from './App.module.scss'
import AppRouters from './components/AppRouters';



function App() {
  return (
    <div className={styles['main-style']}>
     <AppRouters/>
    </div>
  );
}

export default App;
