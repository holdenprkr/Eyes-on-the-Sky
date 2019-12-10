import { getNasaPhotoDayData } from "./spaceData/NasaPhotoDayProvider.js";
import PhotoDayListComponent from "./spaceData/NasaPhotoDayList.js";
import { getNasaCuriosityData, getNasaOpportunityData, getNasaSpiritData } from "./spaceData/NasaAllDataProvider.js";
import { NasaListComponent } from "./spaceData/NasaList.js";
import ProbeSelect from "./customEvents/probeCustomEvent.js";


getNasaPhotoDayData()
.then(() => PhotoDayListComponent())

getNasaCuriosityData()
.then(() => getNasaOpportunityData())
.then(() => getNasaSpiritData())
.then(() => NasaListComponent())

ProbeSelect()