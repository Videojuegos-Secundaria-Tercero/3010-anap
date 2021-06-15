gdjs.Nivel_322Code = {};
gdjs.Nivel_322Code.GDCajiregaloObjects1= [];
gdjs.Nivel_322Code.GDCajiregaloObjects2= [];
gdjs.Nivel_322Code.GDCajiregaloObjects3= [];
gdjs.Nivel_322Code.GDJefefinObjects1= [];
gdjs.Nivel_322Code.GDJefefinObjects2= [];
gdjs.Nivel_322Code.GDJefefinObjects3= [];
gdjs.Nivel_322Code.GDFantasmaObjects1= [];
gdjs.Nivel_322Code.GDFantasmaObjects2= [];
gdjs.Nivel_322Code.GDFantasmaObjects3= [];
gdjs.Nivel_322Code.GDEstrenjaObjects1= [];
gdjs.Nivel_322Code.GDEstrenjaObjects2= [];
gdjs.Nivel_322Code.GDEstrenjaObjects3= [];
gdjs.Nivel_322Code.GDPNObjects1= [];
gdjs.Nivel_322Code.GDPNObjects2= [];
gdjs.Nivel_322Code.GDPNObjects3= [];
gdjs.Nivel_322Code.GDParedObjects1= [];
gdjs.Nivel_322Code.GDParedObjects2= [];
gdjs.Nivel_322Code.GDParedObjects3= [];
gdjs.Nivel_322Code.GDPSObjects1= [];
gdjs.Nivel_322Code.GDPSObjects2= [];
gdjs.Nivel_322Code.GDPSObjects3= [];
gdjs.Nivel_322Code.GDFondocomObjects1= [];
gdjs.Nivel_322Code.GDFondocomObjects2= [];
gdjs.Nivel_322Code.GDFondocomObjects3= [];
gdjs.Nivel_322Code.GDNewObjectObjects1= [];
gdjs.Nivel_322Code.GDNewObjectObjects2= [];
gdjs.Nivel_322Code.GDNewObjectObjects3= [];
gdjs.Nivel_322Code.GDNewObject2Objects1= [];
gdjs.Nivel_322Code.GDNewObject2Objects2= [];
gdjs.Nivel_322Code.GDNewObject2Objects3= [];
gdjs.Nivel_322Code.GDNewObject3Objects1= [];
gdjs.Nivel_322Code.GDNewObject3Objects2= [];
gdjs.Nivel_322Code.GDNewObject3Objects3= [];
gdjs.Nivel_322Code.GDNewObject4Objects1= [];
gdjs.Nivel_322Code.GDNewObject4Objects2= [];
gdjs.Nivel_322Code.GDNewObject4Objects3= [];
gdjs.Nivel_322Code.GDNewObject5Objects1= [];
gdjs.Nivel_322Code.GDNewObject5Objects2= [];
gdjs.Nivel_322Code.GDNewObject5Objects3= [];
gdjs.Nivel_322Code.GDNewObject6Objects1= [];
gdjs.Nivel_322Code.GDNewObject6Objects2= [];
gdjs.Nivel_322Code.GDNewObject6Objects3= [];

gdjs.Nivel_322Code.conditionTrue_0 = {val:false};
gdjs.Nivel_322Code.condition0IsTrue_0 = {val:false};
gdjs.Nivel_322Code.condition1IsTrue_0 = {val:false};
gdjs.Nivel_322Code.condition2IsTrue_0 = {val:false};
gdjs.Nivel_322Code.conditionTrue_1 = {val:false};
gdjs.Nivel_322Code.condition0IsTrue_1 = {val:false};
gdjs.Nivel_322Code.condition1IsTrue_1 = {val:false};
gdjs.Nivel_322Code.condition2IsTrue_1 = {val:false};


gdjs.Nivel_322Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Nivel_322Code.GDFantasmaObjects1, gdjs.Nivel_322Code.GDFantasmaObjects2);


