import {defineType} from 'sanity'

export default defineType({
  name: 'section',
  title: 'Section',
  type: 'reference',
  to: [
    {type: 'homepageHoopImage'},
    {type: 'videoHero'},
    {type: 'textSection'},
    {type: 'imageHero'},
    {type: 'videoSection'},
    {type: 'flexSection'},
    {type: 'sectionCards'},
    {type: 'featuredOperators'},
    {type: 'regionalImageSection'},
    {type: 'missionSection'},
    {type: 'pdfSection'},
  ],
})

