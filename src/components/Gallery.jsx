import './Gallery.css';
import project1 from '../assets/projects/Project 1.png';
import project2 from '../assets/projects/Project 2.png';
import project3 from '../assets/projects/Project 3.png';
import project4 from '../assets/projects/Project 4.png';
import project5 from '../assets/projects/Project 5.jpeg';
import project6 from '../assets/projects/Project 6.jpeg';
import project7 from '../assets/projects/Project 7.jpeg';
import project8 from '../assets/projects/Project 8.jpeg';
import project9 from '../assets/projects/Project 9.jpeg';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: '',
      category: 'Our Work',
      image: project1
    },
    {
      id: 2,
      title: '',
      category: 'Our Work',
      image: project2
    },
    {
      id: 3,
      title: '',
      category: 'Our Work',
      image: project3
    },
    {
      id: 4,
      title: '',
      category: 'Our Work',
      image: project4
    },
    {
      id: 5,
      title: '',
      category: 'Our Work',
      image: project5
    },
    {
      id: 6,
      title: '',
      category: 'Our Work',
      image: project6
    },
    {
      id: 7,
      title: '',
      category: 'Our Work',
      image: project7
    },
    {
      id: 8,
      title: '',
      category: 'Our Work',
      image: project8
    },
    {
      id: 9,
      title: '',
      category: 'Our Work',
      image: project9
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
