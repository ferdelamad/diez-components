import React from 'react'
import styled from 'styled-components'
import {
  width,
  flex,
  space,
  color,
  order,
} from 'styled-system'

export const Box = styled.div`
  box-sizing: border-box;
  ${space}
  ${width}
  ${color}
  ${flex}
  ${order}
`
Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...color.propTypes,
  ...flex.propTypes,
  ...order.propTypes,
}
