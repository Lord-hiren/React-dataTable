import "./App.css";
import DataTable from "./pages/DataTable";

function App() {
  const columns = [
    { id: "id", label: "ID" },
    { id: "name", label: "Name" },
    { id: "email", label: "Email" },
  ];

  const rows = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com" },
    { id: 4, name: "Bob Brown", email: "bob@example.com" },
    { id: 5, name: "Charlie White", email: "charlie@example.com" },
    { id: 6, name: "David Black", email: "david@example.com" },
  ];
  return (
    <>
      <DataTable
        rows={rows}
        columns={columns}
        rowsPerPages={[10, 25, 50, 100]}
      />
    </>
  );
}

export default App;
