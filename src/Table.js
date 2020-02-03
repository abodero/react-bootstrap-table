import React from 'react';

const Table = () => {
  return (
    <div>
      <table className="table table-bordered table-hover">
      <TableHeader></TableHeader>
      <TableBody></TableBody>
      </table>
    </div>
  );
}

const TableHeader = () => {
  return(
      <thead className="thead-dark" key="header-1">
          <tr key="header-0">
            <td>Hello i am a table header</td>
          </tr>
      </thead>
  );
}

const TableBody = () => {
  return(
      <tbody>
          <tr key="spinner-0">
              <td>
                 Hello i am a table row 
              </td>
          </tr>
      </tbody>
);
}

export default Table;