import { extendTheme } from '@chakra-ui/core';
import type { GlobalStyleProps, Styles } from '@chakra-ui/theme-tools';
import { mode } from '@chakra-ui/theme-tools';

// setup light/dark mode global defaults
const styles: Styles = {
  global: (props) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('white', 'gray.900')(props)
    }
  })
};

const components = {
  Link: {
    // setup light/dark mode component defaults
    baseStyle: (props: GlobalStyleProps) => ({
      color: mode('blue.400', 'blue.300')(props)
    })
  }
};

const theme = extendTheme({
  components,
  styles
});
