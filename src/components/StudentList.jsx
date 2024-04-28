import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch('http://localhost:9091/students');
      if (response.ok) {
        const data = await response.json();
        setStudents(data);
      } else {
        setError('Failed to fetch students');
      }
    } catch (error) {
      setError('Error fetching students');
    }
  };

  return (
    <div className={classNames('table-container', 'bootstrap-styled-container')}>
      <h2 className={classNames('title', 'bootstrap-styled-title')}>Student List</h2>
      {error && <div className={classNames('error', 'bootstrap-styled-error')}>{error}</div>}
      <table className={classNames('table', 'table-striped', 'table-bordered', 'bootstrap-styled-table')}>
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Birthday</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id} className={classNames('student-row', `row-${index}`)}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phoneNumber}</td>
              <td>{student.birthday}</td>
              <td>{student.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
