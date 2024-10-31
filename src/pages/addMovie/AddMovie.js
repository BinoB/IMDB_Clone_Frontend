// Updated AddMovie Component

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import MovieForm from "../../components/movie/movieForm/MovieForm";
import {
  createMovie,
  selectIsLoading,
} from "../../redux/features/movie/movieSlice";

const initialState = {
  name: "",
  yearOfRelease: "",
  plot: "",
  poster: "",
  actors: "", // Will be a comma-separated string to split into an array
  producer: "",
};

const AddMovie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(initialState);
  const [posterImage, setPosterImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const { name, yearOfRelease, plot, poster, actors, producer } = movie;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setPosterImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const saveMovie = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("yearOfRelease", Number(yearOfRelease));
    formData.append("plot", plot);
    formData.append("poster", posterImage);
    formData.append("actors", actors.split(",").map((id) => id.trim()));
    formData.append("producer", producer);

    console.log(...formData);

    await dispatch(createMovie(formData));

    navigate("/dashboard");
  };

  return (
    <div className="--mt1">
      <h3 className="--mt">Add New Movie</h3>
      <MovieForm
        movie={movie}
        posterImage={posterImage}
        imagePreview={imagePreview}
        handleInputChange={handleInputChange}
        handleImageChange={handleImageChange}
        saveMovie={saveMovie}
      />
    </div>
  );
};

export default AddMovie;
