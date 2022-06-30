import { useBlogData } from "../context/BlogDataProvider"
import { NewsBlock } from "../modules/News/News"

export function setNewsModule(moduleName, data) {

  const blogData = useBlogData()

  switch (moduleName) {
    case "NewsBlock":
      return (
        <NewsBlock
          theme={data.theme}
          title={data.title}
          readMoreButtonText={data.ButtonText}
          data={blogData.previewsData}
        />
      )
      break
  }
}