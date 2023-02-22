# Groq Queries

##### Quick reference for some of the queries being used throughout the project.

## Static Queries

### index.tsx

```
*[ _type == "homepage" && _id == "f28ba9e5-2eae-4a9f-a10f-0799c003f0b7"][0]{
  title,
  description,
  'content': content[]-> {
    _type,
    heading,
    kicker,
    'imageUrl': mainImage.asset->url
  }
}
```

Currently this query is only grabbing homepage info from a specific homepage document. Selecting the first item from the array that is returned from this query and projecting a limited amount of properties. This can be expanded on as our pages grow.


