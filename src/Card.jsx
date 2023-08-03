import styles from './css/App.module.css'

function Card({ image, price, title }) {
  return (
    <div style={{width: '30%', marginBottom: '20px'}}>
      <div className={styles.alt}>
        <div className={styles.card}>
          <img src={image} alt="" />
        </div>
        <div className={styles.mani}>
          <span>{title}</span>
          <span className={styles.span}>{price}</span>
        </div>
        <button>Купить</button>
      </div>
    </div>
  )
}

export default Card