/** objects */
import {default as accessibleImage} from './objects/accessibleImage'
import cta from './objects/cta'
import blockContent from './objects/blockContent'
import titleBody from './objects/titleBody'


/** documents */
import author from './author'
import category from './category'
import post from './post'
import operator from './operator'
import navItem from './navItem'
import navItemGroup from './navItemGroup'
import siteSettings from './siteSettings'


/** homepage */
import {homepageDocuments} from './homepage'
import {pageDocuments} from './page'

/** sections */
import {sections} from './sections'

/** nextjs integration object*/
export const schemaTypes = [
  cta,
  accessibleImage,
  author,
  blockContent,
  category,
  post,
  operator,
  navItem,
  navItemGroup,
  siteSettings,
  titleBody,
  ...sections,
  ...pageDocuments,
  ...homepageDocuments,
];

