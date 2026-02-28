import './Gallery.css';
import work1 from '../assets/ourwork/work1.png';
import work2 from '../assets/ourwork/work2.png';
import work3 from '../assets/ourwork/work3.jpeg';
import work4 from '../assets/ourwork/work4.jpeg';
import work5 from '../assets/ourwork/work5.jpeg';
import work6 from '../assets/ourwork/work6.png';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: '',
      category: 'Our Work',
      image: work1
    },
    {
      id: 2,
      title: '',
      category: 'Our Work',
      image: work2
    },
    {
      id: 3,
      title: '',
      category: 'Our Work',
      image: work3
    },
    {
      id: 4,
      title: '',
      category: 'Our Work',
      image: work4
    },
    {
      id: 5,
      title: '',
      category: 'Our Work',
      image: work5
    },
    {
      id: 6,
      title: '',
      category: 'Our Work',
      image: work6
    }
  ];

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <h2 className="section-title">Our Portfolio</h2>
        <p className="gallery-intro">
          Explore our collection of completed projects showcasing our expertise in steel fabrication 
          and construction across various industries.
        </p>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-image">
                <img
                  src={item.image}
                  alt={`Our work ${item.id}`}
                  className="gallery-photo"
                  loading="lazy"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
              <div className="gallery-overlay">
                <div className="gallery-info">
                  <span className="gallery-category">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
