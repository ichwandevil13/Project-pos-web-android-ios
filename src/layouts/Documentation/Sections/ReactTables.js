import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
// react component for creating dynamic tables
import ReactTable from "react-table";

// @material-ui/icons
import Dvr from "@material-ui/icons/Dvr";
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";

// core components
import Button from "../../../components/CustomButtons/Button";

import { dataTable } from "../../../variables/general";

const codeExample = `import React from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";

// @material-ui/icons
import Dvr from "@material-ui/icons/Dvr";
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";

// core components
import Button from "../../../components/CustomButtons/Button";

import { dataTable } from "../../../variables/general";

function ReactTables({...props}){
  return(
    <ReactTable
      data={
        dataTable.dataRows.map((prop,key) => {
          return ({
            id: key,
            name: prop[0],
            position: prop[1],
            office: prop[2],
            age: prop[3],
            actions: (
              // we've added some custom button actions
              <div className="actions-right">
                { /* use this button to add a like kind of action */ }
                <Button
                  justIcon
                  round
                  simple
                  onClick={() => alert("You've pressed the like button on colmun id: "+key)}
                  color="info"
                  className="like"
                >
                  <Favorite />
                </Button>{" "}
                { /* use this button to add a edit kind of action */ }
                <Button
                  justIcon
                  round
                  simple
                  onClick={() => alert("You've pressed the edit button on colmun id: "+key)}
                  color="warning"
                  customClass="edit">
                  <Dvr />
                </Button>{" "}
                { /* use this button to remove the data row */ }
                <Button
                  justIcon
                  round
                  simple
                  onClick={() => alert("You've pressed the delete button on colmun id: "+key)}
                  color="danger"
                  customClass="remove">
                  <Close />
                </Button>{" "}
              </div>
            )
          })
        })
      }
      filterable
      columns={[
        {
          Header: "Name",
          accessor: "name",
        },
        {
          Header: "Position",
          accessor: "position"
        },
        {
          Header: "Office",
          accessor: "office"
        },
        {
          Header: "Age",
          accessor: "age"
        },
        {
          Header: "Actions",
          accessor: "actions",
          sortable: false,
          filterable: false,
        }
      ]}
      defaultPageSize={10}
      showPaginationTop
      showPaginationBottom={false}
      className="-striped -highlight"
    />
  );
}
export default ReactTables;
`;

function ReactTables({ ...props }) {
  return (
    <div>
      <h1>React Table v6.8.6</h1>
      <p>Beautiful and fully responsive dynamic tables.</p>
      <p>
        For details please refer to{" "}
        <a
          href="https://react-table.js.org/#/story/readme"
          target="_blank"
          rel="noopener noreferrer"
        >
          react-table official documentation
        </a>.
      </p>
      <h2>
        <code>NOTICE</code>
      </h2>
      <p>
        On the last column of this component we've added{" "}
        <code>text-align: left;</code> because we've considered the last column
        to be reserved for the actions of the table. If you wish to change this
        behavior you need to change the styling found in the file below.
      </p>
      <h2>Styles</h2>
      <p>
        You will find the styles for this component in<br />{" "}
        <code>
          src/assets/scss/material-dashboard-pro-react/plugins/_plugin-react-table.scss
        </code>.
      </p>
      <h2>Example</h2>
      <ReactTable
        data={dataTable.dataRows.map((prop, key) => {
          return {
            id: key,
            name: prop[0],
            position: prop[1],
            office: prop[2],
            age: prop[3],
            actions: (
              // we've added some custom button actions
              <div className="actions-right">
                {/* use this button to add a like kind of action */}
                <Button
                  justIcon
                  round
                  simple
                  onClick={() =>
                    alert("You've pressed the like button on colmun id: " + key)
                  }
                  color="info"
                  className="like"
                >
                  <Favorite />
                </Button>{" "}
                {/* use this button to add a edit kind of action */}
                <Button
                  justIcon
                  round
                  simple
                  onClick={() =>
                    alert("You've pressed the edit button on colmun id: " + key)
                  }
                  color="warning"
                  customClass="edit"
                >
                  <Dvr />
                </Button>{" "}
                {/* use this button to remove the data row */}
                <Button
                  justIcon
                  round
                  simple
                  onClick={() =>
                    alert(
                      "You've pressed the delete button on colmun id: " + key
                    )
                  }
                  color="danger"
                  customClass="remove"
                >
                  <Close />
                </Button>{" "}
              </div>
            )
          };
        })}
        filterable
        columns={[
          {
            Header: "Name",
            accessor: "name"
          },
          {
            Header: "Position",
            accessor: "position"
          },
          {
            Header: "Office",
            accessor: "office"
          },
          {
            Header: "Age",
            accessor: "age"
          },
          {
            Header: "Actions",
            accessor: "actions",
            sortable: false,
            filterable: false
          }
        ]}
        defaultPageSize={10}
        showPaginationTop
        showPaginationBottom={false}
        className="-striped -highlight"
      />
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExample}
      </SyntaxHighlighter>
    </div>
  );
}
export default ReactTables;



// WEBPACK FOOTER //
// ./src/layouts/Documentation/Sections/ReactTables