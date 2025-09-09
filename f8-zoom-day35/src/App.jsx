import Button from './components/Button'

import './styles/main.scss'
import styles from './App.module.scss'
import AppRouters from './components/AppRouters';

console.log(styles)

function App() {
  return (
    <div className={styles['main-style']}>
     <AppRouters/>
    </div>
  );
}

export default App;
