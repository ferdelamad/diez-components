import React from 'react'
import styled from 'styled-components'
import {
  style,
  width,
  flex,
  space,
  color,
  order,
  fontSize,
  justifySelf,
  alignContent,
  gridGap,
  gridColumn,
  gridRow,
  gridTemplateColumns,
  gridTemplateRows,
} from 'styled-system'

const customStyle = style => style({ prop: style, key: style })

const justifyItems = customStyle('justifyItems')

export const Box = styled.div`
  box-sizing: border-box;
  ${space}
  ${width}
  ${color}
  ${flex}
  ${order}
  ${fontSize}
  ${justifySelf}
`
Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...color.propTypes,
  ...flex.propTypes,
  ...order.propTypes,
  ...fontSize.propTypes,
  ...justifySelf.propTypes,
}

export const Flex = styled(Box)`
  display: flex;
  ${flexDirection}
  ${flexWrap}
  ${alignItems}
  ${alignContent}
  ${justifyContent}
  ${justifyItems}
`

Flex.propTypes = {
  ...flexDirection.propTypes,
  ...flexWrap.propTypes,
  ...alignItems.propTypes,
  ...alignContent.propTypes,
  ...justifyContent.propTypes
}

export const Grid = styled(Flex)`
  display: grid;
  ${gridGap}
  ${gridColumn}
  ${gridRow}
  ${gridTemplateColumns}
  ${gridTemplateRows}
`

Grid.propTypes = {
  ...gridGap.propTypes,
  ...gridColumn.propTypes,
  ...gridRow.propTypes,
  ...gridTemplateColumns.propTypes,
  ...gridTemplateRows.propTypes,
}
