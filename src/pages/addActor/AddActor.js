import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import ActorForm from "../../components/actor/actorForm/ActorForm";
import {
  createActor,
  selectIsLoading,
} from "../../redux/features/actor/actorSlice";

const initialState = {
  name: "",
  gender: "",
  dob: "",
  bio: "",
};

const AddActor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [actor, setActor] = useState(initialState);
  const [billImage, setBillImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
//   const [description, setDescription] = useState("");

//   const isLoading = useSelector(selectIsLoading);

  const { name, gender, bio, dob } = actor;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setActor({ ...actor, [name]: value });
  };

  const handleImageChange = (e) => {
    setBillImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };


  const saveActor = async (e) => {
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

    await dispatch(createActor(formData));

    // navigate("/dashboard");
  };

  return (
    <div>
      {/* {isLoading && <Loader />} */}
      <h3 className="--mt">Add New Actor</h3>
      <ActorForm
        actor={actor}
        billImage={billImage}
        imagePreview={imagePreview}
        // description={description}
        // setDescription={setDescription}
        handleInputChange={handleInputChange}
        handleImageChange={handleImageChange}
        saveActor={saveActor}
      />
    </div>
  );
};

export default AddActor;