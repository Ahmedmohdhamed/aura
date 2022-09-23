
if (typeof gdjs.evtsExt__CameraShake__SetDefaultShakingFrequency !== "undefined") {
  gdjs.evtsExt__CameraShake__SetDefaultShakingFrequency.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CameraShake__SetDefaultShakingFrequency = {};

gdjs.evtsExt__CameraShake__SetDefaultShakingFrequency.conditionTrue_0 = {val:false};
gdjs.evtsExt__CameraShake__SetDefaultShakingFrequency.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__CameraShake__SetDefaultShakingFrequency.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{runtimeScene.getVariables().get("__CameraShake").getChild("DefaultFrequency").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Frequency")) || 0 : 0));
}}

}


};

gdjs.evtsExt__CameraShake__SetDefaultShakingFrequency.func = function(runtimeScene, Frequency, parentEventsFunctionContext) {
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
if (argName === "Frequency") return Frequency;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CameraShake__SetDefaultShakingFrequency.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__CameraShake__SetDefaultShakingFrequency.registeredGdjsCallbacks = [];