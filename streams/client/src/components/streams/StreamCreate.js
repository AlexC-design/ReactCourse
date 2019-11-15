import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput({ input, label }) {
    //de-structured 'input' from formProps
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
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

  render() {
    return (
      <form className="ui form">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        {/* label gets passed as an argument to renderInput because Field doesn't know what to do with it. */}
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate"
})(StreamCreate);
