import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await fetch('http://localhost:9091/teachers');
      if (response.ok) {
        const data = await response.json();
        setTeachers(data);
      } else {
        setError('Failed to fetch teachers');
      }
    } catch (error) {
      setError('Error fetching teachers');
    }
  };

  return (
    <div className="container">
      <h2>Teacher List</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Birthday</th>
            <th scope="col">ID</th>
            <th scope="col">PhoneNumber</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher, index) => (
            <tr key={teacher.id}>
              <td>{teacher.name}</td>
              <td>{teacher.email}</td>
              <td>{teacher.birthday}</td>
              <td>{teacher.id}</td>
              <td>{teacher.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeacherList;
