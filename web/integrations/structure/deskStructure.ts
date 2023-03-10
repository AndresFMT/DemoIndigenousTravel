import { StructureBuilder } from 'sanity/desk';
import { JsonPreview } from '../components/jsonView'

export const myStructure = (S: StructureBuilder) => {
  return S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.document()
            .title('Site Settings')
            .schemaType('siteSettings')
            .documentId('siteSettings')),
      S.divider(),
      ...S.documentTypeListItems().filter((item: any) => ['homepage', 'page'].includes(item.getId())),
    ]);
};

export const defaultDocumentNodeResolver = (S: StructureBuilder) =>
  S.document().views([
    S.view.form(),
    S.view.component(JsonPreview).title('JSON'),
  ])

