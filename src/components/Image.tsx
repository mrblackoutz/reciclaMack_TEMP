import { Box, SxProps } from '@mui/system';
import { ImgHTMLAttributes } from 'react';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  sx?: SxProps;
}

const Image = (props: ImageProps) => {
  const { sx, ...rest } = props;
  return <Box component="img" sx={sx} {...rest} />;
};

export default Image;
