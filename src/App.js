import { useFormik } from 'formik';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiSolidError } from "react-icons/bi";
import * as Yup from 'yup'


const validate = Yup.object({
  name: Yup.string().min(2, 'minimum 2 character must be required in the name..!').max(20,'maximum 20 character must be required in the name..!').required('Name must be required..!'),
  fathername: Yup.string().min(2, 'Too short').max(20,'Too long').required('fatherName must be required..!'),
  mothername: Yup.string().min(2, 'Too short').max(20,'Too long').required('motherName must be required..!'),
  pno: Yup.string().min(parseInt(10),'toshort').max(parseInt(10),'to long').required('phone number must be required..!'),
  email: Yup.string().email().required('Email must be required..!'),
  gender: Yup.string().required('Gender must be required...!'),
  date: Yup.string().required('Birth date must be required...!'),
  address: Yup.string().required('address must be required...!'),
  bg: Yup.string().required('Blood Group must be required...!'),
  hobby: Yup.array().min(1).required('Gender must be required...!'),
  city: Yup.string().required('city must be required...!'),
  department: Yup.string().required('department must be required...!'),
  language: Yup.string().required('language must be required...!')
})


function App() {

  const init = {
    name: '',
    fathername: '',
    mothername: '',
    pno: '',
    email: '',
    gender: '',
    date: '',
    address: '',
    bg: '',
    hobby: [],
    city: '',
    department:'',
    language:'',
  }

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    initialValues: init,
    validationSchema: validate,
    onSubmit: (values) => {
      console.log(values);
    }
  })
  // console.log(values);

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit} className="row g-3">
          <h1 style={{ textAlign: 'center', color: 'red' }}>Student registration form</h1>
          <div className="col-md-12">
            <label htmlFor="inputName" className="form-label">Name</label>
            <input type="text" className="form-control" name='name' id="inputName" value={values.name} onChange={handleChange} onBlur={handleBlur} />

            <p style={{ color: "red" }}>{errors.name && touched.name ? <span><BiSolidError></BiSolidError> {errors.name}</span> : null}</p>

          </div>
          <div className="col-md-6">
            <label htmlFor="inputName" className="form-label">Father's Name</label>
            <input type="text" className="form-control" name='fathername' id="inputName" value={values.fathername} onChange={handleChange} onBlur={handleBlur} />

            <p style={{ color: "red" }}>{errors.fathername && touched.fathername ? <span><BiSolidError></BiSolidError> {errors.fathername}</span> : null}</p>

          </div>
          <div className="col-md-6">
            <label htmlFor="inputName" className="form-label">Mother's Name</label>
            <input type="text" className="form-control" name='mothername' id="inputName" value={values.mothername} onChange={handleChange} onBlur={handleBlur} />

            <p style={{ color: "red" }}>{errors.mothername && touched.mothername ? <span><BiSolidError></BiSolidError> {errors.mothername}</span> : null}</p>

          </div>
          <div className="col-md-6">
            <label htmlFor="inputName" className="form-label">Phone No</label>
            <input type="text" className="form-control" name='pno' id="inputName" value={values.pno} onChange={handleChange} onBlur={handleBlur} />

            <p style={{ color: "red" }}>{errors.pno && touched.pno ? <span><BiSolidError></BiSolidError> {errors.pno}</span> : null}</p>

          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" name='email' id="inputEmail4" value={values.email} onChange={handleChange} onBlur={handleBlur} />

            <p style={{ color: "red" }}>{errors.email && touched.email ? <span><BiSolidError></BiSolidError> {errors.email}</span> : null}</p>

          </div>

          <div className="col-md-6">
            <div className='d-flex'>
              <label htmlFor="inputState" className="form-label">Gender : </label>
              <div className="form-check ms-3">
                <input className="form-check-input" type="radio" defaultValue id="defaultCheck1" name='gender' value='male' onChange={handleChange} onBlur={handleBlur} />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  Male
                </label>
              </div>
              <div className="form-check ms-3">
                <input className="form-check-input" type="radio" defaultValue id="defaultCheck2" name='gender' value='female' onChange={handleChange} onBlur={handleBlur} />
                <label className="form-check-label" htmlFor="defaultCheck2">
                  Female
                </label>
              </div>
              <div className="form-check ms-3">
                <input className="form-check-input" type="radio" defaultValue id="other" name='gender' value='other' onChange={handleChange} onBlur={handleBlur} />
                <label className="form-check-label" htmlFor="other">
                  Other
                </label>
              </div>
            </div>
            <p style={{ color: "red" }}>{errors.gender && touched.gender ? <span><BiSolidError></BiSolidError> {errors.gender}</span> : null}</p>
          </div>

          <div className="col-md-6">
            <div className='d-flex'>
              <label htmlFor="inputState" className="form-label">Date Of Birth : </label>
              <div className='ms-2'>
                <input type="date" name='date' onChange={handleChange} onBlur={handleBlur} />
              </div>
            </div>
            <p style={{ color: "red" }}>{errors.date && touched.date ? <span><BiSolidError></BiSolidError> {errors.date}</span> : null}</p>
          </div>
          <div className="col-md-6">
            <div>
              <label>Address</label>
              <div className='mt-2'>
                <textarea type="text" className="form-control" name='address' placeholder='Street:- House:- Road:-' onChange={handleChange} onBlur={handleBlur} />
              </div>
            </div>
            <p style={{ color: "red" }}>{errors.address && touched.address ? <span><BiSolidError></BiSolidError> {errors.address}</span> : null}</p>
          </div>

          <div className="col-md-3">
            <div>
              <label htmlFor="inputState" className="form-label">Blood Group</label>
              <select id="inputState" onChange={handleChange} onBlur={handleBlur} name='bg' className="form-select">
                <option value='' selected>Select</option>
                <option value='A+'>A+</option>
                <option value='B+'>B+</option>
                <option value='B-'>B-</option>
                <option value='O+'>O+</option>
              </select>
            </div>
            <p style={{ color: "red" }}>{errors.bg && touched.bg ? <span><BiSolidError></BiSolidError> {errors.bg}</span> : null}</p>
          </div>

          <div className="col-3">
            <label htmlFor="inputState" className="form-label">Hobby</label>
            <div className='d-flex'>
              <div className="form-check">
                <input className="form-check-input" name='hobby' type="checkbox" id="1" onChange={handleChange} onBlur={handleBlur} value='Reading' />
                <label className="form-check-label" htmlFor="1">
                  Reading
                </label>
              </div>
              <div className="form-check ms-3">
                <input className="form-check-input" name='hobby' type="checkbox" id="2" onChange={handleChange} onBlur={handleBlur} value='Cricket' />
                <label className="form-check-label" htmlFor="2">
                  Cricket
                </label>
              </div>
              <div className="form-check ms-3">
                <input className="form-check-input" name='hobby' type="checkbox" id="3" onChange={handleChange} onBlur={handleBlur} value='Dancing' />
                <label className="form-check-label" htmlFor="3">
                  traveling
                </label>
              </div>
            </div>
            <p style={{ color: "red" }}>{errors.hobby && touched.hobby ? <span><BiSolidError></BiSolidError> {errors.hobby}</span> : null}</p>

          </div>

          <div className="col-md-3">
            <label htmlFor="inputState" className="form-label">City</label>
            <select id="inputState" onChange={handleChange} onBlur={handleBlur} name='city' className="form-select">
              <option value='' selected>City</option>
              <option value='Surat'>Surat</option>
              <option value='Baroda'>Baroda</option>
              <option value='Ahmedabad'>Ahmedabad</option>
              <option value='Navsari'>Navsari</option>
            </select>
            <p style={{ color: "red" }}>{errors.city && touched.city ? <span><BiSolidError></BiSolidError> {errors.city}</span> : null}</p>
          </div>

          <div className='col-md-3'>
            <label htmlFor="">Department</label>
            <div className='d-flex mt-2'>
              <div className="form-check">
                <input className="form-check-input" type="radio" defaultValue id="d1" name='department' value='male' onChange={handleChange} onBlur={handleBlur} />
                <label className="form-check-label" htmlFor="d1">
                  BBA
                </label>
              </div>
              <div className="form-check ms-3">
                <input className="form-check-input" type="radio" defaultValue id="d2" name='department' value='female' onChange={handleChange} onBlur={handleBlur} />
                <label className="form-check-label" htmlFor="d2">
                  BCA
                </label>
              </div>
              <div className="form-check ms-3">
                <input className="form-check-input" type="radio" defaultValue id="d3" name='department' value='other' onChange={handleChange} onBlur={handleBlur} />
                <label className="form-check-label" htmlFor="d3">
                  BCOM
                </label>
              </div>
            </div>
            <p style={{ color: "red" }}>{errors.department && touched.department ? <span><BiSolidError></BiSolidError> {errors.department}</span> : null}</p>
          </div>

          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">Language</label>
            <div className='d-flex'>
            <div className="form-check">
                <input className="form-check-input" name='language' type="checkbox" id="l1" onChange={handleChange} onBlur={handleBlur} value='Html' />
                <label className="form-check-label" htmlFor="l1">
                  Html
                </label>
              </div>
              <div className="form-check ms-3">
                <input className="form-check-input" name='language' type="checkbox" id="l2" onChange={handleChange} onBlur={handleBlur} value='C' />
                <label className="form-check-label" htmlFor="l2">
                  C
                </label>
              </div>
              <div className="form-check ms-3">
                <input className="form-check-input" name='language' type="checkbox" id="l3" onChange={handleChange} onBlur={handleBlur} value='C++' />
                <label className="form-check-label" htmlFor="l3">
                  C++
                </label>
              </div>
              <div className="form-check ms-3">
                <input className="form-check-input" name='language' type="checkbox" id="l4" onChange={handleChange} onBlur={handleBlur} value='java' />
                <label className="form-check-label" htmlFor="l4">
                  java
                </label>
              </div>
              <div className="form-check ms-3">
                <input className="form-check-input" name='language' type="checkbox" id="l5" onChange={handleChange} onBlur={handleBlur} value='java script' />
                <label className="form-check-label" htmlFor="l5">
                  java script
                </label>
              </div>
              <div className="form-check ms-3">
                <input className="form-check-input" name='language' type="checkbox" id="l6" onChange={handleChange} onBlur={handleBlur} value=' react js' />
                <label className="form-check-label" htmlFor="l6">
                  react js
                </label>
              </div>
            </div>
            <p style={{ color: "red" }}>{errors.language && touched.language ? <span><BiSolidError></BiSolidError> {errors.language}</span> : null}</p>

          </div>


          <div className="col-12 btn">
            <button type="submit" className="btn btn-primary">Sign in</button>
          </div>
        </form>

      </div>
    </>
  );
}

export default App;
