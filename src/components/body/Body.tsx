import './Body.css';

export const Body = () => {
  return (
    <div className='body'>
      <div className="grid-container">
        <div className='postSnippet first'>
          <img src={require('../../assets/images/Mask group (1).png')} className='postImage' alt="image1" />
          <button className='tag tagFlank'>RECENT</button>
          <h3 className='postHeading'>Lorem Ipsum Dolor Sit Amet Consectetur.</h3>
          <p className='postCaption'>Lorem Ipsum Dolor Sit Amet Consectetur. Turpis Etiam Gravida Mi Viverra Nisi Aenean Senectus Tortor. At Vitae Id Nunc Aliquet.</p>
        </div>

        <div className='postSnippet second'>
          <img src={require('../../assets/images/Mask group (2).png')} className='postImage' alt="image2" />
          <button className='tag tagMiddle'>DELIVERY</button>
          <h3 className='postHeading headingMain'>Lorem Ipsum - Gyak Dolor Sit Amet Consectetur.</h3>
          <p className='postCaption'>Lorem Ipsum Dolor Sit Amet Consectetur. Sapien Laoreet Quis Ultricies Convallis A Aliquet Laoreet Habitant. Nulla Consequat Malesuada Placerat Commodo Arcu Hac Nec Ornare Aenean. A Bibendum Ornare Arcu Sit Pellentesque. Ornare Faucibus Fermentum Convallis Cursus Porta Vestibulum Enim Euismod. Nunc Ut Convallis Quis Consequat Molestie Et Aliquam. Cursus In Auctor Vivamus Congue Purus Felis.</p>
        </div>

        <div className='postSnippet third'>
          <img src={require('../../assets/images/Mask group (3).png')} className='postImage' alt="image3" />
          <button className='tag tagFlank'>FEATURED</button>
          <h3 className='postHeading'>Lorem Ipsum Dolor Sit Amet Consectetur.</h3>
          <p className='postCaption'>Lorem Ipsum Dolor Sit Amet Consectetur. Dignissim Amet Faucibus Tellus laculis Praesent Sit Neque. Malesuada Egestas Est.</p>
        </div>

        <div className='postSnippet fourth'>
          <img src={require('../../assets/images/Mask group (4).png')} className='postImage' alt="image4" />
          <button className='tag tagFlank'>POPULAR</button>
          <h3 className='postHeading'>Lorem Ipsum Dolor Sit Amet Consectetur.</h3>
          <p className='postCaption'>Lorem Ipsum Dolor Sit Amet Consectetur. Orci Porta Nunc Etiam Duis Molestie Interdum Venenatis Nisl Et. Ullamcorper Lorem Magna.</p>
        </div>

        <div className='postSnippet fifth'>
          <img src={require('../../assets/images/Mask group (5).png')} className='postImage' alt="image5" />
          <button className='tag tagLast'>TECHNOLOGY</button>
          <h3 className='postHeading'>Lorem Ipsum Dolor Sit Amet Consectetur.</h3>
          <p className='postCaption'>Lorem Ipsum Dolor Sit Amet Consectetur. Ut Ut Diam Sit Aliquam Cursus Et Ut Diam Consectetur. Felis laculis Tellus Sed Sed Tellus.</p>
        </div>
      </div>
    </div>
  )
}