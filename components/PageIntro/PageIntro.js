import styles from './PageIntro.module.scss';

export default function PageIntro({ title, subtitle, description }) {
  return (
    <div className={`${styles.PageIntro} row`}>
      <div className="col-8 col-md-8 col-lg-12">
        <p className={styles.subtitle}>{subtitle}</p>
        <h1>{title}</h1>
      </div>
      <div className="col-10 offset-2 col-md-6 offset-md-1 col-lg-10 offset-lg-2">
        <p>{description}</p>
      </div>
    </div>
  )
}
