// CustomTypography.js
import React from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const getFontSize = (size: string | number | undefined) => {
  if (typeof size === 'number') {
    return `${size}px`;
  }
  if (typeof size === 'string') {
    return size;
  }
  return '16px'; // Tamanho de fonte padrão caso seja undefined
};

const CustomTypography = ({ variant, children, ...props }: TypographyProps) => {
  const theme = useTheme();
  const defaultFontSize = '16px';
  const fontSizeDifference = `calc(${getFontSize(theme.typography.fontSize)} - ${defaultFontSize})`;

  let variantFontSize: string | undefined;
  switch (variant) {
    case 'h1':
      variantFontSize = getFontSize(theme.typography.h1?.fontSize);
      break;
    case 'h2':
      variantFontSize = getFontSize(theme.typography.h2?.fontSize);
      break;
    case 'h3':
      variantFontSize = getFontSize(theme.typography.h3?.fontSize);
      break;
    case 'h4':
      variantFontSize = getFontSize(theme.typography.h4?.fontSize);
      break;
    case 'h5':
      variantFontSize = getFontSize(theme.typography.h5?.fontSize);
      break;
    case 'h6':
      variantFontSize = getFontSize(theme.typography.h6?.fontSize);
      break;
    case 'subtitle1':
      variantFontSize = getFontSize(theme.typography.subtitle1?.fontSize);
      break;
    case 'subtitle2':
      variantFontSize = getFontSize(theme.typography.subtitle2?.fontSize);
      break;
    case 'body1':
      variantFontSize = getFontSize(theme.typography.body1?.fontSize);
      break;
    case 'body2':
      variantFontSize = getFontSize(theme.typography.body2?.fontSize);
      break;
    case 'button':
      variantFontSize = getFontSize(theme.typography.button?.fontSize);
      break;
    case 'caption':
      variantFontSize = getFontSize(theme.typography.caption?.fontSize);
      break;
    case 'overline':
      variantFontSize = getFontSize(theme.typography.overline?.fontSize);
      break;
    default:
      variantFontSize = getFontSize(theme.typography.fontSize);
  }

  const adjustedFontSize = variantFontSize
    ? `calc(${variantFontSize} + ${fontSizeDifference})`
    : undefined;

  return (
    <Typography variant={variant} fontSize={adjustedFontSize} {...props}>
      {children}
    </Typography>
  );
};

export default CustomTypography;
