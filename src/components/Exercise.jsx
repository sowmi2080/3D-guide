// Exercise.jsx
import React from 'react';
import '../styles/Exercise.css';


const models = [
  {
    title: "Fitness",
    iframeUrl: "https://sketchfab.com/playlists/embed?collection=940db75380954194bf4810e4924b067b&autostart=0",
    linkText: "Fitness",
    modelLink: "https://sketchfab.com/Alexdubob/collections/fitness-940db75380954194bf4810e4924b067b",
    author: "Alexdubob",
    authorLink: "https://sketchfab.com/Alexdubob"
  },
  {
    title: "Exercise Form and Muscles",
    iframeUrl: "https://sketchfab.com/playlists/embed?collection=977d9ad8bb024ba884b655f409f0d09a&autostart=0",
    linkText: "Exercise Form and Muscles",
    modelLink: "https://sketchfab.com/Reveille33/collections/exercise-form-and-muscles-977d9ad8bb024ba884b655f409f0d09a",
    author: "Reveille33",
    authorLink: "https://sketchfab.com/Reveille33"
  },
  {
    title: "Yoga Lunge Exercise",
    iframeUrl: "https://sketchfab.com/models/93b25198122b4417a5da3d8428fae423/embed",
    linkText: "Yoga Lunge Exercise",
    modelLink: "https://sketchfab.com/3d-models/yoga-lunge-exercise-93b25198122b4417a5da3d8428fae423",
    author: "danielmikulik",
    authorLink: "https://sketchfab.com/danielmikulik"
  },
  {
    title: "Pistol Squats Exercise",
    iframeUrl: "https://sketchfab.com/models/c6500a378bb940b29dfd8c0d8d47780f/embed",
    linkText: "Pistol Squats Exercise",
    modelLink: "https://sketchfab.com/3d-models/pistol-squats-exercise-c6500a378bb940b29dfd8c0d8d47780f",
    author: "danielmikulik",
    authorLink: "https://sketchfab.com/danielmikulik"
  },
  {
    title: "3D Rigged Fitness Girl",
    iframeUrl: "https://sketchfab.com/models/d6ad0e69dbc649deb9393b9e329735f4/embed",
    linkText: "3D Rigged Fitness Girl",
    modelLink: "https://sketchfab.com/3d-models/3d-rigged-fitness-girl-d6ad0e69dbc649deb9393b9e329735f4",
    author: "Unknown",
    authorLink: "#"
  },
  {
    title: "Fitness Woman Stretching 438",
    iframeUrl: "https://sketchfab.com/models/a0a087d555044ef98f311f6b812a31e4/embed",
    linkText: "Fitness Woman Stretching 438",
    modelLink: "https://sketchfab.com/3d-models/fitness-woman-stretching-in-gym-438-a0a087d555044ef98f311f6b812a31e4",
    author: "Unknown",
    authorLink: "#"
  },
  {
    title: "Fitness Woman Stretching 438 (Duplicate)",
    iframeUrl: "https://sketchfab.com/models/a0a087d555044ef98f311f6b812a31e4/embed",
    linkText: "Fitness Woman Stretching 438 (Duplicate)",
    modelLink: "https://sketchfab.com/3d-models/fitness-woman-stretching-in-gym-438-a0a087d555044ef98f311f6b812a31e4",
    author: "Unknown",
    authorLink: "#"
  }
];

const Exercise = () => {
  return (
    <div className="model-container">
      {models.map((model, index) => (
        <div key={index} className="model-card">
          <iframe
            src={model.iframeUrl}
            title={model.title}
            allow="autoplay; fullscreen; xr-spatial-tracking"
            frameBorder="0"
            allowFullScreen
            mozAllowFullScreen="true"
            webkitAllowFullScreen="true"
            className="model-iframe"
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default Exercise;
