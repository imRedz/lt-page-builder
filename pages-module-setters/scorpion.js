export function setMainModule(moduleName, data) {
  switch (moduleName) {
    case "Main": return (
      <Main
        title={data.title}
        text={data.text}
        buttonText={data.buttonText}
      />
    )
    case "Video": return (
      <Video
        videoLink={data.videoLink}
      />
    )
    case "HowItWorks": return (
      <HowItWorks
        title={data.title}
        titleOne={data.titleOne}
        textOne={data.textOne}
        titleTwo={data.titleTwo}
        textTwo={data.textTwo}
      />
    )
    case "FiveModes": return (
      <FiveModes
        title={data.title}
        text={data.text}
        blockTitle={data.blockTitle}
        blockText={data.blockText}
        blockTitleTwo={data.blockTitleTwo}
        blockTextTwo={data.blockTextTwo}
      />
    )
    case "Safety": return (
      <Safety
        title={data.title}
        columnTitle={data.columnTitle}
        columnText={data.columnText}
        columnTitleTwo={data.columnTitleTwo}
        columnTextTwo={data.columnTextTwo}
        gridTitle={data.gridTitle}
        gridText={data.gridText}
        gridTitleTwo={data.gridTitleTwo}
        gridTextTwo={data.gridTextTwo}
        gridTitleThree={data.gridTitleThree}
        gridTextThree={data.gridTextThree}
      />
    )
    case "Shockfight": return (
      <Shockfight
        title={data.title}
        columnTitle={data.columnTitle}
        text={data.text}
        textTwo={data.textTwo}
        textThree={data.textThree}
        textFour={data.textFour}
      />
    )
    case "ChooseConfig": return (
      <ChooseConfig
        title={data.title}
        text={data.text}
      />
    )
    case "FooterButtons": return (
      <div style={{ background: "#ffffff" }} className="marginsCTA">
        <FooterButtons
          theme={data.theme}
          logoName={data.logoName}
          textTop={data.textTop}
          textBottom={data.textBottom}
          buttonText={data.buttonText}
        />
      </div>
    )
  }
}