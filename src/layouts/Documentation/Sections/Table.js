import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
// material-ui icons
import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// core components
import Table from "../../../components/Table/Table";
import Button from "../../../components/CustomButtons/Button";
import Accordion from "../../../components/Accordion/Accordion";
import extendedTablesStyle from "../../../assets/jss/material-dashboard-pro-react/views/extendedTablesStyle";

import product1 from "../../../assets/img/product1.jpg";

const codeExampleActions = `import React from 'react';
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// material-ui icons
import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// core components
import Table from "../../../components/Table/Table";
import Button from "../../../components/CustomButtons/Button";
import extendedTablesStyle from "../../../assets/jss/material-dashboard-pro-react/views/extendedTablesStyle";

function DemoTables({...props}){
  const { classes } = props;
  const buttons = [
    { color: "info", icon: Person },
    { color: "success", icon: Edit },
    { color: "danger", icon: Close }
  ].map((prop, key) => {
    return (
      <Button color={prop.color} customClass={classes.actionButton} key={key}>
        <prop.icon className={classes.icon} />
      </Button>
    );
  });
  return (
    <h3>Table with Actions</h3>
    <Table
      tableHead={["#","Name","Job Position","Since","Salary","Actions"]}
      tableData={[["1","Andrew Mike","Develop","2013","€ 99,225",buttons]]}
      customCellClasses={[
        classes.center,
        classes.right,
        classes.right
      ]}
      // 0 is for classes.center, 4 is for classes.right, 5 is for classes.right
      customClassesForCells={[0, 4, 5]}
      customHeadCellClasses={[
        classes.center,
        classes.right,
        classes.right
      ]}
      // 0 is for classes.center, 4 is for classes.right, 5 is for classes.right
      customHeadClassesForCells={[0, 4, 5]}
    />
  );
}

export default withStyles(extendedTablesStyle)(DemoTables);
`;
const codeExampleCheckboxes = `import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { prism } from 'react-syntax-highlighter/styles/prism';
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
// material-ui icons
import Check from "@material-ui/icons/Check";
// core components
import Table from "../../../components/Table/Table";
import Button from "../../../components/CustomButtons/Button";
import extendedTablesStyle from "../../../assets/jss/material-dashboard-pro-react/views/extendedTablesStyle";

class DemoTables extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      checked: []
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  render(){
    const { classes } = this.props;
    return (
      <Table
        striped
        tableHead={["#","","Product Name","Type","Qty","Price","Amount"]}
        tableData={[
          [
            "1",
            <Checkbox
              tabIndex={-1}
              onClick={() => this.handleToggle(1)}
              checkedIcon={<Check className={classes.checkedIcon} />}
              icon={<Check className={classes.uncheckedIcon} />}
              classes={{
                checked: classes.checked
              }}
            />,
            "Moleskine Agenda","Office","25","€ 49","€ 1,225"
          ],
          [
            "2",
            <Checkbox
              tabIndex={-1}
              onClick={() => this.handleToggle(2)}
              checkedIcon={<Check className={classes.checkedIcon} />}
              icon={<Check className={classes.uncheckedIcon} />}
              classes={{
                checked: classes.checked
              }}
            />,
            "Stabilo Pen","Office","30","€ 10","€ 300"
          ],
          { total: true, colspan: "5", amount: "€12,999" }
        ]}
        customCellClasses={[
          classes.center,
          classes.right,
          classes.right
        ]}
        // 0 is for classes.center, 5 is for classes.right, 6 is for classes.right
        customClassesForCells={[0, 5, 6]}
        customHeadCellClasses={[
          classes.center,
          classes.right,
          classes.right
        ]}
        // 0 is for classes.center, 5 is for classes.right, 6 is for classes.right
        customHeadClassesForCells={[0, 5, 6]}
      />
    );
  }
}

export default withStyles(extendedTablesStyle)(DemoTables);
`;
const codeExampleShopping = `import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { prism } from 'react-syntax-highlighter/styles/prism';
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// material-ui icons
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// core components
import Table from "../../../components/Table/Table";
import Button from "../../../components/CustomButtons/Button";
import extendedTablesStyle from "../../../assets/jss/material-dashboard-pro-react/views/extendedTablesStyle";

import product1 from "../../../assets/img/product1.jpg";

function DemoTables({...props}){
  const { classes } = this.props;
  return (
    <Table
      tableHead={["","PRODUCT","COLOR","SIZE","PRICE","QTY","AMOUNT",""]}
      tableData={[
        [
          <div className={classes.imgContainer}>
            <img src={product1} alt="..." className={classes.img} />
          </div>,
          <span>
            <a href="#jacket" className={classes.tdNameAnchor}>
              Spring Jacket
            </a>
            <br />
            <small className={classes.tdNameSmall}>
              by Dolce&amp;Gabbana
            </small>
          </span>,
          "Red",
          "M",
          <span>
            <small className={classes.tdNumberSmall}>€</small> 549
          </span>,
          <span>
            1{' '}
            <div className={classes.buttonGroup}>
              <Button
                color="info"
                size="xs"
                round
                customClass={classes.firstButton}
              >
                <Remove className={classes.icon} />
              </Button>
              <Button
                color="info"
                size="xs"
                round
                customClass={classes.lastButton}
              >
                <Add className={classes.icon} />
              </Button>
            </div>
          </span>,
          <span>
            <small className={classes.tdNumberSmall}>€</small> 549
          </span>,
          <Button color="simple" customClass={classes.actionButton}>
            <Close className={classes.icon} />
          </Button>
        ],
        {
          total: true,
          colspan: "5",
          amount: (
            <span>
              <small>€</small>2,346
            </span>
          )
        },
        {
          purchase: true,
          colspan: "6",
          col: {
            colspan: 2,
            text: (
              <Button color="info" round>
                Complete Purchase{" "}
                <KeyboardArrowRight className={classes.icon} />
              </Button>
            )
          }
        }
      ]}
      tableShopping
      customHeadCellClasses={[
        classes.center,
        classes.description,
        classes.description,
        classes.right,
        classes.right,
        classes.right
      ]}
      // 0 is for classes.center, 2 is for classes.description, 3 is for classes.description
      // 4 is for classes.right, 5 is for classes.right, 6 is for classes.right
      customHeadClassesForCells={[0, 2, 3, 4, 5, 6]}
      customCellClasses={[
        classes.tdName,
        classes.tdNumber,
        classes.tdNumber + " " + classes.tdNumberAndButtonGroup,
        classes.tdNumber
      ]}
      // 1 is for classes.tdName, 4 is for classes.tdNumber, 6 is for classes.tdNumber
      // 5 is for classes.tdNumber + " " + classes.tdNumberAndButtonGroup
      customClassesForCells={[1, 4, 5, 6]}
    />
  );
}

export default withStyles(extendedTablesStyle)(DemoTables);
`;
const codeProps = `CustomTable.defaultProps = {
  tableHeaderColor: "gray",
  hover: false,
  colorsColls: [],
  coloredColls: [],
  striped: false,
  customCellClasses: [],
  customClassesForCells: [],
  customHeadCellClasses: [],
  customHeadClassesForCells: []
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  // Of(PropTypes.arrayOf(PropTypes.node)) || Of(PropTypes.object),
  tableData: PropTypes.array,
  hover: PropTypes.bool,
  coloredColls: PropTypes.arrayOf(PropTypes.number),
  // Of(["warning","primary","danger","success","info","rose","gray"]) - colorsColls
  colorsColls: PropTypes.array,
  // these are the custom classes
  customCellClasses: PropTypes.arrayOf(PropTypes.string),
  // and these are the cell to be affected by the classes in the order they appear
  customClassesForCells: PropTypes.arrayOf(PropTypes.number),
  // these are the custom classes
  customHeadCellClasses: PropTypes.arrayOf(PropTypes.string),
  // and these are the cell to be affected by the classes in the order they appear
  customHeadClassesForCells: PropTypes.arrayOf(PropTypes.number),
  striped: PropTypes.bool,
  // this will cause some changes in font
  tableShopping: PropTypes.bool
};`;

