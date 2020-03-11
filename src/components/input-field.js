import React from "react"
import {css} from '@emotion/core'

const Field = ({type, placeholder, name, change, value}) => {
  return (
    <input type={type} name={name} onChange={change} value={value} className="w-75 px-3 mx-auto p-2" placeholder={placeholder} css={css`
      border: none;
      box-shadow: 0 .125rem .25rem rgba(0,0,0,.2);
      border-radius: 1.5rem;
    `
    }/>
  )
}

export default Field;