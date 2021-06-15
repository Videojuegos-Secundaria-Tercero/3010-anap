gdjs.SLNCode = {};
gdjs.SLNCode.GDCajiregaloObjects1= [];
gdjs.SLNCode.GDCajiregaloObjects2= [];
gdjs.SLNCode.GDCajiregaloObjects3= [];
gdjs.SLNCode.GDJefefinObjects1= [];
gdjs.SLNCode.GDJefefinObjects2= [];
gdjs.SLNCode.GDJefefinObjects3= [];
gdjs.SLNCode.GDFantasmaObjects1= [];
gdjs.SLNCode.GDFantasmaObjects2= [];
gdjs.SLNCode.GDFantasmaObjects3= [];
gdjs.SLNCode.GDEstrenjaObjects1= [];
gdjs.SLNCode.GDEstrenjaObjects2= [];
gdjs.SLNCode.GDEstrenjaObjects3= [];
gdjs.SLNCode.GDPNObjects1= [];
gdjs.SLNCode.GDPNObjects2= [];
gdjs.SLNCode.GDPNObjects3= [];
gdjs.SLNCode.GDParedObjects1= [];
gdjs.SLNCode.GDParedObjects2= [];
gdjs.SLNCode.GDParedObjects3= [];
gdjs.SLNCode.GDPSObjects1= [];
gdjs.SLNCode.GDPSObjects2= [];
gdjs.SLNCode.GDPSObjects3= [];
gdjs.SLNCode.GDFondocomObjects1= [];
gdjs.SLNCode.GDFondocomObjects2= [];
gdjs.SLNCode.GDFondocomObjects3= [];
gdjs.SLNCode.GDNewObjectObjects1= [];
gdjs.SLNCode.GDNewObjectObjects2= [];
gdjs.SLNCode.GDNewObjectObjects3= [];
gdjs.SLNCode.GDNewObject2Objects1= [];
gdjs.SLNCode.GDNewObject2Objects2= [];
gdjs.SLNCode.GDNewObject2Objects3= [];
gdjs.SLNCode.GDNewObject3Objects1= [];
gdjs.SLNCode.GDNewObject3Objects2= [];
gdjs.SLNCode.GDNewObject3Objects3= [];
gdjs.SLNCode.GDNewObject4Objects1= [];
gdjs.SLNCode.GDNewObject4Objects2= [];
gdjs.SLNCode.GDNewObject4Objects3= [];
gdjs.SLNCode.GDNewObject5Objects1= [];
gdjs.SLNCode.GDNewObject5Objects2= [];
gdjs.SLNCode.GDNewObject5Objects3= [];
gdjs.SLNCode.GDNewObject6Objects1= [];
gdjs.SLNCode.GDNewObject6Objects2= [];
gdjs.SLNCode.GDNewObject6Objects3= [];
gdjs.SLNCode.GDNewObject7Objects1= [];
gdjs.SLNCode.GDNewObject7Objects2= [];
gdjs.SLNCode.GDNewObject7Objects3= [];
gdjs.SLNCode.GDNewObject8Objects1= [];
gdjs.SLNCode.GDNewObject8Objects2= [];
gdjs.SLNCode.GDNewObject8Objects3= [];
gdjs.SLNCode.GDNewObject9Objects1= [];
gdjs.SLNCode.GDNewObject9Objects2= [];
gdjs.SLNCode.GDNewObject9Objects3= [];

gdjs.SLNCode.conditionTrue_0 = {val:false};
gdjs.SLNCode.condition0IsTrue_0 = {val:false};
gdjs.SLNCode.condition1IsTrue_0 = {val:false};
gdjs.SLNCode.condition2IsTrue_0 = {val:false};
gdjs.SLNCode.conditionTrue_1 = {val:false};
gdjs.SLNCode.condition0IsTrue_1 = {val:false};
gdjs.SLNCode.condition1IsTrue_1 = {val:false};
gdjs.SLNCode.condition2IsTrue_1 = {val:false};


gdjs.SLNCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.SLNCode.GDFantasmaObjects1, gdjs.SLNCode.GDFantasmaObjects2);