gdjs.Nivel_322Code.condition0IsTrue_0.val = false;
gdjs.Nivel_322Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_322Code.GDFantasmaObjects2.length;i<l;++i) {
    if ( !(gdjs.Nivel_322Code.GDFantasmaObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Nivel_322Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_322Code.GDFantasmaObjects2[k] = gdjs.Nivel_322Code.GDFantasmaObjects2[i];
        ++k;
    }
}
gdjs.Nivel_322Code.GDFantasmaObjects2.length = k;}if ( gdjs.Nivel_322Code.condition0IsTrue_0.val ) {
{
{gdjs.Nivel_322Code.conditionTrue_1 = gdjs.Nivel_322Code.condition1IsTrue_0;
gdjs.Nivel_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18863156);
}
}}
if (gdjs.Nivel_322Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Nivel_322Code.GDFantasmaObjects2 */
{for(var i = 0, len = gdjs.Nivel_322Code.GDFantasmaObjects2.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDFantasmaObjects2[i].setAnimationName("Quieto");
}
}}

}


{

/* Reuse gdjs.Nivel_322Code.GDFantasmaObjects1 */

gdjs.Nivel_322Code.condition0IsTrue_0.val = false;
gdjs.Nivel_322Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_322Code.GDFantasmaObjects1.length;i<l;++i) {
    if ( gdjs.Nivel_322Code.GDFantasmaObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Nivel_322Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_322Code.GDFantasmaObjects1[k] = gdjs.Nivel_322Code.GDFantasmaObjects1[i];
        ++k;
    }
}
gdjs.Nivel_322Code.GDFantasmaObjects1.length = k;}if ( gdjs.Nivel_322Code.condition0IsTrue_0.val ) {
{
{gdjs.Nivel_322Code.conditionTrue_1 = gdjs.Nivel_322Code.condition1IsTrue_0;
gdjs.Nivel_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18864316);
}
}}
if (gdjs.Nivel_322Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Nivel_322Code.GDFantasmaObjects1 */
{for(var i = 0, len = gdjs.Nivel_322Code.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDFantasmaObjects1[i].setAnimationName("Caminar");
}
}}

}


};gdjs.Nivel_322Code.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Nivel_322Code.GDCajiregaloObjects1 */

gdjs.Nivel_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_322Code.GDCajiregaloObjects1.length;i<l;++i) {
    if ( gdjs.Nivel_322Code.GDCajiregaloObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Nivel_322Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_322Code.GDCajiregaloObjects1[k] = gdjs.Nivel_322Code.GDCajiregaloObjects1[i];
        ++k;
    }
}
gdjs.Nivel_322Code.GDCajiregaloObjects1.length = k;}if (gdjs.Nivel_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_322Code.GDCajiregaloObjects1 */
{for(var i = 0, len = gdjs.Nivel_322Code.GDCajiregaloObjects1.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDCajiregaloObjects1[i].setAnimationName("Camino");
}
}}

}


};gdjs.Nivel_322Code.mapOfGDgdjs_46Nivel_95322Code_46GDFantasmaObjects1Objects = Hashtable.newFrom({"Fantasma": gdjs.Nivel_322Code.GDFantasmaObjects1});gdjs.Nivel_322Code.mapOfGDgdjs_46Nivel_95322Code_46GDCajiregaloObjects1Objects = Hashtable.newFrom({"Cajiregalo": gdjs.Nivel_322Code.GDCajiregaloObjects1});gdjs.Nivel_322Code.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.Nivel_322Code.GDFantasmaObjects1 */

gdjs.Nivel_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_322Code.GDFantasmaObjects1.length;i<l;++i) {
    if ( gdjs.Nivel_322Code.GDFantasmaObjects1[i].hasAnimationEnded() ) {
        gdjs.Nivel_322Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_322Code.GDFantasmaObjects1[k] = gdjs.Nivel_322Code.GDFantasmaObjects1[i];
        ++k;
    }
}
gdjs.Nivel_322Code.GDFantasmaObjects1.length = k;}if (gdjs.Nivel_322Code.condition0IsTrue_0.val) {
}

}


};gdjs.Nivel_322Code.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.Nivel_322Code.GDEstrenjaObjects1 */

