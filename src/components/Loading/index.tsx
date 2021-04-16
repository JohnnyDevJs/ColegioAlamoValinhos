import React from 'react'
import ReactLoading from 'react-loading'

import { LoadingContainer } from './styles'

const Loading: React.FC = () => (
  <LoadingContainer>
    <ReactLoading type={'spinningBubbles'} color="#BAC529" />
  </LoadingContainer>
)

export default Loading
