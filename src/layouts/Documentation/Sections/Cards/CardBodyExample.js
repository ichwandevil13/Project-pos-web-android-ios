import React from "react";
// core components
import Card  from "../../../../components/Card/Card";
import CardBody  from "../../../../components/Card/CardBody";

class CardBodyExample extends React.Component {
  render() {
    return (
      <Card>
        <CardBody>This is some text within a card body.</CardBody>
      </Card>
    );
  }
}

export default CardBodyExample;



// WEBPACK FOOTER //
// ./src/layouts/Documentation/Sections/Cards/CardBodyExample