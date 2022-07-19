import ActiveExploit from "../../lt-lands-modules/HeadBand/ActiveExploit"
import BlastWave from "../../lt-lands-modules/HeadBand/BlastWave"
import Collaps from "../../lt-lands-modules/HeadBand/Collaps"
import Columns from "../../lt-lands-modules/HeadBand/Columns"
import Control from "../../lt-lands-modules/HeadBand/Control"
import Image from "../../lt-lands-modules/HeadBand/Image"
import Indication from "../../lt-lands-modules/HeadBand/Indication"
import Main from "../../lt-lands-modules/HeadBand/Main"
import Modes from "../../lt-lands-modules/HeadBand/Modes"
import TimeOfDay from "../../lt-lands-modules/HeadBand/TimeOfDay"
import Video from "../../lt-lands-modules/HeadBand/Video"
import Gallery from "../../lt-lands-modules/Gallery"

export function setHeadBandModule(moduleName, data) {
  switch (moduleName) {
    case "Main": return (
      <Main
        // en
        title={data.title}
        buttonText={data.buttonText}
        text={data.text}
      // breadcrumbData={data.breadcrumbData}
      />
    )
    case "Columns": return (
      <Columns
        titleOne={data.titleOne}
        textOne={data.textOne}
        titleTwo={data.titleTwo}
        textTwo={data.textTwo}
        titleThree={data.titleThree}
        textThree={data.textThree}
        titleFour={data.titleFour}
        textFour={data.textFour}
      />
    )
    case "Video": return (
      <Video
        videoLink={data.videoLink}
      />
    )
    case "Modes": return (
      <Modes
        title={data.title}
        text={data.text}
        bitTitle1={data.bitTitle1}
        bitText1={data.bitText1}
        bitTitle2={data.bitTitle2}
        bitText2={data.bitText2}
        bitTitle3={data.bitTitle3}
        bitText3={data.bitText3}
        bitTitle4={data.bitTitle4}
        bitText4={data.bitText4}
        bitTitle5={data.bitTitle5}
        bitText5={data.bitText5}
      />
    )
    case "Image": return (
      <Image />
    )
    case "ActiveExploit": return (
      <ActiveExploit
        title={data.title}
        bit1Title={data.bit1Title}
        bit1Text={data.bit1Text}
        bit2Title={data.bit2Title}
        bit2Text={data.bit2Text}
        bit3Title={data.bit3Title}
        bit3Text={data.bit3Text}
        bit4Title={data.bit4Title}
        bit4Text={data.bit4Text}
      />
    )
    case "Collaps": return (
      <Collaps
        title={data.title}
        text={data.text}
      />
    )
    case "Indication": return (
      <Indication
        title={data.title}
        text={data.text}
      />
    )
    case "BlastWave": return (
      <BlastWave
        title={data.title}
        text={data.text}
        titleTwo={data.titleTwo}
        textTwo={data.textTwo}
      />
    )
    case "TimeOfDay": return (
      <TimeOfDay
        title={data.title}
        text={data.text}
        defaultModeName={data.defaultModeName}
        inversionName={data.inversionName}
      />
    )
    case "Control": return (
      <Control
        title={data.title}
        text={data.text}
        titleOne={data.titleOne}
        textOne={data.textOne}
        titleTwo={data.titleTwo}
        textTwo={data.textTwo}
        titleThree={data.titleThree}
        textThree={data.textThree}
        titleFour={data.titleFour}
        textFour={data.textFour}
      />
    )
    case "Gallery": return (
      <Gallery
        en
        catalog
        title={data.title}
        theme={data.theme}
        logoName={data.logoName}
        textTop={data.textTop}
        textBottom={data.textBottom}
        buttonText={data.buttonText}
        sliderData={data.sliderData}
      />
    )
  }
}