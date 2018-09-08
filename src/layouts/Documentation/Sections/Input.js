import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
import InputAdornment from "@material-ui/core/InputAdornment";
import People from "@material-ui/icons/People";

import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import CustomInput from "../../../components/CustomInput/CustomInput";

const inputsDep = `import InputAdornment from "@material-ui/core/InputAdornment";
import People from '@material-ui/icons/People';
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import CustomInput from "../../../components/CustomInput/CustomInput";
import CustomInput from 'components/CustomInput/CustomInput';`;
const inputs = `<GridContainer>
<GridItem xs={12} sm={12} md={4}>
  <CustomInput
    labelText="Disabled"
    id="disabled"
    formControlProps={{
      fullWidth: true
    }}
    inputProps={{
      disabled: true
    }}
  />
</GridItem>
<GridItem xs={12} sm={12} md={4}>
  <CustomInput
    id="regular"
    inputProps={{
      placeholder: "Regular"
    }}
    formControlProps={{
      fullWidth: true
    }}
  />
</GridItem>
<GridItem xs={12} sm={12} md={4}>
  <CustomInput
    labelText="With floating label"
    id="float"
    formControlProps={{
      fullWidth: true
    }}
  />
</GridItem>
<GridItem xs={12} sm={12} md={4}>
  <CustomInput
    labelText="Success input"
    id="success"
    success
    formControlProps={{
      fullWidth: true
    }}
  />
</GridItem>
<GridItem xs={12} sm={12} md={4}>
  <CustomInput
    labelText="Error input"
    id="error"
    error
    formControlProps={{
      fullWidth: true
    }}
  />
</GridItem>
<GridItem xs={12} sm={12} md={4}>
  <CustomInput
    labelText="With material Icons"
    id="material"
    formControlProps={{
      fullWidth: true
    }}
    inputProps={{
      endAdornment: (<InputAdornment position="end"><People/></InputAdornment>)
    }}
  />
</GridItem>
</GridContainer>`;
const inputsProp = `CustomInput.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  inputRootCustomClasses: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  white: PropTypes.bool
};`;

function Inputs({ ...prop }) {
  return (
    <div>
      <h1>Inputs</h1>
      <h2>Styles</h2>
      <p>
        You will find the styles for this component in<br />{" "}
        <code>
          src/assets/jss/material-dashboard-pro-react/components/customInputStyle
        </code>.
      </p>
      <h2>Example</h2>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText="Disabled"
            id="disabled"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              disabled: true
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            id="regular"
            inputProps={{
              placeholder: "Regular"
            }}
            formControlProps={{
              fullWidth: true
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText="With floating label"
            id="float"
            formControlProps={{
              fullWidth: true
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText="Success input"
            id="success"
            success
            formControlProps={{
              fullWidth: true
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText="Error input"
            id="error"
            error
            formControlProps={{
              fullWidth: true
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText="With material Icons"
            id="material"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <People />
                </InputAdornment>
              )
            }}
          />
        </GridItem>
      </GridContainer>
      <SyntaxHighlighter language="jsx" style={prism}>
        {inputsDep}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="jsx" style={prism}>
        {inputs}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="jsx" style={prism}>
        {inputsProp}
      </SyntaxHighlighter>
      <h2>Props</h2>
      <p>
        To see what props you can pass inside the <code>inputProps</code>,{" "}
        <code>labelProps</code>, <code>formControlProps</code> please check out
        the{" "}
        <a
          href="https://material-ui-next.com/api/input/"
          target="_blank"
          rel="noopener noreferrer"
        >
          material-ui input documentation
        </a>,{" "}
        <a
          href="https://material-ui-next.com/api/input-label/"
          target="_blank"
          rel="noopener noreferrer"
        >
          material-ui label documentation
        </a>{" "}
        and{" "}
        <a
          href="https://material-ui-next.com/api/form-control/"
          target="_blank"
          rel="noopener noreferrer"
        >
          material-ui form controll documentation
        </a>.
      </p>
    </div>
  );
}

export default Inputs;



// WEBPACK FOOTER //
// ./src/layouts/Documentation/Sections/Input