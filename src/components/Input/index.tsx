import React, { InputHTMLAttributes, useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { InputContainer } from './styles'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, error, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <InputContainer>
      <input
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
        className={error ? 'has-error' : ''}
      />

      {error && <span className="error">{error}</span>}
    </InputContainer>
  )
}
export default Input
