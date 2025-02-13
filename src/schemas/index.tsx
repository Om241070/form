import * as Yup from "yup";

export const formValidation = Yup.object({
  formText: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(20, "Name must be less than or equal to 20 characters")
    .required("Add Your Name Please"),

  formNumber: Yup.number()
    .min(2, "Number must be at least 2")
    .required("Add Your Number Please"),

  formEmail: Yup.string()
    .email("Invalid email address")
    .required("Add Your Email Please"),

  formPassword: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Add Your Password Please"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("formPassword"), ""], "Password must match")
    .required("Please confirm your password"),

  radioOptions: Yup.string().required("Select your Option"),

  formCheckbox: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),

  formSelect: Yup.string().required("Please select an option"),

  formFile: Yup.mixed()
    .nullable()
    .required("Please upload a file"),


  formDate: Yup.date().required("Please select a date"),

  formTime: Yup.string().required("Please select a time"),

  formRange: Yup.number().min(0).max(100).required("Please select a range"),

  formTel: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Please enter your phone number"),

  formUrl: Yup.string()
    .url("Invalid URL format")
    .required("Please enter a valid URL"),

  formColor: Yup.string().required("Please select a color"),
});
