import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MainCard(image) {
  return (
    <Card style={{ width: "18rem" }}>
      <img
        src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
        variant="top"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default MainCard;
