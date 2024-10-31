import React from "react";
import Card from "../../card/Card";
import "./MovieForm.css";

const MovieForm = ({
  movie,
  posterImage,
  imagePreview,
  handleInputChange,
  handleImageChange,
  saveMovie,
}) => {
  const validateForm = () => {
    if (!movie.name || !movie.yearOfRelease || !movie.plot || !movie.poster || !movie.actors || !movie.producer) {
      alert("Please fill in all required fields: Movie Name, Year of Release, Plot, Poster URL, Actors, and Producer");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      saveMovie(e);
    }
  };

  return (
    <div className="add-movie">
      <Card cardClass="card">
        <form onSubmit={handleSubmit}>
          <h2 className="form-title">Add Movie</h2>

          <label>Movie Name:</label>
          <input
            type="text"
            placeholder="Movie name"
            name="name"
            value={movie?.name || ""}
            onChange={handleInputChange}
            autoComplete="off"
          />

          <label>Year Of Release:</label>
          <input
            type="number"
            placeholder="Year of release"
            name="yearOfRelease"
            value={movie?.yearOfRelease || ""}
            onChange={handleInputChange}
            autoComplete="off"
          />

          <label>Plot:</label>
          <textarea
            placeholder="Plot"
            name="plot"
            value={movie?.plot || ""}
            onChange={handleInputChange}
            autoComplete="off"
          />

          <label>Poster URL:</label>
          <input
            type="text"
            placeholder="Poster URL"
            name="poster"
            value={movie?.poster || ""}
            onChange={handleInputChange}
            autoComplete="off"
          />

          <label>Movie Image</label>
          <code className="--color-dark">
            Supported Formats: jpg, jpeg, png
          </code>
          <div>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
            />
          </div>

          {imagePreview != null ? (
            <div className="image-preview">
              <img src={imagePreview} alt="movie image preview" />
            </div>
          ) : (
            <p>No image set for this movie.</p>
          )}

          <label>Actors (Comma-separated IDs):</label>
          <input
            type="text"
            placeholder="Actor IDs"
            name="actors"
            value={movie?.actors || ""}
            onChange={handleInputChange}
            autoComplete="off"
          />

          <label>Producer ID:</label>
          <input
            type="text"
            placeholder="Producer ID"
            name="producer"
            value={movie?.producer || ""}
            onChange={handleInputChange}
            autoComplete="off"
          />

          <div className="--my">
            <button
              type="submit"
              className="--btn --btn---bg-dark rounded-pill shadow p-3"
            >
              Save
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default MovieForm;
