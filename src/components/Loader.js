import { Spinner } from "react-bootstrap";
export default function Loader() {
  return (
    <div id="loader" className="wrapper">
      <Spinner animation="border" />
    </div>
  );
}
