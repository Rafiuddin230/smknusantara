import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Cardjurusan = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title className="fw-bold">{props.jurusan}</Card.Title>
        <Card.Text className="text-justify">{props.deskripsi}</Card.Text>
        <Button variant="primary">pelajari selengkapnya...</Button>
      </Card.Body>
    </Card>
  );
};

export default Cardjurusan;
