import React from "react";
import Card from "../../card/Card";
import "./ProducerForm.css";
import ProducerList from "../producerList/ProducerList";

const ProducerForm = ({
  producer,
  producerImage,
  imagePreview,
  handleInputChange,
  handleImageChange,
  saveProducer,
}) => {
  const validateForm = () => {
    if (!producer.name || !producer.dob || !producer.bio) {
      alert("Please fill in all required fields: Name, Date of Birth, Bio");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      saveProducer(e);
    }
  };

  return (
    <div className="add-producer">
      <Card cardClass="card">
        <form onSubmit={handleSubmit}>
          <h2 className="form-title">Add Producer</h2>

          <label>Producer Name:</label>
          <input
            type="text"
            placeholder="Producer name"
            name="name"
            value={producer?.name || ""}
            onChange={handleInputChange}
            autoComplete="off"
          />

          <label>Gender:</label>
          <input
            type="text"
            placeholder="Producer Gender"
            name="gender"
            value={producer?.gender || ""}
            onChange={handleInputChange}
            autoComplete="off"
          />

          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={producer?.dob || ""}
            onChange={handleInputChange}
            autoComplete="off"
          />

          <label>Bio:</label>
          <textarea
            placeholder="Bio"
            name="bio"
            value={producer?.bio || ""}
            onChange={handleInputChange}
            autoComplete="off"
          />

          <label>Producer Image</label>
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
      <div className="actor-list-container">
        <ProducerList />
      </div>
    </div>
  );
};

export default ProducerForm;
