import Features from "../../lt-lands-modules/Lux/Features"
import FeaturesSlider from "../../lt-lands-modules/Lux/FeaturesSlider"
import Form from "../../lt-lands-modules/Lux/Form"
import Main from "../../lt-lands-modules/Lux/Main"
import NetronicFeatures from "../../lt-lands-modules/Lux/NetronicFeatures"
import Set from "../../lt-lands-modules/Lux/Set"
import Shockproof from "../../lt-lands-modules/Lux/Shockproof"
import Tagers from "../../lt-lands-modules/Lux/Tagers"

export function setLuxModule(moduleName, data) {
  switch (moduleName) {
    case "Main": return (
      <Main
        text={data.text}
        buttonText={data.buttonText}
        breadcrumbData={data.breadcrumbData}
        en
      />
    )
    case "Tagers": return (
      <Tagers
        title={data.title}
        text={data.text}
      />
    )
    case "Features": return (
      <Features
        title={data.title}
        text={data.text}
        recoilTitle={data.recoilTitle}
        recoilText={data.recoilText}
      />
    )
    case "FeaturesSlider": return (
      <FeaturesSlider
        title={data.title}
        data={data.sliderData}
      />
    )
    case "InputsWName": return (
      <Form
        image={data.image}
        objectFit={data.objectFit}
        title={data.title}
        text={data.text}
        buttonText={data.buttonText}
      />
    )
    case "Shockproof": return (
      <Shockproof
        title={data.title}
        text={data.text}
      />
    )
    case "NetronicFeatures": return (
      <NetronicFeatures en />
    )
    case "Set": return (
      <Set
        data={data.sliderData}
        tabTitleOne={data.tabTitleOne}
        tabTitleTwo={data.tabTitleTwo}
        tabTitleThree={data.tabTitleThree}
        tabTitleFive={data.tabTitleFive}
        tabTitleSix={data.tabTitleSix}
        tabTitleFour={data.tabTitleFour}
        title={data.title}
        buttonText={data.buttonText}
        en
      />
    )
  }
}