gdjs.SLNCode.condition0IsTrue_0.val = false;
gdjs.SLNCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SLNCode.GDFantasmaObjects2.length;i<l;++i) {
    if ( !(gdjs.SLNCode.GDFantasmaObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.SLNCode.condition0IsTrue_0.val = true;
        gdjs.SLNCode.GDFantasmaObjects2[k] = gdjs.SLNCode.GDFantasmaObjects2[i];
        ++k;
    }
}
gdjs.SLNCode.GDFantasmaObjects2.length = k;}if ( gdjs.SLNCode.condition0IsTrue_0.val ) {
{
{gdjs.SLNCode.conditionTrue_1 = gdjs.SLNCode.condition1IsTrue_0;
gdjs.SLNCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16665860);
}
}}
if (gdjs.SLNCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SLNCode.GDFantasmaObjects2 */
{for(var i = 0, len = gdjs.SLNCode.GDFantasmaObjects2.length ;i < len;++i) {
    gdjs.SLNCode.GDFantasmaObjects2[i].setAnimationName("Quieto");
}
}}

}


{

/* Reuse gdjs.SLNCode.GDFantasmaObjects1 */

gdjs.SLNCode.condition0IsTrue_0.val = false;
gdjs.SLNCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SLNCode.GDFantasmaObjects1.length;i<l;++i) {
    if ( gdjs.SLNCode.GDFantasmaObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.SLNCode.condition0IsTrue_0.val = true;
        gdjs.SLNCode.GDFantasmaObjects1[k] = gdjs.SLNCode.GDFantasmaObjects1[i];
        ++k;
    }
}
gdjs.SLNCode.GDFantasmaObjects1.length = k;}if ( gdjs.SLNCode.condition0IsTrue_0.val ) {
{
{gdjs.SLNCode.conditionTrue_1 = gdjs.SLNCode.condition1IsTrue_0;
gdjs.SLNCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16667020);
}
}}
if (gdjs.SLNCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SLNCode.GDFantasmaObjects1 */
{for(var i = 0, len = gdjs.SLNCode.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.SLNCode.GDFantasmaObjects1[i].setAnimationName("Caminar");
}
}}

}


};gdjs.SLNCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.SLNCode.GDCajiregaloObjects1 */

gdjs.SLNCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SLNCode.GDCajiregaloObjects1.length;i<l;++i) {
    if ( gdjs.SLNCode.GDCajiregaloObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.SLNCode.condition0IsTrue_0.val = true;
        gdjs.SLNCode.GDCajiregaloObjects1[k] = gdjs.SLNCode.GDCajiregaloObjects1[i];
        ++k;
    }
}
gdjs.SLNCode.GDCajiregaloObjects1.length = k;}if (gdjs.SLNCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SLNCode.GDCajiregaloObjects1 */
{for(var i = 0, len = gdjs.SLNCode.GDCajiregaloObjects1.length ;i < len;++i) {
    gdjs.SLNCode.GDCajiregaloObjects1[i].setAnimationName("Camino");
}
}}

}


};gdjs.SLNCode.mapOfGDgdjs_46SLNCode_46GDFantasmaObjects1Objects = Hashtable.newFrom({"Fantasma": gdjs.SLNCode.GDFantasmaObjects1});gdjs.SLNCode.mapOfGDgdjs_46SLNCode_46GDCajiregaloObjects1Objects = Hashtable.newFrom({"Cajiregalo": gdjs.SLNCode.GDCajiregaloObjects1});gdjs.SLNCode.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.SLNCode.GDFantasmaObjects1 */

gdjs.SLNCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SLNCode.GDFantasmaObjects1.length;i<l;++i) {
    if ( gdjs.SLNCode.GDFantasmaObjects1[i].hasAnimationEnded() ) {
        gdjs.SLNCode.condition0IsTrue_0.val = true;
        gdjs.SLNCode.GDFantasmaObjects1[k] = gdjs.SLNCode.GDFantasmaObjects1[i];
        ++k;
    }
}
gdjs.SLNCode.GDFantasmaObjects1.length = k;}if (gdjs.SLNCode.condition0IsTrue_0.val) {
}

}


};gdjs.SLNCode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.SLNCode.GDEstrenjaObjects1 */

