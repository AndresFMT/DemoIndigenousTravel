/** objects */
import {default as accessibleImage} from './objects/accessibleImage'

/** documents */
import author from './author'
import blockContent from './blockContent'
import category from './category'
import post from './post'
import operator from './operator'
import navItem from './navItem'
import navItemGroup from './navItemGroup'
import siteSettings from './siteSettings'

/** homepage */
import {homepageDocuments} from './homepage'
import {pageDocuments} from './page'

/** nextjs integration object*/
export const schemaTypes = [
  accessibleImage,
  author,
  blockContent,
  category,
  post,
  operator,
  navItem,
  navItemGroup,
  siteSettings,
  ...pageDocuments,
  ...homepageDocuments,
];

