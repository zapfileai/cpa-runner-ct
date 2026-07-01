const connecticutCities = [
  "Hebron", "Higganum", "Ivoryton", "Jewett City", "Kent",
  "Killingworth", "Lakeville", "Lebanon", "Ledyard", "Litchfield",
  "Madison", "Manchester", "Mansfield Center", "Marion", "Marlborough",
  "Meriden", "Middle Haddam", "Middlebury", "Middlefield", "Middletown",
  "Milford", "Milldale", "Monroe", "Montville", "Moodus",
  "Moosup", "Morris", "Mystic", "Naugatuck", "New Britain",
  "New Canaan", "New Fairfield", "New Hartford", "New Haven", "New London",
  "New Milford", "New Preston Marble Dale", "Newington", "Newtown", "Niantic",
  "Norfolk", "North Branford", "North Canton", "North Franklin", "North Granby",
  "North Grosvenordale", "North Haven", "North Stonington", "North Windham", "Northfield",
  "Northford", "Norwalk", "Norwich", "Oakdale", "Oakville",
  "Old Greenwich", "Old Lyme", "Old Mystic", "Old Saybrook", "Orange",
  "Oxford", "Pawcatuck", "Plainfield", "Plainville", "Plantsville",
  "Plymouth", "Pomfret Center", "Poquonock", "Portland", "Preston",
  "Prospect", "Putnam", "Quaker Hill", "Redding", "Redding Center",
  "Redding Ridge", "Ridgefield", "Riverside", "Riverton", "Rockfall",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < connecticutCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(connecticutCities[i]);
}

module.exports = { batches };
