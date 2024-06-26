import { Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

// proprietà che il server si aspetta di ricevere per ogni prenotazione inviata:

// name <-- string
// phone <-- string
// numberOfPeople <-- string || number
// smoking <-- boolean
// dateTime <-- string || date
// specialRequests <-- string

class ReservationForm extends Component {
  state = {
    reservation: {
      name: "",
      phone: "",
      numberOfPeople: "1",
      smoking: false,
      dateTime: "",
      specialRequests: ""
    },
    userName: "StefanoMic"
  };
  render() {
    return (
      <Container>
        <h2 className="display-5 text-center mt-5">Prenota un tavolo da noi</h2>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={4}>
            <Form className="text-start">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci nome prenotazione"
                  value={this.state.reservation.name} // lettura dallo stato
                  onChange={e => this.setState({ reservation: { ...this.state.reservation, name: e.target.value } })} // scrittura dello stato
                />
                {this.state.reservation.name && this.state.reservation.name.toLowerCase().includes("arnaldo") && (
                  <Form.Text className="text-danger">Ma che nome orribile! Usa quello di un tuo amico..</Form.Text>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="333xxxxx"
                  value={this.state.reservation.phone}
                  onChange={e => this.setState({ reservation: { ...this.state.reservation, phone: e.target.value } })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formSeats">
                <Form.Label>Numero Coperti</Form.Label>
                <Form.Select
                  aria-label="Number of seats"
                  value={this.state.reservation.numberOfPeople}
                  onChange={e => this.setState({ reservation: { ...this.state.reservation, numberOfPeople: e.target.value } })}
                >
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option>
                  <option value="6">Six</option>
                  <option value="7">Seven</option>
                  <option value="8">Eight</option>
                  <option value="9">Nine</option>
                  <option value="10">Ten</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Fumatori"
                  checked={this.state.reservation.smoking}
                  onChange={e => this.setState({ reservation: { ...this.state.reservation, smoking: e.target.checked } })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formDate">
                <Form.Label>Data e Ora</Form.Label>
                <Form.Control
                  type="datetime-local"
                  min={new Date().toISOString().split(".")[0].slice(0, -3)}
                  value={this.state.reservation.dateTime}
                  onChange={e => this.setState({ reservation: { ...this.state.reservation, dateTime: e.target.value } })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Richieste particolari</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="intolleranze, allergie..."
                  value={this.state.reservation.specialRequests}
                  onChange={e => this.setState({ reservation: { ...this.state.reservation, specialRequests: e.target.value } })}
                />
              </Form.Group>

              <Button variant="info">Invia</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ReservationForm;
