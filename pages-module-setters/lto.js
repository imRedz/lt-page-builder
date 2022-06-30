export function setMainModule(moduleName, data) {
  switch (moduleName) {
    case "": return (
      <Main
        breadcrumbData={data.breadcrumbData}
        title={data.title}
        text={data.text}
        phoneImage={data.phoneImage}
      />
    )
    case "": return (
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
    case "": return (
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
    case "": return (
      <LongSlider
        title={data.title}
        text={data.text}
        indoorText={data.indoorText}
        outdoorText={data.outdoorText}
        dataIndoor={data.dataIndoor}
        dataOutdoor={data.dataOutdoor}
      />
    )
    case "": return (
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
    case "": return (
      <Images
        firstImage={data.firstImage}
        secondImage={data.secondImage}
        thirdImage={data.thirdImage}
        fourthImage={data.fourthImage}
        fivthImage={data.fivthImage}
      />
    )
    case "": return (<>
      {/* // <div className={style.statistics}>
  //   <section>
  //     <h2 className={style.lo__title}>
  //       <span>3 ways</span>
  //       <br />
  //       to provide{" "}
  //       <span>statistics</span>
  //     </h2>
  //     <p className="paragraph">
  //       After the session, you can provide personal statistics of players with achievements in a format convenient for you.
  //     </p>
  //   </section>
  //   <SliderThreeButtons
  //     sliderData=
  //     listofTitles=
  //   />
  //   <div className={style.footer_buttons}>
  //     <FooterButtons
  //       en
  //       theme=
  //       logoName=
  //       textTop=
  //       textBottom=
  //       buttonText=
  //     />
  //   </div>
  // </div> */}
    </>
    )

  }
}