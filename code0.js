gdjs.main_32frameCode = {};
gdjs.main_32frameCode.GDbgObjects1= [];
gdjs.main_32frameCode.GDbgObjects2= [];
gdjs.main_32frameCode.GDstartObjects1= [];
gdjs.main_32frameCode.GDstartObjects2= [];
gdjs.main_32frameCode.GDtagObjects1= [];
gdjs.main_32frameCode.GDtagObjects2= [];
gdjs.main_32frameCode.GDtitleObjects1= [];
gdjs.main_32frameCode.GDtitleObjects2= [];
gdjs.main_32frameCode.GDinstructionsObjects1= [];
gdjs.main_32frameCode.GDinstructionsObjects2= [];
gdjs.main_32frameCode.GDbg1Objects1= [];
gdjs.main_32frameCode.GDbg1Objects2= [];
gdjs.main_32frameCode.GDfade2Objects1= [];
gdjs.main_32frameCode.GDfade2Objects2= [];
gdjs.main_32frameCode.GDlogoObjects1= [];
gdjs.main_32frameCode.GDlogoObjects2= [];
gdjs.main_32frameCode.GDhtpObjects1= [];
gdjs.main_32frameCode.GDhtpObjects2= [];
gdjs.main_32frameCode.GDlrsObjects1= [];
gdjs.main_32frameCode.GDlrsObjects2= [];
gdjs.main_32frameCode.GDupObjects1= [];
gdjs.main_32frameCode.GDupObjects2= [];
gdjs.main_32frameCode.GDup1Objects1= [];
gdjs.main_32frameCode.GDup1Objects2= [];
gdjs.main_32frameCode.GDNewObject3Objects1= [];
gdjs.main_32frameCode.GDNewObject3Objects2= [];
gdjs.main_32frameCode.GDrightObjects1= [];
gdjs.main_32frameCode.GDrightObjects2= [];
gdjs.main_32frameCode.GDleftObjects1= [];
gdjs.main_32frameCode.GDleftObjects2= [];
gdjs.main_32frameCode.GDjumpObjects1= [];
gdjs.main_32frameCode.GDjumpObjects2= [];
gdjs.main_32frameCode.GDeneObjects1= [];
gdjs.main_32frameCode.GDeneObjects2= [];
gdjs.main_32frameCode.GDins1Objects1= [];
gdjs.main_32frameCode.GDins1Objects2= [];
gdjs.main_32frameCode.GDins2Objects1= [];
gdjs.main_32frameCode.GDins2Objects2= [];
gdjs.main_32frameCode.GDubgObjects1= [];
gdjs.main_32frameCode.GDubgObjects2= [];
gdjs.main_32frameCode.GDp2Objects1= [];
gdjs.main_32frameCode.GDp2Objects2= [];
gdjs.main_32frameCode.GDNewObjectObjects1= [];
gdjs.main_32frameCode.GDNewObjectObjects2= [];
gdjs.main_32frameCode.GDp2intObjects1= [];
gdjs.main_32frameCode.GDp2intObjects2= [];
gdjs.main_32frameCode.GDp1intObjects1= [];
gdjs.main_32frameCode.GDp1intObjects2= [];
gdjs.main_32frameCode.GDstart1Objects1= [];
gdjs.main_32frameCode.GDstart1Objects2= [];
gdjs.main_32frameCode.GDstart2Objects1= [];
gdjs.main_32frameCode.GDstart2Objects2= [];

gdjs.main_32frameCode.conditionTrue_0 = {val:false};
gdjs.main_32frameCode.condition0IsTrue_0 = {val:false};
gdjs.main_32frameCode.condition1IsTrue_0 = {val:false};
gdjs.main_32frameCode.condition2IsTrue_0 = {val:false};


gdjs.main_32frameCode.mapOfGDgdjs_46main_9532frameCode_46GDfade2Objects1Objects = Hashtable.newFrom({"fade2": gdjs.main_32frameCode.GDfade2Objects1});gdjs.main_32frameCode.mapOfGDgdjs_46main_9532frameCode_46GDstartObjects1Objects = Hashtable.newFrom({"start": gdjs.main_32frameCode.GDstartObjects1});gdjs.main_32frameCode.mapOfGDgdjs_46main_9532frameCode_46GDstart1Objects1Objects = Hashtable.newFrom({"start1": gdjs.main_32frameCode.GDstart1Objects1});gdjs.main_32frameCode.mapOfGDgdjs_46main_9532frameCode_46GDp2Objects1Objects = Hashtable.newFrom({"p2": gdjs.main_32frameCode.GDp2Objects1});gdjs.main_32frameCode.mapOfGDgdjs_46main_9532frameCode_46GDstart2Objects1Objects = Hashtable.newFrom({"start2": gdjs.main_32frameCode.GDstart2Objects1});gdjs.main_32frameCode.eventsList0 = function(runtimeScene) {

{


gdjs.main_32frameCode.condition0IsTrue_0.val = false;
{
gdjs.main_32frameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.main_32frameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("fade").setNumber(0);
}}

}


