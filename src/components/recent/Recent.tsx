import './Recent.css';

export const Recent = () => {
  return (
    <div className='recentArticles'>
      <h1 className='sectionHeading'>RECENT ARTICLES</h1>

      <div className='recentSection'>
        <div className='recent'>
          <div className='recentImage'>
            <img src={require('../../assets/images/Mask group (10).png')} className='articleImage' alt='image10' />
          </div>
          <div className='recentPost'>
            <h3 className='recentHeading'>PACKAGES</h3>
            <p className='recentText'>Lorem Ipsum + Dolor Sit Consectetur Orci Porta Nunc Etiam Duis.</p>
          </div>
        </div>

        <div className='recent'>
          <div className='recentImage'>
            <img src={require('../../assets/images/Mask group (11).png')} className='articleImage' alt='image11' />
          </div>
          <div className='recentPost'>
            <h3 className='recentHeading'>FREIGHT</h3>
            <p className='recentText'>30 Unique Lorem Ipsum Dolor Sit Amet Consectetur.</p>
          </div>
        </div>

        <div className='recent'>
          <div className='recentImage'>
            <img src={require('../../assets/images/Mask group (12).png')} className='articleImage' alt='image10' />
          </div>
          <div className='recentPost'>
            <h3 className='recentHeading'>TRANSPORTATION</h3>
            <p className='recentText'>Lorem Ipsum Dolor Sit Amet Orci Port Nunc Etiam Duis Molestie Interdum.</p>
          </div>
        </div>
      </div>
    </div>
  )
}