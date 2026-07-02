const connecticutCities = [
  "Rocky Hill", "Rogers", "Roxbury", "Salem", "Salisbury",
  "Sandy Hook", "Scotland", "Seymour", "Sharon", "Shelton",
  "Sherman", "Simsbury", "Somers", "Somersville", "South Glastonbury",
  "South Kent", "South Windsor", "Southbury", "Southington", "Southport",
  "Stafford Springs", "Stamford", "Stevenson", "Stonington", "Storrs Mansfield",
  "Stratford", "Suffield", "Taftville", "Tariffville", "Terryville",
  "Thomaston", "Thompson", "Tolland", "Torrington", "Trumbull",
  "Uncasville", "Unionville", "Vernon", "Voluntown", "Wallingford",
  "Washington", "Washington Depot", "Waterbury", "Waterford", "Watertown",
  "Weatogue", "West Cornwall", "West Granby", "West Hartford", "West Hartland",
  "West Haven", "West Mystic", "West Simsbury", "West Suffield", "Westbrook",
  "Weston", "Westport", "Wethersfield", "Willimantic", "Willington",
  "Wilton", "Winchester Center", "Windham", "Windsor", "Windsor Locks",
  "Winsted", "Wolcott", "Woodbury", "Woodstock", "Woodstock Valley",
  "Yantic",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < connecticutCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(connecticutCities[i]);
}

module.exports = { batches };
