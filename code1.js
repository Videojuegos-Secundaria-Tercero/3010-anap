gdjs.TutorialCode = {};
gdjs.TutorialCode.GDCajiregaloObjects1= [];
gdjs.TutorialCode.GDCajiregaloObjects2= [];
gdjs.TutorialCode.GDCajiregaloObjects3= [];
gdjs.TutorialCode.GDJefefinObjects1= [];
gdjs.TutorialCode.GDJefefinObjects2= [];
gdjs.TutorialCode.GDJefefinObjects3= [];
gdjs.TutorialCode.GDFantasmaObjects1= [];
gdjs.TutorialCode.GDFantasmaObjects2= [];
gdjs.TutorialCode.GDFantasmaObjects3= [];
gdjs.TutorialCode.GDEstrenjaObjects1= [];
gdjs.TutorialCode.GDEstrenjaObjects2= [];
gdjs.TutorialCode.GDEstrenjaObjects3= [];
gdjs.TutorialCode.GDPNObjects1= [];
gdjs.TutorialCode.GDPNObjects2= [];
gdjs.TutorialCode.GDPNObjects3= [];
gdjs.TutorialCode.GDParedObjects1= [];
gdjs.TutorialCode.GDParedObjects2= [];
gdjs.TutorialCode.GDParedObjects3= [];
gdjs.TutorialCode.GDPSObjects1= [];
gdjs.TutorialCode.GDPSObjects2= [];
gdjs.TutorialCode.GDPSObjects3= [];
gdjs.TutorialCode.GDFondocomObjects1= [];
gdjs.TutorialCode.GDFondocomObjects2= [];
gdjs.TutorialCode.GDFondocomObjects3= [];
gdjs.TutorialCode.GDNewObjectObjects1= [];
gdjs.TutorialCode.GDNewObjectObjects2= [];
gdjs.TutorialCode.GDNewObjectObjects3= [];
gdjs.TutorialCode.GDNewObject2Objects1= [];
gdjs.TutorialCode.GDNewObject2Objects2= [];
gdjs.TutorialCode.GDNewObject2Objects3= [];
gdjs.TutorialCode.GDNewObject3Objects1= [];
gdjs.TutorialCode.GDNewObject3Objects2= [];
gdjs.TutorialCode.GDNewObject3Objects3= [];
gdjs.TutorialCode.GDNewObject4Objects1= [];
gdjs.TutorialCode.GDNewObject4Objects2= [];
gdjs.TutorialCode.GDNewObject4Objects3= [];
gdjs.TutorialCode.GDNewObject5Objects1= [];
gdjs.TutorialCode.GDNewObject5Objects2= [];
gdjs.TutorialCode.GDNewObject5Objects3= [];
gdjs.TutorialCode.GDNewObject6Objects1= [];
gdjs.TutorialCode.GDNewObject6Objects2= [];
gdjs.TutorialCode.GDNewObject6Objects3= [];
gdjs.TutorialCode.GDNewObject7Objects1= [];
gdjs.TutorialCode.GDNewObject7Objects2= [];
gdjs.TutorialCode.GDNewObject7Objects3= [];
gdjs.TutorialCode.GDNewObject8Objects1= [];
gdjs.TutorialCode.GDNewObject8Objects2= [];
gdjs.TutorialCode.GDNewObject8Objects3= [];
gdjs.TutorialCode.GDNewObject9Objects1= [];
gdjs.TutorialCode.GDNewObject9Objects2= [];
gdjs.TutorialCode.GDNewObject9Objects3= [];
gdjs.TutorialCode.GDNewObject10Objects1= [];
gdjs.TutorialCode.GDNewObject10Objects2= [];
gdjs.TutorialCode.GDNewObject10Objects3= [];
gdjs.TutorialCode.GDNewObject11Objects1= [];
gdjs.TutorialCode.GDNewObject11Objects2= [];
gdjs.TutorialCode.GDNewObject11Objects3= [];
gdjs.TutorialCode.GDNewObject12Objects1= [];
gdjs.TutorialCode.GDNewObject12Objects2= [];
gdjs.TutorialCode.GDNewObject12Objects3= [];

gdjs.TutorialCode.conditionTrue_0 = {val:false};
gdjs.TutorialCode.condition0IsTrue_0 = {val:false};
gdjs.TutorialCode.condition1IsTrue_0 = {val:false};
gdjs.TutorialCode.condition2IsTrue_0 = {val:false};
gdjs.TutorialCode.conditionTrue_1 = {val:false};
gdjs.TutorialCode.condition0IsTrue_1 = {val:false};
gdjs.TutorialCode.condition1IsTrue_1 = {val:false};
gdjs.TutorialCode.condition2IsTrue_1 = {val:false};


