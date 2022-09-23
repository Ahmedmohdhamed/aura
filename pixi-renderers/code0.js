gdjs.homeCode = {};
gdjs.homeCode.GDportalObjects1= [];
gdjs.homeCode.GDportalObjects2= [];
gdjs.homeCode.GDportalObjects3= [];
gdjs.homeCode.GDbtnObjects1= [];
gdjs.homeCode.GDbtnObjects2= [];
gdjs.homeCode.GDbtnObjects3= [];
gdjs.homeCode.GDlogoObjects1= [];
gdjs.homeCode.GDlogoObjects2= [];
gdjs.homeCode.GDlogoObjects3= [];
gdjs.homeCode.GDstarsObjects1= [];
gdjs.homeCode.GDstarsObjects2= [];
gdjs.homeCode.GDstarsObjects3= [];

gdjs.homeCode.conditionTrue_0 = {val:false};
gdjs.homeCode.condition0IsTrue_0 = {val:false};
gdjs.homeCode.condition1IsTrue_0 = {val:false};
gdjs.homeCode.condition2IsTrue_0 = {val:false};
gdjs.homeCode.condition3IsTrue_0 = {val:false};
gdjs.homeCode.conditionTrue_1 = {val:false};
gdjs.homeCode.condition0IsTrue_1 = {val:false};
gdjs.homeCode.condition1IsTrue_1 = {val:false};
gdjs.homeCode.condition2IsTrue_1 = {val:false};
gdjs.homeCode.condition3IsTrue_1 = {val:false};


