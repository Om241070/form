import { CustomForm, ReusableForm } from "./components";
import { fields, formValidation, initialValues } from "./data";
import { Values, FormikHelpers } from "./types";
const App = () => {
  const handleSubmit = (values: Values, action: FormikHelpers) => {
    console.log("Form submitted with values:", values);
    console.log(action);
    action.resetForm();
  };

  return (
    <>
    {/* This Normal Input */}
      {/* <CustomForm /> */}
      <ReusableForm
        initialValues={initialValues}
        validationSchema={formValidation}
        onSubmit={handleSubmit}
        fields={fields}
      />
    </>
  );
};

export default App;
