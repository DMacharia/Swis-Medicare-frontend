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
              Image URL
            </label>
            <input type="text" placeholder="Image URL here ..." />
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
              ID Number
            </label>
            <input type="text" placeholder="ID Number here ..." />
          </section>
          <section className="actions">
            <button type='submit'>admit</button>
          </section>
        </form>
    </div>
  )
}

export default NewPatientForm