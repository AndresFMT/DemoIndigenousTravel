/** objects */
export {default as accessibleImage} from './objects/accessibleImage'

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


export const schemaDocuments = [ 
  author, 
  blockContent, 
  category, 
  post,
  operator,
  navItem,
  navItemGroup,
  siteSettings,
];

export const schemaPages = [
  ...schemaDocuments,
  ...pageDocuments,

];

export const schemaAdmin = [
  blockContent,
  navItem,
  navItemGroup,
  siteSettings,
];

export const schemaHomePage = [
  ...homepageDocuments,
];

export const schemaAbout = [

];


export const schemaTypesAdmin = [
  navItem,
  navItemGroup,
  siteSettings,
];


/** nextjs integration object*/
export const schemaTypes = [
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
