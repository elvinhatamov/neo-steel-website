import { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Placeholder images - using abstract patterns that represent steel/industrial work
  const galleryItems = [
    {
      id: 1,
      title: "Industrial Steel Framework",
      category: "Structural"
    },
    {
      id: 2,
      title: "Commercial Building Project",
      category: "Commercial"
    },
    {
      id: 3,
      title: "Custom Metal Fabrication",
      category: "Fabrication"
    },
    {
      id: 4,
      title: "Steel Bridge Construction",
      category: "Infrastructure"
    },
    {
      id: 5,
      title: "Warehouse Steel Structure",
      category: "Industrial"
    },
    {
      id: 6,
      title: "Architectural Metalwork",
      category: "Custom"
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
            <div 
              key={item.id} 
              className="gallery-item"
              onClick={() => setSelectedImage(item)}
            >
              <div className="gallery-image">
                <div className="placeholder-image">
                  <span className="placeholder-text">Project {item.id}</span>
                </div>
              </div>
              <div className="gallery-overlay">
                <div className="gallery-info">
                  <h4>{item.title}</h4>
                  <span className="gallery-category">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedImage(null)}>×</button>
              <div className="modal-image">
                <div className="placeholder-image large">
                  <span className="placeholder-text">Project {selectedImage.id}</span>
                </div>
              </div>
              <div className="modal-info">
                <h3>{selectedImage.title}</h3>
                <p className="modal-category">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
