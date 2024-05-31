// src/Table.js
import React from 'react';

const Table = () => {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Header 1</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Header 2</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Header 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>Data 1</td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>Data 2</td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>Data 3</td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>
  );
};

export default Table;
