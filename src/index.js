import React from 'react';
import styled from 'styled-components';
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
  fontFamily,
  fontSize,
  fontWeight,
  gridGap,
  gridColumn,
  gridRow,
  gridTemplateColumns,
  gridTemplateRows,
  justifySelf,
  justifyContent,
  letterSpacing,
  lineHeight,
  order,
  space,
  style,
  textAlign,
  width,
} from 'styled-system';

// const customStyle = style => style({ prop: style, key: style })

// const justifyItems = customStyle('justifyItems')

export const Card = styled.div`
  box-sizing: border-box;
  ${borders}
  ${space}
  ${width}
  ${color}
  ${flex}
  ${order}
  ${fontSize}
  ${justifySelf}
`;

Card.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...color.propTypes,
  ...flex.propTypes,
  ...order.propTypes,
  ...fontSize.propTypes,
  ...justifySelf.propTypes,
};

export const Flex = styled(Card)`
  display: flex;
  ${flexDirection}
  ${flexWrap}
  ${alignItems}
  ${alignContent}
  ${justifyContent}
`;

Flex.propTypes = {
  ...flexDirection.propTypes,
  ...flexWrap.propTypes,
  ...alignItems.propTypes,
  ...alignContent.propTypes,
  ...justifyContent.propTypes,
};

export const Grid = styled(Flex)`
  display: grid;
  ${gridGap}
  ${gridColumn}
  ${gridRow}
  ${gridTemplateColumns}
  ${gridTemplateRows}
`;

Grid.propTypes = {
  ...gridGap.propTypes,
  ...gridColumn.propTypes,
  ...gridRow.propTypes,
  ...gridTemplateColumns.propTypes,
  ...gridTemplateRows.propTypes,
};

export const Text = styled(Card)`
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${letterSpacing}
  ${lineHeight}
  ${textAlign}
`;

Text.propTypes = {
  ...fontFamily.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.prototypes,
  ...letterSpacing.propTypes,
  ...lineHeight.propTypes,
  ...textAlign.propTypes,
};

// removed bg radius and bg color
export const Button = styled(Text)`
  display: inline-block;
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.05);
  }
`;

// button style pending
Button.propTypes = {
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...borderRadius.propTypes,
  ...fontWeight.propTypes,
};

Button.defaultProps = {
  as: 'button',
  bg: 'coral',
  border: 0,
  borderRadius: 4,
  color: '#fff',
  cursor: 'pointer',
  fontSize: 'inherit',
  m: 0,
  px: 3,
  py: 2,
  textAlign: 'center',
  textDecoration: 'none',
};

export const Input = styled(Text)`
  display: block;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    border-color: coral;
    outline: 0;
    box-shadow: 0 0 0 0.1rem rgba(0, 123, 255, 0.25);
  }
`;

Input.defaultProps = {
  as: 'input',
  bg: 'coral',
  backgroundColor: '#fff',
  border: '1px solid #ced4da',
  borderRadius: '.25rem',
  fontSize: '1rem',
  m: 0,
  px: 1,
  py: 2,
};

// 7

// 8

// 9

// 10
