import { useState } from "react";
import { useFormik } from "formik";

export default function ComentsForm({ addNewComments }) {
  // let [formData, setFormData] = useState({
  //   username: "",
  //   remark: "",
  //   rating: 5,
  // });

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username Required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      remark: "",
      rating: 5,
    },
    validate,
    onSubmit: (values) => {
      addNewComments(values);
    },
  });

  // let handleInputChange = (event) => {
  //   setFormData((currData) => {
  //     return { ...currData, [event.target.name]: event.target.value };
  //   });
  // };

  // let handleSubmit = (event) => {
  //   console.log(formData);
  //   addNewComments(formData);
  //   event.preventDefault();
  //   setFormData({
  //     username: "",
  //     remark: "",
  //     rating: 5,
  //   });
  // };
  return (
    <div>
      <h4>Give a Comments</h4>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          placeholder="@username"
          value={formik.values.username}
          onChange={formik.handleChange}
          id="username"
          name="username"
        />
        {formik.errors.username && formik.touched.username ? (
          <p style={{ color: "red" }}>{formik.errors.username}</p>
        ) : null}

        <br />
        <br />
        <label htmlFor="remark">Remark: </label>
        <textarea
          placeholder="add few remarks"
          value={formik.values.remark}
          onChange={formik.handleChange}
          id="remark"
          name="remark"
        />

        <br />
        <br />
        <label htmlFor="rating">Rating: </label>
        <input
          type="number"
          placeholder="rating"
          value={formik.values.rating}
          min={1}
          max={5}
          onChange={formik.handleChange}
          id="rating"
          name="rating"
        />
        <br />
        <br />
        <button type="submit">Add Comments</button>
      </form>
    </div>
  );
}
