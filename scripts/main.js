import { getNasaPhotoDayData } from "./spaceData/NasaPhotoDayProvider.js";
import PhotoDayListComponent from "./spaceData/NasaPhotoDayList.js";
import { NasaListComponent } from "./spaceData/NasaList.js";
// import { DateSelect } from "./customEvents/dateCustomEvent.js";

getNasaPhotoDayData()
.then(() => PhotoDayListComponent())

// getNasaCuriosityData()
// .then(() => getNasaOpportunityData())
// .then(() => getNasaSpiritData())
// .then(() => NasaListComponent())

// DateSelect()
NasaListComponent()
