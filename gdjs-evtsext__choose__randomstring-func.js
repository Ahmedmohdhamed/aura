
if (typeof gdjs.evtsExt__Choose__RandomString !== "undefined") {
  gdjs.evtsExt__Choose__RandomString.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Choose__RandomString = {};

gdjs.evtsExt__Choose__RandomString.conditionTrue_0 = {val:false};
gdjs.evtsExt__Choose__RandomString.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Choose__RandomString.userFunc0x865d50 = function(runtimeScene, eventsFunctionContext) {
"use strict";
//Set a new variable to store the choosed list and convert from string to an structure
var __ChoosedString = runtimeScene.getVariables().get("__ChoosedString")
__ChoosedString.setString(eventsFunctionContext.getArgument("ChooseString"))

let strList =runtimeScene.getVariables().get("__ChoosedString").getAsString().split(",")
for(let i in strList){
    runtimeScene.getVariables().get("__ChoosedString").getChild(i+1).setString(strList[i])
}

//Remove the variable until is needed again
runtimeScene._variables._variables.remove("__ChoosedString")

var __ChooseRandomString = runtimeScene.getVariables().get("__ChooseRandomString")
__ChooseRandomString.setString(strList[Math.floor(Math.random()*strList.length)])

//Return the random value
eventsFunctionContext.returnValue = __ChooseRandomString.getAsString()

//Remove the variable until is needed again
runtimeScene._variables._variables.remove("__ChooseRandomString")

};
gdjs.evtsExt__Choose__RandomString.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Choose__RandomString.userFunc0x865d50(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Choose__RandomString.func = function(runtimeScene, ChooseString, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "ChooseString") return ChooseString;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Choose__RandomString.eventsList0(runtimeScene, eventsFunctionContext);
return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Choose__RandomString.registeredGdjsCallbacks = [];