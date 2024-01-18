import React from "react";

function useTable() {
  const renderTable = (rows = []) => {
    if (!rows.length) {
      return null;
    }

    return (
      <table>
        <thead>
          <tr>
            <th>University name</th>
            <th>Country code</th>
            <th>Domains</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((u, index) => (
            <tr key={index}>
              <td>{u.name}</td>
              <td>{u.alpha_two_code}</td>
              <td>
                {u.domains.map((d, i) => (
                  <div key={i}>
                    <a href={`https://${d}`} target="_blank">
                      {d}
                    </a>
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return { renderTable };
}

export default useTable;
