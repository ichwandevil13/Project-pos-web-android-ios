import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
// import { withStyles } from 'material-ui';
// import { * } from '@material-ui/icons';

import CustomDropdown from "../../../components/CustomDropdown/CustomDropdown";
import Badge from "../../../components/Badge/Badge";

import usFlag from "../../../assets/img/flags/US.png";
import deFlag from "../../../assets/img/flags/DE.png";
import gbFlag from "../../../assets/img/flags/GB.png";
import frFlag from "../../../assets/img/flags/FR.png";
import roFlag from "../../../assets/img/flags/RO.png";
import itFlag from "../../../assets/img/flags/IT.png";
import esFlag from "../../../assets/img/flags/ES.png";
import brFlag from "../../../assets/img/flags/BR.png";
import jpFlag from "../../../assets/img/flags/JP.png";

const codeDropdown = `import React from 'react';

import CustomDropdown from 'components/CustomDropdown/CustomDropdown';
import Badge from 'components/Badge/Badge';

import usFlag from "../../../assets/img/flags/US.png";
import deFlag from "../../../assets/img/flags/DE.png";
import gbFlag from "../../../assets/img/flags/GB.png";
import frFlag from "../../../assets/img/flags/FR.png";
import roFlag from "../../../assets/img/flags/RO.png";
import itFlag from "../../../assets/img/flags/IT.png";
import esFlag from "../../../assets/img/flags/ES.png";
import brFlag from "../../../assets/img/flags/BR.png";
import jpFlag from "../../../assets/img/flags/JP.png";

function Dropdown({...props}){
  return (
    <div>
      <CustomDropdown
        buttonText="Regular"
        dropdownList={[
          "Action",
          "Another action",
          "Something else here",
          {divider: true},
          "Separated link",
          {divider: true},
          "One more separated link",
        ]}
      />
      <CustomDropdown
        buttonText={<span><img src={usFlag} alt="..."/>Flags</span>}
        dropdownList={[
          <span><img src={deFlag} alt="..."/> Deutsch</span>,
          <span><img src={gbFlag} alt="..."/> English(UK)</span>,
          <span><img src={frFlag} alt="..."/> Français</span>,
          <span><img src={roFlag} alt="..."/> Română</span>,
          <span><img src={itFlag} alt="..."/> Italiano</span>,
          {divider: true},
          <span><img src={esFlag} alt="..."/> Español <Badge color="gray">Soon</Badge></span>,
          <span><img src={brFlag} alt="..."/> Português <Badge color="gray">Soon</Badge></span>,
          <span><img src={jpFlag} alt="..."/> 日本語 <Badge color="gray">Soon</Badge></span>,
        ]}
      />
    </div>
  );
}

export default Dropdown;
`;

const codeDropup = `import React from 'react';

import CustomDropdown from 'components/CustomDropdown/CustomDropdown';

function Dropdup({...props}){
  return (
    <CustomDropdown
      dropup
      dropdownHeader="Dropdown header"
      buttonText="Dropup"
      buttonProps={{
        round: true,
        color: "info"
      }}
      dropdownList={[
        "Action",
        "Another action",
        "Something else here",
        {divider: true},
        "Separated link",
        {divider: true},
        "One more separated link",
      ]}
    />
  );
}

export default Dropdup;
`;

const codeProps = `CustomDropdown.propTypes = {
  buttonColor: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "defaultNoBackground",
    "primaryNoBackground",
    "infoNoBackground",
    "successNoBackground",
    "warningNoBackground",
    "dangerNoBackground",
    "roseNoBackground",
    "white",
    "simple",
    "transparent"
  ]),
  buttonText: PropTypes.node,
  buttonIcon: PropTypes.func,
  dropdownList: PropTypes.array,
  buttonProps: PropTypes.object,
  dropup: PropTypes.bool,
  dropdownHeader: PropTypes.node,
  rtlActive: PropTypes.bool
};`;

function Dropdown({ ...props }) {
  return (
    <div>
      <h1>Dropdown and Dropup</h1>
      <p>
        We've decided to create this component to make it easier for you to
        create a dropdown.
      </p>
      <h2>Styles</h2>
      <p>
        You will find the styles for this component in<br />{" "}
        <code>
          src/assets/jss/material-dashboard-pro-react/components/customDropdownStyle
        </code>.
      </p>
      <h2>Example Code - Dropdown</h2>
      <CustomDropdown
        buttonText="Regular"
        dropdownList={[
          "Action",
          "Another action",
          "Something else here",
          { divider: true },
          "Separated link",
          { divider: true },
          "One more separated link"
        ]}
      />
      <CustomDropdown
        buttonText={
          <span>
            <img src={usFlag} alt="..." />Flags
          </span>
        }
        dropdownList={[
          <span>
            <img src={deFlag} alt="..." /> Deutsch
          </span>,
          <span>
            <img src={gbFlag} alt="..." /> English(UK)
          </span>,
          <span>
            <img src={frFlag} alt="..." /> Français
          </span>,
          <span>
            <img src={roFlag} alt="..." /> Română
          </span>,
          <span>
            <img src={itFlag} alt="..." /> Italiano
          </span>,
          { divider: true },
          <span>
            <img src={esFlag} alt="..." /> Español{" "}
            <Badge color="gray">Soon</Badge>
          </span>,
          <span>
            <img src={brFlag} alt="..." /> Português{" "}
            <Badge color="gray">Soon</Badge>
          </span>,
          <span>
            <img src={jpFlag} alt="..." /> 日本語{" "}
            <Badge color="gray">Soon</Badge>
          </span>
        ]}
      />
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeDropdown}
      </SyntaxHighlighter>
      <h2>Example Code - Dropup</h2>
      <CustomDropdown
        dropup
        dropdownHeader="Dropdown header"
        buttonText="Dropup"
        buttonProps={{
          round: true,
          color: "info"
        }}
        dropdownList={[
          "Action",
          "Another action",
          "Something else here",
          { divider: true },
          "Separated link",
          { divider: true },
          "One more separated link"
        ]}
      />
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeDropup}
      </SyntaxHighlighter>
      <h2>Props</h2>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeProps}
      </SyntaxHighlighter>
    </div>
  );
}

export default Dropdown;



// WEBPACK FOOTER //
// ./src/layouts/Documentation/Sections/Dropdown