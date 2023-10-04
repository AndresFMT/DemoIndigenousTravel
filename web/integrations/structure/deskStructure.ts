import { SanityDocument } from '@sanity/client';

import { StructureBuilder } from 'sanity/desk';
import { JsonPreview, getPreviewUrl } from '../components'
import { Iframe } from 'sanity-plugin-iframe-pane';

export const myStructure = (S: StructureBuilder) => {
  return S.list()
    .title('Basic Content')
    .items([
      S.listItem()
        .title('Homepage')
        .child(
          S.document()
            .title('Homepage')
            .schemaType('homepage')
            .documentId('homepage')),
      S.listItem()
        .title('Pages')
        .schemaType('page')
        .child(S.documentTypeList('page').title('Pages')),
      S.listItem()
        .title('Operators')
        .schemaType('operator')
        .child(S.documentTypeList('operator').title('Operators')),

      S.divider(),

      S.listItem()
        .title('Posts')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Posts')),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      S.listItem()
        .title('Authors')
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),

      S.divider(),

      S.listItem()
        .title('Site Settings')
        .child(
          S.document()
            .title('Site Settings')
            .schemaType('siteSettings')
            .documentId('siteSettings')),

      S.divider(),

      ...S.documentTypeListItems().filter((item: any) => ![
        'homepage',
        'page',
        'siteSettings',
        'operator',
        'post',
        'category',
        'author',
        'section',
        'homepageHero',
        'homepageSpacer',
        'homepageHoopImage',
        'navItem',
        'navItemGroup',
        'imageBreak',
        'sectionHeading',
        'sectionImage',
        'sectionText',
        'sectionCard',
        'sectionCards',
        'sectionVideo',
        'hoopImage',].includes(item.getId())),
    ]);
};


export const defaultDocumentNodeResolver = (S: StructureBuilder, {schemaType }: {schemaType: string}) => {
  switch (schemaType) {
    case 'homepage':
    case 'page':

      return (
        S.document().views([
          S.view.form(),
          S.view
          .component(Iframe)
          .options({
            url: (doc: SanityDocument) => getPreviewUrl(doc),
          })
          .title('Preview'),
          S.view.component(JsonPreview).title('JSON'),
        ])
      )
    default:
      return (
        S.document().views([
          S.view.form(),
          S.view.component(JsonPreview).title('JSON'),
        ])
      )
  }
}

