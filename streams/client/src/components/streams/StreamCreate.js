import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput({ input }) {
    //de-structured 'input' from formProps
    return <input {...input} />; //adding all key-value pairs from 'input'(of formProps) as props to the input element
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
      <form>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate"
})(StreamCreate);
