import { Header } from './components/Header/Header'

import styles from './App.module.css'

import './styles.css'
import { Sidebar } from './components/Sidebar/Sidebar'

function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          Posts
        </main>
      </div>
    </>
  )
}

export default App
