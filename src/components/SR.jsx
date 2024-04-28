import React, { useState } from 'react';


const StudentRegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    guardianName: '',
    guardianPhoneNumber: '',
    guardianEmail: '',
    emergencyContactName: '',
    emergencyContactPhoneNumber: '',
    emergencyContactRelationship: ''
  });

 const[error,setError] = useState();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(formData);
    setError("hello");
  };

  return (
    <div className="container-fluid  p-2" style={{backgroundColor:"aqua"}}>
       {error && <div className=" d-flex justify-content-center" style={{position:"fixed",display:"flex" , width:"100vw",top:"1vh"}}>
           <p className="alert alert-success w-50 text-center ">{error}</p> 
        </div>}
      <h1 className="mt-5 " style={{marginLeft:"400px"}}>Student Registration Form</h1>
      <div className='d-flex justify-content-center'>
      <div className="card ishu mb-5 col-sm-9   ">
        <div className="card-body shadow-lg">
          <form onSubmit={handleSubmit} >
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" className="form-control" style={{ height: '45px' }} id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" style={{ height: '45px' }} id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" style={{ height: '45px' }} id="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                <input type="tel" className="form-control" style={{ height: '45px' }} id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
                <input type="date" className="form-control" style={{ height: '45px' }} id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" style={{ height: '45px' }} id="address" name="address" value={formData.address} onChange={handleChange} />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="city" className="form-label">City</label>
                <input type="text" className="form-control" style={{ height: '45px' }} id="city" name="city" value={formData.city} onChange={handleChange} />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="state" className="form-label">State</label>
                <input type="text" className="form-control" style={{ height: '45px' }} id="state" name="state" value={formData.state} onChange={handleChange} />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="country" className="form-label">Country</label>
                <input type="text" className="form-control" style={{ height: '45px' }} id="country" name="country" value={formData.country} onChange={handleChange} />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="zipCode" className="form-label">Zip Code</label>
                <input type="text" className="form-control" style={{ height: '45px' }} id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="guardianName" className="form-label">Guardian Name</label>
                <input type="text" className="form-control" style={{ height: '45px' }} id="guardianName" name="guardianName" value={formData.guardianName} onChange={handleChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="guardianPhoneNumber" className="form-label">Guardian Phone Number</label>
                <input type="tel" className="form-control" style={{ height: '45px' }} id="guardianPhoneNumber" name="guardianPhoneNumber" value={formData.guardianPhoneNumber} onChange={handleChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="guardianEmail" className="form-label">Guardian Email</label>
                <input type="email" className="form-control" style={{ height: '45px' }} id="guardianEmail" name="guardianEmail" value={formData.guardianEmail} onChange={handleChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="emergencyContactName" className="form-label">Emergency Contact Name</label>
                <input type="text" className="form-control" style={{ height: '45px' }} id="emergencyContactName" name="emergencyContactName" value={formData.emergencyContactName} onChange={handleChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="emergencyContactPhoneNumber" className="form-label">Emergency Contact Phone Number</label>
                <input type="tel" className="form-control" style={{ height: '45px' }} id="emergencyContactPhoneNumber" name="emergencyContactPhoneNumber" value={formData.emergencyContactPhoneNumber} onChange={handleChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="emergencyContactRelationship" className="form-label">Emergency Contact Relationship</label>
                <input type="text" className="form-control" style={{ height: '45px' }} id="emergencyContactRelationship" name="emergencyContactRelationship" value={formData.emergencyContactRelationship} onChange={handleChange} />
              </div>
            </div>
            <button type="submit" className="btn btn-primary" style={{marginLeft:"400px"}}>Submit</button>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default StudentRegistrationForm;