{


gdjs.main_32frameCode.condition0IsTrue_0.val = false;
{
gdjs.main_32frameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.main_32frameCode.condition0IsTrue_0.val) {
gdjs.main_32frameCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));
gdjs.main_32frameCode.GDp1intObjects1.createFrom(runtimeScene.getObjects("p1int"));
gdjs.main_32frameCode.GDp2intObjects1.createFrom(runtimeScene.getObjects("p2int"));
gdjs.main_32frameCode.GDstart1Objects1.createFrom(runtimeScene.getObjects("start1"));
gdjs.main_32frameCode.GDstart2Objects1.createFrom(runtimeScene.getObjects("start2"));
{for(var i = 0, len = gdjs.main_32frameCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.main_32frameCode.GDNewObjectObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.main_32frameCode.GDp2intObjects1.length ;i < len;++i) {
    gdjs.main_32frameCode.GDp2intObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.main_32frameCode.GDp1intObjects1.length ;i < len;++i) {
    gdjs.main_32frameCode.GDp1intObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.main_32frameCode.GDstart1Objects1.length ;i < len;++i) {
    gdjs.main_32frameCode.GDstart1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.main_32frameCode.GDstart2Objects1.length ;i < len;++i) {
    gdjs.main_32frameCode.GDstart2Objects1[i].hide();
}
}}

}


{


{
}

}


{


{
}

}


{


gdjs.main_32frameCode.condition0IsTrue_0.val = false;
{
gdjs.main_32frameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("fade")) == 0;
}if (gdjs.main_32frameCode.condition0IsTrue_0.val) {
gdjs.main_32frameCode.GDfade2Objects1.createFrom(runtimeScene.getObjects("fade2"));
{gdjs.evtsExt__fade__fadein.func(runtimeScene, gdjs.main_32frameCode.mapOfGDgdjs_46main_9532frameCode_46GDfade2Objects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.main_32frameCode.GDstartObjects1.createFrom(runtimeScene.getObjects("start"));

gdjs.main_32frameCode.condition0IsTrue_0.val = false;
gdjs.main_32frameCode.condition1IsTrue_0.val = false;
{
gdjs.main_32frameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.main_32frameCode.mapOfGDgdjs_46main_9532frameCode_46GDstartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.main_32frameCode.condition0IsTrue_0.val ) {
{
gdjs.main_32frameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.main_32frameCode.condition1IsTrue_0.val) {
gdjs.main_32frameCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));
gdjs.main_32frameCode.GDp1intObjects1.createFrom(runtimeScene.getObjects("p1int"));
gdjs.main_32frameCode.GDstart1Objects1.createFrom(runtimeScene.getObjects("start1"));
{for(var i = 0, len = gdjs.main_32frameCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.main_32frameCode.GDNewObjectObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.main_32frameCode.GDp1intObjects1.length ;i < len;++i) {
    gdjs.main_32frameCode.GDp1intObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.main_32frameCode.GDstart1Objects1.length ;i < len;++i) {
    gdjs.main_32frameCode.GDstart1Objects1[i].hide(false);
}
}}

}


{

gdjs.main_32frameCode.GDstart1Objects1.createFrom(runtimeScene.getObjects("start1"));

gdjs.main_32frameCode.condition0IsTrue_0.val = false;
gdjs.main_32frameCode.condition1IsTrue_0.val = false;
{
gdjs.main_32frameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.main_32frameCode.mapOfGDgdjs_46main_9532frameCode_46GDstart1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.main_32frameCode.condition0IsTrue_0.val ) {
{
gdjs.main_32frameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.main_32frameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lvl 1", false);
}}

}


{

gdjs.main_32frameCode.GDp2Objects1.createFrom(runtimeScene.getObjects("p2"));

gdjs.main_32frameCode.condition0IsTrue_0.val = false;
gdjs.main_32frameCode.condition1IsTrue_0.val = false;
{
gdjs.main_32frameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.main_32frameCode.mapOfGDgdjs_46main_9532frameCode_46GDp2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.main_32frameCode.condition0IsTrue_0.val ) {
{
gdjs.main_32frameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.main_32frameCode.condition1IsTrue_0.val) {
gdjs.main_32frameCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));
gdjs.main_32frameCode.GDp2intObjects1.createFrom(runtimeScene.getObjects("p2int"));
gdjs.main_32frameCode.GDstart2Objects1.createFrom(runtimeScene.getObjects("start2"));
{for(var i = 0, len = gdjs.main_32frameCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.main_32frameCode.GDNewObjectObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.main_32frameCode.GDp2intObjects1.length ;i < len;++i) {
    gdjs.main_32frameCode.GDp2intObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.main_32frameCode.GDstart2Objects1.length ;i < len;++i) {
    gdjs.main_32frameCode.GDstart2Objects1[i].hide(false);
}
}}

}


