import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
import { Link } from "react-router-dom";
// @material-ui/icons
import CardTravel from "@material-ui/icons/CardTravel";
import Build from "@material-ui/icons/Build";
// core components
import TimelineComponent from "../../../components/Timeline/Timeline";
import CustomDropdown from "../../../components/CustomDropdown/CustomDropdown";
import Table from "../../../components/Table/Table";

const codeExample = `import React from 'react';
// @material-ui/icons
import CardTravel from "@material-ui/icons/CardTravel";
import Build from "@material-ui/icons/Build";
// core components
import TimelineComponent from "../../../components/Timeline/Timeline";
import CustomDropdown from "../../../components/CustomDropdown/CustomDropdown";

function Timeline({...props}){
  return (
    <TimelineComponent stories={[
        {   // First story
          inverted: true,
          badgeColor: "danger",
          badgeIcon: CardTravel,
          title: "Some Title",
          titleColor: "danger",
          body: (
            <p>Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the “future” theme !!!   It was a fun night all together ... The always rude Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.</p>
          ),
          footerTitle: "11 hours ago via Twitter",
          footer: (
            <CustomDropdown
              buttonColor="info"
              buttonIcon={Build}
              buttonProps={{
                round: true,
                style: { marginBottom: "0" }
              }}
              dropdownList={[
                "Action",
                "Another action",
                "Something else here",
                { divider: true },
                "Separated link"
              ]}
            />
          )
        }
      ]}
    />
  );
}

export default Timeline;`;

function Timeline({ ...props }) {
  return (
    <div>
      <h1>Timeline</h1>
      <p>
        We've created this component especially for{" "}
        <Link to="/timeline-page">Timeline Page</Link>.
      </p>
      <h2>Styles</h2>
      <p>
        You will find the styles for this component in<br />{" "}
        <code>
          src/assets/jss/material-dashboard-pro-react/components/timelineStyle
        </code>.
      </p>
      <h2>Example</h2>
      <TimelineComponent
        stories={[
          {
            // First story
            inverted: true,
            badgeColor: "danger",
            badgeIcon: CardTravel,
            title: "Some Title",
            titleColor: "danger",
            body: (
              <p>
                Wifey made the best Father's Day meal ever. So thankful so happy
                so blessed. Thank you for making my family We just had fun with
                the “future” theme !!! It was a fun night all together ... The
                always rude Kanye Show at 2am Sold Out Famous viewing @ Figueroa
                and 12th in downtown.
              </p>
            ),
            footerTitle: "11 hours ago via Twitter",
            footer: (
              <CustomDropdown
                buttonColor="info"
                buttonIcon={Build}
                buttonProps={{
                  round: true,
                  style: { marginBottom: "0" }
                }}
                dropdownList={[
                  "Action",
                  "Another action",
                  "Something else here",
                  { divider: true },
                  "Separated link"
                ]}
              />
            )
          }
        ]}
      />
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExample}
      </SyntaxHighlighter>
      <h2>Props</h2>
      <Table
        tableHead={["Name", "Type", "Default", "Description"]}
        tableData={[
          [
            <code>stories</code>,
            "Array of Objects",
            "undefined",
            <span>
              With this prop the <code>Timeline</code> component will be
              populated.
            </span>
          ],
          [
            <code>stories[n].inverted</code>,
            "Boolean",
            "false",
            "This will make the story inverted."
          ],
          [
            <code>stories[n].badgeIcon</code>,
            "Function",
            "null",
            "Add an icon to the story."
          ],
          [
            <code>stories[n].badgeColor</code>,
            "String",
            "undefined",
            "Add a color to the icon."
          ],
          [
            <code>stories[n].title</code>,
            "String/Node",
            "null",
            "The title of the story."
          ],
          [
            <code>stories[n].titleColor</code>,
            "String",
            "undefined",
            "Color of the title."
          ],
          [
            <code>stories[n].body</code>,
            "String/Node",
            "undefined",
            "Body text of the story."
          ],
          [
            <code>stories[n].footerTitle</code>,
            "String/Node",
            "null",
            "Text for the footer of the story."
          ],
          [
            <code>stories[n].footer</code>,
            "Node",
            "undefined",
            "Node to add as a footer."
          ]
        ]}
      />
    </div>
  );
}

export default Timeline;



// WEBPACK FOOTER //
// ./src/layouts/Documentation/Sections/Timeline