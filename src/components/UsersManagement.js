import React, { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import AddEditUserModal from "./modals/AddEditUserModal";

function UsersManagement() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor", status: "Inactive" },
  ]);
  const [modalData, setModalData] = useState(null);

  const handleAddUser = () => setModalData({ mode: "add" });
  const handleEditUser = (user) => setModalData({ mode: "edit", user });

  return (
    <Container fluid className="mt-4">
      <h2>Users Management</h2>
      <Button className="mb-3" onClick={handleAddUser}>
        Add User
      </Button>
      <Table bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <Button variant="warning" size="sm" onClick={() => handleEditUser(user)}>
                  Edit
                </Button>{" "}
                <Button variant="danger" size="sm">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {modalData && (
        <AddEditUserModal
          modalData={modalData}
          setModalData={setModalData}
          setUsers={setUsers}
        />
      )}
    </Container>
  );
}

export default UsersManagement;
