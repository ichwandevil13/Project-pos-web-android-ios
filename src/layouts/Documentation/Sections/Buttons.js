/*eslint-disable*/
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
import Favorite from "@material-ui/icons/Favorite";

import Button from "../../../components/CustomButtons/Button";
import GridItem from "../../../components/Grid/GridItem";
import GridContainer from "../../../components/Grid/GridContainer";
import Accordion from "../../../components/Accordion/Accordion";

const codeImport = `import Button from "../../../components/CustomButtons/Button";
// this is used for the special classes
import buttonsStyle from "../../../assets/jss/material-dashboard-pro-react/views/buttonsStyle";`;
const codeExampleColors = `<Button>Default</Button>
<Button color="primary">Primary</Button>
<Button color="info">Info</Button>
<Button color="success">Success</Button>
<Button color="warning">Warning</Button>
<Button color="danger">Danger</Button>
<Button color="rose">Rose</Button>`;
const codeExampleStyles = `<Button color="primary">Default</Button>
<Button color="primary" round>round</Button>
<Button color="primary" round><Favorite /> with icon</Button>
<Button jutsIcon round color="primary"><Favorite /></Button>
<Button simple color="primary">simple</Button>`;
const codeExampleSizes = `<Button color="primary" size="lg">Large</Button>
<Button color="primary">Normal</Button>
<Button color="primary" size="sm">Small</Button>`;
const codeExampleSocials = `<GridContainer>
  <GridItem xs={12} sm={4} md={4}>
    <Button color="twitter">
      <i className="fab fa-twitter"/>{" "}
      Connect with Twitter
    </Button>
  </GridItem>
  <GridItem xs={12} sm={1} md={1}>
    <Button justIcon color="twitter">
      <i className="fab fa-twitter" />
    </Button>
  </GridItem>
  <GridItem xs={12} sm={1} md={1}>
    <Button justIcon round color="twitter">
      <i className="fab fa-twitter"/>
    </Button>
  </GridItem>
  <GridItem xs={12} sm={1} md={1}>
    <Button simple justIcon color="twitter">
      <i className="fab fa-twitter"/>
    </Button>
  </GridItem>
  <GridItem xs={12} sm={4} md={3}>
    <Button simple color="twitter">
      <i className="fab fa-twitter"/>{" "}
      Connect with Twitter
    </Button>
  </GridItem>
</GridContainer>
<GridContainer>
  <GridItem xs={12} sm={4} md={4}>
    <Button color="facebook">
      <i className="fab fa-facebook-square"/>{" "}
      Share · 2.2k
    </Button>
  </GridItem>
  <GridItem xs={12} sm={1} md={1}>
    <Button justIcon color="facebook">
      <i className="fab fa-facebook" />
    </Button>
  </GridItem>
  <GridItem xs={12} sm={1} md={1}>
    <Button justIcon round color="facebook">
      <i className="fab fa-facebook"/>
    </Button>
  </GridItem>
  <GridItem xs={12} sm={1} md={1}>
    <Button justIcon color="face" simple>
      <i className="fab fa-facebook-square"/>
    </Button>
  </GridItem>
  <GridItem xs={12} sm={4} md={3}>
    <Button color="facebook" simple>
      <i className="fab fa-facebook-square"/>{" "}
      Share · 2.2k
    </Button>
  </GridItem>
</GridContainer>
<GridContainer>
  <GridItem xs={12} sm={4} md={4}>
    <Button color="google">
      <i className="fab fa-google-square"/>{" "}
      Share on Google+
    </Button>
  </GridItem>
  <GridItem xs={12} sm={1} md={1}>
    <Button justIcon color="google">
      <i className={"fab fa-google"} />
    </Button>
  </GridItem>
  <GridItem xs={12} sm={1} md={1}>
    <Button justIcon round color="google">
      <i className="fab fa-google"/>
    </Button>
  </GridItem>
  <GridItem xs={12} sm={1} md={1}>
    <Button justIcon color="google" simple>
      <i className="fab fa-google"/>
    </Button>
  </GridItem>
  <GridItem xs={12} sm={4} md={3}>
    <Button color="google" simple>
      <i className="fab fa-google-square"/>{" "}
      Share on Google+
    </Button>
  </GridItem>
</GridContainer>
<GridContainer>
  <GridItem xs={12} sm={4} md={4}>
    <Button color="linkedin">
      <i className="fab fa-linkedin"/>{" "}
      Connect with Linkedin
    </Button>
  </GridItem>
  <GridItem xs={12} sm={1} md={1}>
    <Button justIcon color="linkedin">
      <i className="fab fa-linkedin" />
    </Button>
  </GridItem>
  <GridItem xs={12} sm={1} md={1}>
    <Button justIcon round color="linkedin">
      <i className="fab fa-linkedin"/>
    </Button>
  </GridItem>
  <GridItem xs={12} sm={1} md={1}>
    <Button justIcon color="linkedin" simple>
      <i className="fab fa-linkedin"/>
    </Button>
  </GridItem>
  <GridItem xs={12} sm={4} md={3}>
    <Button color="linkedin" simple>
      <i className="fab fa-linkedin"/>{" "}
      Connect with Linkedin
    </Button>
  </GridItem>
</GridContainer>
<GridContainer>
  <GridItem xs={12} sm={4} md={4}>
    <Button color="pinterest">
      <i className="fab fa-pinterest"/>{" "}
      Pint it · 212
    </Button>
  </GridItem>
  <GridItem xs={12} sm={1} md={1}>
    <Button justIcon color="pinterest">
      <i className="fab fa-pinterest" />
    </Button>
  </GridItem>
  <GridItem xs={12} sm={1} md={1}>
    <Button justIcon round color="pinterest">
      <i className="fab fa-pinterest"/>
    </Button>
  </GridItem>
  <GridItem xs={12} sm={1} md={1}>
    <Button justIcon color="pinterest" simple>
      <i className="fab fa-pinterest"/>
    </Button>
  </GridItem>
  <GridItem xs={12} sm={4} md={3}>
    <Button color="pinterest" simple>
      <i className="fab fa-pinterest"/>{" "}
      Pint it · 212
    </Button>
  </GridItem>
</GridContainer>
<GridContainer>
  <GridItem xs={12} sm={4} md={4}>
    <Button color="youtube">
      <i className="fab fa-youtube"/>{" "}
      View on Youtube
    </Button>
  </GridItem>
  <GridItem xs={12} sm={1} md={1}>
    <Button justIcon color="youtube">
      <i className="fab fa-youtube-square" />
    </Button>
  </GridItem>
  <GridItem xs={12} sm={1} md={1}>
    <Button justIcon round color="youtube">
      <i className="fab fa-youtube-square"/>
    </Button>
  </GridItem>
  <GridItem xs={12} sm={1} md={1}>
    <Button justIcon color="youtube" simple>
      <i className="fab fa-youtube-square"/>
    </Button>
  </GridItem>
  <GridItem xs={12} sm={4} md={3}>
    <Button color="youtube" simple>
      <i className="fab fa-youtube"/>{" "}
      View on Youtube
    </Button>
  </GridItem>
</GridContainer>
<GridContainer>
  <GridItem xs={12} sm={4} md={4}>
    <Button color="tumblr">
      <i className="fab fa-tumblr-square"/>{" "}
      Repost
    </Button>
  </GridItem>
  <GridItem xs={12} sm={1} md={1}>
    <Button justIcon color="tumblr">
      <i className="fab fa-tumblr-square" />
    </Button>
  </GridItem>
  <GridItem xs={12} sm={1} md={1}>
    <Button justIcon round color="tumblr">
      <i className="fab fa-tumblr-square"/>
    </Button>
  </GridItem>
  <GridItem xs={12} sm={1} md={1}>
    <Button justIcon color="tumblr" simple>
      <i className="fab fa-tumblr-square"/>
    </Button>
  </GridItem>
  <GridItem xs={12} sm={4} md={3}>
    <Button color="tumblr" simple>
      <i className="fab fa-tumblr-square"/>{" "}
      Repost
    </Button>
  </GridItem>
</GridContainer>
<GridContainer>
  <GridItem xs={12} sm={4} md={4}>
    <Button color="github">
      <i className="fab fa-github"/>{" "}
      Connect with Github
    </Button>
  </GridItem>
  <GridItem xs={12} sm={1} md={1}>
    <Button justIcon color="github">
      <i className="fab fa-github" />
    </Button>
  </GridItem>
  <GridItem xs={12} sm={1} md={1}>
    <Button justIcon round color="github">
      <i className="fab fa-github"/>
    </Button>
  </GridItem>
  <GridItem xs={12} sm={1} md={1}>
    <Button justIcon color="github" simple>
      <i className="fab fa-github"/>
    </Button>
  </GridItem>
  <GridItem xs={12} sm={4} md={3}>
    <Button color="github" simple>
      <i className="fab fa-github"/>{" "}
      Connect with Github
    </Button>
  </GridItem>
</GridContainer>
<GridContainer>
  <GridItem xs={12} sm={4} md={4}>
    <Button color="behance">
      <i className="fab fa-behance-square"/>{" "}
      Follow us
    </Button>
  </GridItem>
  <GridItem xs={12} sm={1} md={1}>
    <Button justIcon color="behance">
      <i className="fab fa-behance" />
    </Button>
  </GridItem>
  <GridItem xs={12} sm={1} md={1}>
    <Button justIcon round color="behance">
      <i className="fab fa-behance-square"/>
    </Button>
  </GridItem>
  <GridItem xs={12} sm={1} md={1}>
    <Button justIcon color="behance" simple>
      <i className="fab fa-behance"/>
    </Button>
  </GridItem>
  <GridItem xs={12} sm={4} md={3}>
    <Button color="behance" simple>
      <i className="fab fa-behance-square"/>{" "}
      Follow us
    </Button>
  </GridItem>
</GridContainer>
<GridContainer>
  <GridItem xs={12} sm={4} md={4}>
    <Button color="dribbble">
      <i className="fab fa-dribbble"/>{" "}
      Find us on Dribble
    </Button>
  </GridItem>
  <GridItem xs={12} sm={1} md={1}>
    <Button justIcon color="dribbble">
      <i className="fab fa-dribbble" />
    </Button>
  </GridItem>
  <GridItem xs={12} sm={1} md={1}>
    <Button justIcon round color="dribbble">
      <i className="fab fa-dribbble"/>
    </Button>
  </GridItem>
  <GridItem xs={12} sm={1} md={1}>
    <Button justIcon color="dribbble" simple>
      <i className="fab fa-dribbble"/>
    </Button>
  </GridItem>
  <GridItem xs={12} sm={4} md={3}>
    <Button color="dribbble" simple>
      <i className="fab fa-dribbble"/>{" "}
      Find us on Dribble
    </Button>
  </GridItem>
</GridContainer>
<GridContainer>
  <GridItem xs={12} sm={4} md={4}>
    <Button color="reddit">
      <i className="fab fa-reddit"/>{" "}
      Repost · 232
    </Button>
  </GridItem>
  <GridItem xs={12} sm={1} md={1}>
    <Button justIcon color="reddit">
      <i className="fab fa-reddit" />
    </Button>
  </GridItem>
  <GridItem xs={12} sm={1} md={1}>
    <Button justIcon round color="reddit">
      <i className="fab fa-reddit"/>
    </Button>
  </GridItem>
  <GridItem xs={12} sm={1} md={1}>
    <Button justIcon color="reddit" simple>
      <i className="fab fa-reddit"/>
    </Button>
  </GridItem>
  <GridItem xs={12} sm={4} md={3}>
    <Button color="reddit" simple>
      <i className="fab fa-reddit"/>{" "}
      Repost · 232
    </Button>
  </GridItem>
</GridContainer>`;
const codeExampleDisabled = `<Button color="primary" size="lg" disabled>Primary button</Button>
<Button color="secondary" size="lg" disabled>Button</Button>`;
const codeExampleDisabledHref = `<Button color="primary" size="lg" disabled href="#pablo">Primary button</Button>
<Button color="secondary" size="lg" disabled href="#pablo">Button</Button>`;
const codeButtonProps = `RegularButton.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "white",
    "twitter",
    "facebook",
    "google",
    "linkedin",
    "pinterest",
    "youtube",
    "tumblr",
    "github",
    "behance",
    "dribbble",
    "reddit",
    "transparent"
  ]),
  size: PropTypes.oneOf(["sm", "lg"]),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  className: PropTypes.string,
  // use this to pass the classes props from Material-UI
  muiClasses: PropTypes.object
};`;

