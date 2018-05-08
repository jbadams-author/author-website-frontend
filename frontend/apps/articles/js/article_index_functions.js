function parseJSON(jsonObj) {
  let tableTypes;
  tableTypes = ["pseudonym","series","palette","article"];
  let newMap = new Map();

  for (let i=0; i<tableTypes.length; i++) {
    newMap[tableTypes[i]] = [];
  };

  for (let i=0; i<jsonObj.length; i++) {
    newMap[jsonObj[i].model.split(".")[1]].push(jsonObj[i]);
  };

  return newMap;
};

function sortArticlesByDate(articles) {
  function compareDate(a,b) {
    if (a.fields.pub_date > b.fields.pub_date) return 1;
    if (a.fields.pub_date == b.fields.pub_date) return 0;
    if (a.fields.pub_date < b.fields.pub_date) return -1;
  }
  articles.sort(compareDate);
};
