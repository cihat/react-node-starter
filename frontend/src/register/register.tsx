import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Field, Form } from 'formik'

interface Values {
  name: string
  email: string
  password: string
}

const Register = () => {
  const handleSubmit = ({ name, email, password }: Values) => {
    alert(JSON.stringify({ name, email, password }))
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            onSubmit={values => handleSubmit(values)}
          >
            <Form>
              <div className="form-group mb-3">
                <label htmlFor="name">Name</label>
                <Field type="text" className="form-control" name="name" />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <Field type="email" className="form-control" name="email" />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <Field type="password" className="form-control" name="password" />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field type="password" className="form-control" name="confirmPassword" />
              </div>

              <div className="row">
                <div className="col-8 pt-3">
                  <Link to="/login" className="have-an-account">
                    Already have an account? Click here to login
                  </Link>
                </div>
                <div className="col-4">
                  <button className="btn btn-primary float-end" type="submit">
                    Register
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Register
