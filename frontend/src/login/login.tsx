import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Field, Form } from 'formik'

interface Values {
  email: string
  password: string
}

const Login = () => {
  const handleSubmit = ({ email, password }: Values) => {
    alert(JSON.stringify({ email, password }))
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={values => handleSubmit(values)}
          >
            <Form>
              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <Field type="email" className="form-control" name="email" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <Field type="password" className="form-control" name="password" />
              </div>
              <div className="row pt-3">
                <div className="col-8 pt-3">
                  <Link to="/register" className="have-an-account">
                    Don't have an account? Click here to register
                  </Link>
                </div>
                <div className="col-4">
                  <button className="btn btn-primary float-end" type="submit">
                    Login
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

export default Login