gdjs.homeCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("btn"), gdjs.homeCode.GDbtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("portal"), gdjs.homeCode.GDportalObjects1);
gdjs.copyArray(runtimeScene.getObjects("stars"), gdjs.homeCode.GDstarsObjects1);
{for(var i = 0, len = gdjs.homeCode.GDportalObjects1.length ;i < len;++i) {
    gdjs.homeCode.GDportalObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.homeCode.GDbtnObjects1.length ;i < len;++i) {
    gdjs.homeCode.GDbtnObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.homeCode.GDstarsObjects1.length ;i < len;++i) {
    gdjs.homeCode.GDstarsObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


};gdjs.homeCode.eventsList1 = function(runtimeScene) {

{


{
}

}


};gdjs.homeCode.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.homeCode.GDportalObjects1 */

gdjs.homeCode.condition0IsTrue_0.val = false;
gdjs.homeCode.condition1IsTrue_0.val = false;
gdjs.homeCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.homeCode.GDportalObjects1.length;i<l;++i) {
    if ( gdjs.homeCode.GDportalObjects1[i].isCurrentAnimationName("empty") ) {
        gdjs.homeCode.condition0IsTrue_0.val = true;
        gdjs.homeCode.GDportalObjects1[k] = gdjs.homeCode.GDportalObjects1[i];
        ++k;
    }
}
gdjs.homeCode.GDportalObjects1.length = k;}if ( gdjs.homeCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.homeCode.GDportalObjects1.length;i<l;++i) {
    if ( gdjs.homeCode.GDportalObjects1[i].hasAnimationEnded() ) {
        gdjs.homeCode.condition1IsTrue_0.val = true;
        gdjs.homeCode.GDportalObjects1[k] = gdjs.homeCode.GDportalObjects1[i];
        ++k;
    }
}
gdjs.homeCode.GDportalObjects1.length = k;}if ( gdjs.homeCode.condition1IsTrue_0.val ) {
{
{gdjs.homeCode.conditionTrue_1 = gdjs.homeCode.condition2IsTrue_0;
gdjs.homeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9009220);
}
}}
}
if (gdjs.homeCode.condition2IsTrue_0.val) {
{gdjs.evtTools.window.openURL(gdjs.evtsExt__Choose__RandomString.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), runtimeScene);
}}

}


};gdjs.homeCode.eventsList3 = function(runtimeScene) {

{


gdjs.homeCode.condition0IsTrue_0.val = false;
gdjs.homeCode.condition1IsTrue_0.val = false;
{
gdjs.homeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.homeCode.condition0IsTrue_0.val ) {
{
{gdjs.homeCode.conditionTrue_1 = gdjs.homeCode.condition1IsTrue_0;
gdjs.homeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9004988);
}
}}
if (gdjs.homeCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("btn"), gdjs.homeCode.GDbtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("portal"), gdjs.homeCode.GDportalObjects2);
{for(var i = 0, len = gdjs.homeCode.GDbtnObjects2.length ;i < len;++i) {
    gdjs.homeCode.GDbtnObjects2[i].setAnimationName("btnclk");
}
}{for(var i = 0, len = gdjs.homeCode.GDportalObjects2.length ;i < len;++i) {
    gdjs.homeCode.GDportalObjects2[i].setAnimationName("open");
}
}{gdjs.evtsExt__CameraShake__StartShaking.func(runtimeScene, 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.homeCode.condition0IsTrue_0.val = false;
{
gdjs.homeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.homeCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("btn"), gdjs.homeCode.GDbtnObjects2);
{for(var i = 0, len = gdjs.homeCode.GDbtnObjects2.length ;i < len;++i) {
    gdjs.homeCode.GDbtnObjects2[i].setAnimationName("btn");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("portal"), gdjs.homeCode.GDportalObjects2);

gdjs.homeCode.condition0IsTrue_0.val = false;
gdjs.homeCode.condition1IsTrue_0.val = false;
gdjs.homeCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.homeCode.GDportalObjects2.length;i<l;++i) {
    if ( gdjs.homeCode.GDportalObjects2[i].isCurrentAnimationName("open") ) {
        gdjs.homeCode.condition0IsTrue_0.val = true;
        gdjs.homeCode.GDportalObjects2[k] = gdjs.homeCode.GDportalObjects2[i];
        ++k;
    }
}
gdjs.homeCode.GDportalObjects2.length = k;}if ( gdjs.homeCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.homeCode.GDportalObjects2.length;i<l;++i) {
    if ( gdjs.homeCode.GDportalObjects2[i].hasAnimationEnded() ) {
        gdjs.homeCode.condition1IsTrue_0.val = true;
        gdjs.homeCode.GDportalObjects2[k] = gdjs.homeCode.GDportalObjects2[i];
        ++k;
    }
}
gdjs.homeCode.GDportalObjects2.length = k;}if ( gdjs.homeCode.condition1IsTrue_0.val ) {
{
{gdjs.homeCode.conditionTrue_1 = gdjs.homeCode.condition2IsTrue_0;
gdjs.homeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9006796);
}
}}
}
if (gdjs.homeCode.condition2IsTrue_0.val) {
/* Reuse gdjs.homeCode.GDportalObjects2 */
{for(var i = 0, len = gdjs.homeCode.GDportalObjects2.length ;i < len;++i) {
    gdjs.homeCode.GDportalObjects2[i].setAnimationName("loop");
}
}{gdjs.evtsExt__CameraShake__StopShaking.func(runtimeScene, 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.homeCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("portal"), gdjs.homeCode.GDportalObjects1);

gdjs.homeCode.condition0IsTrue_0.val = false;
gdjs.homeCode.condition1IsTrue_0.val = false;
gdjs.homeCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.homeCode.GDportalObjects1.length;i<l;++i) {
    if ( gdjs.homeCode.GDportalObjects1[i].isCurrentAnimationName("loop") ) {
        gdjs.homeCode.condition0IsTrue_0.val = true;
        gdjs.homeCode.GDportalObjects1[k] = gdjs.homeCode.GDportalObjects1[i];
        ++k;
    }
}
gdjs.homeCode.GDportalObjects1.length = k;}if ( gdjs.homeCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.homeCode.GDportalObjects1.length;i<l;++i) {
    if ( gdjs.homeCode.GDportalObjects1[i].hasAnimationEnded() ) {
        gdjs.homeCode.condition1IsTrue_0.val = true;
        gdjs.homeCode.GDportalObjects1[k] = gdjs.homeCode.GDportalObjects1[i];
        ++k;
    }
}
gdjs.homeCode.GDportalObjects1.length = k;}if ( gdjs.homeCode.condition1IsTrue_0.val ) {
{
{gdjs.homeCode.conditionTrue_1 = gdjs.homeCode.condition2IsTrue_0;
gdjs.homeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9008100);
}
}}
}
if (gdjs.homeCode.condition2IsTrue_0.val) {
/* Reuse gdjs.homeCode.GDportalObjects1 */
{for(var i = 0, len = gdjs.homeCode.GDportalObjects1.length ;i < len;++i) {
    gdjs.homeCode.GDportalObjects1[i].setAnimationName("empty");
}
}
{ //Subevents
gdjs.homeCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.homeCode.eventsList4 = function(runtimeScene) {

{


gdjs.homeCode.eventsList0(runtimeScene);
}


{


gdjs.homeCode.eventsList3(runtimeScene);
}


};

gdjs.homeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.homeCode.GDportalObjects1.length = 0;
gdjs.homeCode.GDportalObjects2.length = 0;
gdjs.homeCode.GDportalObjects3.length = 0;
gdjs.homeCode.GDbtnObjects1.length = 0;
gdjs.homeCode.GDbtnObjects2.length = 0;
gdjs.homeCode.GDbtnObjects3.length = 0;
gdjs.homeCode.GDlogoObjects1.length = 0;
gdjs.homeCode.GDlogoObjects2.length = 0;
gdjs.homeCode.GDlogoObjects3.length = 0;
gdjs.homeCode.GDstarsObjects1.length = 0;
gdjs.homeCode.GDstarsObjects2.length = 0;
gdjs.homeCode.GDstarsObjects3.length = 0;

gdjs.homeCode.eventsList4(runtimeScene);
return;

}

gdjs['homeCode'] = gdjs.homeCode;