function Buttons() {
  return (
    <div>
      <h1>Buttons</h1>
      <h2>Styles</h2>
      <p>
        We've worked over the original Material-UI buttons, choosing a
        different, slightly intenser colour palette.
      </p>
      <p>
        You will find all the styles in
        <br />
        <code>
          src/assets/jss/material-dashboard-pro-react/components/buttonStyle
        </code>.
      </p>
      <h2>Examples</h2>
      <p>
        To use our custom buttons you need the following imports (or one of
        them, depending on what you want/need):
      </p>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeImport}
      </SyntaxHighlighter>
      <h3>Colors</h3>
      <Button>Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="info">Info</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
      <Button color="rose">Rose</Button>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExampleColors}
      </SyntaxHighlighter>
      <h3>Styles</h3>
      <Button color="primary">Default</Button>
      <Button color="primary" round>
        round
      </Button>
      <Button color="primary" round>
        <Favorite /> with icon
      </Button>
      <Button justIcon round color="primary">
        <Favorite />
      </Button>
      <Button color="primary" simple>
        simple
      </Button>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExampleStyles}
      </SyntaxHighlighter>
      <h3>Sizes</h3>
      <Button color="primary" size="lg">
        Large
      </Button>
      <Button color="primary">Normal</Button>
      <Button color="primary" size="sm">
        Small
      </Button>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExampleSizes}
      </SyntaxHighlighter>
      <h3>Socials</h3>
      <GridContainer>
        <GridItem xs={12} sm={4} md={4}>
          <Button color="twitter">
            <i className={"fab fa-twitter"} /> Connect with Twitter
          </Button>
        </GridItem>
        <GridItem xs={12} sm={1} md={1}>
          <Button justIcon color="twitter">
            <i className={"fab fa-twitter"} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={1} md={1}>
          <Button justIcon round color="twitter">
            <i className={"fab fa-twitter"} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={1} md={1}>
          <Button justIcon color="twitter" simple>
            <i className={"fab fa-twitter"} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={4} md={3}>
          <Button color="twitter" simple>
            <i className={"fab fa-twitter"} /> Connect with Twitter
          </Button>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={4} md={4}>
          <Button color="facebook">
            <i className={"fab fa-facebook-square"} /> Share · 2.2k
          </Button>
        </GridItem>
        <GridItem xs={12} sm={1} md={1}>
          <Button justIcon color="facebook">
            <i className={"fab fa-facebook"} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={1} md={1}>
          <Button justIcon round color="facebook">
            <i className={"fab fa-facebook"} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={1} md={1}>
          <Button justIcon color="facebook" simple>
            <i className={"fab fa-facebook-square"} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={4} md={3}>
          <Button color="facebook" simple>
            <i className={"fab fa-facebook-square"} /> Share · 2.2k
          </Button>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={4} md={4}>
          <Button color="google">
            <i className={"fab fa-google-square"} /> Share on Google+
          </Button>
        </GridItem>
        <GridItem xs={12} sm={1} md={1}>
          <Button justIcon color="google">
            <i className={"fab fa-google"} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={1} md={1}>
          <Button justIcon round color="google">
            <i className={"fab fa-google"} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={1} md={1}>
          <Button justIcon color="google" simple>
            <i className={"fab fa-google"} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={4} md={3}>
          <Button color="google" simple>
            <i className={"fab fa-google-square"} /> Share on Google+
          </Button>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={4} md={4}>
          <Button color="linkedin">
            <i className={"fab fa-linkedin"} /> Connect with Linkedin
          </Button>
        </GridItem>
        <GridItem xs={12} sm={1} md={1}>
          <Button justIcon color="linkedin">
            <i className={"fab fa-linkedin"} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={1} md={1}>
          <Button justIcon round color="linkedin">
            <i className={"fab fa-linkedin"} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={1} md={1}>
          <Button justIcon color="linkedin" simple>
            <i className={"fab fa-linkedin"} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={4} md={3}>
          <Button color="linkedin" simple>
            <i className={"fab fa-linkedin"} /> Connect with Linkedin
          </Button>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={4} md={4}>
          <Button color="pinterest">
            <i className={"fab fa-pinterest"} /> Pint it · 212
          </Button>
        </GridItem>
        <GridItem xs={12} sm={1} md={1}>
          <Button justIcon color="pinterest">
            <i className={"fab fa-pinterest"} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={1} md={1}>
          <Button justIcon round color="pinterest">
            <i className={"fab fa-pinterest"} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={1} md={1}>
          <Button justIcon color="pinterest" simple>
            <i className={"fab fa-pinterest"} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={4} md={3}>
          <Button color="pinterest" simple>
            <i className={"fab fa-pinterest"} /> Pint it · 212
          </Button>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={4} md={4}>
          <Button color="youtube">
            <i className={"fab fa-youtube"} /> View on Youtube
          </Button>
        </GridItem>
        <GridItem xs={12} sm={1} md={1}>
          <Button justIcon color="youtube">
            <i className={"fab fa-youtube-square"} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={1} md={1}>
          <Button justIcon round color="youtube">
            <i className={"fab fa-youtube-square"} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={1} md={1}>
          <Button justIcon color="youtube" simple>
            <i className={"fab fa-youtube-square"} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={4} md={3}>
          <Button color="youtube" simple>
            <i className={"fab fa-youtube"} /> View on Youtube
          </Button>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={4} md={4}>
          <Button color="tumblr">
            <i className={"fab fa-tumblr-square"} /> Repost
          </Button>
        </GridItem>
        <GridItem xs={12} sm={1} md={1}>
          <Button justIcon color="tumblr">
            <i className={"fab fa-tumblr-square"} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={1} md={1}>
          <Button justIcon round color="tumblr">
            <i className={"fab fa-tumblr-square"} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={1} md={1}>
          <Button justIcon color="tumblr" simple>
            <i className={"fab fa-tumblr-square"} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={4} md={3}>
          <Button color="tumblr" simple>
            <i className={"fab fa-tumblr-square"} /> Repost
          </Button>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={4} md={4}>
          <Button color="github">
            <i className={"fab fa-github"} /> Connect with Github
          </Button>
        </GridItem>
        <GridItem xs={12} sm={1} md={1}>
          <Button justIcon color="github">
            <i className={"fab fa-github"} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={1} md={1}>
          <Button justIcon round color="github">
            <i className={"fab fa-github"} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={1} md={1}>
          <Button justIcon color="github" simple>
            <i className={"fab fa-github"} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={4} md={3}>
          <Button color="github" simple>
            <i className={"fab fa-github"} /> Connect with Github
          </Button>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={4} md={4}>
          <Button color="behance">
            <i className={"fab fa-behance-square"} /> Follow us
          </Button>
        </GridItem>
        <GridItem xs={12} sm={1} md={1}>
          <Button justIcon color="behance">
            <i className={"fab fa-behance"} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={1} md={1}>
          <Button justIcon round color="behance">
            <i className={"fab fa-behance-square"} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={1} md={1}>
          <Button justIcon color="behance" simple>
            <i className={"fab fa-behance"} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={4} md={3}>
          <Button color="behance" simple>
            <i className={"fab fa-behance-square"} /> Follow us
          </Button>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={4} md={4}>
          <Button color="dribbble">
            <i className={"fab fa-dribbble"} /> Find us on Dribble
          </Button>
        </GridItem>
        <GridItem xs={12} sm={1} md={1}>
          <Button justIcon color="dribbble">
            <i className={"fab fa-dribbble"} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={1} md={1}>
          <Button justIcon round color="dribbble">
            <i className={"fab fa-dribbble"} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={1} md={1}>
          <Button justIcon color="dribbble" simple>
            <i className={"fab fa-dribbble"} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={4} md={3}>
          <Button color="dribbble" simple>
            <i className={"fab fa-dribbble"} /> Find us on Dribble
          </Button>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={4} md={4}>
          <Button color="reddit">
            <i className={"fab fa-reddit"} /> Repost · 232
          </Button>
        </GridItem>
        <GridItem xs={12} sm={1} md={1}>
          <Button justIcon color="reddit">
            <i className={"fab fa-reddit"} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={1} md={1}>
          <Button justIcon round color="reddit">
            <i className={"fab fa-reddit"} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={1} md={1}>
          <Button justIcon color="reddit" simple>
            <i className={"fab fa-reddit"} />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={4} md={3}>
          <Button color="reddit" simple>
            <i className={"fab fa-reddit"} /> Repost · 232
          </Button>
        </GridItem>
      </GridContainer>
      <Accordion
        collapses={[
          {
            title: "View Code",
            content: (
              <SyntaxHighlighter language="jsx" style={prism}>
                {codeExampleSocials}
              </SyntaxHighlighter>
            )
          }
        ]}
      />
      <h3>
        <code>&lt;a&gt;</code> tag with button styles
      </h3>
      <p>
        Adding the <code>href</code> prop (without specifying a <code>tag</code>{" "}
        prop) will default the button to a link.
      </p>
      <h3>Disabled state</h3>
      <p>
        Make buttons look inactive by adding the <code>disabled</code> boolean
        attribute to any <code>&lt;Button&gt;</code> element.
      </p>
      <Button color="primary" size="lg" disabled>
        Primary button
      </Button>
      <Button color="secondary" size="lg" disabled>
        Button
      </Button>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExampleDisabled}
      </SyntaxHighlighter>
      <Button color="primary" size="lg" disabled href="#pablo">
        Primary button
      </Button>
      <Button color="secondary" size="lg" disabled href="#pablo">
        Button
      </Button>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExampleDisabledHref}
      </SyntaxHighlighter>
      <h2>Props</h2>
      <h3>Regular Button</h3>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeButtonProps}
      </SyntaxHighlighter>
      <h2>
        <code>Notice</code>
      </h2>
      <p>
        Beside our custom made buttons, you can use{" "}
        {
          " " //eslint-disable-next-line
        }
        <a href="https://material-ui-next.com/demos/buttons/" target="_blank">
          Material-UI Buttons
        </a>.
      </p>
    </div>
  );
}

export default Buttons;



// WEBPACK FOOTER //
// ./src/layouts/Documentation/Sections/Buttons