{

gdjs.main_32frameCode.GDstart2Objects1.createFrom(runtimeScene.getObjects("start2"));

gdjs.main_32frameCode.condition0IsTrue_0.val = false;
gdjs.main_32frameCode.condition1IsTrue_0.val = false;
{
gdjs.main_32frameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.main_32frameCode.mapOfGDgdjs_46main_9532frameCode_46GDstart2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.main_32frameCode.condition0IsTrue_0.val ) {
{
gdjs.main_32frameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.main_32frameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lvl 1_w", false);
}}

}


{


{
gdjs.main_32frameCode.GDubgObjects1.createFrom(runtimeScene.getObjects("ubg"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.main_32frameCode.GDubgObjects1.length !== 0 ? gdjs.main_32frameCode.GDubgObjects1[0] : null), true, "", 0);
}}

}


};

gdjs.main_32frameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.main_32frameCode.GDbgObjects1.length = 0;
gdjs.main_32frameCode.GDbgObjects2.length = 0;
gdjs.main_32frameCode.GDstartObjects1.length = 0;
gdjs.main_32frameCode.GDstartObjects2.length = 0;
gdjs.main_32frameCode.GDtagObjects1.length = 0;
gdjs.main_32frameCode.GDtagObjects2.length = 0;
gdjs.main_32frameCode.GDtitleObjects1.length = 0;
gdjs.main_32frameCode.GDtitleObjects2.length = 0;
gdjs.main_32frameCode.GDinstructionsObjects1.length = 0;
gdjs.main_32frameCode.GDinstructionsObjects2.length = 0;
gdjs.main_32frameCode.GDbg1Objects1.length = 0;
gdjs.main_32frameCode.GDbg1Objects2.length = 0;
gdjs.main_32frameCode.GDfade2Objects1.length = 0;
gdjs.main_32frameCode.GDfade2Objects2.length = 0;
gdjs.main_32frameCode.GDlogoObjects1.length = 0;
gdjs.main_32frameCode.GDlogoObjects2.length = 0;
gdjs.main_32frameCode.GDhtpObjects1.length = 0;
gdjs.main_32frameCode.GDhtpObjects2.length = 0;
gdjs.main_32frameCode.GDlrsObjects1.length = 0;
gdjs.main_32frameCode.GDlrsObjects2.length = 0;
gdjs.main_32frameCode.GDupObjects1.length = 0;
gdjs.main_32frameCode.GDupObjects2.length = 0;
gdjs.main_32frameCode.GDup1Objects1.length = 0;
gdjs.main_32frameCode.GDup1Objects2.length = 0;
gdjs.main_32frameCode.GDNewObject3Objects1.length = 0;
gdjs.main_32frameCode.GDNewObject3Objects2.length = 0;
gdjs.main_32frameCode.GDrightObjects1.length = 0;
gdjs.main_32frameCode.GDrightObjects2.length = 0;
gdjs.main_32frameCode.GDleftObjects1.length = 0;
gdjs.main_32frameCode.GDleftObjects2.length = 0;
gdjs.main_32frameCode.GDjumpObjects1.length = 0;
gdjs.main_32frameCode.GDjumpObjects2.length = 0;
gdjs.main_32frameCode.GDeneObjects1.length = 0;
gdjs.main_32frameCode.GDeneObjects2.length = 0;
gdjs.main_32frameCode.GDins1Objects1.length = 0;
gdjs.main_32frameCode.GDins1Objects2.length = 0;
gdjs.main_32frameCode.GDins2Objects1.length = 0;
gdjs.main_32frameCode.GDins2Objects2.length = 0;
gdjs.main_32frameCode.GDubgObjects1.length = 0;
gdjs.main_32frameCode.GDubgObjects2.length = 0;
gdjs.main_32frameCode.GDp2Objects1.length = 0;
gdjs.main_32frameCode.GDp2Objects2.length = 0;
gdjs.main_32frameCode.GDNewObjectObjects1.length = 0;
gdjs.main_32frameCode.GDNewObjectObjects2.length = 0;
gdjs.main_32frameCode.GDp2intObjects1.length = 0;
gdjs.main_32frameCode.GDp2intObjects2.length = 0;
gdjs.main_32frameCode.GDp1intObjects1.length = 0;
gdjs.main_32frameCode.GDp1intObjects2.length = 0;
gdjs.main_32frameCode.GDstart1Objects1.length = 0;
gdjs.main_32frameCode.GDstart1Objects2.length = 0;
gdjs.main_32frameCode.GDstart2Objects1.length = 0;
gdjs.main_32frameCode.GDstart2Objects2.length = 0;

gdjs.main_32frameCode.eventsList0(runtimeScene);
return;

}

gdjs['main_32frameCode'] = gdjs.main_32frameCode;
