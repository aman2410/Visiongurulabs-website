import indianArmyLogo from "@/assets/clients/indian-army.svg";
import moilManganeseOreIndiaLogo from "@/assets/clients/moil-manganese-ore-india.svg";
import amoliSoulCraftLogo from "@/assets/clients/amoli-soul-craft.svg";
import vanyaToursLogo from "@/assets/clients/vanya-tours-travels.svg";
import gramikaNaturalsLogo from "@/assets/clients/gramika-naturals.svg";
import drdoDefenceRDLogo from "@/assets/clients/drdo-defence-r-d.svg";
import isroSpaceResearchLogo from "@/assets/clients/isro-space-research.svg";
import pmbiPharmaBureauLogo from "@/assets/clients/pmbi-pharma-bureau.svg";
import necNecIndiaLogo from "@/assets/clients/nec-nec-india.svg";
import prospectLegalLogo from "@/assets/clients/prospect-legal.svg";
import prospectDigitalLogo from "@/assets/clients/prospect-digital.svg";
import freshlookLogo from "@/assets/clients/freshlook.svg";
import renthunterLogo from "@/assets/clients/renthunter.svg";
import xcareLogo from "@/assets/clients/xcare.svg";
import sneekLogo from "@/assets/clients/sneek.svg";
import florishLogo from "@/assets/clients/florish.svg";
import shiraliLogo from "@/assets/clients/shirali.svg";
import lockInMotorsportsLogo from "@/assets/clients/lock-in-motorsports.svg";
import tjtaxiLogo from "@/assets/clients/tjtaxi.svg";
import guestoAppLogo from "@/assets/clients/guesto-app.svg";
import fickleLogo from "@/assets/clients/fickle.svg";
import nexxHomeLogo from "@/assets/clients/nexx-home.svg";
import gadanaLogo from "@/assets/clients/gadana.svg";
import watchRxLogo from "@/assets/clients/watch-rx.svg";
import startaLogo from "@/assets/clients/starta.svg";
import cyrusPhotoPrintLogo from "@/assets/clients/cyrus-photo-print.svg";
import erpProjectLogo from "@/assets/clients/erp-project.svg";

export type ClientLogo = { name: string; logo: string; url?: string; urls?: string[] };

export const clientLogos: ClientLogo[] = [
  { name: "Indian Army", logo: indianArmyLogo },
  { name: "MOIL – A Government of India Enterprise", logo: moilManganeseOreIndiaLogo },
  { name: "Amoli SoulCraft", logo: amoliSoulCraftLogo, url: "https://amolisoulcraft.com/" },
  { name: "Vanya Tours & Travels", logo: vanyaToursLogo, url: "https://vanyatours.com/" },
  { name: "Gramika Naturals", logo: gramikaNaturalsLogo, url: "https://gramikanaturals.com/" },
  {
    name: "Prospect Legal",
    logo: prospectLegalLogo,
    url: "https://prospectlegal.in/",
    urls: ["https://prospectlegal.in/", "https://prospectlegal.co.in/"],
  },
  {
    name: "Prospect Digital",
    logo: prospectDigitalLogo,
    url: "https://prospectdigital.in/",
  },
  {
    name: "Defence Research and Development Organisation (DRDO)",
    logo: drdoDefenceRDLogo,
    url: "https://drdo.gov.in/",
  },
  {
    name: "Indian Space Research Organisation (ISRO)",
    logo: isroSpaceResearchLogo,
    url: "https://www.isro.gov.in/",
  },
  {
    name: "Freshlook",
    logo: freshlookLogo,
    url: "https://freshlookllp.com/",
  },
  { name: "Pharmaceuticals & Medical Devices Bureau of India (PMBI)", logo: pmbiPharmaBureauLogo },
  { name: "NEC / NEC India", logo: necNecIndiaLogo },
  { name: "RentHunter", logo: renthunterLogo },
  { name: "XCare", logo: xcareLogo },
  { name: "Sneek", logo: sneekLogo },
  { name: "Florish", logo: florishLogo },
  { name: "ShiraLi", logo: shiraliLogo },
  { name: "LOCK IN Motorsports", logo: lockInMotorsportsLogo },
  { name: "TJTaxi", logo: tjtaxiLogo },
  { name: "GuestoApp", logo: guestoAppLogo },
  { name: "Fickle", logo: fickleLogo },
  { name: "Nexx Home", logo: nexxHomeLogo },
  { name: "Gadana", logo: gadanaLogo },
  { name: "Watch RX", logo: watchRxLogo },
  { name: "Starta", logo: startaLogo },
  { name: "Cyrus Photo Print", logo: cyrusPhotoPrintLogo },
  { name: "ERP Project", logo: erpProjectLogo },
];
