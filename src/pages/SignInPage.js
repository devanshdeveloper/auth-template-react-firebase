import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/ContextProvider";

export default function SignInPage() {
  const navigate = useNavigate();
  const { signUserIn } = useAuth();

  function handleSignIn(e) {
    e.target.disabled = true;
    signUserIn().then(() => navigate("/dashboard"));
  }

  return (
    <div className="w-100 center-both text-center" style={{ height: "100vh" }}>
      <Card style={{ maxWidth: "400px", minHeight: "500px" }}>
        <Card.Body className="d-flex flex-column align-items-center justify-content-around">
          <Card.Title className="fs-2">Sign In</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
          </Card.Text>
          <Button onClick={handleSignIn}>Sign In With Google</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
