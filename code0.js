gdjs.PPCode = {};
gdjs.PPCode.GDCajiregaloObjects1= [];
gdjs.PPCode.GDCajiregaloObjects2= [];
gdjs.PPCode.GDCajiregaloObjects3= [];
gdjs.PPCode.GDJefefinObjects1= [];
gdjs.PPCode.GDJefefinObjects2= [];
gdjs.PPCode.GDJefefinObjects3= [];
gdjs.PPCode.GDFantasmaObjects1= [];
gdjs.PPCode.GDFantasmaObjects2= [];
gdjs.PPCode.GDFantasmaObjects3= [];
gdjs.PPCode.GDEstrenjaObjects1= [];
gdjs.PPCode.GDEstrenjaObjects2= [];
gdjs.PPCode.GDEstrenjaObjects3= [];
gdjs.PPCode.GDPNObjects1= [];
gdjs.PPCode.GDPNObjects2= [];
gdjs.PPCode.GDPNObjects3= [];
gdjs.PPCode.GDParedObjects1= [];
gdjs.PPCode.GDParedObjects2= [];
gdjs.PPCode.GDParedObjects3= [];
gdjs.PPCode.GDPSObjects1= [];
gdjs.PPCode.GDPSObjects2= [];
gdjs.PPCode.GDPSObjects3= [];
gdjs.PPCode.GDFondocomObjects1= [];
gdjs.PPCode.GDFondocomObjects2= [];
gdjs.PPCode.GDFondocomObjects3= [];
gdjs.PPCode.GDNewObjectObjects1= [];
gdjs.PPCode.GDNewObjectObjects2= [];
gdjs.PPCode.GDNewObjectObjects3= [];
gdjs.PPCode.GDNewObject2Objects1= [];
gdjs.PPCode.GDNewObject2Objects2= [];
gdjs.PPCode.GDNewObject2Objects3= [];
gdjs.PPCode.GDNewObject3Objects1= [];
gdjs.PPCode.GDNewObject3Objects2= [];
gdjs.PPCode.GDNewObject3Objects3= [];
gdjs.PPCode.GDNewObject4Objects1= [];
gdjs.PPCode.GDNewObject4Objects2= [];
gdjs.PPCode.GDNewObject4Objects3= [];
gdjs.PPCode.GDNewObject5Objects1= [];
gdjs.PPCode.GDNewObject5Objects2= [];
gdjs.PPCode.GDNewObject5Objects3= [];
gdjs.PPCode.GDNewObject6Objects1= [];
gdjs.PPCode.GDNewObject6Objects2= [];
gdjs.PPCode.GDNewObject6Objects3= [];
gdjs.PPCode.GDNewObject7Objects1= [];
gdjs.PPCode.GDNewObject7Objects2= [];
gdjs.PPCode.GDNewObject7Objects3= [];
gdjs.PPCode.GDNewObject8Objects1= [];
gdjs.PPCode.GDNewObject8Objects2= [];
gdjs.PPCode.GDNewObject8Objects3= [];
gdjs.PPCode.GDNewObject9Objects1= [];
gdjs.PPCode.GDNewObject9Objects2= [];
gdjs.PPCode.GDNewObject9Objects3= [];
gdjs.PPCode.GDNewObject10Objects1= [];
gdjs.PPCode.GDNewObject10Objects2= [];
gdjs.PPCode.GDNewObject10Objects3= [];

gdjs.PPCode.conditionTrue_0 = {val:false};
gdjs.PPCode.condition0IsTrue_0 = {val:false};
gdjs.PPCode.condition1IsTrue_0 = {val:false};
gdjs.PPCode.condition2IsTrue_0 = {val:false};
gdjs.PPCode.conditionTrue_1 = {val:false};
gdjs.PPCode.condition0IsTrue_1 = {val:false};
gdjs.PPCode.condition1IsTrue_1 = {val:false};
gdjs.PPCode.condition2IsTrue_1 = {val:false};


gdjs.PPCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.PPCode.GDFantasmaObjects1, gdjs.PPCode.GDFantasmaObjects2);


