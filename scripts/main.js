import { useBodyHTML } from "./bodyScripts/bodyHTML.js";
import { getNasaPhotoDayData } from "./spaceData/NasaPhotoDayProvider.js";
import PhotoDayListComponent from "./spaceData/NasaPhotoDayList.js";
// import PhotoListComponent from "./spaceData/dummyDataList.js";

useBodyHTML()
getNasaPhotoDayData().then(
  () => PhotoDayListComponent()
)

