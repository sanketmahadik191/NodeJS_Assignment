
function circle(radius) {
    console.log("Circumference : " + (2 * Math.PI * radius));
    console.log("Area : " + (Math.PI * radius * radius));
}

function triangle(a,b,c){
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || b + c <= a || c + a <= b) {
        console.log("Invalid input: sides do not form a triangle");
        return;
    }
    let s=(a+b+c)/2;
    let Area = Math.floor(Math.sqrt(s*(s-a)*(s-b)*(s-c))*100)/100;
    console.log("Perimeter : "+ (s*2));
    console.log("Area : " + Area );
    return;
}

function square(a){
    console.log("Length Of Diagonal : " + (a*1.41))
    console.log("Perimeter : " + (4*a));
    console.log("Area : " + (a*a));
}

function rectangle (a,b){
    console.log("Perimeter : " + ((a+b)*2));
    console.log("Area : " + (a*b));
}

function parallelogram(base, height) {
    console.log("Perimeter : " + (2 * (base + height)));
    console.log("Area : " + (base * height));
}

function rhombus(diagonal1, diagonal2) {
    console.log("Perimeter : " + (2 * Math.sqrt(Math.pow(diagonal1 / 2, 2) + Math.pow(diagonal2 / 2, 2))));
    console.log("Area : " + (0.5 * diagonal1 * diagonal2));
}

function kite(diagonal1, diagonal2) {
    console.log("Perimeter : " + (2 * Math.sqrt(Math.pow(diagonal1 / 2, 2) + Math.pow(diagonal2 / 2, 2))));
    console.log("Area : " + (0.5 * diagonal1 * diagonal2));
}

function trapezoid(base1, base2, height) {
    console.log("Perimeter : " + (base1 + base2 + 2 * Math.sqrt(Math.pow((base1 - base2) / 2, 2) + Math.pow(height, 2))));
    console.log("Area : " + (0.5 * (base1 + base2) * height));
}

function ellipse(semiMajorAxis, semiMinorAxis) {
    console.log("Perimeter : " + (Math.PI * (3 * (semiMajorAxis + semiMinorAxis) - Math.sqrt((3 * semiMajorAxis + semiMinorAxis) * (semiMajorAxis + 3 * semiMinorAxis)))));
    console.log("Area : " + (Math.PI * semiMajorAxis * semiMinorAxis));
}

function regularPolygon(numSides, sideLength) {
    console.log("Perimeter : " + (numSides * sideLength));
    console.log("Area : " + (0.25 * numSides * sideLength * sideLength / Math.tan(Math.PI / numSides)));
}

function cylinder(radius, height) {
    console.log("Surface Area : " + (2 * Math.PI * radius * (radius + height)));
    console.log("Volume : " + (Math.PI * radius * radius * height));
}

function cone(radius, height) {
    console.log("Surface Area : " + (Math.PI * radius * (radius + Math.sqrt(height * height + radius * radius))));
    console.log("Volume : " + ((1 / 3) * Math.PI * radius * radius * height));
}

function sphere(radius) {
    console.log("Surface Area : " + (4 * Math.PI * radius * radius));
    console.log("Volume : " + ((4 / 3) * Math.PI * radius * radius * radius));
}

function torus(majorRadius, minorRadius) {
    console.log("Surface Area : " + (4 * Math.PI * minorRadius * (majorRadius + minorRadius)));
    console.log("Volume : " + (2 * Math.PI * Math.PI * majorRadius * minorRadius * minorRadius));
}

function frustum(radius1, radius2, height) {
    let slantHeight = Math.sqrt((radius1 - radius2) * (radius1 - radius2) + height * height);
    console.log("Surface Area : " + (Math.PI * (radius1 + radius2) * slantHeight + Math.PI * (radius1 * radius1 + radius2 * radius2)));
    console.log("Volume : " + ((1 / 3) * Math.PI * height * (radius1 * radius1 + radius2 * radius2 + radius1 * radius2)));
}

function pyramid(baseLength, baseWidth, height) {
    let slantHeight = Math.sqrt((0.5 * baseLength) * (0.5 * baseLength) + height * height);
    console.log("Surface Area : " + (baseLength * baseWidth + baseLength * slantHeight + baseWidth * slantHeight));
    console.log("Volume : " + ((1 / 3) * baseLength * baseWidth * height));
}

module.exports = {
    circle,
    triangle,
    square,
    rectangle,
    parallelogram,
    rhombus,
    kite,
    trapezoid,
    ellipse,
    regularPolygon,
    cylinder,
    cone,
    sphere,
    torus,
    frustum,
    pyramid
};