gdjs.PPCode.condition0IsTrue_0.val = false;
gdjs.PPCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PPCode.GDFantasmaObjects2.length;i<l;++i) {
    if ( !(gdjs.PPCode.GDFantasmaObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.PPCode.condition0IsTrue_0.val = true;
        gdjs.PPCode.GDFantasmaObjects2[k] = gdjs.PPCode.GDFantasmaObjects2[i];
        ++k;
    }
}
gdjs.PPCode.GDFantasmaObjects2.length = k;}if ( gdjs.PPCode.condition0IsTrue_0.val ) {
{
{gdjs.PPCode.conditionTrue_1 = gdjs.PPCode.condition1IsTrue_0;
gdjs.PPCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8029620);
}
}}
if (gdjs.PPCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PPCode.GDFantasmaObjects2 */
{for(var i = 0, len = gdjs.PPCode.GDFantasmaObjects2.length ;i < len;++i) {
    gdjs.PPCode.GDFantasmaObjects2[i].setAnimationName("Quieto");
}
}}

}


{

/* Reuse gdjs.PPCode.GDFantasmaObjects1 */

gdjs.PPCode.condition0IsTrue_0.val = false;
gdjs.PPCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PPCode.GDFantasmaObjects1.length;i<l;++i) {
    if ( gdjs.PPCode.GDFantasmaObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.PPCode.condition0IsTrue_0.val = true;
        gdjs.PPCode.GDFantasmaObjects1[k] = gdjs.PPCode.GDFantasmaObjects1[i];
        ++k;
    }
}
gdjs.PPCode.GDFantasmaObjects1.length = k;}if ( gdjs.PPCode.condition0IsTrue_0.val ) {
{
{gdjs.PPCode.conditionTrue_1 = gdjs.PPCode.condition1IsTrue_0;
gdjs.PPCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8108492);
}
}}
if (gdjs.PPCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PPCode.GDFantasmaObjects1 */
{for(var i = 0, len = gdjs.PPCode.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.PPCode.GDFantasmaObjects1[i].setAnimationName("Caminar");
}
}}

}


};gdjs.PPCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.PPCode.GDCajiregaloObjects1 */

gdjs.PPCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PPCode.GDCajiregaloObjects1.length;i<l;++i) {
    if ( gdjs.PPCode.GDCajiregaloObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.PPCode.condition0IsTrue_0.val = true;
        gdjs.PPCode.GDCajiregaloObjects1[k] = gdjs.PPCode.GDCajiregaloObjects1[i];
        ++k;
    }
}
gdjs.PPCode.GDCajiregaloObjects1.length = k;}if (gdjs.PPCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PPCode.GDCajiregaloObjects1 */
{for(var i = 0, len = gdjs.PPCode.GDCajiregaloObjects1.length ;i < len;++i) {
    gdjs.PPCode.GDCajiregaloObjects1[i].setAnimationName("Camino");
}
}}

}


};gdjs.PPCode.mapOfGDgdjs_46PPCode_46GDFantasmaObjects1Objects = Hashtable.newFrom({"Fantasma": gdjs.PPCode.GDFantasmaObjects1});gdjs.PPCode.mapOfGDgdjs_46PPCode_46GDCajiregaloObjects1Objects = Hashtable.newFrom({"Cajiregalo": gdjs.PPCode.GDCajiregaloObjects1});gdjs.PPCode.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.PPCode.GDFantasmaObjects1 */

gdjs.PPCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PPCode.GDFantasmaObjects1.length;i<l;++i) {
    if ( gdjs.PPCode.GDFantasmaObjects1[i].hasAnimationEnded() ) {
        gdjs.PPCode.condition0IsTrue_0.val = true;
        gdjs.PPCode.GDFantasmaObjects1[k] = gdjs.PPCode.GDFantasmaObjects1[i];
        ++k;
    }
}
gdjs.PPCode.GDFantasmaObjects1.length = k;}if (gdjs.PPCode.condition0IsTrue_0.val) {
}

}


};gdjs.PPCode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.PPCode.GDEstrenjaObjects1 */

