import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Resume',
      category: 'portraits',
      description:
        'Here is a current copy of my resume. If interested, request a copy and I will send it along with a cover letter.'
    },
    {
      name: 'Crescendo',
      category: 'landscape',
      description:
        'This was our 2nd project. It is a Music based community messaging app. Users can create topics based on any number of musical topics and interact with other users.'
    },
    {
      name: 'Drink and Draw',
      category: 'landscape',
      description:
        'Our 3rd project. It is a simple e-commerce site offering users options to order any number of our different packages of adult themed craft nights. It is deployed to heroku and has all elements of the MERN stack.'
    },
    {
      name: 'Weather Companion',
      category: 'landscape',
      description:
        'Our 1st project. It is a weather companion that pulls from 2 different APIs, weather, and a ticketmaster API, so users can plan events accordingly.'
    }
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
