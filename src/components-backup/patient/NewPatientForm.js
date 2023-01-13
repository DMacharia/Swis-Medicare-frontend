import React from 'react'

const NewPatientForm = () => {
  return (
    <div>
        <form>
        <h1>Admit patient</h1>
          <section className="text-input">
            <label>
              First Name
            </label>
            <input type="text" placeholder="First Name here ..." />
          </section>
          <section className="text-input">
            <label>
              Second Name
            </label>
            <input type="text" placeholder="Second Name here ..." />
          </section>
          <section className="text-input">
            <label>
              Username
            </label>
            <input type="text" placeholder="Username here ..." />
          </section>
          <section className="text-input">
            <label>
              Email Address
            </label>
            <input type="text" placeholder="Email Address here ..." />
          </section>
          <section className="text-input">
            <label>
              Phone number
            </label>
            <input type="text" placeholder="Phone number here ..." />
          </section>
          <section className="text-input">
            <label>
              Gender
            </label>
            <input type="text" placeholder="Gender here ..." />
          </section>
          <section className="text-input">
            <label>
              Blood Group
            </label>
            <input type="text" placeholder="Blood group here ..." />
          </section>
          <section className="text-input">
            <label>
              Address
            </label>
            <input type="text" placeholder="Address here ..." />
          </section>
          <section className="text-input">
            <label>
              Password
            </label>
            <input type="text" placeholder="Password here ..." />
          </section>
          <section className="text-input">
            <label>
              Date of Birth
            </label>
            <input type="text" placeholder="Date of Birth here ..." />
          </section>
          <section className="text-input">
            <label>
              Role
            </label>
            <input type="text" placeholder="Role here ..." />
          </section>
          <section className="actions">
            <button type='submit'>admit</button>
          </section>
        </form>
    </div>
  )
}

export default NewPatientForm