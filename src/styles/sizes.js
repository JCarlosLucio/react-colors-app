// Sizes taken from https://getbootstrap.com/docs/4.5/layout/overview/

const sizes = {
  // usually used when mobile first
  up(size) {
    const sizes = {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    };
    return `@media (min-width: ${sizes[size]})`;
  },
  // usually used when NOT mobile first
  down(size) {
    const sizes = {
      xs: '575.98px',
      sm: '767.98px',
      md: '991.98px',
      lg: '1199.98px',
      xl: '1599.98px',
    };
    return `@media (max-width: ${sizes[size]})`;
  },
};

export default sizes;
