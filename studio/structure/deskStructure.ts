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
            .schemaType('siteSettings')
            .documentId('siteSettings')),
      S.line(),
      ...S.documentTypeListItems().filter(item => !['siteSettings'].includes(item.getId())),
    ]);
