export function setFalconModule(moduleName, data) {
  switch (moduleName) {
    case "Main": return (
      <Main
        // en
        // breadcrumbData={bcOruzhieIN("falcon")}
        title={data.title}
        text={data.text}
        buttonText={data.buttonText}
        videoLink={data.videoLink}
        videoButtonText={data.videoButtonText}
      />
    )
    case "Features": return (
      <Features
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
    case "Modifications": return (
      <Modifications
        title={data.title}
        sliderData={data.sliderData}
      />
    )
    case "Exploit": return (
      <Exploit
        title={data.title}
        text={data.text}
        cellOneText={data.cellOneText}
        cellTwoText={data.cellTwoText}
        cellThreeText={data.cellThreeText}
        cellFourText={data.cellFourText}
      />
    )
    case "Impulse": return (
      <Impulse
        title={data.title}
        text={data.text}
      />
    )
    case "Display": return (
      <Display
        title={data.title}
        columnTitle={data.columnTitle}
        textOne={data.textOne}
        textTwo={data.textTwo}
        textThree={data.textThree}
      />
    )
    case "TenInOne": return (
      <TenInOne
        title={data.title}
        text={data.text}
      />
    )
    case "Сamouflage": return (
      <Сamouflage
        title={data.title}
        text={data.text}
      />
    )
    case "SafetySensors": return (
      <SafetySensors
        title={data.title}
        titleOne={data.titleOne}
        textOne={data.textOne}
        titleTwo={data.titleTwo}
        textTwo={data.textTwo}
        titleThree={data.titleThree}
        textThree={data.textThree}
        titleFour={data.titleFour}
        textFour={data.textFour}
        sensorsTitle={data.sensorsTitle}
        sensorsText={data.sensorsText}
      />
    )
    case "RemotePowerOff": return (
      <RemotePowerOff
        title={data.title}
        text={data.text}
        image={data.image}
      />
    )
    case "ModsTable": return (
      <ModsTable
        title={data.title}
        tableHead={data.tableHead}
        tableBody={data.tableBody}
        tableAddon={data.tableAddon}
        buttonText={data.buttonText}
      />
    )
    case "SliderCards": return (
      <div
        className={style.toWatchSlider}
      >
        <Fade direction="up" triggerOnce>
          <h2 className={style.h2}>{data.title}</h2>
        </Fade>
        <SliderCards sliderData={data.data} />
      </div>
    )
  }
}