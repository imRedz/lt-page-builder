import { dataBuilder } from "./funtions/dataBuilder"
import { setAboutCompanyModule } from "./pages-module-setters/about"
import { setBlogModule } from "./pages-module-setters/blog"
import { setCardsModule } from "./pages-module-setters/cards"
import { setFalconModule } from "./pages-module-setters/falcon"
import { setHeadBandModule } from "./pages-module-setters/headband"
import { setKeyAdvantagesModule } from "./pages-module-setters/keyAdvantages"
import { setLTOModule } from "./pages-module-setters/lto"
import { setLuxModule } from "./pages-module-setters/lux"
import { setMainModule } from "./pages-module-setters/main"
import { setMobileClubModule } from "./pages-module-setters/mobileClub"
import { setScorpionModule } from "./pages-module-setters/scorpion"
import { setSeoModule } from "./pages-module-setters/seo"
import { setStandartModule } from "./pages-module-setters/standard"

export function setModule(pageName, moduleName, data) {

  switch (pageName) {
    case "main": return (
      setMainModule(moduleName, dataBuilder(data))
    )
    case "about": return (
      setAboutCompanyModule(moduleName, dataBuilder(data))
    )
    case "blog": return (
      setBlogModule(moduleName, dataBuilder(data))
    )
    case "cards": return (
      setCardsModule(moduleName, dataBuilder(data))
    )
    case "falcon": return (
      setFalconModule(moduleName, dataBuilder(data))
    )
    case "headband": return (
      setHeadBandModule(moduleName, dataBuilder(data))
    )
    case "keyAdvantages": return (
      setKeyAdvantagesModule(moduleName, dataBuilder(data))
    )
    case "lto": return (
      setLTOModule(moduleName, dataBuilder(data))
    )
    case "lux": return (
      setLuxModule(moduleName, dataBuilder(data))
    )
    case "mobile-business": return (
      setMobileClubModule(moduleName, dataBuilder(data))
    )
    case "scorpion": return (
      setScorpionModule(moduleName, dataBuilder(data))
    )
    case "seo": return (
      setSeoModule(moduleName, dataBuilder(data))
    )
    case "standard": return (
      setStandartModule(moduleName, dataBuilder(data))
    )
  }
}

