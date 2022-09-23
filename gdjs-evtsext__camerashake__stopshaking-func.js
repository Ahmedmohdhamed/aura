
if (typeof gdjs.evtsExt__CameraShake__StopShaking !== "undefined") {
  gdjs.evtsExt__CameraShake__StopShaking.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CameraShake__StopShaking = {};

gdjs.evtsExt__CameraShake__StopShaking.conditionTrue_0 = {val:false};
gdjs.evtsExt__CameraShake__StopShaking.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__CameraShake__StopShaking.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{runtimeScene.getVariables().get("__CameraShake").getChild("Time").setNumber(0);
}{runtimeScene.getVariables().get("__CameraShake").getChild("Duration").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("EaseDuration")) || 0 : 0));
}{runtimeScene.getVariables().get("__CameraShake").getChild("StopEaseDuration").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("EaseDuration")) || 0 : 0));
}}

}


};

gdjs.evtsExt__CameraShake__StopShaking.func = function(runtimeScene, EaseDuration, parentEventsFunctionContext) {
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
if (argName === "EaseDuration") return EaseDuration;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CameraShake__StopShaking.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__CameraShake__StopShaking.registeredGdjsCallbacks = [];