gdjs.PPCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PPCode.GDEstrenjaObjects1.length;i<l;++i) {
    if ( gdjs.PPCode.GDEstrenjaObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.PPCode.condition0IsTrue_0.val = true;
        gdjs.PPCode.GDEstrenjaObjects1[k] = gdjs.PPCode.GDEstrenjaObjects1[i];
        ++k;
    }
}
gdjs.PPCode.GDEstrenjaObjects1.length = k;}if (gdjs.PPCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PPCode.GDEstrenjaObjects1 */
{for(var i = 0, len = gdjs.PPCode.GDEstrenjaObjects1.length ;i < len;++i) {
    gdjs.PPCode.GDEstrenjaObjects1[i].setAnimationName("Caminar");
}
}}

}


};gdjs.PPCode.mapOfGDgdjs_46PPCode_46GDFantasmaObjects1Objects = Hashtable.newFrom({"Fantasma": gdjs.PPCode.GDFantasmaObjects1});gdjs.PPCode.mapOfGDgdjs_46PPCode_46GDEstrenjaObjects1Objects = Hashtable.newFrom({"Estrenja": gdjs.PPCode.GDEstrenjaObjects1});gdjs.PPCode.mapOfGDgdjs_46PPCode_46GDFantasmaObjects1Objects = Hashtable.newFrom({"Fantasma": gdjs.PPCode.GDFantasmaObjects1});gdjs.PPCode.mapOfGDgdjs_46PPCode_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.PPCode.GDNewObject4Objects1});gdjs.PPCode.mapOfGDgdjs_46PPCode_46GDNewObject8Objects1Objects = Hashtable.newFrom({"NewObject8": gdjs.PPCode.GDNewObject8Objects1});gdjs.PPCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.PPCode.GDFantasmaObjects1);

gdjs.PPCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PPCode.GDFantasmaObjects1.length;i<l;++i) {
    if ( gdjs.PPCode.GDFantasmaObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.PPCode.condition0IsTrue_0.val = true;
        gdjs.PPCode.GDFantasmaObjects1[k] = gdjs.PPCode.GDFantasmaObjects1[i];
        ++k;
    }
}
gdjs.PPCode.GDFantasmaObjects1.length = k;}if (gdjs.PPCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PPCode.GDFantasmaObjects1 */
{for(var i = 0, len = gdjs.PPCode.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.PPCode.GDFantasmaObjects1[i].setAnimationName("Saltar");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.PPCode.GDFantasmaObjects1);

gdjs.PPCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PPCode.GDFantasmaObjects1.length;i<l;++i) {
    if ( gdjs.PPCode.GDFantasmaObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.PPCode.condition0IsTrue_0.val = true;
        gdjs.PPCode.GDFantasmaObjects1[k] = gdjs.PPCode.GDFantasmaObjects1[i];
        ++k;
    }
}
gdjs.PPCode.GDFantasmaObjects1.length = k;}if (gdjs.PPCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PPCode.GDFantasmaObjects1 */
{for(var i = 0, len = gdjs.PPCode.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.PPCode.GDFantasmaObjects1[i].setAnimationName("Caer");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.PPCode.GDFantasmaObjects1);

gdjs.PPCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PPCode.GDFantasmaObjects1.length;i<l;++i) {
    if ( gdjs.PPCode.GDFantasmaObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.PPCode.condition0IsTrue_0.val = true;
        gdjs.PPCode.GDFantasmaObjects1[k] = gdjs.PPCode.GDFantasmaObjects1[i];
        ++k;
    }
}
gdjs.PPCode.GDFantasmaObjects1.length = k;}if (gdjs.PPCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PPCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.PPCode.condition0IsTrue_0.val = false;
{
gdjs.PPCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.PPCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.PPCode.GDFantasmaObjects1);
{for(var i = 0, len = gdjs.PPCode.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.PPCode.GDFantasmaObjects1[i].flipX(false);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.PPCode.GDFantasmaObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.PPCode.GDFantasmaObjects1.length === 0 ) ? 0 :gdjs.PPCode.GDFantasmaObjects1[0].getPointX("Center")), "", 0);
}}

}


