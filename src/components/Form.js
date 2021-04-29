import React from 'react'
import styled from 'styled-components'

const Input = ({ value, onChange, money }) => {
  return (
    <Container>
      <InputText
        type='text'
        value={
          money
            ? `$ ${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
            : `% ${value.toFixed(1)}`
        }
        onChange={(e) => onChange(e.target.value)}
      />
    </Container>
  )
}

export default Input

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 168px;
  margin-right: 20px;
`

export const InputText = styled.input`
  padding: 15px;
  margin-right: 1.5rem;
  margin-top: 3px;
  width: 168px;
  height: 56px;
  border: 1px solid #d7e0eb;
  border-radius: 4px;
  filter: var(--shadow);
  ::placeholder {
    opacity: 0.5;
  }
`
