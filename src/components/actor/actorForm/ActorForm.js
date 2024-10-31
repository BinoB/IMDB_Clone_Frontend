import React from "react";
import Card from "../../card/Card";
import "./ActorForm.css";
import ActorList from "../actorList/ActorList";

const ActorForm = ({
  actor,
  actorImage,
  imagePreview,
  handleInputChange,
  handleImageChange,
  saveActor,
}) => {
  const validateForm = () => {
    if (!actor.name || !actor.dob || !actor.bio) {
      alert("Please fill in all required fields: Name, Date of Birth, Bio");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      saveActor(e);
    }
  };

  return (
    <div className="add-actor">
      <Card cardClass="card">
        <form onSubmit={handleSubmit}>
          <h2 className="form-title">Add Actor</h2>

          <label>Actor Name:</label>
          <input
            type="text"
            placeholder="Actor name"
            name="name"
            value={actor?.name || ""}
            onChange={handleInputChange}
            autoComplete="off"
          />

          <label>Gender:</label>
          <input
            type="text"
            placeholder="Actor Gender"
            name="gender"
            value={actor?.gender || ""}
            onChange={handleInputChange}
            autoComplete="off"
          />

          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={actor?.dob || ""}
            onChange={handleInputChange}
            autoComplete="off"
          />

          <label>Bio:</label>
          <textarea
            placeholder="Bio"
            name="bio"
            value={actor?.bio || ""}
            onChange={handleInputChange}
            autoComplete="off"
          />

          <label>Actor Image</label>
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
              <img src={imagePreview} alt="actor" />
            </div>
          ) : (
            <p>No image set for this actor.</p>
          )}

          <div className="--my">
            <button type="submit" className="--btn --btn---bg-dark rounded-pill shadow p-3">
              Save
            </button>
          </div>
        </form>
      </Card>
      <div className="actor-list-container">
        <ActorList />
      </div>
    </div>
  );
};

export default ActorForm;