gdjs.SLNCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SLNCode.GDEstrenjaObjects1.length;i<l;++i) {
    if ( gdjs.SLNCode.GDEstrenjaObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.SLNCode.condition0IsTrue_0.val = true;
        gdjs.SLNCode.GDEstrenjaObjects1[k] = gdjs.SLNCode.GDEstrenjaObjects1[i];
        ++k;
    }
}
gdjs.SLNCode.GDEstrenjaObjects1.length = k;}if (gdjs.SLNCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SLNCode.GDEstrenjaObjects1 */
{for(var i = 0, len = gdjs.SLNCode.GDEstrenjaObjects1.length ;i < len;++i) {
    gdjs.SLNCode.GDEstrenjaObjects1[i].setAnimationName("Caminar");
}
}}

}


};gdjs.SLNCode.mapOfGDgdjs_46SLNCode_46GDFantasmaObjects1Objects = Hashtable.newFrom({"Fantasma": gdjs.SLNCode.GDFantasmaObjects1});gdjs.SLNCode.mapOfGDgdjs_46SLNCode_46GDEstrenjaObjects1Objects = Hashtable.newFrom({"Estrenja": gdjs.SLNCode.GDEstrenjaObjects1});gdjs.SLNCode.mapOfGDgdjs_46SLNCode_46GDFantasmaObjects1Objects = Hashtable.newFrom({"Fantasma": gdjs.SLNCode.GDFantasmaObjects1});gdjs.SLNCode.mapOfGDgdjs_46SLNCode_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.SLNCode.GDNewObject4Objects1});gdjs.SLNCode.mapOfGDgdjs_46SLNCode_46GDNewObject8Objects1Objects = Hashtable.newFrom({"NewObject8": gdjs.SLNCode.GDNewObject8Objects1});gdjs.SLNCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.SLNCode.GDFantasmaObjects1);

gdjs.SLNCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SLNCode.GDFantasmaObjects1.length;i<l;++i) {
    if ( gdjs.SLNCode.GDFantasmaObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.SLNCode.condition0IsTrue_0.val = true;
        gdjs.SLNCode.GDFantasmaObjects1[k] = gdjs.SLNCode.GDFantasmaObjects1[i];
        ++k;
    }
}
gdjs.SLNCode.GDFantasmaObjects1.length = k;}if (gdjs.SLNCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SLNCode.GDFantasmaObjects1 */
{for(var i = 0, len = gdjs.SLNCode.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.SLNCode.GDFantasmaObjects1[i].setAnimationName("Saltar");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.SLNCode.GDFantasmaObjects1);

gdjs.SLNCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SLNCode.GDFantasmaObjects1.length;i<l;++i) {
    if ( gdjs.SLNCode.GDFantasmaObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.SLNCode.condition0IsTrue_0.val = true;
        gdjs.SLNCode.GDFantasmaObjects1[k] = gdjs.SLNCode.GDFantasmaObjects1[i];
        ++k;
    }
}
gdjs.SLNCode.GDFantasmaObjects1.length = k;}if (gdjs.SLNCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SLNCode.GDFantasmaObjects1 */
{for(var i = 0, len = gdjs.SLNCode.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.SLNCode.GDFantasmaObjects1[i].setAnimationName("Caer");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.SLNCode.GDFantasmaObjects1);

gdjs.SLNCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SLNCode.GDFantasmaObjects1.length;i<l;++i) {
    if ( gdjs.SLNCode.GDFantasmaObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.SLNCode.condition0IsTrue_0.val = true;
        gdjs.SLNCode.GDFantasmaObjects1[k] = gdjs.SLNCode.GDFantasmaObjects1[i];
        ++k;
    }
}
gdjs.SLNCode.GDFantasmaObjects1.length = k;}if (gdjs.SLNCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SLNCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.SLNCode.condition0IsTrue_0.val = false;
{
gdjs.SLNCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.SLNCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.SLNCode.GDFantasmaObjects1);
{for(var i = 0, len = gdjs.SLNCode.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.SLNCode.GDFantasmaObjects1[i].flipX(false);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.SLNCode.GDFantasmaObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.SLNCode.GDFantasmaObjects1.length === 0 ) ? 0 :gdjs.SLNCode.GDFantasmaObjects1[0].getPointX("Center")), "", 0);
}}

}


