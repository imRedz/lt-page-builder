import BlogHeader from "../../blogModules/BlogHeader"
import BlogParagraph from "../../blogModules/BlogParagraph"
import BlogTitle from "../../blogModules/BlogTitle"

export function setBlogModule(moduleName, data) {
  switch (moduleName) {
    case "BlogHeader": return (
      <BlogHeader
        noneBreadCrumb
        notArticle
        url={data.url}
        title={data.title}
        titleSeo={data.titleSeo}
        descriptionSeo={data.descriptionSeo}
      />
    )
    case "BlogTitle": return (
      <BlogTitle text={data.text} />
    )
    case "BlogParagraph": return (
      <BlogParagraph text={data.text}
      />
    )
  }
}