import { useState } from "react";
import { Form as FormikForm, useFormik } from "formik";
import { formValidation } from "../schemas";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const initialValuesCuForm = {
  formText: "",
  formNumber: "",
  formEmail: "",
  formPassword: "",
  confirmPassword: "",
  radioOptions: "",
  formCheckbox: false,
  formSelect: "",
  formFile: null,
  formDate: "",
  formTime: "",
  formRange: 50,
  formTel: "",
  formUrl: "",
  formColor: "#000000",
  formSearch: "",
};

export default function CustomForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const { handleSubmit, handleChange, touched, errors, handleBlur, values } =
    useFormik({
      initialValues: initialValuesCuForm,
      validationSchema: formValidation,
      onSubmit: (values, action) => {
        console.log("Form Values:", values);
        action.resetForm();
      },
    });

  return (
    <div className="container mt-5 border p-3 my-5 rounded bg-dark text-light">
      <h2 className="text-center">Form with All Input Types</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>
        {/* Text Input */}
        <div className="form-group my-3">
          <label htmlFor="formText">Text Input</label>
          <input
            type="text"
            className="form-control"
            id="formText"
            name="formText"
            placeholder="Enter text"
            value={values.formText}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.formText && touched.formText && (
            <p className="text-danger">{errors.formText}</p>
          )}
        </div>

        {/* Number Input */}
        <div className="form-group my-3">
          <label htmlFor="formNumber">Number Input</label>
          <input
            type="number"
            className="form-control"
            id="formNumber"
            name="formNumber"
            placeholder="Enter a number"
            value={values.formNumber}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.formNumber && touched.formNumber && (
            <p className="text-danger">{errors.formNumber}</p>
          )}
        </div>

        {/* Email Input */}
        <div className="form-group my-3">
          <label htmlFor="formEmail">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="formEmail"
            name="formEmail"
            placeholder="Enter email"
            value={values.formEmail}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.formEmail && touched.formEmail && (
            <p className="text-danger">{errors.formEmail}</p>
          )}
        </div>
        {/* Password */}
        <div className="form-group my-3   ">
          <label htmlFor="formPassword">Password</label>
          <div
            className="wrapper"
            style={{
              display: "flex",
              position: "relative",
            }}
          >
            <input
              type={isPasswordVisible ? "text" : "password"}
              className={`form-control border-2  ${
                values.formPassword !== values.confirmPassword
                  ? "border-danger"
                  : values.formPassword === values.confirmPassword &&
                    values.formPassword.length > 0
                  ? "border-success"
                  : ""
              }`}
              id="formPassword"
              name="formPassword"
              placeholder="Password"
              autoComplete="off"
              value={values.formPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span
              className="input-group-text position-absolute "
              onClick={togglePasswordVisibility}
              style={{
                cursor: "pointer",
                top: "5px",
                left: "95%",
                border: "none",
              }}
            >
              {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          {errors.formPassword && touched.formPassword ? (
            <p className="form-error text-danger">{errors.formPassword}</p>
          ) : null}
        </div>
        {/* Confirm Password */}
        <div className="form-group my-3 ">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div
            className="wrapper"
            style={{
              display: "flex",
              position: "relative",
            }}
          >
            <input
              type="password"
              className={`form-control border-2 ${
                values.formPassword !== values.confirmPassword
                  ? "border-danger"
                  : values.formPassword === values.confirmPassword &&
                    values.formPassword.length > 0
                  ? "border-success"
                  : ""
              }`}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              autoComplete="off"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <span
              className="input-group-text position-absolute"
              onClick={togglePasswordVisibility}
              style={{
                cursor: "pointer",
                top: "5px",
                left: "95%",
                border: "none",
              }}
            >
              {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          {errors.confirmPassword && touched.confirmPassword ? (
            <p className="form-error text-danger">{errors.confirmPassword}</p>
          ) : null}
        </div>
        {/* Radio Buttons */}
        <div className="form-group my-3">
          <label>Choose Option</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="radioOptions"
              value="option1"
              onChange={handleChange}
              onBlur={handleBlur}
              checked={values.radioOptions === "option1"}
            />
            <label className="form-check-label" htmlFor="radio1">
              Option 1
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="radioOptions"
              value="option2"
              onChange={handleChange}
              onBlur={handleBlur}
              checked={values.radioOptions === "option2"}
            />
            <label className="form-check-label" htmlFor="radio2">
              Option 2
            </label>
          </div>
          {errors.radioOptions && touched.radioOptions && (
            <p className="text-danger">{errors.radioOptions}</p>
          )}
        </div>

        {/* Checkbox */}
        <div className="form-group my-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="formCheckbox"
              name="formCheckbox"
              onChange={handleChange}
              checked={values.formCheckbox}
            />
            <label className="form-check-label" htmlFor="formCheckbox">
              Accept Terms and Conditions
            </label>
          </div>
          {errors.formCheckbox && touched.formCheckbox && (
            <p className="text-danger">{errors.formCheckbox}</p>
          )}
        </div>

        {/* Select Dropdown */}
        <div className="form-group my-3">
          <label htmlFor="formSelect">Select Option</label>
          <select
            className="form-control"
            id="formSelect"
            name="formSelect"
            value={values.formSelect}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="">Choose...</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          {errors.formSelect && touched.formSelect && (
            <p className="text-danger">{errors.formSelect}</p>
          )}
        </div>

        {/* File Input */}
        <div className="form-group my-3 ">
          <label htmlFor="formFile">Upload File</label>
          <input
            type="file"
            className="form-control-file"
            id="formFile"
            name="formFile"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.formFile && touched.formFile && (
            <p className="text-danger">{errors.formFile}</p>
          )}
        </div>

        {/* Date Input */}
        <div className="form-group my-3">
          <label htmlFor="formDate">Date</label>
          <input
            type="date"
            className="form-control"
            id="formDate"
            name="formDate"
            value={values.formDate}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.formDate && touched.formDate && (
            <p className="text-danger">{errors.formDate}</p>
          )}
        </div>

        {/* Time Input */}
        <div className="form-group my-3">
          <label htmlFor="formTime">Time</label>
          <input
            type="time"
            className="form-control"
            id="formTime"
            name="formTime"
            value={values.formTime}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.formTime && touched.formTime && (
            <p className="text-danger">{errors.formTime}</p>
          )}
        </div>

        {/* Range Input */}
        <div className="form-group my-3">
          <label htmlFor="formRange">Range (0-100)</label>
          <input
            type="range"
            className="form-control"
            id="formRange"
            name="formRange"
            min="0"
            max="100"
            value={values.formRange}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <label htmlFor="formRange">Selcted Value {values.formRange}</label>
        </div>

        {/* Tel Input */}
        <div className="form-group my-3">
          <label htmlFor="formTel">Telephone</label>
          <input
            type="tel"
            className="form-control"
            id="formTel"
            name="formTel"
            placeholder="Enter telephone number"
            value={values.formTel}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.formTel && touched.formTel && (
            <p className="text-danger">{errors.formTel}</p>
          )}
        </div>

        {/* URL Input */}
        <div className="form-group my-3">
          <label htmlFor="formUrl">URL</label>
          <input
            type="url"
            className="form-control"
            id="formUrl"
            name="formUrl"
            placeholder="Enter URL"
            value={values.formUrl}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.formUrl && touched.formUrl && (
            <p className="text-danger">{errors.formUrl}</p>
          )}
        </div>

        {/* Color Input */}
        <div className="form-group my-3">
          <label htmlFor="formColor">Color Picker</label>
          <input
            type="color"
            className="form-control"
            id="formColor"
            name="formColor"
            value={values.formColor}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        {/* Submit Button */}
        <div
          className="form-group p-3 d-flex"
          style={{ justifyContent: "end" }}
        >
          <button type="submit" className="btn btn-primary" name="formSubmit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
