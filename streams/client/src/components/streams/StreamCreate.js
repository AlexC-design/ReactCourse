import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput({ input, label, meta }) {
    //de-structured 'input' from formProps
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        <div>{meta.error}</div>
        {/*adding all key-value pairs from 'input'(of formProps) as props to the input element*/}
      </div>
    );
  }

  // --above function before refactor
  // renderInput(formProps) {
  //   return (
  //     <input
  //       onChange={formProps.input.onChange}
  //       value={formProps.input.value}
  //     />
  //   );
  // }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        {/* label gets passed as an argument to renderInput because Field doesn't know what to do with it. */}
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button orange">submit</button>
      </form>
    );
  }
}

//returns empty object if there are no errors
//else, returns errors { Field name : 'error message' }
//-- error message gets passed down to this.renderInput of the corresponding Field name
const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

//this is where the props get wired up - 'reduxForm' is like 'connect'
export default reduxForm({
  form: "streamCreate",
  validate
})(StreamCreate);
