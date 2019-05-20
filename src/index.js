import React from 'react';
import styled from 'styled-components';
import {
  alignItems,
  alignContent,
  borders,
  borderColor,
  boxShadow,
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
  height,
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
  ${boxShadow}
  ${space}
  ${width}
  ${color}
  ${flex}
  ${order}
  ${fontSize}
  ${justifySelf}
`;

Card.propTypes = {
  ...borders.propTypes,
  ...boxShadow.propTypes,
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
  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }
`;

// button style pending && propTypes
Button.propTypes = {
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...fontWeight.propTypes,
};

Button.defaultProps = {
  as: 'button',
  bg: 'coral',
  border: 0,
  borderRadius: 4,
  color: '#fff',
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

// --- experimental component
const Arrow = styled.span`
  &::after {
    position: absolute;
    content: "";
    top: 13px;
    right: 13px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: ${({ color }) => color || 'coral'} transparent transparent transparent;
  }
`
const Select = styled(Text)`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &, option {
    user-select: none;
    cursor: pointer;
  }
`;

Select.defaultProps = {
  as: 'select',
  fontSize: '1rem',
  fontFamily: 'inherit',
  width: '100%',
  paddingLeft: '8px',
  paddingRight: '36px',
  py: '4px',
  border: '1px solid transparent',
  borderColor: 'transparent transparent rgba(0, 0, 0, 0.1) transparent',
};

export const Dropdown = ({ children, color, ...props }) => (
  <div style={{ position: 'relative', display: 'inline-block'}}>
    <Select {...props}>
      { children }
    </Select>
    <Arrow color={color} />
  </div>
)
// --- end of experimental component

// 8 Icon
const iconsMap = new Map([
  ['arrowUp', '↑'],
  ['arrowDown', '↓'],
  ['arrowLeft', '←'],
  ['arrowRight', '→'],
])

export const Icon = ({ icon }) => (
  <Text style={{ display: 'inline-block'}}>{iconsMap.get(icon)}</Text>
)

// 9
export const Image = styled(Card)`
  max-width: 100%;
  ${height}
`

Image.propTypes = {
  ...height.propTypes,
}

Image.defaultProps = {
  as: 'img',
  height: 'auto',
  m: 0,
}

// 10
