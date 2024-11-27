import React from "react";
import { Container, Table, Button, Form } from "react-bootstrap";

function PermissionsManagement() {
  const permissions = [
    { id: 1, name: "View Dashboard" },
    { id: 2, name: "Edit Content" },
    { id: 3, name: "Delete Users" },
  ];

  return (
    <Container fluid className="mt-4">
      <h2>Permissions Management</h2>
      <Table bordered>
        <thead>
          <tr>
            <th>Permission</th>
            <th>Assigned Roles</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission) => (
            <tr key={permission.id}>
              <td>{permission.name}</td>
              <td>
                <Form.Check inline label="Admin" type="checkbox" />
                <Form.Check inline label="Editor" type="checkbox" />
                <Form.Check inline label="Viewer" type="checkbox" />
              </td>
              <td>
                <Button variant="warning" size="sm">Edit</Button>{" "}
                <Button variant="danger" size="sm">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default PermissionsManagement;
