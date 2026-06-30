const connecticutCities = [
  "Amston", "Andover", "Ansonia", "Ashford", "Avon",
  "Bantam", "Barkhamsted", "Beacon Falls", "Berlin", "Bethany",
  "Bethel", "Bethlehem", "Bloomfield", "Bolton", "Botsford",
  "Bozrah", "Branford", "Bridgeport", "Bridgewater", "Bristol",
  "Broad Brook", "Brookfield", "Brooklyn", "Burlington", "Canaan",
  "Canterbury", "Canton", "Centerbrook", "Chaplin", "Cheshire",
  "Chester", "Clinton", "Colchester", "Collinsville", "Columbia",
  "Cornwall Bridge", "Cos Cob", "Coventry", "Cromwell", "Danbury",
  "Danielson", "Darien", "Dayville", "Deep River", "Derby",
  "Durham", "East Berlin", "East Canaan", "East Glastonbury", "East Granby",
  "East Haddam", "East Hampton", "East Hartford", "East Hartland", "East Haven",
  "East Lyme", "East Windsor", "East Windsor Hill", "Eastford", "Easton",
  "Ellington", "Enfield", "Essex", "Fairfield", "Farmington",
  "Gales Ferry", "Georgetown", "Glastonbury", "Goshen", "Granby",
  "Greens Farms", "Greenwich", "Groton", "Guilford", "Haddam",
  "Hamden", "Hampton", "Hartford", "Harwinton", "Hawleyville",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < connecticutCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(connecticutCities[i]);
}

module.exports = { batches };
