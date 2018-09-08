import React from "react";
import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

const codeProps = `Wizard.defaultProps = {
  color: "rose",
  title: "Here should go your title",
  subtitle: "And this would be your subtitle",
  previousButtonText: "Previous",
  previousButtonClasses: "",
  nextButtonClasses: "",
  nextButtonText: "Next",
  finishButtonClasses: "",
  finishButtonText: "Finish"
};

Wizard.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      stepName: PropTypes.string.isRequired,
      stepComponent: PropTypes.func.isRequired,
      stepId: PropTypes.string.isRequired
    })
  ).isRequired,
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose"
  ]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  previousButtonClasses: PropTypes.string,
  previousButtonText: PropTypes.string,
  nextButtonClasses: PropTypes.string,
  nextButtonText: PropTypes.string,
  finishButtonClasses: PropTypes.string,
  finishButtonText: PropTypes.string,
  // function fired on the finish button click
  finishButtonClick: PropTypes.func,
  // if on next button click the form should be validated
  // if true, you need to add a isValidated() function in your component
  // that should return true or false, depending on that state of your validation
  validate: PropTypes.bool
};`;

function Wizard({ ...props }) {
  //  const { } = props;
  return (
    <div>
      <h1>Wizard</h1>
      <p>
        If you have lengthy forms to complete, you can use react-stepzilla. This
        plugin allows you to cut the form into steps and let the user complete
        it gradually.
      </p>
      <p>
        We've decided to create this component due to the fact that we wanted to
        go the same way as our most of components (we wanted to use{" "}
        <code>jss</code>).
      </p>
      <p>
        You can see how it looks and feels in the{" "}
        <Link to="/forms/wizard">live demo</Link>.
      </p>
      <h2>
        <code>Notice</code>
      </h2>
      <p>
        You can pass props in which ever form you want from one step to another
        by using the <code>sendState()</code> function in your step of this
        component.
      </p>
      <p>
        You can than acces in your step component that data through{" "}
        <code>allState</code> prop.
      </p>
      <h2>Styles</h2>
      <p>
        You will find the styles for this component in<br />{" "}
        <code>
          src/assets/jss/material-dashboard-pro-react/components/wizardStyle
        </code>.
      </p>
      <h2>Props</h2>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeProps}
      </SyntaxHighlighter>
    </div>
  );
}

export default Wizard;



// WEBPACK FOOTER //
// ./src/layouts/Documentation/Sections/Wizard