{


gdjs.SLNCode.condition0IsTrue_0.val = false;
{
gdjs.SLNCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.SLNCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.SLNCode.GDFantasmaObjects1);
{for(var i = 0, len = gdjs.SLNCode.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.SLNCode.GDFantasmaObjects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cajiregalo"), gdjs.SLNCode.GDCajiregaloObjects1);

gdjs.SLNCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SLNCode.GDCajiregaloObjects1.length;i<l;++i) {
    if ( gdjs.SLNCode.GDCajiregaloObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.SLNCode.condition0IsTrue_0.val = true;
        gdjs.SLNCode.GDCajiregaloObjects1[k] = gdjs.SLNCode.GDCajiregaloObjects1[i];
        ++k;
    }
}
gdjs.SLNCode.GDCajiregaloObjects1.length = k;}if (gdjs.SLNCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SLNCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cajiregalo"), gdjs.SLNCode.GDCajiregaloObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.SLNCode.GDFantasmaObjects1);

gdjs.SLNCode.condition0IsTrue_0.val = false;
gdjs.SLNCode.condition1IsTrue_0.val = false;
{
gdjs.SLNCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SLNCode.mapOfGDgdjs_46SLNCode_46GDFantasmaObjects1Objects, gdjs.SLNCode.mapOfGDgdjs_46SLNCode_46GDCajiregaloObjects1Objects, false, runtimeScene, false);
}if ( gdjs.SLNCode.condition0IsTrue_0.val ) {
{
{gdjs.SLNCode.conditionTrue_1 = gdjs.SLNCode.condition1IsTrue_0;
gdjs.SLNCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16671532);
}
}}
if (gdjs.SLNCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SLNCode.GDFantasmaObjects1 */
{for(var i = 0, len = gdjs.SLNCode.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.SLNCode.GDFantasmaObjects1[i].setAnimationName("Daño");
}
}{for(var i = 0, len = gdjs.SLNCode.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.SLNCode.GDFantasmaObjects1[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.SLNCode.GDFantasmaObjects1);

gdjs.SLNCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SLNCode.GDFantasmaObjects1.length;i<l;++i) {
    if ( gdjs.SLNCode.GDFantasmaObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.SLNCode.condition0IsTrue_0.val = true;
        gdjs.SLNCode.GDFantasmaObjects1[k] = gdjs.SLNCode.GDFantasmaObjects1[i];
        ++k;
    }
}
gdjs.SLNCode.GDFantasmaObjects1.length = k;}if (gdjs.SLNCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SLNCode.GDFantasmaObjects1 */
{for(var i = 0, len = gdjs.SLNCode.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.SLNCode.GDFantasmaObjects1[i].setAnimationName("Moriiiiir");
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "", false);
}
{ //Subevents
gdjs.SLNCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Estrenja"), gdjs.SLNCode.GDEstrenjaObjects1);

gdjs.SLNCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SLNCode.GDEstrenjaObjects1.length;i<l;++i) {
    if ( gdjs.SLNCode.GDEstrenjaObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.SLNCode.condition0IsTrue_0.val = true;
        gdjs.SLNCode.GDEstrenjaObjects1[k] = gdjs.SLNCode.GDEstrenjaObjects1[i];
        ++k;
    }
}
gdjs.SLNCode.GDEstrenjaObjects1.length = k;}if (gdjs.SLNCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SLNCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Estrenja"), gdjs.SLNCode.GDEstrenjaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.SLNCode.GDFantasmaObjects1);

gdjs.SLNCode.condition0IsTrue_0.val = false;
gdjs.SLNCode.condition1IsTrue_0.val = false;
{
gdjs.SLNCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SLNCode.mapOfGDgdjs_46SLNCode_46GDFantasmaObjects1Objects, gdjs.SLNCode.mapOfGDgdjs_46SLNCode_46GDEstrenjaObjects1Objects, false, runtimeScene, false);
}if ( gdjs.SLNCode.condition0IsTrue_0.val ) {
{
{gdjs.SLNCode.conditionTrue_1 = gdjs.SLNCode.condition1IsTrue_0;
gdjs.SLNCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16676052);
}
}}
if (gdjs.SLNCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SLNCode.GDFantasmaObjects1 */
{for(var i = 0, len = gdjs.SLNCode.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.SLNCode.GDFantasmaObjects1[i].setAnimationName("Daño");
}
}{for(var i = 0, len = gdjs.SLNCode.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.SLNCode.GDFantasmaObjects1[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.SLNCode.GDFantasmaObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.SLNCode.GDNewObject4Objects1);

gdjs.SLNCode.condition0IsTrue_0.val = false;
{
gdjs.SLNCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SLNCode.mapOfGDgdjs_46SLNCode_46GDFantasmaObjects1Objects, gdjs.SLNCode.mapOfGDgdjs_46SLNCode_46GDNewObject4Objects1Objects, false, runtimeScene, false);
}if (gdjs.SLNCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SLNCode.GDFantasmaObjects1 */
{for(var i = 0, len = gdjs.SLNCode.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.SLNCode.GDFantasmaObjects1[i].getBehavior("Health").SetHealth(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject8"), gdjs.SLNCode.GDNewObject8Objects1);

gdjs.SLNCode.condition0IsTrue_0.val = false;
{
gdjs.SLNCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SLNCode.mapOfGDgdjs_46SLNCode_46GDNewObject8Objects1Objects, runtimeScene, true, false);
}if (gdjs.SLNCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PP", false);
}}

}


};

gdjs.SLNCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SLNCode.GDCajiregaloObjects1.length = 0;
gdjs.SLNCode.GDCajiregaloObjects2.length = 0;
gdjs.SLNCode.GDCajiregaloObjects3.length = 0;
gdjs.SLNCode.GDJefefinObjects1.length = 0;
gdjs.SLNCode.GDJefefinObjects2.length = 0;
gdjs.SLNCode.GDJefefinObjects3.length = 0;
gdjs.SLNCode.GDFantasmaObjects1.length = 0;
gdjs.SLNCode.GDFantasmaObjects2.length = 0;
gdjs.SLNCode.GDFantasmaObjects3.length = 0;
gdjs.SLNCode.GDEstrenjaObjects1.length = 0;
gdjs.SLNCode.GDEstrenjaObjects2.length = 0;
gdjs.SLNCode.GDEstrenjaObjects3.length = 0;
gdjs.SLNCode.GDPNObjects1.length = 0;
gdjs.SLNCode.GDPNObjects2.length = 0;
gdjs.SLNCode.GDPNObjects3.length = 0;
gdjs.SLNCode.GDParedObjects1.length = 0;
gdjs.SLNCode.GDParedObjects2.length = 0;
gdjs.SLNCode.GDParedObjects3.length = 0;
gdjs.SLNCode.GDPSObjects1.length = 0;
gdjs.SLNCode.GDPSObjects2.length = 0;
gdjs.SLNCode.GDPSObjects3.length = 0;
gdjs.SLNCode.GDFondocomObjects1.length = 0;
gdjs.SLNCode.GDFondocomObjects2.length = 0;
gdjs.SLNCode.GDFondocomObjects3.length = 0;
gdjs.SLNCode.GDNewObjectObjects1.length = 0;
gdjs.SLNCode.GDNewObjectObjects2.length = 0;
gdjs.SLNCode.GDNewObjectObjects3.length = 0;
gdjs.SLNCode.GDNewObject2Objects1.length = 0;
gdjs.SLNCode.GDNewObject2Objects2.length = 0;
gdjs.SLNCode.GDNewObject2Objects3.length = 0;
gdjs.SLNCode.GDNewObject3Objects1.length = 0;
gdjs.SLNCode.GDNewObject3Objects2.length = 0;
gdjs.SLNCode.GDNewObject3Objects3.length = 0;
gdjs.SLNCode.GDNewObject4Objects1.length = 0;
gdjs.SLNCode.GDNewObject4Objects2.length = 0;
gdjs.SLNCode.GDNewObject4Objects3.length = 0;
gdjs.SLNCode.GDNewObject5Objects1.length = 0;
gdjs.SLNCode.GDNewObject5Objects2.length = 0;
gdjs.SLNCode.GDNewObject5Objects3.length = 0;
gdjs.SLNCode.GDNewObject6Objects1.length = 0;
gdjs.SLNCode.GDNewObject6Objects2.length = 0;
gdjs.SLNCode.GDNewObject6Objects3.length = 0;
gdjs.SLNCode.GDNewObject7Objects1.length = 0;
gdjs.SLNCode.GDNewObject7Objects2.length = 0;
gdjs.SLNCode.GDNewObject7Objects3.length = 0;
gdjs.SLNCode.GDNewObject8Objects1.length = 0;
gdjs.SLNCode.GDNewObject8Objects2.length = 0;
gdjs.SLNCode.GDNewObject8Objects3.length = 0;
gdjs.SLNCode.GDNewObject9Objects1.length = 0;
gdjs.SLNCode.GDNewObject9Objects2.length = 0;
gdjs.SLNCode.GDNewObject9Objects3.length = 0;

gdjs.SLNCode.eventsList4(runtimeScene);
return;

}

gdjs['SLNCode'] = gdjs.SLNCode;
