import serviceInstallation from "@/assets/service-installation.jpg";
import furnitureKitchen1 from "@/assets/furniture-kitchen-1.jpg.asset.json";
import furnitureKitchen2 from "@/assets/furniture-kitchen-2.jpg.asset.json";
import furnitureWardrobe from "@/assets/furniture-wardrobe.jpg.asset.json";
import furnitureCabinetry1 from "@/assets/furniture-cabinetry-1.jpg.asset.json";
import furnitureCabinetry2 from "@/assets/furniture-cabinetry-2.jpg.asset.json";
import designerEvelina from "@/assets/designer-evelina.jpg.asset.json";
import designerFausta from "@/assets/designer-fausta.jpg.asset.json";
import planningCloset from "@/assets/planning-closet.jpg.asset.json";
import planningKitchen from "@/assets/planning-kitchen.jpg.asset.json";
import planningInterior from "@/assets/planning-interior.jpg.asset.json";
import planningBathroom from "@/assets/planning-bathroom.jpg.asset.json";
import planningLiving from "@/assets/planning-living.jpg.asset.json";
import mdfPanel1 from "@/assets/mdf-panel-1.jpg.asset.json";
import mdfPanel2 from "@/assets/mdf-panel-2.jpg.asset.json";
import mdfSample1 from "@/assets/mdf-sample-1.jpg.asset.json";
import mdfSample2 from "@/assets/mdf-sample-2.jpg.asset.json";
import cncMachine from "@/assets/cnc-machine.jpg.asset.json";
import cncMdf1 from "@/assets/cnc-mdf-1.jpg.asset.json";
import cncMdf2 from "@/assets/cnc-mdf-2.jpg.asset.json";
import cncDetail1 from "@/assets/cnc-detail-1.jpg.asset.json";
import cncDetail2 from "@/assets/cnc-detail-2.jpg.asset.json";

export const serviceLinks = [
  { tag: "(a)", title: "Baldų gamyba", text: "Individualūs gaminiai pagal matmenis — spintos, virtuvės, biuro baldai.", to: "/paslaugos/baldu-gamyba", image: furnitureKitchen1.url, imageAlt: "ESPRAY pagaminta individuali virtuvė" },
  { tag: "(b)", title: "Dizainerės paslaugos", text: "Spalva, medžiaga ir forma — kartu su jumis.", to: "/paslaugos/dizaineres-paslaugos", image: planningInterior.url, imageAlt: "ESPRAY interjero dizaino vizualizacija" },
  { tag: "(c)", title: "Projektavimas", text: "Brėžiniai, 3D vizualizacijos, tikslūs matmenys.", to: "/paslaugos/projektavimas", image: planningKitchen.url, imageAlt: "Tikslus virtuvės baldų projektas" },
  { tag: "(d)", title: "MDF dažymas", text: "Lygi matinė ar blizgi danga ir platus spalvų pasirinkimas.", to: "/paslaugos/mdf-dazymas", image: mdfPanel1.url, imageAlt: "Dažyto MDF fasado paviršius" },
  { tag: "(e)", title: "CNC frezavimas", text: "Tikslus detalių apdirbimas ir sudėtingos formos.", to: "/paslaugos/cnc-frezavimas", image: cncMdf1.url, imageAlt: "CNC frezuoto MDF detalė" },
  { tag: "(f)", title: "Transportavimas ir montavimas", text: "Saugiai atvežame ir preciziškai sumontuojame vietoje.", to: "/paslaugos/transportavimas-ir-montavimas", image: furnitureWardrobe.url, imageAlt: "ESPRAY sumontuota individuali drabužinė" },
] as const;

export type ServicePath = (typeof serviceLinks)[number]["to"];

export type ServicePageData = {
  tag: string;
  title: string;
  eyebrow: string;
  intro: string;
  image: string;
  imageAlt: string;
  portrait?: boolean;
  sections: ReadonlyArray<{ title: string; text: string; image: string; imageAlt: string }>;
  gallery: ReadonlyArray<{ image: string; alt: string; caption: string }>;
  features: readonly string[];
  related: ServicePath;
  relatedLabel: string;
};

