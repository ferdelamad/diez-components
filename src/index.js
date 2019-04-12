import React from 'react'
import styled from 'styled-components'
import {
  alignItems,
  alignContent,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
  color,
  flex,
  flexDirection,
  flexWrap,
  fontSize,
  fontWeight,
  gridGap,
  gridColumn,
  gridRow,
  gridTemplateColumns,
  gridTemplateRows,
  justifySelf,
  justifyContent,
  order,
  space,
  style,
  width,
} from 'styled-system'


//const customStyle = style => style({ prop: style, key: style })

//const justifyItems = customStyle('justifyItems')

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

export const Button = styled(Box)`
  display: inline-block;
  border: 0;
  color: #ffffff;
  font-family: inherit;
  font-weight: bold;
  transition: all .2s ease-in-out;
  text-align: center;
  text-decoration: none;
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${fontWeight}

  :hover { transform: scale(1.05); }
`

//button style pending
Button.propTypes = {
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...borderRadius.propTypes,
  ...fontWeight.propTypes,
}

Button.defaultProps = {
  as: 'button',
  bg: 'coral',
  borderRadius: 4,
  m: 0,
  px: 3,
  py: 2,
}


