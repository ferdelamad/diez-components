import React from 'react'
import styled from 'styled-components'
import {
  width,
  flex,
  space,
  color,
  order,
  justifySelf,
  alignContent,
} from 'styled-system'

export const Box = styled.div`
  box-sizing: border-box;
  ${space}
  ${width}
  ${color}
  ${flex}
  ${order}
  ${justifySelf}
`
Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...color.propTypes,
  ...flex.propTypes,
  ...order.propTypes,
  ...justifySelf.propTypes,
}

export const Flex = styled(Box)`
  display: flex;
  ${flexDirection}
  ${flexWrap}
  ${alignItems}
  ${alignContent}
  ${justifyContent}
`

Flex.propTypes = {
  ...flexDirection.propTypes,
  ...flexWrap.propTypes,
  ...alignItems.propTypes,
  ...alignContent.propTypes,
  ...justifyContent.propTypes
}
