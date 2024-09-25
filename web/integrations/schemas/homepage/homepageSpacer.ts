import defineField from "sanity";
import defineType from 'sanity';

export default defineType({
  name: 'homepageSpacer',
  title: 'Homepage Spacer',
  type: 'document',
  fields: [
    defineField({
      name: 'spacing',
      title: 'Spacing',
      type: 'number',
    }),
  ],
});

