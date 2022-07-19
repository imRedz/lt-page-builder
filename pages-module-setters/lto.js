import FirstCards from "../../lt-lands-modules/LTO/FirstCards"
import Images from "../../lt-lands-modules/LTO/Images"
import LongSlider from "../../lt-lands-modules/LTO/LongSlider"
import Main from "../../lt-lands-modules/LTO/Main"
import SecondCards from "../../lt-lands-modules/LTO/SecondCards"
import Statistics from "../../lt-lands-modules/LTO/Statistics"
import ThirdCards from "../../lt-lands-modules/LTO/ThirdCards"

export function setLTOModule(moduleName, data) {
  switch (moduleName) {
    case "Main": return (
      <Main
        breadcrumbData={data.breadcrumbData}
        title={data.title}
        text={data.text}
        phoneImage={data.phoneImage}
      />
    )
    case "FirstCards": return (
      <FirstCards
        title={data.title}
        firstImage={data.firstImage}
        secondImage={data.secondImage}
        thirdImage={data.thirdImage}
        fourthImage={data.fourthImage}
        cellText={data.cellText}
        cellTwoText={data.cellTwoText}
        cellThreeText={data.cellThreeText}
        cellFourText={data.cellFourText}
        cardFirstTitle={data.cardFirstTitle}
        cardFirstText={data.cardFirstText}
        cardTwoTitle={data.cardTwoTitle}
        cardTwoText={data.cardTwoText}
        cardThreeTitle={data.cardThreeTitle}
        cardThreeText={data.cardThreeText}
      />
    )
    case "SecondCards": return (
      <SecondCards
        title={data.title}
        firstImage={data.firstImage}
        secondImage={data.secondImage}
        thirdImage={data.thirdImage}
        cardTitle={data.cardTitle}
        cardText={data.cardText}
        cardTwoText={data.cardTwoText}
      />
    )
    case "LongSlider": return (
      <LongSlider
        title={data.title}
        text={data.text}
        indoorText={data.indoorText}
        outdoorText={data.outdoorText}
        dataIndoor={data.dataIndoor}
        dataOutdoor={data.dataOutdoor}
      />
    )
    case "ThirdCards": return (
      <ThirdCards
        title={data.title}
        cardTitle={data.cardTitle}
        cardText={data.cardText}
        firstImage={data.firstImage}
        characterName={data.characterName}
        characterTwoName={data.characterTwoName}
        characterThreeName={data.characterThreeName}
        characterFourName={data.characterFourName}
        characterFiveName={data.characterFiveName}
        characterSixName={data.characterSixName}
        cardTwoTitle={data.cardTwoTitle}
        cardTwoText={data.cardTwoText}
        cellTitle={data.cellTitle}
        cellText={data.cellText}
        cellTwoTitle={data.cellTwoTitle}
        cellTwoText={data.cellTwoText}
        cellThreeTitle={data.cellThreeTitle}
        cellThreeText={data.cellThreeText}
        cellFourTitle={data.cellFourTitle}
        cellFourText={data.cellFourText}
        cellFiveTitle={data.cellFiveTitle}
        cellFiveText={data.cellFiveText}
        cellSixTitle={data.cellSixTitle}
        cellSixText={data.cellSixText}
        cardThreeTitle={data.cardThreeTitle}
        cardThreeText={data.cardThreeText}
      />
    )
    case "Images": return (
      <Images
        firstImage={data.firstImage}
        secondImage={data.secondImage}
        thirdImage={data.thirdImage}
        fourthImage={data.fourthImage}
        fivthImage={data.fivthImage}
      />
    )
    case "Statistics": return (
      <Statistics
        title={data.title}
        text={data.text}
        sliderData={data.sliderData}
        listofTitles={data.listofTitles}
        footer_buttons_textTop={data.footer_buttons_textTop}
        footer_buttons_textBottom={data.footer_buttons_textBottom}
        footer_buttons_buttonText={data.footer_buttons_buttonText}
      />
    )

  }
}