gdjs.Nivel_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_322Code.GDEstrenjaObjects1.length;i<l;++i) {
    if ( gdjs.Nivel_322Code.GDEstrenjaObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Nivel_322Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_322Code.GDEstrenjaObjects1[k] = gdjs.Nivel_322Code.GDEstrenjaObjects1[i];
        ++k;
    }
}
gdjs.Nivel_322Code.GDEstrenjaObjects1.length = k;}if (gdjs.Nivel_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_322Code.GDEstrenjaObjects1 */
{for(var i = 0, len = gdjs.Nivel_322Code.GDEstrenjaObjects1.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDEstrenjaObjects1[i].setAnimationName("Caminar");
}
}}

}


};gdjs.Nivel_322Code.mapOfGDgdjs_46Nivel_95322Code_46GDFantasmaObjects1Objects = Hashtable.newFrom({"Fantasma": gdjs.Nivel_322Code.GDFantasmaObjects1});gdjs.Nivel_322Code.mapOfGDgdjs_46Nivel_95322Code_46GDEstrenjaObjects1Objects = Hashtable.newFrom({"Estrenja": gdjs.Nivel_322Code.GDEstrenjaObjects1});gdjs.Nivel_322Code.mapOfGDgdjs_46Nivel_95322Code_46GDFantasmaObjects1Objects = Hashtable.newFrom({"Fantasma": gdjs.Nivel_322Code.GDFantasmaObjects1});gdjs.Nivel_322Code.mapOfGDgdjs_46Nivel_95322Code_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.Nivel_322Code.GDNewObject4Objects1});gdjs.Nivel_322Code.mapOfGDgdjs_46Nivel_95322Code_46GDFantasmaObjects1Objects = Hashtable.newFrom({"Fantasma": gdjs.Nivel_322Code.GDFantasmaObjects1});gdjs.Nivel_322Code.mapOfGDgdjs_46Nivel_95322Code_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.Nivel_322Code.GDNewObject5Objects1});gdjs.Nivel_322Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.Nivel_322Code.GDFantasmaObjects1);

gdjs.Nivel_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_322Code.GDFantasmaObjects1.length;i<l;++i) {
    if ( gdjs.Nivel_322Code.GDFantasmaObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Nivel_322Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_322Code.GDFantasmaObjects1[k] = gdjs.Nivel_322Code.GDFantasmaObjects1[i];
        ++k;
    }
}
gdjs.Nivel_322Code.GDFantasmaObjects1.length = k;}if (gdjs.Nivel_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_322Code.GDFantasmaObjects1 */
{for(var i = 0, len = gdjs.Nivel_322Code.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDFantasmaObjects1[i].setAnimationName("Saltar");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.Nivel_322Code.GDFantasmaObjects1);

gdjs.Nivel_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_322Code.GDFantasmaObjects1.length;i<l;++i) {
    if ( gdjs.Nivel_322Code.GDFantasmaObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Nivel_322Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_322Code.GDFantasmaObjects1[k] = gdjs.Nivel_322Code.GDFantasmaObjects1[i];
        ++k;
    }
}
gdjs.Nivel_322Code.GDFantasmaObjects1.length = k;}if (gdjs.Nivel_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_322Code.GDFantasmaObjects1 */
{for(var i = 0, len = gdjs.Nivel_322Code.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDFantasmaObjects1[i].setAnimationName("Caer");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.Nivel_322Code.GDFantasmaObjects1);

gdjs.Nivel_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_322Code.GDFantasmaObjects1.length;i<l;++i) {
    if ( gdjs.Nivel_322Code.GDFantasmaObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Nivel_322Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_322Code.GDFantasmaObjects1[k] = gdjs.Nivel_322Code.GDFantasmaObjects1[i];
        ++k;
    }
}
gdjs.Nivel_322Code.GDFantasmaObjects1.length = k;}if (gdjs.Nivel_322Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Nivel_322Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Nivel_322Code.condition0IsTrue_0.val = false;
{
gdjs.Nivel_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Nivel_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.Nivel_322Code.GDFantasmaObjects1);
{for(var i = 0, len = gdjs.Nivel_322Code.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDFantasmaObjects1[i].flipX(false);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.Nivel_322Code.GDFantasmaObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.Nivel_322Code.GDFantasmaObjects1.length === 0 ) ? 0 :gdjs.Nivel_322Code.GDFantasmaObjects1[0].getPointX("Center")), "", 0);
}}

}


