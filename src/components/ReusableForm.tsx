import { Formik, Form, Field, ErrorMessage } from "formik";
import { Values, fields, FormikHelpers } from "../types";
const ReusableForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  fields,
}: {
  initialValues: Values;
  validationSchema: any;
  onSubmit: (values: Values, action: FormikHelpers) => void;
  fields: fields[];
}) => {
  return (
    <div className="container mt-5 border p-3 my-5 rounded bg-dark text-light">
      <h2 className="text-center">ReusableForm with All Input Types</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {fields.map((field, index: number) => (
              <div key={index} className="form-group my-3">
                <label htmlFor={field.name}>{field.label}</label>
                <Field
                  type={field.type}
                  name={field.name}
                  value={field.value}
                  id={field.name}
                  placeholder={field.placeholder}
                  className="form-control"
                />
                <ErrorMessage
                  name={field.name}
                  component="div"
                  className="error-message text-danger"
                />
              </div>
            ))}
            <div
              className="form-group p-3 d-flex"
              style={{ justifyContent: "end" }}
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ReusableForm;
