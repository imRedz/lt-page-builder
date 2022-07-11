import { SeoCTA, SeoTitleText } from "../../lt-modules/SeoModules";

export function setSeoModule(moduleName, data) {
  switch (moduleName) {
    case "SeoTitleText": return (
      <SeoTitleText
        title={data.title}
        text={data.text}
      />
    )
    case "SeoImg": return (
      <SeoImg
        image={data.image}
      />
    )
    case "SeoTitleTable": return (
      <SeoTitleTable
        title={data.title}
        table={data.table}
      />
    )
    case "SeoCTA": return (
      <SeoCTA
        theme={data.theme}
        logoName={data.logoName}
        textTop={data.textTop}
        textBottom={data.textBottom}
        buttonText={data.buttonText}
      />
    )
  }
}