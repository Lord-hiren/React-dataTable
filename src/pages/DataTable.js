import React, { useState } from "react";

const DataTable = ({
  rows = [],
  columns = [],
  rowsPerPages = [5, 10, 25],
  customStyles = {},
}) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPages[0]);

  const filteredRows = rows.filter((row) =>
    columns.some((column) =>
      row[column.id]?.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="datatable-container" style={customStyles.container}>
      <div className="datatable-header" style={customStyles.header}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="datatable-search"
          style={customStyles.searchInput}
        />
      </div>
      <table className="datatable-table" style={customStyles.table}>
        <thead style={customStyles.thead}>
          <tr>
            {columns.map((column) => (
              <th key={column.id} style={customStyles.th}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody style={customStyles.tbody}>
          {filteredRows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => (
              <tr key={index} style={customStyles.tr}>
                {columns.map((column) => (
                  <td key={column.id} style={customStyles.td}>
                    {row[column.id]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
      <div className="datatable-footer" style={customStyles.footer}>
        <div className="datatable-pagination" style={customStyles.pagination}>
          <button
            onClick={() => handleChangePage(page - 1)}
            disabled={page === 0}
            style={customStyles.paginationButton}
          >
            &lt;
          </button>
          <span style={customStyles.paginationText}>
            Page {page + 1} of {Math.ceil(filteredRows.length / rowsPerPage)}
          </span>
          <button
            onClick={() => handleChangePage(page + 1)}
            disabled={page >= Math.ceil(filteredRows.length / rowsPerPage) - 1}
            style={customStyles.paginationButton}
          >
            &gt;
          </button>
        </div>
        <div
          className="datatable-rows-per-page"
          style={customStyles.rowsPerPage}
        >
          <label style={customStyles.rowsPerPageLabel}>Rows per page:</label>
          <select
            value={rowsPerPage}
            onChange={handleChangeRowsPerPage}
            style={customStyles.rowsPerPageSelect}
          >
            {rowsPerPages.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
