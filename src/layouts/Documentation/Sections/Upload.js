import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
// core components
import ImageUpload from "../../../components/CustomUpload/ImageUpload";
import PictureUpload from "../../../components/CustomUpload/PictureUpload";

const codeExampleImage = `import React from 'react';
// core components
import ImageUpload from 'components/CustomUpload/ImageUpload';

function Upload({...props}){
//  const { } = props;
  return (
    <div>
      <ImageUpload />
      <ImageUpload avatar/>
    </div>
  );
}

export default Upload;
`;
const codeExamplePicture = `import React from 'react';
// core components
import PictureUpload from 'components/CustomUpload/PictureUpload';

function Upload({...props}){
  return (
    <PictureUpload />
  );
}

export default Upload;
`;

function Upload({ ...props }) {
  //  const { } = props;
  return (
    <div>
      <h1>Upload</h1>
      <p>
        We've created two special components to make it easier for you to create
        a picture/image upload on your form.
      </p>
      <h2>Styles</h2>
      <p>
        You will find the styles for these components in<br />{" "}
        <code>
          src/assets/scss/material-dashboard-pro-react/_fileupload.scss
        </code>.
      </p>
      <h2>ImageUpload</h2>
      <p>
        This component was made to look like{" "}
        <a
          href="https://www.jasny.net/bootstrap/javascript/#fileinput"
          target="_blank"
          rel="noopener noreferrer"
        >
          jasny's
        </a>{" "}
        image uploads with a preview image after the user selects an image, a
        button for changing the image and one for removing it.
      </p>
      <p>
        If you want to submit the image (to save it on your server after it has
        been uploaded) you have to change the <code>handleSubmit</code> function
        in <code>src/components/CustomUpload/ImageUpload</code> at line 35.
      </p>
      <ImageUpload />
      <ImageUpload avatar />
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExampleImage}
      </SyntaxHighlighter>
      <h2>PictureUpload</h2>
      <p>
        This component looks like the <code>ImageUpload</code> component but
        without the upload, remove and change buttons. The upload is made by
        clicking on the image itself.
      </p>
      <p>
        If you want to submit the picture (to save it on your server after it
        has been uploaded) ,like with the <code>ImageUpload</code> component,
        you have to change the <code>handleSubmit</code> function in{" "}
        <code>src/components/CustomUpload/PictureUpload</code> at line 27.
      </p>
      <PictureUpload />
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExamplePicture}
      </SyntaxHighlighter>
    </div>
  );
}

export default Upload;



// WEBPACK FOOTER //
// ./src/layouts/Documentation/Sections/Upload