{


gdjs.Nivel_322Code.condition0IsTrue_0.val = false;
{
gdjs.Nivel_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Nivel_322Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.Nivel_322Code.GDFantasmaObjects1);
{for(var i = 0, len = gdjs.Nivel_322Code.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDFantasmaObjects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cajiregalo"), gdjs.Nivel_322Code.GDCajiregaloObjects1);

gdjs.Nivel_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_322Code.GDCajiregaloObjects1.length;i<l;++i) {
    if ( gdjs.Nivel_322Code.GDCajiregaloObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Nivel_322Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_322Code.GDCajiregaloObjects1[k] = gdjs.Nivel_322Code.GDCajiregaloObjects1[i];
        ++k;
    }
}
gdjs.Nivel_322Code.GDCajiregaloObjects1.length = k;}if (gdjs.Nivel_322Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Nivel_322Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cajiregalo"), gdjs.Nivel_322Code.GDCajiregaloObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.Nivel_322Code.GDFantasmaObjects1);

gdjs.Nivel_322Code.condition0IsTrue_0.val = false;
gdjs.Nivel_322Code.condition1IsTrue_0.val = false;
{
gdjs.Nivel_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel_322Code.mapOfGDgdjs_46Nivel_95322Code_46GDFantasmaObjects1Objects, gdjs.Nivel_322Code.mapOfGDgdjs_46Nivel_95322Code_46GDCajiregaloObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Nivel_322Code.condition0IsTrue_0.val ) {
{
{gdjs.Nivel_322Code.conditionTrue_1 = gdjs.Nivel_322Code.condition1IsTrue_0;
gdjs.Nivel_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18868804);
}
}}
if (gdjs.Nivel_322Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Nivel_322Code.GDFantasmaObjects1 */
{for(var i = 0, len = gdjs.Nivel_322Code.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDFantasmaObjects1[i].setAnimationName("Daño");
}
}{for(var i = 0, len = gdjs.Nivel_322Code.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDFantasmaObjects1[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.Nivel_322Code.GDFantasmaObjects1);

gdjs.Nivel_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_322Code.GDFantasmaObjects1.length;i<l;++i) {
    if ( gdjs.Nivel_322Code.GDFantasmaObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Nivel_322Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_322Code.GDFantasmaObjects1[k] = gdjs.Nivel_322Code.GDFantasmaObjects1[i];
        ++k;
    }
}
gdjs.Nivel_322Code.GDFantasmaObjects1.length = k;}if (gdjs.Nivel_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_322Code.GDFantasmaObjects1 */
{for(var i = 0, len = gdjs.Nivel_322Code.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDFantasmaObjects1[i].setAnimationName("Moriiiiir");
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Nivel 2", false);
}
{ //Subevents
gdjs.Nivel_322Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Estrenja"), gdjs.Nivel_322Code.GDEstrenjaObjects1);

gdjs.Nivel_322Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_322Code.GDEstrenjaObjects1.length;i<l;++i) {
    if ( gdjs.Nivel_322Code.GDEstrenjaObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Nivel_322Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_322Code.GDEstrenjaObjects1[k] = gdjs.Nivel_322Code.GDEstrenjaObjects1[i];
        ++k;
    }
}
gdjs.Nivel_322Code.GDEstrenjaObjects1.length = k;}if (gdjs.Nivel_322Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Nivel_322Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Estrenja"), gdjs.Nivel_322Code.GDEstrenjaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.Nivel_322Code.GDFantasmaObjects1);

gdjs.Nivel_322Code.condition0IsTrue_0.val = false;
gdjs.Nivel_322Code.condition1IsTrue_0.val = false;
{
gdjs.Nivel_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel_322Code.mapOfGDgdjs_46Nivel_95322Code_46GDFantasmaObjects1Objects, gdjs.Nivel_322Code.mapOfGDgdjs_46Nivel_95322Code_46GDEstrenjaObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Nivel_322Code.condition0IsTrue_0.val ) {
{
{gdjs.Nivel_322Code.conditionTrue_1 = gdjs.Nivel_322Code.condition1IsTrue_0;
gdjs.Nivel_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(18873324);
}
}}
if (gdjs.Nivel_322Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Nivel_322Code.GDFantasmaObjects1 */
{for(var i = 0, len = gdjs.Nivel_322Code.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDFantasmaObjects1[i].setAnimationName("Daño");
}
}{for(var i = 0, len = gdjs.Nivel_322Code.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDFantasmaObjects1[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.Nivel_322Code.GDFantasmaObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.Nivel_322Code.GDNewObject4Objects1);

gdjs.Nivel_322Code.condition0IsTrue_0.val = false;
{
gdjs.Nivel_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel_322Code.mapOfGDgdjs_46Nivel_95322Code_46GDFantasmaObjects1Objects, gdjs.Nivel_322Code.mapOfGDgdjs_46Nivel_95322Code_46GDNewObject4Objects1Objects, false, runtimeScene, false);
}if (gdjs.Nivel_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_322Code.GDFantasmaObjects1 */
{for(var i = 0, len = gdjs.Nivel_322Code.GDFantasmaObjects1.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDFantasmaObjects1[i].getBehavior("Health").SetHealth(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Fantasma"), gdjs.Nivel_322Code.GDFantasmaObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.Nivel_322Code.GDNewObject5Objects1);

gdjs.Nivel_322Code.condition0IsTrue_0.val = false;
{
gdjs.Nivel_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel_322Code.mapOfGDgdjs_46Nivel_95322Code_46GDFantasmaObjects1Objects, gdjs.Nivel_322Code.mapOfGDgdjs_46Nivel_95322Code_46GDNewObject5Objects1Objects, false, runtimeScene, false);
}if (gdjs.Nivel_322Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Nivel 3", false);
}}

}


};

gdjs.Nivel_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Nivel_322Code.GDCajiregaloObjects1.length = 0;
gdjs.Nivel_322Code.GDCajiregaloObjects2.length = 0;
gdjs.Nivel_322Code.GDCajiregaloObjects3.length = 0;
gdjs.Nivel_322Code.GDJefefinObjects1.length = 0;
gdjs.Nivel_322Code.GDJefefinObjects2.length = 0;
gdjs.Nivel_322Code.GDJefefinObjects3.length = 0;
gdjs.Nivel_322Code.GDFantasmaObjects1.length = 0;
gdjs.Nivel_322Code.GDFantasmaObjects2.length = 0;
gdjs.Nivel_322Code.GDFantasmaObjects3.length = 0;
gdjs.Nivel_322Code.GDEstrenjaObjects1.length = 0;
gdjs.Nivel_322Code.GDEstrenjaObjects2.length = 0;
gdjs.Nivel_322Code.GDEstrenjaObjects3.length = 0;
gdjs.Nivel_322Code.GDPNObjects1.length = 0;
gdjs.Nivel_322Code.GDPNObjects2.length = 0;
gdjs.Nivel_322Code.GDPNObjects3.length = 0;
gdjs.Nivel_322Code.GDParedObjects1.length = 0;
gdjs.Nivel_322Code.GDParedObjects2.length = 0;
gdjs.Nivel_322Code.GDParedObjects3.length = 0;
gdjs.Nivel_322Code.GDPSObjects1.length = 0;
gdjs.Nivel_322Code.GDPSObjects2.length = 0;
gdjs.Nivel_322Code.GDPSObjects3.length = 0;
gdjs.Nivel_322Code.GDFondocomObjects1.length = 0;
gdjs.Nivel_322Code.GDFondocomObjects2.length = 0;
gdjs.Nivel_322Code.GDFondocomObjects3.length = 0;
gdjs.Nivel_322Code.GDNewObjectObjects1.length = 0;
gdjs.Nivel_322Code.GDNewObjectObjects2.length = 0;
gdjs.Nivel_322Code.GDNewObjectObjects3.length = 0;
gdjs.Nivel_322Code.GDNewObject2Objects1.length = 0;
gdjs.Nivel_322Code.GDNewObject2Objects2.length = 0;
gdjs.Nivel_322Code.GDNewObject2Objects3.length = 0;
gdjs.Nivel_322Code.GDNewObject3Objects1.length = 0;
gdjs.Nivel_322Code.GDNewObject3Objects2.length = 0;
gdjs.Nivel_322Code.GDNewObject3Objects3.length = 0;
gdjs.Nivel_322Code.GDNewObject4Objects1.length = 0;
gdjs.Nivel_322Code.GDNewObject4Objects2.length = 0;
gdjs.Nivel_322Code.GDNewObject4Objects3.length = 0;
gdjs.Nivel_322Code.GDNewObject5Objects1.length = 0;
gdjs.Nivel_322Code.GDNewObject5Objects2.length = 0;
gdjs.Nivel_322Code.GDNewObject5Objects3.length = 0;
gdjs.Nivel_322Code.GDNewObject6Objects1.length = 0;
gdjs.Nivel_322Code.GDNewObject6Objects2.length = 0;
gdjs.Nivel_322Code.GDNewObject6Objects3.length = 0;

gdjs.Nivel_322Code.eventsList4(runtimeScene);
return;

}

gdjs['Nivel_322Code'] = gdjs.Nivel_322Code;
