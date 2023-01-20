/** objects */
import accessibleImage from './objects/accessibleImage'

/** documents */
import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import operator from './operator'
import navItem from './navItem'
import navItemGroup from './navItemGroup'
import siteSettings from './siteSettings'

export const schemaTypes = [ 
  accessibleImage,
  post,
  operator,
  blockContent, 
  author, 
  category, 
];

export const schemaTypesAdmin = [
  ...schemaTypes,
  navItem,
  navItemGroup,
  siteSettings,
];

