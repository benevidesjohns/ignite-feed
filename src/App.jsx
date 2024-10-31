import { Header } from './components/Header/Header'

import styles from './App.module.css'

import './styles.css'

function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <aside>Sidebar</aside>
        <main>
          Posts
        </main>
      </div>
    </>
  )
}

export default App
