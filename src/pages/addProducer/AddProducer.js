import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import ProducerForm from "../../components/producer/producerForm/ProducerForm";
import {
  createProducer,
  selectIsLoading,
} from "../../redux/features/producer/producerSlice";

const initialState = {
  name: "",
  gender: "",
  dob: "",
  bio: "",
};

const AddProducer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [producer, setProducer] = useState(initialState);
  const [billImage, setBillImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
//   const [description, setDescription] = useState("");

//   const isLoading = useSelector(selectIsLoading);

  const { name, gender, bio, dob } = producer;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProducer({ ...producer, [name]: value });
  };

  const handleImageChange = (e) => {
    setBillImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };


  const saveProducer = async (e) => {
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

    await dispatch(createProducer(formData));

    // navigate("/dashboard");
  };

  return (
    <div className="--mt1">
      {/* {isLoading && <Loader />} */}
      {/* <h3 className="--mt">Add New Producer</h3> */}
      <ProducerForm
        producer={producer}
        billImage={billImage}
        imagePreview={imagePreview}
        // description={description}
        // setDescription={setDescription}
        handleInputChange={handleInputChange}
        handleImageChange={handleImageChange}
        saveProducer={saveProducer}
      />
    </div>
  );
};

export default AddProducer;