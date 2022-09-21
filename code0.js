gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDportalObjects1= [];
gdjs.Untitled_32sceneCode.GDportalObjects2= [];
gdjs.Untitled_32sceneCode.GDbtnObjects1= [];
gdjs.Untitled_32sceneCode.GDbtnObjects2= [];
gdjs.Untitled_32sceneCode.GDlogoObjects1= [];
gdjs.Untitled_32sceneCode.GDlogoObjects2= [];
gdjs.Untitled_32sceneCode.GDstarsObjects1= [];
gdjs.Untitled_32sceneCode.GDstarsObjects2= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.conditionTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition2IsTrue_1 = {val:false};


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.Untitled_32sceneCode.GDportalObjects1 */

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDportalObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDportalObjects1[i].hasAnimationEnded() ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDportalObjects1[k] = gdjs.Untitled_32sceneCode.GDportalObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDportalObjects1.length = k;}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDportalObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDportalObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDportalObjects1[i].setAnimationName("loop");
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("btn"), gdjs.Untitled_32sceneCode.GDbtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("portal"), gdjs.Untitled_32sceneCode.GDportalObjects1);
gdjs.copyArray(runtimeScene.getObjects("stars"), gdjs.Untitled_32sceneCode.GDstarsObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDportalObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDportalObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDbtnObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDbtnObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDstarsObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDstarsObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.Untitled_32sceneCode.conditionTrue_1 = gdjs.Untitled_32sceneCode.condition1IsTrue_0;
gdjs.Untitled_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8024508);
}
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("btn"), gdjs.Untitled_32sceneCode.GDbtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("portal"), gdjs.Untitled_32sceneCode.GDportalObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDbtnObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDbtnObjects1[i].setAnimationName("btnclk");
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDportalObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDportalObjects1[i].setAnimationName("open");
}
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("btn"), gdjs.Untitled_32sceneCode.GDbtnObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDbtnObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDbtnObjects1[i].setAnimationName("btn");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("portal"), gdjs.Untitled_32sceneCode.GDportalObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDportalObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDportalObjects1[i].isCurrentAnimationName("open") ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDportalObjects1[k] = gdjs.Untitled_32sceneCode.GDportalObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDportalObjects1.length = k;}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDportalObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDportalObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbtnObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbtnObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDlogoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDlogoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDstarsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDstarsObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
