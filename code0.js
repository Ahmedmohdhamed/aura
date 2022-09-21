gdjs.homeCode = {};
gdjs.homeCode.GDportalObjects1= [];
gdjs.homeCode.GDportalObjects2= [];
gdjs.homeCode.GDbtnObjects1= [];
gdjs.homeCode.GDbtnObjects2= [];
gdjs.homeCode.GDlogoObjects1= [];
gdjs.homeCode.GDlogoObjects2= [];
gdjs.homeCode.GDstarsObjects1= [];
gdjs.homeCode.GDstarsObjects2= [];

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
}

}


};gdjs.homeCode.eventsList1 = function(runtimeScene) {

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
gdjs.homeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8484900);
}
}}
}
if (gdjs.homeCode.condition2IsTrue_0.val) {
{gdjs.evtTools.window.openURL(gdjs.evtsExt__Choose__RandomString.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), runtimeScene);
}}

}


};gdjs.homeCode.eventsList2 = function(runtimeScene) {

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


{


gdjs.homeCode.condition0IsTrue_0.val = false;
gdjs.homeCode.condition1IsTrue_0.val = false;
{
gdjs.homeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.homeCode.condition0IsTrue_0.val ) {
{
{gdjs.homeCode.conditionTrue_1 = gdjs.homeCode.condition1IsTrue_0;
gdjs.homeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8481236);
}
}}
if (gdjs.homeCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("btn"), gdjs.homeCode.GDbtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("portal"), gdjs.homeCode.GDportalObjects1);
{for(var i = 0, len = gdjs.homeCode.GDbtnObjects1.length ;i < len;++i) {
    gdjs.homeCode.GDbtnObjects1[i].setAnimationName("btnclk");
}
}{for(var i = 0, len = gdjs.homeCode.GDportalObjects1.length ;i < len;++i) {
    gdjs.homeCode.GDportalObjects1[i].setAnimationName("open");
}
}}

}


{


gdjs.homeCode.condition0IsTrue_0.val = false;
{
gdjs.homeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.homeCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("btn"), gdjs.homeCode.GDbtnObjects1);
{for(var i = 0, len = gdjs.homeCode.GDbtnObjects1.length ;i < len;++i) {
    gdjs.homeCode.GDbtnObjects1[i].setAnimationName("btn");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("portal"), gdjs.homeCode.GDportalObjects1);

gdjs.homeCode.condition0IsTrue_0.val = false;
gdjs.homeCode.condition1IsTrue_0.val = false;
gdjs.homeCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.homeCode.GDportalObjects1.length;i<l;++i) {
    if ( gdjs.homeCode.GDportalObjects1[i].isCurrentAnimationName("open") ) {
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
gdjs.homeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8482740);
}
}}
}
if (gdjs.homeCode.condition2IsTrue_0.val) {
/* Reuse gdjs.homeCode.GDportalObjects1 */
{for(var i = 0, len = gdjs.homeCode.GDportalObjects1.length ;i < len;++i) {
    gdjs.homeCode.GDportalObjects1[i].setAnimationName("loop");
}
}
{ //Subevents
gdjs.homeCode.eventsList0(runtimeScene);} //End of subevents
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
gdjs.homeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8483924);
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
gdjs.homeCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.homeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.homeCode.GDportalObjects1.length = 0;
gdjs.homeCode.GDportalObjects2.length = 0;
gdjs.homeCode.GDbtnObjects1.length = 0;
gdjs.homeCode.GDbtnObjects2.length = 0;
gdjs.homeCode.GDlogoObjects1.length = 0;
gdjs.homeCode.GDlogoObjects2.length = 0;
gdjs.homeCode.GDstarsObjects1.length = 0;
gdjs.homeCode.GDstarsObjects2.length = 0;

gdjs.homeCode.eventsList2(runtimeScene);
return;

}

gdjs['homeCode'] = gdjs.homeCode;
