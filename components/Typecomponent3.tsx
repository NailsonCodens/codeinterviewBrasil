import React, { FC } from 'react'
interface Propspass {
  firstName: string
  lastName: string
}

const Typecomponent3: React.FC<Propspass> = ({
  firstName,
  lastName = 'TESTE'
}) => {
  return <>{lastName}</>
}

export default Typecomponent3
