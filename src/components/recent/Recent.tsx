import styles from './Recent.module.css'

export const Recent = () => {
  return (
    <div className={styles.recentArticles}>
      <h1 className={styles.sectionHeading}>RECENT ARTICLES</h1>

      <div className={styles.recentSection}>
        <div className={styles.recent}>
          <div className={styles.recentImage}>
            <img
              src={require('../../assets/images/Mask group (10).png')}
              className={styles.articleImage}
              alt='image10'
            />
          </div>
          <div className={styles.recentPost}>
            <h3 className={styles.recentHeading}>PACKAGES</h3>
            <p className={styles.recentText}>Lorem Ipsum + Dolor Sit Consectetur Orci Porta Nunc Etiam Duis.</p>
          </div>
        </div>

        <div className={styles.recent}>
          <div className={styles.recentImage}>
            <img
              src={require('../../assets/images/Mask group (11).png')}
              className={styles.articleImage}
              alt='image11'
            />
          </div>
          <div className={styles.recentPost}>
            <h3 className={styles.recentHeading}>FREIGHT</h3>
            <p className={styles.recentText}>30 Unique Lorem Ipsum Dolor Sit Amet Consectetur.</p>
          </div>
        </div>

        <div className={styles.recent}>
          <div className={styles.recentImage}>
            <img
              src={require('../../assets/images/Mask group (12).png')}
              className={styles.articleImage}
              alt='image10'
            />
          </div>
          <div className={styles.recentPost}>
            <h3 className={styles.recentHeading}>TRANSPORTATION</h3>
            <p className={styles.recentText}>Lorem Ipsum Dolor Sit Amet Orci Port Nunc Etiam Duis Molestie Interdum.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