{


gdjs.PPCode.condition0IsTrue_0.val = false;
{
gdjs.PPCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.PPCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.PPCode.GDFantasmaObjects1);
{for(var i = 0, len = gdjs.PPCode.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.PPCode.GDFantasmaObjects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cajiregalo"), gdjs.PPCode.GDCajiregaloObjects1);

gdjs.PPCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PPCode.GDCajiregaloObjects1.length;i<l;++i) {
    if ( gdjs.PPCode.GDCajiregaloObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.PPCode.condition0IsTrue_0.val = true;
        gdjs.PPCode.GDCajiregaloObjects1[k] = gdjs.PPCode.GDCajiregaloObjects1[i];
        ++k;
    }
}
gdjs.PPCode.GDCajiregaloObjects1.length = k;}if (gdjs.PPCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PPCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cajiregalo"), gdjs.PPCode.GDCajiregaloObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.PPCode.GDFantasmaObjects1);

gdjs.PPCode.condition0IsTrue_0.val = false;
gdjs.PPCode.condition1IsTrue_0.val = false;
{
gdjs.PPCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PPCode.mapOfGDgdjs_46PPCode_46GDFantasmaObjects1Objects, gdjs.PPCode.mapOfGDgdjs_46PPCode_46GDCajiregaloObjects1Objects, false, runtimeScene, false);
}if ( gdjs.PPCode.condition0IsTrue_0.val ) {
{
{gdjs.PPCode.conditionTrue_1 = gdjs.PPCode.condition1IsTrue_0;
gdjs.PPCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(19236916);
}
}}
if (gdjs.PPCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PPCode.GDFantasmaObjects1 */
{for(var i = 0, len = gdjs.PPCode.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.PPCode.GDFantasmaObjects1[i].setAnimationName("Daño");
}
}{for(var i = 0, len = gdjs.PPCode.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.PPCode.GDFantasmaObjects1[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.PPCode.GDFantasmaObjects1);

gdjs.PPCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PPCode.GDFantasmaObjects1.length;i<l;++i) {
    if ( gdjs.PPCode.GDFantasmaObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.PPCode.condition0IsTrue_0.val = true;
        gdjs.PPCode.GDFantasmaObjects1[k] = gdjs.PPCode.GDFantasmaObjects1[i];
        ++k;
    }
}
gdjs.PPCode.GDFantasmaObjects1.length = k;}if (gdjs.PPCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PPCode.GDFantasmaObjects1 */
{for(var i = 0, len = gdjs.PPCode.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.PPCode.GDFantasmaObjects1[i].setAnimationName("Moriiiiir");
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial", false);
}
{ //Subevents
gdjs.PPCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Estrenja"), gdjs.PPCode.GDEstrenjaObjects1);

gdjs.PPCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PPCode.GDEstrenjaObjects1.length;i<l;++i) {
    if ( gdjs.PPCode.GDEstrenjaObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.PPCode.condition0IsTrue_0.val = true;
        gdjs.PPCode.GDEstrenjaObjects1[k] = gdjs.PPCode.GDEstrenjaObjects1[i];
        ++k;
    }
}
gdjs.PPCode.GDEstrenjaObjects1.length = k;}if (gdjs.PPCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PPCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Estrenja"), gdjs.PPCode.GDEstrenjaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.PPCode.GDFantasmaObjects1);

gdjs.PPCode.condition0IsTrue_0.val = false;
gdjs.PPCode.condition1IsTrue_0.val = false;
{
gdjs.PPCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PPCode.mapOfGDgdjs_46PPCode_46GDFantasmaObjects1Objects, gdjs.PPCode.mapOfGDgdjs_46PPCode_46GDEstrenjaObjects1Objects, false, runtimeScene, false);
}if ( gdjs.PPCode.condition0IsTrue_0.val ) {
{
{gdjs.PPCode.conditionTrue_1 = gdjs.PPCode.condition1IsTrue_0;
gdjs.PPCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(19473764);
}
}}
if (gdjs.PPCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PPCode.GDFantasmaObjects1 */
{for(var i = 0, len = gdjs.PPCode.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.PPCode.GDFantasmaObjects1[i].setAnimationName("Daño");
}
}{for(var i = 0, len = gdjs.PPCode.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.PPCode.GDFantasmaObjects1[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.PPCode.GDFantasmaObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.PPCode.GDNewObject4Objects1);

gdjs.PPCode.condition0IsTrue_0.val = false;
{
gdjs.PPCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PPCode.mapOfGDgdjs_46PPCode_46GDFantasmaObjects1Objects, gdjs.PPCode.mapOfGDgdjs_46PPCode_46GDNewObject4Objects1Objects, false, runtimeScene, false);
}if (gdjs.PPCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PPCode.GDFantasmaObjects1 */
{for(var i = 0, len = gdjs.PPCode.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.PPCode.GDFantasmaObjects1[i].getBehavior("Health").SetHealth(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject8"), gdjs.PPCode.GDNewObject8Objects1);

gdjs.PPCode.condition0IsTrue_0.val = false;
{
gdjs.PPCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PPCode.mapOfGDgdjs_46PPCode_46GDNewObject8Objects1Objects, runtimeScene, true, false);
}if (gdjs.PPCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial", false);
}}

}


};

gdjs.PPCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PPCode.GDCajiregaloObjects1.length = 0;
gdjs.PPCode.GDCajiregaloObjects2.length = 0;
gdjs.PPCode.GDCajiregaloObjects3.length = 0;
gdjs.PPCode.GDJefefinObjects1.length = 0;
gdjs.PPCode.GDJefefinObjects2.length = 0;
gdjs.PPCode.GDJefefinObjects3.length = 0;
gdjs.PPCode.GDFantasmaObjects1.length = 0;
gdjs.PPCode.GDFantasmaObjects2.length = 0;
gdjs.PPCode.GDFantasmaObjects3.length = 0;
gdjs.PPCode.GDEstrenjaObjects1.length = 0;
gdjs.PPCode.GDEstrenjaObjects2.length = 0;
gdjs.PPCode.GDEstrenjaObjects3.length = 0;
gdjs.PPCode.GDPNObjects1.length = 0;
gdjs.PPCode.GDPNObjects2.length = 0;
gdjs.PPCode.GDPNObjects3.length = 0;
gdjs.PPCode.GDParedObjects1.length = 0;
gdjs.PPCode.GDParedObjects2.length = 0;
gdjs.PPCode.GDParedObjects3.length = 0;
gdjs.PPCode.GDPSObjects1.length = 0;
gdjs.PPCode.GDPSObjects2.length = 0;
gdjs.PPCode.GDPSObjects3.length = 0;
gdjs.PPCode.GDFondocomObjects1.length = 0;
gdjs.PPCode.GDFondocomObjects2.length = 0;
gdjs.PPCode.GDFondocomObjects3.length = 0;
gdjs.PPCode.GDNewObjectObjects1.length = 0;
gdjs.PPCode.GDNewObjectObjects2.length = 0;
gdjs.PPCode.GDNewObjectObjects3.length = 0;
gdjs.PPCode.GDNewObject2Objects1.length = 0;
gdjs.PPCode.GDNewObject2Objects2.length = 0;
gdjs.PPCode.GDNewObject2Objects3.length = 0;
gdjs.PPCode.GDNewObject3Objects1.length = 0;
gdjs.PPCode.GDNewObject3Objects2.length = 0;
gdjs.PPCode.GDNewObject3Objects3.length = 0;
gdjs.PPCode.GDNewObject4Objects1.length = 0;
gdjs.PPCode.GDNewObject4Objects2.length = 0;
gdjs.PPCode.GDNewObject4Objects3.length = 0;
gdjs.PPCode.GDNewObject5Objects1.length = 0;
gdjs.PPCode.GDNewObject5Objects2.length = 0;
gdjs.PPCode.GDNewObject5Objects3.length = 0;
gdjs.PPCode.GDNewObject6Objects1.length = 0;
gdjs.PPCode.GDNewObject6Objects2.length = 0;
gdjs.PPCode.GDNewObject6Objects3.length = 0;
gdjs.PPCode.GDNewObject7Objects1.length = 0;
gdjs.PPCode.GDNewObject7Objects2.length = 0;
gdjs.PPCode.GDNewObject7Objects3.length = 0;
gdjs.PPCode.GDNewObject8Objects1.length = 0;
gdjs.PPCode.GDNewObject8Objects2.length = 0;
gdjs.PPCode.GDNewObject8Objects3.length = 0;
gdjs.PPCode.GDNewObject9Objects1.length = 0;
gdjs.PPCode.GDNewObject9Objects2.length = 0;
gdjs.PPCode.GDNewObject9Objects3.length = 0;
gdjs.PPCode.GDNewObject10Objects1.length = 0;
gdjs.PPCode.GDNewObject10Objects2.length = 0;
gdjs.PPCode.GDNewObject10Objects3.length = 0;

gdjs.PPCode.eventsList4(runtimeScene);
return;

}

gdjs['PPCode'] = gdjs.PPCode;
