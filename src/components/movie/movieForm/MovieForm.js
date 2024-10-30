import React from "react";
import Card from "../../card/Card";
import "./MovieForm.css";

const MovieForm = ({
  movie,
  movieImage,
  imagePreview,
  handleInputChange,
  handleImageChange,
  saveMovie,
}) => {
  const validateForm = () => {
    if (!movie.name || !movie.dob || !movie.bio) {
      alert("Please fill in all required fields: Name, Date of Birth, Bio");
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

          {/* <label>Gender:</label>
          <input
            type="text"
            placeholder="Movie Gender"
            name="gender"
            value={movie?.gender || ""}
            onChange={handleInputChange}
            autoComplete="off"
          /> */}

          <label>Year Of Release:</label>
          <input
            type="date"
            name="dob"
            value={movie?.dob || ""}
            onChange={handleInputChange}
            autoComplete="off"
          />

          <label>Bio:</label>
          <textarea
            placeholder="Bio"
            name="bio"
            value={movie?.bio || ""}
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
              onChange={(e) => handleImageChange(e)}
            />
          </div>

          {imagePreview != null ? (
            <div className="image-preview">
              <img src={imagePreview} alt="product" />
            </div>
          ) : (
            <p>No image set for this Expense.</p>
          )}

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
