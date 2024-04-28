import React, { useState, useEffect } from 'react';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [editedCourse, setEditedCourse] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('http://localhost:9091/courses');
      if (!response.ok) {
        throw new Error('Failed to fetch courses');
      }
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:9091/courses/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete course');
      }
      // Remove the deleted course from the state
      setCourses(courses.filter(course => course.id !== id));
      console.log('Course deleted successfully');
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  const handleEdit = (course) => {
    setEditedCourse(course);
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:9091/courses/${editedCourse.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedCourse),
      });
      if (!response.ok) {
        throw new Error('Failed to update course');
      }
      // Reset edited course state
      setEditedCourse(null);
      console.log('Course updated successfully');
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedCourse({ ...editedCourse, [name]: value });
  };

  return (
    <div>
      <h1>Course List</h1>
      <table className="course-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{editedCourse && editedCourse.id === course.id ? <input type="text" name="name" value={editedCourse.name} onChange={handleChange} /> : course.name}</td>
              <td>{editedCourse && editedCourse.id === course.id ? <input type="text" name="description" value={editedCourse.description} onChange={handleChange} /> : course.description}</td>
              <td>
                {editedCourse && editedCourse.id === course.id ? (
                  <button onClick={() => handleUpdate()}>Update</button>
                ) : (
                  <>
                    <button onClick={() => handleEdit(course)}>Edit</button>
                    <button onClick={() => handleDelete(course.id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseList;


