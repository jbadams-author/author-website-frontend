/**
perform AJAX call for dumped JSON of a django app, load string into object
arguments:
  appName(string) - name of django app of interest
returns:
  (obj) - loaded object from app JSON
*/
function callAndLoadAppJSON(appName) {
  let returnObj = null;
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    let DONE = 4; // readyState 4 means the request is done
    let OK = 200; // status 200 is a successful return

    if (xhr.readyState == DONE) {
      if (xhr.status == OK) {
        console.log(xhr.responseText);
        let jsonObj = JSON.parse(xhr.responseText);
        returnObj = jsonObj;
      }
    }
  };

  xhr.open('GET', `/static/json/${appName}.json`, false);
  xhr.send(null);

  return returnObj;
}

/**
get all django models from a given class and app from a larger JSON object
arguments:
  objArr(array) - array of json objects loaded from django data dump
  appName(string) - name of the django app of interest
  modelName(string) - name of the django model for the specific app
returns:
  (array) - all objects matching the class and app
*/
function getModels(objArr, appName, modelName) {
  retArr = [];
  for (let i=0; i<objArr.length; i++) {
    if (objArr[i]["model"] == `${appName}.${modelName}`) {
      retArr.push(objArr[i]);
    }
  }
  return retArr;
}

/**
accepts an array of django model objects of the same class, and sorts the array
by date
arguments:
  objArr(arr) - array of django model objects
  newest_to_oldest(bool) - if true, sorts objects newest->oldest, if false,
    sorts objects oldest->newest
returns:
  none
*/
function sortModelArrayByDate(objArr, newest_to_oldest) {
  function compareDateNewestToOldest(a,b) {
    if (a.fields.pub_date > b.fields.pub_date) return -1;
    if (a.fields.pub_date == b.fields.pub_date) return 0;
    if (a.fields.pub_date < b.fields.pub_date) return 1;
  }
  function compareDateOldestToNewest(a,b) {
    if (a.fields.pub_date > b.fields.pub_date) return 1;
    if (a.fields.pub_date == b.fields.pub_date) return 0;
    if (a.fields.pub_date < b.fields.pub_date) return -1;
  }

  if (newest_to_oldest) {
    objArr.sort(compareDateNewestToOldest);
  } else {
    objArr.sort(compareDateOldestToNewest);
  }
}

/**
for an array of objects of the same django model, return a dictionary where
each object is referenced by the specified parameter
arguments:
  modelArr(array) - array of objects of the same django model
  key_of_interest(string) - parameter of model that will be used as the key
    in the dictionary
returns:
  (obj) - dictionary, where the key is the user-specifed parameter, and the
    value is the instance of the django model
*/
function getModelDictionary(modelArr, key_of_interest) {
  let retObj = {};
  for (let i=0; i<modelArr.length; i++) {
    let modelObj = modelArr[i];
    retObj[modelObj["fields"][key_of_interest]] = modelObj;
  }
  return retObj;
}
