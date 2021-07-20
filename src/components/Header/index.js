import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <h1 className={styles['header__title']}>Overreacted</h1>
        <p className={styles['header__description']}>
          Blog about React and all things related
        </p>
      </div>
    </header>
  )
}

export default Header
