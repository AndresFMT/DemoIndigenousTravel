import defineField from 'sanity';
import defineType from 'sanity';

export default defineType({
    name: 'sectionPdf',
    title: 'Pdf Resources',
    type: 'file',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
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
        title: 'title',
        subtitle: 'description',
      },
      prepare(selection:any) {
        return {...selection }
      },
    },
  });