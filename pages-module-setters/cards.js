import HeadTitleText from "../../lt-modules/HeadTitleText"
import { TileFullWidth, TileFullWidthReverse } from "../../lt-modules/TileFullWidth"
import { TileGridWidth, TileGridWidthLeft, TileGridWidthLeftFull } from "../../lt-modules/TileGridWidth"
import { TileToTile, TileToTileReverse, TileToTileStatic } from "../../lt-modules/TileToTile"

export function setCardsModule(moduleName, data) {
  switch (moduleName) {
    case "HeadTitleText": return (
      <div className="margins20">
        <HeadTitleText
          title={data.title}
          text={data.text}
          style={data.theme}
        />
      </div>
    )
    case "TileFullWidth": return (
      <div className="margins20">
        <TileFullWidth
          link={data.link}
          bg={data.image}
          title={data.title}
          style={data.theme}
          buttonText={data.buttonText}
        />
      </div>
    )
    case "TileFullWidthReverse": return (
      <div className="margins20">
        <TileFullWidthReverse
          link={data.link}
          bg={data.image}
          title={data.title}
          style={data.theme}
          buttonText={data.buttonText}
        />
      </div>
    )
    case "TileGridWidth": return (
      <div className="margins20">
        <TileGridWidth
          link={data.link}
          title={data.title}
          style={data.theme}
          bg={data.image}
          bgDesktop={data.image_desktop}
          bgResponsive={data.image_responsive}
          height="595px"
          buttonText={data.buttonText}
        />
      </div>
    )
    case "TileGridWidthLeft": return (
      <div className="margins20">
        <TileGridWidthLeft
          link={data.link}
          title={data.title}
          style={data.theme}
          bg={data.image}
          height="475px"
          buttonText={data.buttonText}
          color={data.color}
        />
      </div>
    )
    case "TileGridWidthLeftFull": return (
      <div className="margins20">
        <TileGridWidthLeftFull
          link={data.link}
          title={data.title}
          style={data.theme}
          bg={data.image}
          height="470px"
          buttonText={data.buttonText}
        />
      </div>
    )
    case "TileToTile": return (
      <div className="margins20">
        <TileToTile
          linkFirst={data.link_1}
          linkSecond={data.link_2}
          bgOne={data.image_1}
          bgTwo={data.image_2}
          contain
          containTwo
          objectPosition={data.objectPosition}
          objectPositionTwo={data.objectPosition_2}
          bgColor={data.bgColor}
          bgColorTwo={data.bgColor_2}
          title={data.title}
          styleFirst={data.theme}
          titleTwo={data.title_2}
          styleSecond={data.theme_2}
          buttonText={data.buttonText}
          buttonText_2={data.buttonText_2}
        />
      </div>
    )
    case "TileToTile": return (
      <div className="margins20">
        <TileToTileReverse
          linkFirst={data.link_1}
          linkSecond={data.link_2}
          bgOne={data.image_1}
          bgTwo={data.image_2}
          contain
          containTwo
          objectPosition={data.objectPosition}
          objectPositionTwo={data.objectPosition_2}
          bgColor={data.bgColor}
          bgColorTwo={data.bgColor_2}
          title={data.title}
          styleFirst={data.theme}
          titleTwo={data.title_2}
          styleSecond={data.theme_2}
          buttonText={data.buttonText}
          buttonText_2={data.buttonText_2}
        />
      </div>
    )
    case "TileToTileStatic": return (
      <div className="margins20">
        <TileToTileStatic
          linkFirst={data.link_1}
          linkSecond={data.link_2}
          bgOne={data.image_1}
          bgTwo={data.image_2}
          contain
          containTwo
          objectPosition={data.objectPosition}
          objectPositionTwo={data.objectPosition_2}
          bgColor={data.bgColor}
          bgColorTwo={data.bgColor_2}
          title={data.title}
          styleFirst={data.theme}
          titleTwo={data.title_2}
          styleSecond={data.theme_2}
          buttonText={data.buttonText}
          buttonText_2={data.buttonText_2}
        />
      </div>
    )
  }
}