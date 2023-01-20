import { JsonPreview } from '../components/jsonView'
import { UserInfo } from '../components/userInfo'
// export const structure = (S) => S.document()
//   .schemaType('config')
//   .documentId('globalConfig')
//   .views([
//     S.view.form(),
//     S.view.component(ConfigPreview)
//   ])

export const myStructure = (S) => 
  S.list()
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
      ...S.documentTypeListItems().filter(item => !['siteSettings'].includes(item.getId())),
    ]);


export const defaultDocumentNodeResolver = (S) =>
  S.document().views([
    S.view.form(),
    S.view.component(JsonPreview).title('JSON'),
  ])
