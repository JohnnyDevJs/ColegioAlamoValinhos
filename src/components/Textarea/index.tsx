import React, { TextareaHTMLAttributes, useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { TextareaContainer } from './styles'
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
}

const Textarea: React.FC<TextareaProps> = ({ name, ...rest }) => {
  const textareaRef = useRef(null)
  const { fieldName, defaultValue, error, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])
  return (
    <TextareaContainer>
      <textarea
        defaultValue={defaultValue}
        ref={textareaRef}
        {...rest}
        className={error ? 'has-error' : ''}
      ></textarea>
      {error && <span className="error">{error}</span>}
    </TextareaContainer>
  )
}

export default Textarea