class DemoTables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: []
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  render() {
    const { classes } = this.props;
    const buttons = [
      { color: "info", icon: Person },
      { color: "success", icon: Edit },
      { color: "danger", icon: Close }
    ].map((prop, key) => {
      return (
        <Button color={prop.color} customClass={classes.actionButton} key={key}>
          <prop.icon className={classes.icon} />
        </Button>
      );
    });
    return (
      <div>
        <h1>Table</h1>
        <p>
          We've done this component to make it a bit more easier for you to
          populate and render a table.
        </p>
        <h2>Styles</h2>
        <p>
          You will find the styles for this component in<br />{" "}
          <code>
            src/assets/jss/material-dashboard-pro-react/components/tableStyle
          </code>.
        </p>
        <h2>Examples</h2>
        <h3>Table with Actions</h3>
        <Table
          tableHead={[
            "#",
            "Name",
            "Job Position",
            "Since",
            "Salary",
            "Actions"
          ]}
          tableData={[
            ["1", "Andrew Mike", "Develop", "2013", "€ 99,225", buttons]
          ]}
          customCellClasses={[classes.center, classes.right, classes.right]}
          // 0 is for classes.center, 4 is for classes.right, 5 is for classes.right
          customClassesForCells={[0, 4, 5]}
          customHeadCellClasses={[classes.center, classes.right, classes.right]}
          // 0 is for classes.center, 4 is for classes.right, 5 is for classes.right
          customHeadClassesForCells={[0, 4, 5]}
        />
        <Accordion
          collapses={[
            {
              title: "View Code",
              content: (
                <SyntaxHighlighter language="jsx" style={prism}>
                  {codeExampleActions}
                </SyntaxHighlighter>
              )
            }
          ]}
        />
        <h3>Table with Checkboxes</h3>
        <Table
          striped
          tableHead={[
            "#",
            "",
            "Product Name",
            "Type",
            "Qty",
            "Price",
            "Amount"
          ]}
          tableData={[
            [
              "1",
              <Checkbox
                tabIndex={-1}
                onClick={() => this.handleToggle(1)}
                checkedIcon={<Check className={classes.checkedIcon} />}
                icon={<Check className={classes.uncheckedIcon} />}
                classes={{
                  checked: classes.checked
                }}
              />,
              "Moleskine Agenda",
              "Office",
              "25",
              "€ 49",
              "€ 1,225"
            ],
            [
              "2",
              <Checkbox
                tabIndex={-1}
                onClick={() => this.handleToggle(2)}
                checkedIcon={<Check className={classes.checkedIcon} />}
                icon={<Check className={classes.uncheckedIcon} />}
                classes={{
                  checked: classes.checked
                }}
              />,
              "Stabilo Pen",
              "Office",
              "30",
              "€ 10",
              "€ 300"
            ],
            { total: true, colspan: "5", amount: "€12,999" }
          ]}
          customCellClasses={[classes.center, classes.right, classes.right]}
          // 0 is for classes.center, 5 is for classes.right, 6 is for classes.right
          customClassesForCells={[0, 5, 6]}
          customHeadCellClasses={[classes.center, classes.right, classes.right]}
          // 0 is for classes.center, 5 is for classes.right, 6 is for classes.right
          customHeadClassesForCells={[0, 5, 6]}
        />
        <Accordion
          collapses={[
            {
              title: "View Code",
              content: (
                <SyntaxHighlighter language="jsx" style={prism}>
                  {codeExampleCheckboxes}
                </SyntaxHighlighter>
              )
            }
          ]}
        />
        <h3>Shopping Cart Table</h3>
        <Table
          tableHead={[
            "",
            "PRODUCT",
            "COLOR",
            "SIZE",
            "PRICE",
            "QTY",
            "AMOUNT",
            ""
          ]}
          tableData={[
            [
              <div className={classes.imgContainer}>
                <img src={product1} alt="..." className={classes.img} />
              </div>,
              <span>
                <a href="#jacket" className={classes.tdNameAnchor}>
                  Spring Jacket
                </a>
                <br />
                <small className={classes.tdNameSmall}>
                  by Dolce&amp;Gabbana
                </small>
              </span>,
              "Red",
              "M",
              <span>
                <small className={classes.tdNumberSmall}>€</small> 549
              </span>,
              <span>
                1{" "}
                <div className={classes.buttonGroup}>
                  <Button
                    color="info"
                    size="xs"
                    round
                    customClass={classes.firstButton}
                  >
                    <Remove className={classes.icon} />
                  </Button>
                  <Button
                    color="info"
                    size="xs"
                    round
                    customClass={classes.lastButton}
                  >
                    <Add className={classes.icon} />
                  </Button>
                </div>
              </span>,
              <span>
                <small className={classes.tdNumberSmall}>€</small> 549
              </span>,
              <Button color="simple" customClass={classes.actionButton}>
                <Close className={classes.icon} />
              </Button>
            ],
            {
              total: true,
              colspan: "5",
              amount: (
                <span>
                  <small>€</small>2,346
                </span>
              )
            },
            {
              purchase: true,
              colspan: "6",
              col: {
                colspan: 2,
                text: (
                  <Button color="info" round>
                    Complete Purchase{" "}
                    <KeyboardArrowRight className={classes.icon} />
                  </Button>
                )
              }
            }
          ]}
          tableShopping
          customHeadCellClasses={[
            classes.center,
            classes.description,
            classes.description,
            classes.right,
            classes.right,
            classes.right
          ]}
          // 0 is for classes.center, 2 is for classes.description, 3 is for classes.description
          // 4 is for classes.right, 5 is for classes.right, 6 is for classes.right
          customHeadClassesForCells={[0, 2, 3, 4, 5, 6]}
          customCellClasses={[
            classes.tdName,
            classes.tdNumber,
            classes.tdNumber + " " + classes.tdNumberAndButtonGroup,
            classes.tdNumber
          ]}
          // 1 is for classes.tdName, 4 is for classes.tdNumber, 6 is for classes.tdNumber
          // 5 is for classes.tdNumber + " " + classes.tdNumberAndButtonGroup
          customClassesForCells={[1, 4, 5, 6]}
        />
        <Accordion
          collapses={[
            {
              title: "View Code",
              content: (
                <SyntaxHighlighter language="jsx" style={prism}>
                  {codeExampleShopping}
                </SyntaxHighlighter>
              )
            }
          ]}
        />
        <h2>Props</h2>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeProps}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default withStyles(extendedTablesStyle)(DemoTables);



// WEBPACK FOOTER //
// ./src/layouts/Documentation/Sections/Table