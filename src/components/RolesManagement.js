import React, { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import AddEditRoleModal from "./modals/AddEditRoleModal";

function RolesManagement() {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", description: "Full access to the system" },
    { id: 2, name: "Editor", description: "Can edit content" },
  ]);
  const [modalData, setModalData] = useState(null);

  const handleAddRole = () => setModalData({ mode: "add" });
  const handleEditRole = (role) => setModalData({ mode: "edit", role });

  return (
    <Container fluid className="mt-4">
      <h2>Roles Management</h2>
      <Button className="mb-3" onClick={handleAddRole}>
        Add Role
      </Button>
      <Table bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.description}</td>
              <td>
                <Button variant="warning" size="sm" onClick={() => handleEditRole(role)}>
                  Edit
                </Button>{" "}
                <Button variant="danger" size="sm">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {modalData && (
        <AddEditRoleModal
          modalData={modalData}
          setModalData={setModalData}
          setRoles={setRoles}
        />
      )}
    </Container>
  );
}

export default RolesManagement;
