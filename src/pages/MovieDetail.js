import React from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetail.css'; 

const movieData = [
  {
    id: '1',
    title: 'Oppenheimer',
    description: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
    img: 'https://m.media-amazon.com/images/I/71lqDylcvGL.jpg',
    cast: ['Cillian Murphy', 'Emily Blunt', 'Matt Damon'],
    director: 'Christopher Nolan',
    duration: '180 minutes',
    releaseDate: 'July 21, 2023',
    genre: 'Biography, Drama, History',
  },
  {
    id: '2',
    title: 'Oppenheimer',
    description: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
    img: 'https://m.media-amazon.com/images/I/71lqDylcvGL.jpg',
    cast: ['Cillian Murphy', 'Emily Blunt', 'Matt Damon'],
    director: 'Christopher Nolan',
    duration: '180 minutes',
    releaseDate: 'July 21, 2023',
    genre: 'Biography, Drama, History',
  },
  // Tambahkan film lainnya sesuai kebutuhan
];

export default function MovieDetail() {
  const { id } = useParams();

  // Mencari film berdasarkan id
  const movie = movieData.find(movie => movie.id === id);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#282c34', minHeight: '100vh', padding: '20px', color: 'white' }}>
      {movie ? (
        <>
          <h1>{movie.title}</h1>
          <img src={movie.img} alt={movie.title} style={{ width: '220px', borderRadius: '20px' }} />
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Duration:</strong> {movie.duration}</p>
          <p><strong>Release Date:</strong> {movie.releaseDate}</p>
          <p><strong>Director:</strong> {movie.director}</p>
          <p><strong>Cast:</strong> {movie.cast.join(', ')}</p>
          <p>{movie.description}</p>
        </>
      ) : (
        <h1>Movie not found</h1>
      )}
    </div>
  );
}
