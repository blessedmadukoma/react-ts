import { ReactElement } from "react";

// define a type for the props
type HeadingProps = { title: string };

// set the return type to ReactElement instead of TypeScript infering the type (JSX.Element) because we are returning only an element. You can decide not to do this.
const Heading = ({ title }: HeadingProps): ReactElement => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Heading;
