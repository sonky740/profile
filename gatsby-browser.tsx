import type { GatsbyBrowser } from 'gatsby';

export const onRouteUpdate: GatsbyBrowser['onRouteUpdate'] = ({
  location,
  prevLocation,
}) => {
  location.previousPath = prevLocation;
};
