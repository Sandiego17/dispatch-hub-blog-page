import './Body.css';

export const Body = () => {
  return (
    <div className='body'>
      <div className='gridContainer'>
        <div className='postSnippet first'>
          <img
            src={require('../../assets/images/Mask group (2).png')}
            className='postImage'
            alt='image1'
          />
          <button className='tag tagMiddle'>DELIVERY</button>
          <h3 className='postHeading headingMain'>Lorem Ipsum - Gyak Dolor Sit Amet Consectetur.</h3>
          <p className='postCaption'>Lorem Ipsum Dolor Sit Amet Consectetur. Sapien Laoreet Quis Ultricies Convallis A Aliquet Laoreet Habitant. Nulla Consequat Malesuada Placerat Commodo Arcu Hac Nec Ornare Aenean. A Bibendum Ornare Arcu Sit Pellentesque. Ornare Faucibus Fermentum Convallis Cursus Porta Vestibulum Enim Euismod. Nunc Ut Convallis Quis Consequat Molestie Et Aliquam. Cursus In Auctor Vivamus Congue Purus Felis.</p>
        </div>

        <div className='postSnippet second'>
          <img
            src={require('../../assets/images/Mask group (1).png')}
            className='postImage'
            alt='image2'
          />
          <button className='tag tagFlank'>RECENT</button>
          <h3 className='postHeading'>Lorem Ipsum Dolor Sit Amet Consectetur.</h3>
          <p className='postCaption'>Lorem Ipsum Dolor Sit Amet Consectetur. Turpis Etiam Gravida Mi Viverra Nisi Aenean Senectus Tortor. At Vitae Id Nunc Aliquet.</p>
        </div>

        <div className='postSnippet third'>
          <img
            src={require('../../assets/images/Mask group (3).png')}
            className='postImage'
            alt='image3'
          />
          <button className='tag tagFlank'>FEATURED</button>
          <h3 className='postHeading'>Lorem Ipsum Dolor Sit Amet Consectetur.</h3>
          <p className='postCaption'>Lorem Ipsum Dolor Sit Amet Consectetur. Dignissim Amet Faucibus Tellus laculis Praesent Sit Neque. Malesuada Egestas Est.</p>
        </div>

        <div className='postSnippet fourth'>
          <img
            src={require('../../assets/images/Mask group (4).png')}
            className='postImage'
            alt='image4'
          />
          <button className='tag tagFlank'>POPULAR</button>
          <h3 className='postHeading'>Lorem Ipsum Dolor Sit Amet Consectetur.</h3>
          <p className='postCaption'>Lorem Ipsum Dolor Sit Amet Consectetur. Orci Porta Nunc Etiam Duis Molestie Interdum Venenatis Nisl Et. Ullamcorper Lorem Magna.</p>
        </div>

        <div className='postSnippet fifth'>
          <img
            src={require('../../assets/images/Mask group (5).png')}
            className='postImage'
            alt='image5'
          />
          <button className='tag tagLast'>TECHNOLOGY</button>
          <h3 className='postHeading'>Lorem Ipsum Dolor Sit Amet Consectetur.</h3>
          <p className='postCaption'>Lorem Ipsum Dolor Sit Amet Consectetur. Ut Ut Diam Sit Aliquam Cursus Et Ut Diam Consectetur. Felis laculis Tellus Sed Sed Tellus.</p>
        </div>

        <div className='labelRecent sixth'>
          <h2 className='labels'>Recent Articles</h2>
        </div>

        <div className='popular seventh'>
          <h2 className='labels'>Popular</h2>
        </div>
      </div>

      <div className='mostRead'>
        <h2 className='labels'>Most Read Article</h2>
      </div>

      <div className='lowerBody'>
        <div className='articles'>
          <div className='container'>
            <div>
              <img
                src={require('../../assets/images/Mask group (6).png')}
                className='captionImage'
                alt='image6'
              />
            </div>
            <div className='captionBody'>
              <button className='caption'>TECHNOLOGY</button>
              <h3 className='captionHeader'>Lorem Ipsum Dolor Sit Amet - Gi Consectetur. Mauris Integer Nulla Id.</h3>
              <p className='captionText'>Lorem Ipsum Dolor Sit Amet Consectetur. Orci Porta Nunc Etiam Duis Molestie Interdum Venenatis Nisl Et. Ullamcorper Lorem Magna.</p>
            </div>
          </div>

          <div className='container'>
            <div className='captionImage'>
              <img
                src={require('../../assets/images/Mask group (7).png')}
                className='captionImage'
                alt='image7'
              />
            </div>
            <div className='captionBody'>
              <button className='caption'>DELIVERY</button>
              <h3 className='captionHeader'>Lorem Ipsum Dolor Sit Amet - Gi Consectetur. Mauris Integer Nulla Id.</h3>
              <p className='captionText'>Lorem Ipsum Dolor Sit Amet Consectetur. Orci Porta Nunc Etiam Duis Molestie Interdum Venenatis Nisl Et. Ullamcorper Lorem Magna.</p>
            </div>
          </div>

          <div className='container'>
            <div className='captionImage'>
              <img
                src={require('../../assets/images/Mask group (8).png')}
                className='captionImage'
                alt='image8'
              />
            </div>
            <div className='captionBody'>
              <button className='caption'>AUTOMOBILE</button>
              <h3 className='captionHeader'>Lorem Ipsum Dolor Sit Amet - Gi Consectetur. Mauris Integer Nulla Id.</h3>
              <p className='captionText'>Lorem Ipsum Dolor Sit Amet Consectetur. Orci Porta Nunc Etiam Duis Molestie Interdum Venenatis Nisl Et. Ullamcorper Lorem Magna.</p>
            </div>
          </div>
        </div>

        <div className='ad'>
          <img
            src={require('../../assets/images/Mask group (9).png')}
            className='adImage'
            alt='Ad-image'
          />
          <img
            src={require('../../assets/logos/Dispatch hub logo 1.png')}
            className='adLogo'
            alt='Ad-logo'
          />
          <p className='adText'>Lorem Ipsum Dolor Sit Amet Consectetur. Gravida Nec Nulla Diam Fames Pretium Odio Arcu. Pellentesque Risus Est Turpis Dapibus Tincidunt Odio Cursus Viverra. Id Ullamcorper Turpis Mi Mi. Fermentum Eget Massa.</p>
          <p className='adPrint'>Ad</p>
        </div>
      </div>
    </div>
  )
}
