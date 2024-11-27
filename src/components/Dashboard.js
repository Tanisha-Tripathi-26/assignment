import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <Container fluid className="mt-4">
      <h2 className="text-center">Admin Dashboard</h2>
      <Row className="mt-4">
        <Col md={4}>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Users</Card.Title>
                <Card.Text>Manage users and their roles</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col md={4}>
          <Link to="/roles" style={{ textDecoration: "none" }}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Roles</Card.Title>
                <Card.Text>Define and edit roles</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col md={4}>
          <Link to="/permissions" style={{ textDecoration: "none" }}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Permissions</Card.Title>
                <Card.Text>Manage permissions within roles</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
