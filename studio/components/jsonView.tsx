type Props = {
  document: {
    displayed: {
      title: string
    }
  }
}

export const JsonPreview = ({document}: Props) => (
  <>
    <h1>JSON Data for &quot;{document.displayed.title}&quot;</h1>
    <pre>{JSON.stringify(document.displayed, null, 2)}</pre>
  </>
)

