import defineField from 'sanity';
import defineType from 'sanity';

export default defineType({
    name: 'pdfSection',
    title: 'PDF Section',
    type: 'file',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
          }),
        defineField({
            name: 'subhead',
            title: 'Subhead',
            type: 'string',
        }),
        defineField({
          name: 'description',
          type: 'string',
          title: 'Description'
        }),
      ],
  
    preview: {
      select: {
        title: 'heading',
      },
      prepare(selection:any) {
        return {...selection }
      },
    },
  });