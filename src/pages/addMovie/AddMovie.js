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
  gender: "",
  dob: "",
  bio: "",
};

const AddMovie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(initialState);
  const [billImage, setBillImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
//   const [description, setDescription] = useState("");

//   const isLoading = useSelector(selectIsLoading);

  const { name, gender, bio, dob } = movie;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleImageChange = (e) => {
    setBillImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };


  const saveMovie = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("gender", gender);
    // formData.append("dob", Number(dob));
	formData.append("dob", dob);

    formData.append("bio", bio);
    // formData.append("description", description);
    formData.append("image", billImage);

    console.log(...formData);

    await dispatch(createMovie(formData));

    // navigate("/dashboard");
  };

  return (
    <div className="--mt1">
      {/* {isLoading && <Loader />} */}
      {/* <h3 className="--mt">Add New Movie</h3> */}
      <MovieForm
        movie={movie}
        billImage={billImage}
        imagePreview={imagePreview}
        // description={description}
        // setDescription={setDescription}
        handleInputChange={handleInputChange}
        handleImageChange={handleImageChange}
        saveMovie={saveMovie}
      />
    </div>
  );
};

export default AddMovie;