gdjs.TutorialCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.TutorialCode.GDFantasmaObjects1, gdjs.TutorialCode.GDFantasmaObjects2);


gdjs.TutorialCode.condition0IsTrue_0.val = false;
gdjs.TutorialCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDFantasmaObjects2.length;i<l;++i) {
    if ( !(gdjs.TutorialCode.GDFantasmaObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDFantasmaObjects2[k] = gdjs.TutorialCode.GDFantasmaObjects2[i];
        ++k;
    }
}
gdjs.TutorialCode.GDFantasmaObjects2.length = k;}if ( gdjs.TutorialCode.condition0IsTrue_0.val ) {
{
{gdjs.TutorialCode.conditionTrue_1 = gdjs.TutorialCode.condition1IsTrue_0;
gdjs.TutorialCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(19024860);
}
}}
if (gdjs.TutorialCode.condition1IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDFantasmaObjects2 */
{for(var i = 0, len = gdjs.TutorialCode.GDFantasmaObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDFantasmaObjects2[i].setAnimationName("Quieto");
}
}}

}


{

/* Reuse gdjs.TutorialCode.GDFantasmaObjects1 */

gdjs.TutorialCode.condition0IsTrue_0.val = false;
gdjs.TutorialCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDFantasmaObjects1.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDFantasmaObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDFantasmaObjects1[k] = gdjs.TutorialCode.GDFantasmaObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDFantasmaObjects1.length = k;}if ( gdjs.TutorialCode.condition0IsTrue_0.val ) {
{
{gdjs.TutorialCode.conditionTrue_1 = gdjs.TutorialCode.condition1IsTrue_0;
gdjs.TutorialCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(19026020);
}
}}
if (gdjs.TutorialCode.condition1IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDFantasmaObjects1 */
{for(var i = 0, len = gdjs.TutorialCode.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDFantasmaObjects1[i].setAnimationName("Caminar");
}
}}

}


};gdjs.TutorialCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.TutorialCode.GDCajiregaloObjects1 */

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDCajiregaloObjects1.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDCajiregaloObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDCajiregaloObjects1[k] = gdjs.TutorialCode.GDCajiregaloObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDCajiregaloObjects1.length = k;}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDCajiregaloObjects1 */
{for(var i = 0, len = gdjs.TutorialCode.GDCajiregaloObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDCajiregaloObjects1[i].setAnimationName("Camino");
}
}}

}


};gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDFantasmaObjects1Objects = Hashtable.newFrom({"Fantasma": gdjs.TutorialCode.GDFantasmaObjects1});gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDCajiregaloObjects1Objects = Hashtable.newFrom({"Cajiregalo": gdjs.TutorialCode.GDCajiregaloObjects1});gdjs.TutorialCode.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.TutorialCode.GDFantasmaObjects1 */

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDFantasmaObjects1.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDFantasmaObjects1[i].hasAnimationEnded() ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDFantasmaObjects1[k] = gdjs.TutorialCode.GDFantasmaObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDFantasmaObjects1.length = k;}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
}

}


};gdjs.TutorialCode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.TutorialCode.GDEstrenjaObjects1 */

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDEstrenjaObjects1.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDEstrenjaObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDEstrenjaObjects1[k] = gdjs.TutorialCode.GDEstrenjaObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDEstrenjaObjects1.length = k;}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDEstrenjaObjects1 */
{for(var i = 0, len = gdjs.TutorialCode.GDEstrenjaObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDEstrenjaObjects1[i].setAnimationName("Caminar");
}
}}

}


};gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDFantasmaObjects1Objects = Hashtable.newFrom({"Fantasma": gdjs.TutorialCode.GDFantasmaObjects1});gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDEstrenjaObjects1Objects = Hashtable.newFrom({"Estrenja": gdjs.TutorialCode.GDEstrenjaObjects1});gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDFantasmaObjects1Objects = Hashtable.newFrom({"Fantasma": gdjs.TutorialCode.GDFantasmaObjects1});gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.TutorialCode.GDNewObject4Objects1});gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDFantasmaObjects1Objects = Hashtable.newFrom({"Fantasma": gdjs.TutorialCode.GDFantasmaObjects1});gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.TutorialCode.GDNewObject5Objects1});gdjs.TutorialCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.TutorialCode.GDFantasmaObjects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDFantasmaObjects1.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDFantasmaObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDFantasmaObjects1[k] = gdjs.TutorialCode.GDFantasmaObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDFantasmaObjects1.length = k;}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDFantasmaObjects1 */
{for(var i = 0, len = gdjs.TutorialCode.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDFantasmaObjects1[i].setAnimationName("Saltar");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.TutorialCode.GDFantasmaObjects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDFantasmaObjects1.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDFantasmaObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDFantasmaObjects1[k] = gdjs.TutorialCode.GDFantasmaObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDFantasmaObjects1.length = k;}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDFantasmaObjects1 */
{for(var i = 0, len = gdjs.TutorialCode.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDFantasmaObjects1[i].setAnimationName("Caer");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.TutorialCode.GDFantasmaObjects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDFantasmaObjects1.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDFantasmaObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDFantasmaObjects1[k] = gdjs.TutorialCode.GDFantasmaObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDFantasmaObjects1.length = k;}if (gdjs.TutorialCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.TutorialCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.TutorialCode.GDFantasmaObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDFantasmaObjects1[i].flipX(false);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.TutorialCode.GDFantasmaObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.TutorialCode.GDFantasmaObjects1.length === 0 ) ? 0 :gdjs.TutorialCode.GDFantasmaObjects1[0].getPointX("Center")), "", 0);
}}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.TutorialCode.GDFantasmaObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDFantasmaObjects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cajiregalo"), gdjs.TutorialCode.GDCajiregaloObjects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDCajiregaloObjects1.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDCajiregaloObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDCajiregaloObjects1[k] = gdjs.TutorialCode.GDCajiregaloObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDCajiregaloObjects1.length = k;}if (gdjs.TutorialCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.TutorialCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cajiregalo"), gdjs.TutorialCode.GDCajiregaloObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.TutorialCode.GDFantasmaObjects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
gdjs.TutorialCode.condition1IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDFantasmaObjects1Objects, gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDCajiregaloObjects1Objects, false, runtimeScene, false);
}if ( gdjs.TutorialCode.condition0IsTrue_0.val ) {
{
{gdjs.TutorialCode.conditionTrue_1 = gdjs.TutorialCode.condition1IsTrue_0;
gdjs.TutorialCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(19030508);
}
}}
if (gdjs.TutorialCode.condition1IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDFantasmaObjects1 */
{for(var i = 0, len = gdjs.TutorialCode.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDFantasmaObjects1[i].setAnimationName("Daño");
}
}{for(var i = 0, len = gdjs.TutorialCode.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDFantasmaObjects1[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.TutorialCode.GDFantasmaObjects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDFantasmaObjects1.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDFantasmaObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDFantasmaObjects1[k] = gdjs.TutorialCode.GDFantasmaObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDFantasmaObjects1.length = k;}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDFantasmaObjects1 */
{for(var i = 0, len = gdjs.TutorialCode.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDFantasmaObjects1[i].setAnimationName("Moriiiiir");
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial", false);
}
{ //Subevents
gdjs.TutorialCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Estrenja"), gdjs.TutorialCode.GDEstrenjaObjects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDEstrenjaObjects1.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDEstrenjaObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDEstrenjaObjects1[k] = gdjs.TutorialCode.GDEstrenjaObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDEstrenjaObjects1.length = k;}if (gdjs.TutorialCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.TutorialCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Estrenja"), gdjs.TutorialCode.GDEstrenjaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.TutorialCode.GDFantasmaObjects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
gdjs.TutorialCode.condition1IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDFantasmaObjects1Objects, gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDEstrenjaObjects1Objects, false, runtimeScene, false);
}if ( gdjs.TutorialCode.condition0IsTrue_0.val ) {
{
{gdjs.TutorialCode.conditionTrue_1 = gdjs.TutorialCode.condition1IsTrue_0;
gdjs.TutorialCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(19035028);
}
}}
if (gdjs.TutorialCode.condition1IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDFantasmaObjects1 */
{for(var i = 0, len = gdjs.TutorialCode.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDFantasmaObjects1[i].setAnimationName("Daño");
}
}{for(var i = 0, len = gdjs.TutorialCode.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDFantasmaObjects1[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.TutorialCode.GDFantasmaObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.TutorialCode.GDNewObject4Objects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDFantasmaObjects1Objects, gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDNewObject4Objects1Objects, false, runtimeScene, false);
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDFantasmaObjects1 */
{for(var i = 0, len = gdjs.TutorialCode.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDFantasmaObjects1[i].getBehavior("Health").SetHealth(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.TutorialCode.GDFantasmaObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.TutorialCode.GDNewObject5Objects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDFantasmaObjects1Objects, gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDNewObject5Objects1Objects, false, runtimeScene, false);
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Nivel 1", false);
}}

}


};

gdjs.TutorialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TutorialCode.GDCajiregaloObjects1.length = 0;
gdjs.TutorialCode.GDCajiregaloObjects2.length = 0;
gdjs.TutorialCode.GDCajiregaloObjects3.length = 0;
gdjs.TutorialCode.GDJefefinObjects1.length = 0;
gdjs.TutorialCode.GDJefefinObjects2.length = 0;
gdjs.TutorialCode.GDJefefinObjects3.length = 0;
gdjs.TutorialCode.GDFantasmaObjects1.length = 0;
gdjs.TutorialCode.GDFantasmaObjects2.length = 0;
gdjs.TutorialCode.GDFantasmaObjects3.length = 0;
gdjs.TutorialCode.GDEstrenjaObjects1.length = 0;
gdjs.TutorialCode.GDEstrenjaObjects2.length = 0;
gdjs.TutorialCode.GDEstrenjaObjects3.length = 0;
gdjs.TutorialCode.GDPNObjects1.length = 0;
gdjs.TutorialCode.GDPNObjects2.length = 0;
gdjs.TutorialCode.GDPNObjects3.length = 0;
gdjs.TutorialCode.GDParedObjects1.length = 0;
gdjs.TutorialCode.GDParedObjects2.length = 0;
gdjs.TutorialCode.GDParedObjects3.length = 0;
gdjs.TutorialCode.GDPSObjects1.length = 0;
gdjs.TutorialCode.GDPSObjects2.length = 0;
gdjs.TutorialCode.GDPSObjects3.length = 0;
gdjs.TutorialCode.GDFondocomObjects1.length = 0;
gdjs.TutorialCode.GDFondocomObjects2.length = 0;
gdjs.TutorialCode.GDFondocomObjects3.length = 0;
gdjs.TutorialCode.GDNewObjectObjects1.length = 0;
gdjs.TutorialCode.GDNewObjectObjects2.length = 0;
gdjs.TutorialCode.GDNewObjectObjects3.length = 0;
gdjs.TutorialCode.GDNewObject2Objects1.length = 0;
gdjs.TutorialCode.GDNewObject2Objects2.length = 0;
gdjs.TutorialCode.GDNewObject2Objects3.length = 0;
gdjs.TutorialCode.GDNewObject3Objects1.length = 0;
gdjs.TutorialCode.GDNewObject3Objects2.length = 0;
gdjs.TutorialCode.GDNewObject3Objects3.length = 0;
gdjs.TutorialCode.GDNewObject4Objects1.length = 0;
gdjs.TutorialCode.GDNewObject4Objects2.length = 0;
gdjs.TutorialCode.GDNewObject4Objects3.length = 0;
gdjs.TutorialCode.GDNewObject5Objects1.length = 0;
gdjs.TutorialCode.GDNewObject5Objects2.length = 0;
gdjs.TutorialCode.GDNewObject5Objects3.length = 0;
gdjs.TutorialCode.GDNewObject6Objects1.length = 0;
gdjs.TutorialCode.GDNewObject6Objects2.length = 0;
gdjs.TutorialCode.GDNewObject6Objects3.length = 0;
gdjs.TutorialCode.GDNewObject7Objects1.length = 0;
gdjs.TutorialCode.GDNewObject7Objects2.length = 0;
gdjs.TutorialCode.GDNewObject7Objects3.length = 0;
gdjs.TutorialCode.GDNewObject8Objects1.length = 0;
gdjs.TutorialCode.GDNewObject8Objects2.length = 0;
gdjs.TutorialCode.GDNewObject8Objects3.length = 0;
gdjs.TutorialCode.GDNewObject9Objects1.length = 0;
gdjs.TutorialCode.GDNewObject9Objects2.length = 0;
gdjs.TutorialCode.GDNewObject9Objects3.length = 0;
gdjs.TutorialCode.GDNewObject10Objects1.length = 0;
gdjs.TutorialCode.GDNewObject10Objects2.length = 0;
gdjs.TutorialCode.GDNewObject10Objects3.length = 0;
gdjs.TutorialCode.GDNewObject11Objects1.length = 0;
gdjs.TutorialCode.GDNewObject11Objects2.length = 0;
gdjs.TutorialCode.GDNewObject11Objects3.length = 0;
gdjs.TutorialCode.GDNewObject12Objects1.length = 0;
gdjs.TutorialCode.GDNewObject12Objects2.length = 0;
gdjs.TutorialCode.GDNewObject12Objects3.length = 0;

gdjs.TutorialCode.eventsList4(runtimeScene);
return;

}

gdjs['TutorialCode'] = gdjs.TutorialCode;
