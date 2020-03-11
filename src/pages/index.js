import React from 'react';
import Layout from '../components/layout'
import Field from "../components/input-field"
import { useFormik } from 'formik'
import { css } from '@emotion/core'

const Index = () => {
  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      password: ''
    },
    onSubmit: values => {
      fetch('/api/login',{
        method: 'POST',
        body: JSON.stringify(values)
      })
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
      .then(error => {
        console.error(error)
      })
    },
  });
  return (
    <Layout>
      <div className="d-flex justify-content-center position-relative" css={css`
        top: calc((100% - 306px) / 2)
      `}>
        <div className="mr-3 d-flex flex-column justify-content-center" css={css`
          flex-basis: 45%;
        `}>
          <h3>Discover movies and TV Shows</h3>
          <p css={css`
            text-align: justify;
          `}>Watch Netflix films & TV programmes online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.</p>
          <h2>Ready? Let's get you signed up</h2>
        </div>
        <div className="d-flex flex-column p-3" css={css`
            ${'' /* background-color: #b81d25; */}
            border-radius: 15px;
            flex-basis:40%;
            *+*{
              margin-top:1.5rem
            
        `
        }>
        <form onSubmit={formik.handleSubmit}>
          <Field type="text" placeholder="Full Name" name="fullname" change={formik.handleChange} value={formik.values.fullname}/>
          <Field type="email" placeholder="Email" name="email" change={formik.handleChange} value={formik.values.email}/>
          <Field type="password" placeholder="Password" name="password" change={formik.handleChange} value={formik.values.password}/>

          <button type="submit" className="py-2 w-50 mx-auto" css={css`
            background-color: #b81d25;
            box-shadow: 0 .125rem .25rem rgba(0,0,0,.15);
            border: none;
            color: #fff;
            border-radius:1.5rem;
            cursor: pointer;
          `}> 
            Start Neflixin'
          </button>
        </form>
        </div>
      </div>
    </Layout>
  )}

export default Index