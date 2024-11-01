import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=500&auto=format&fit=crop&q=50"
            />

            <div className={styles.profile}>
                <img
                    className={styles.avatar}
                    src="https://avatars.githubusercontent.com/u/84235201?v=4"
                />

                <strong>João Benevides</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}