export const servicePages = {
  furniture: {
    tag: "(a)", title: "Baldų gamyba", eyebrow: "Individualumas ir kokybė",
    intro: "Gaminame nestandartinius baldus, pritaikytus konkrečiai erdvei, jos matmenims ir jūsų kasdieniams poreikiams.",
    image: furnitureKitchen1.url, imageAlt: "ESPRAY pagaminta individuali virtuvė",
    sections: [
      { title: "Nuo idėjos iki baldo", text: "Mūsų komanda išmano kiekvieną gamybos etapą — nuo pirminės idėjos ir dizaino sprendimų iki tikslaus techninio įgyvendinimo. Klientą konsultuojame renkantis medžiagas, dizainą ir funkcinius sprendimus.", image: furnitureCabinetry1.url, imageAlt: "ESPRAY pagamintų baldų detalės interjere" },
      { title: "Skirtingoms erdvėms", text: "Gaminame virtuvių, vonios kambarių ir biurų baldus, drabužines bei kitus individualius gaminius. Dirbame su LMDP, frezuotu ir dažytu MDF, taip pat įgyvendiname architektų parengtus brėžinius.", image: furnitureWardrobe.url, imageAlt: "ESPRAY įrengta individuali drabužinė" },
    ],
    gallery: [
      { image: furnitureKitchen1.url, alt: "Šviesi ESPRAY virtuvė", caption: "Individuali virtuvė" },
      { image: furnitureWardrobe.url, alt: "ESPRAY drabužinė", caption: "Drabužinės sprendimas" },
      { image: furnitureCabinetry2.url, alt: "Individualūs ESPRAY korpusiniai baldai", caption: "Korpusiniai baldai" },
      { image: furnitureKitchen2.url, alt: "ESPRAY virtuvės projektas", caption: "Pagaminta ir sumontuota" },
    ],
    features: ["Individualūs matmenys", "Virtuvės ir drabužinės", "Vonios ir biuro baldai", "LMDP bei dažytas MDF"],
    related: "/paslaugos/projektavimas", relatedLabel: "Projektavimas",
  },
  designer: {
    tag: "(b)", title: "Dizainerės paslaugos", eyebrow: "Funkcionali ir išskirtinė erdvė",
    intro: "Profesionalus interjero planavimas padeda suderinti estetiką, kasdienį patogumą ir visas technines detales.",
    image: designerEvelina.url, imageAlt: "ESPRAY interjero dizainerė Evelina", portrait: true,
    sections: [
      { title: "Visapusis interjero projektas", text: "Kuriamos gyvenamųjų ir komercinių erdvių interjero koncepcijos, bendro interjero bei baldų vizualizacijos. Sprendimai planuojami taip, kad spalvos, medžiagos ir baldai veiktų kaip viena visuma.", image: planningInterior.url, imageAlt: "ESPRAY interjero vizualizacija" },
      { title: "Nuo koncepcijos iki brėžinių", text: "Rengiami baldų išdėstymo, santechnikos, apšvietimo, elektros instaliacijos ir kitų inžinerinių sprendimų planai. Taip pat teikiamos konsultacijos ir padedama parinkti apdailos medžiagas.", image: planningKitchen.url, imageAlt: "ESPRAY parengtas virtuvės baldų brėžinys" },
    ],
    gallery: [
      { image: designerEvelina.url, alt: "Interjero dizainerė Evelina", caption: "Dizainerė Evelina" },
      { image: designerFausta.url, alt: "Interjero dizainerė Fausta", caption: "Dizainerė Fausta" },
      { image: planningInterior.url, alt: "Interjero vizualizacija", caption: "Interjero koncepcija" },
      { image: planningBathroom.url, alt: "Vonios interjero vizualizacija", caption: "Vonios vizualizacija" },
    ],
    features: ["Interjero koncepcija", "3D vizualizacijos", "Techniniai planai", "Medžiagų ir spalvų parinkimas"],
    related: "/paslaugos/baldu-gamyba", relatedLabel: "Baldų gamyba",
  },
  planning: {
    tag: "(c)", title: "Projektavimas", eyebrow: "Nuo vizijos iki realybės",
    intro: "Tikslūs brėžiniai ir 3D vizualizacijos leidžia įvertinti būsimą rezultatą dar prieš pradedant gamybą.",
    image: planningInterior.url, imageAlt: "ESPRAY parengta interjero vizualizacija",
    sections: [
      { title: "Apie viską pagalvojame iš anksto", text: "Projektuojant įvertinami erdvės matmenys, ergonomika, funkcionalumas ir pasirinktas dizainas. Sprendimai derinami tol, kol aiški kiekviena detalė.", image: planningCloset.url, imageAlt: "Tikslus spintos techninis brėžinys" },
      { title: "Tikslumas gamyboje", text: "Parengti 2D ir 3D brėžiniai tampa aiškiu pagrindu gamybai bei montavimui. Tai padeda išvengti klaidų ir užtikrinti, kad galutinis baldas tiksliai atitiktų sutartą sprendimą.", image: planningLiving.url, imageAlt: "Svetainės baldų 3D vizualizacija" },
    ],
    gallery: [
      { image: planningCloset.url, alt: "Spintos brėžinys", caption: "Spintos brėžinys" },
      { image: planningKitchen.url, alt: "Virtuvės baldų brėžinys", caption: "Virtuvės brėžinys" },
      { image: planningBathroom.url, alt: "Vonios kambario vizualizacija", caption: "Vonios vizualizacija" },
      { image: planningLiving.url, alt: "Svetainės vizualizacija", caption: "Svetainės vizualizacija" },
    ],
    features: ["Erdvės įvertinimas", "Ergonominiai sprendimai", "2D ir 3D brėžiniai", "Pasiruošimas gamybai"],
    related: "/paslaugos/dizaineres-paslaugos", relatedLabel: "Dizainerės paslaugos",
  },
  painting: {
    tag: "(d)", title: "MDF dažymas", eyebrow: "Lygi ir ilgaamžė apdaila",
    intro: "Profesionaliai dažome MDF detales, kai svarbi vienoda spalva, švarus paviršius ir kokybiškas galutinis vaizdas.",
    image: mdfPanel1.url, imageAlt: "Dažyto MDF fasadas ESPRAY gamyboje", portrait: true,
    sections: [
      { title: "Spalva pagal jūsų projektą", text: "Plati RAL spalvų paletė leidžia tiksliai derinti fasadus prie interjero. Galima rinktis matinę arba blizgią dangą ir pritaikyti ją tiek naujiems, tiek atnaujinamiems baldams.", image: mdfSample1.url, imageAlt: "Dažyto MDF spalvos ir paviršiaus pavyzdys" },
      { title: "Kontroliuojamas procesas", text: "Naudojama moderni įranga ir profesionalios dažymo medžiagos. Kruopštus paviršiaus paruošimas bei tolygus dengimas padeda pasiekti estetišką ir patvarią apdailą.", image: mdfPanel2.url, imageAlt: "Paruoštas dažyto MDF baldo fasadas" },
    ],
    gallery: [
      { image: mdfPanel1.url, alt: "Dažytas MDF fasadas", caption: "Dažytas fasadas" },
      { image: mdfPanel2.url, alt: "MDF paviršiaus apdaila", caption: "Lygi apdaila" },
      { image: mdfSample1.url, alt: "MDF spalvos pavyzdys", caption: "Spalvos pavyzdys" },
      { image: mdfSample2.url, alt: "Dažyto MDF detalė", caption: "Paviršiaus detalė" },
    ],
    features: ["Plati RAL paletė", "Matinė arba blizgi danga", "Nauji ir atnaujinami baldai", "Tolygus paviršius"],
    related: "/paslaugos/cnc-frezavimas", relatedLabel: "CNC frezavimas",
  },
  cnc: {
    tag: "(e)", title: "CNC frezavimas", eyebrow: "Tikslumas, kuris kuria dizainą",
    intro: "Frezuojame, graviruojame ir pjauname MDF, medienos bei faneros detales — nuo subtilių raštų iki sudėtingų formų.",
    image: cncDetail1.url, imageAlt: "CNC staklėmis frezuota ESPRAY detalė",
    sections: [
      { title: "Sudėtingos formos, švarus apdirbimas", text: "Pažangi įranga leidžia tiksliai apdirbti baldų, interjero ir dekoro elementus. Technologija tinka tiek klasikiniams, tiek moderniems dizaino sprendimams.", image: cncMdf1.url, imageAlt: "CNC frezuotas MDF raštas" },
      { title: "Visas procesas vienoje vietoje", text: "Nuo projektavimo iki galutinio išpildymo darbus atliekame nuosekliai, todėl galime kontroliuoti kokybę ir lanksčiai prisitaikyti prie individualaus užsakymo.", image: cncMachine.url, imageAlt: "ESPRAY CNC staklės darbo metu" },
    ],
    gallery: [
      { image: cncMachine.url, alt: "CNC staklės darbo metu", caption: "CNC procesas" },
      { image: cncMdf1.url, alt: "Frezuoto MDF pavyzdys", caption: "Frezuotas MDF" },
      { image: cncMdf2.url, alt: "Dekoratyvinė CNC detalė", caption: "Dekoratyvinė detalė" },
      { image: cncDetail2.url, alt: "Tiksliai apdirbta baldo detalė", caption: "Apdirbimo tikslumas" },
    ],
    features: ["MDF, mediena ir fanera", "Frezavimas ir graviravimas", "Dekoratyviniai elementai", "Individualūs užsakymai"],
    related: "/paslaugos/mdf-dazymas", relatedLabel: "MDF dažymas",
  },
  installation: {
    tag: "(f)", title: "Transportavimas ir montavimas", eyebrow: "Saugiai iki galutinės vietos",
    intro: "Pasirūpiname, kad pagaminti baldai būtų apsaugoti kelionėje, tiksliai surinkti ir paruošti naudoti jūsų erdvėje.",
    image: furnitureKitchen2.url, imageAlt: "ESPRAY sumontuota individuali virtuvė",
    sections: [
      { title: "Apsauga transportuojant", text: "Baldų detalės paruošiamos kelionei ir saugiai pristatomos į sutartą vietą. Atsakingas transportavimas padeda išsaugoti apdailą bei konstrukcijų tikslumą.", image: serviceInstallation, imageAlt: "Baldų detalės ruošiamos montavimui" },
      { title: "Preciziškas montavimas", text: "Meistrai surenka, išlygina ir pritvirtina baldus vietoje, patikrina jų stabilumą bei patogų naudojimą. Baigus darbus erdvė paliekama tvarkinga.", image: furnitureCabinetry1.url, imageAlt: "Tiksliai sumontuoti individualūs baldai" },
    ],
    gallery: [
      { image: furnitureKitchen2.url, alt: "Sumontuota individuali virtuvė", caption: "Virtuvės montavimas" },
      { image: furnitureWardrobe.url, alt: "Sumontuota individuali drabužinė", caption: "Drabužinės montavimas" },
      { image: furnitureCabinetry1.url, alt: "Sumontuoti korpusiniai baldai", caption: "Galutinis rezultatas" },
      { image: furnitureCabinetry2.url, alt: "Baldai pritaikyti erdvei", caption: "Tikslus pritaikymas" },
    ],
    features: ["Apsauga transportuojant", "Surinkimas vietoje", "Tikslus sureguliavimas", "Tvarkinga darbo vieta"],
    related: "/paslaugos/baldu-gamyba", relatedLabel: "Baldų gamyba",
  },
} as const satisfies Record<string, ServicePageData>;
