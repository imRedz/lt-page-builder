import Main from "../../lt-lands-modules/Main/Main"
import Numbers from "../../lt-lands-modules/Main/Numbers"
import Equipment from "../../lt-lands-modules/Main/Equipment"
import Video from "../../lt-lands-modules/Main/Video"
import WhyUs from "../../lt-lands-modules/Main/WhyUs"
import Developments from "../../lt-lands-modules/Main/Developments"
import Support from "../../lt-lands-modules/Main/Support"

export function setMainModule(moduleName, data) {
  switch (moduleName) {
    case "Main": return (
      <Main
        title={data.title}
        text={data.text}
        en
        logo={data.logo}
        buttonText={data.buttonText}
        image={data.image}
        image_objectPosition={data.image_objectPosition}
        image_responsive={data.image_responsive}
        image_responsive_objectPosition={data.image_responsive_objectPosition}
        image_responsive_objectFit={data.image_responsive_objectFit}
        theme={data.theme}
      // eventButtonText="Extravaganza exhibition"
      // eventButtonLink="/extravaganza-2022?utm_source=site&utm_medium=main&utm_campaign=iviting_extravaganza&utm_content=button&utm_term=button"
      />
    )
    case "Numbers": return (
      <Numbers
        title={data.title}
        firstCellNumber={data.firstCellNumber}
        firstCellText={data.firstCellText}
        secondCellNumber={data.secondCellNumber}
        secondCellText={data.secondCellText}
        thirdCellNumber={data.thirdCellNumber}
        thirdCellText={data.thirdCellText}
        fourthCellNumber={data.fourthCellNumber}
        fourthCellNumber2={data.fourthCellNumber2}
        fourthCellText={data.fourthCellText}
      />
    )
    case "Equipment": return (
      <Equipment
        en
        title={data.title}
        firstCellTitle={data.firstCellTitle}
        firstCellText={data.firstCellText}
        secondCellTitle={data.secondCellTitle}
        secondCellText={data.secondCellText}
        thirdCellTitle={data.thirdCellTitle}
        thirdCellText={data.thirdCellText}
        formTitle={data.formTitle}
        formText={data.formText}
        buttonText={data.buttonText}
      />
    )
    case "Video": return (
      <Video
        title={data.title}
        videoLink={data.videoLink}
      />
    )
    case "WhyUs": return (
      <WhyUs
        title={data.title}
        firstCellTitle={data.firstCellTitle}
        firstCellText={data.firstCellText}
        secondCellTitle={data.secondCellTitle}
        secondCellText={data.secondCellText}
        thirdCellTitle={data.thirdCellTitle}
        thirdCellText={data.thirdCellText}
        sliderData={data.sliderData}
      />
    )
    case "Developments": return (
      <Developments
        title={data.title}
        sliderData={data.sliderData}
        buttonText={data.buttonText}
      />
    )
    case "Support": return (
      <Support
        title={data.title}
        firstCardTitle={data.firstCardTitle}
        firstCardText={data.firstCardText}
        secondCardTitle={data.secondCardTitle}
        secondCardText={data.secondCardText}
        thirdCardTitle={data.thirdCardTitle}
        thirdCardText={data.thirdCardText}
        en
      />
    )
    // case "Inputs": return (
    //   <div className={style.white}>
    //     <Inputs
    //       image={data.image}
    //       objectFit={data.objectFit}
    //       title={data.title}
    //       text={data.text}
    //       buttonText={data.buttonText}
    //       en
    //     />
    //   </div>
    // )
    // case "NewsBlock": return (
    //   <div className="margins20">
    //     <NewsBlock
    //       en
    //       title={data.title}
    //       readMoreButtonText={data.readMoreButtonText}
    //       data={data.data}
    //     />
    //   </div>
    // )
  }
}