import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditPatient = () => {

    const [patientData, setPatientData] = useState([]);
    let { id } =useParams();

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://swis-medicare-eblx.onrender.com/patients/${id}`, {
          methhod: "PATCH",
          headers: {
            'content-type': 'application/json',
            "Access-Control-Allow-Origin" : "*"
          },
          body: JSON.stringify({
            first_name: patientData.first_name,
            second_name: patientData.second_name,
            username: patientData.username,
            email: patientData.email,
            mobile_no: patientData.mobile_no,
            gender: patientData.gender,
            blood_group: patientData.blood_group,
            address: patientData.address,
            password: patientData.password,
            date_of_birth: patientData.date_of_birth,
            role: patientData.role
          })
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        navigate("/patients");
      };


    const onFormChange = (e) => {
        setPatientData({...patientData, [e.target.name]: e.target.value});
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
        <h1>Admit patient</h1>
          <section className="text-input">
            <label>
              First Name
            </label>
            <input 
                type="text" 
                placeholder="First Name here ..."
                name='first_name'
                value={patientData.first_name}
                onChange={onFormChange} />
          </section>
          <section className="text-input">
            <label>
              Second Name
            </label>
            <input 
                type="text" 
                placeholder="Second Name here ..."
                name='second_name' 
                value={patientData.second_name}
                onChange={onFormChange} />
          </section>
          <section className="text-input">
            <label>
              Username
            </label>
            <input 
                type="text" 
                placeholder="Username here ..."
                name='username'
                value={patientData.username}
                onChange={onFormChange} />
          </section>
          <section className="text-input">
            <label>
              Email Address
            </label>
            <input 
                type="text" 
                placeholder="Email Address here ..."
                name='email'
                value={patientData.email}
                onChange={onFormChange} />
          </section>
          <section className="text-input">
            <label>
              Phone number
            </label>
            <input 
                type="text" 
                placeholder="Phone number here ..."
                name='mobile_no'
                value={patientData.mobile_no}
                onChange={onFormChange} />
          </section>
          <section className="text-input">
            <label>
              Gender
            </label>
            <input 
                type="text" 
                placeholder="Gender here ..."
                name='gender'
                value={patientData.gender}
                onChange={onFormChange} />
          </section>
          <section className="text-input">
            <label>
              Blood Group
            </label>
            <input 
                type="text" 
                placeholder="Blood group here ..."
                name='blood group'
                value={patientData.blood_group}
                onChange={onFormChange} />
          </section>
          <section className="text-input">
            <label>
              Address
            </label>
            <input 
                type="text" 
                placeholder="Address here ..."
                name='address'
                value={patientData.address}
                onChange={onFormChange} />
          </section>
          <section className="text-input">
            <label>
              Password
            </label>
            <input 
                type="text" 
                placeholder="Password here ..."
                name='password'
                value={patientData.password}
                onChange={onFormChange} />
          </section>
          <section className="text-input">
            <label>
              Date of Birth
            </label>
            <input 
                type="text" 
                placeholder="Date of Birth here ..."
                name='date_of_birth'
                value={patientData.date_of_birth}
                onChange={onFormChange} />
          </section>
          <section className="text-input">
            <label>
              Role
            </label>
            <input 
                type="text" 
                placeholder="Role here ..."
                name='role'
                value={patientData.role}
                onChange={onFormChange} />
          </section>
          <section className="actions">
            <button type='submit'>admit</button>
          </section>
        </form>
    </div>
  )
}

export default EditPatient