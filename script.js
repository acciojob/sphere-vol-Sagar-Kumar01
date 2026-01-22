let radius = document.getElementById("radius");
let volume = document.getElementById("volume");

function volume_sphere(e) {
    e.preventDefault();

    let r = parseFloat(radius.value);

    if (!isNaN(r) && r >= 0) {
        let result = calculate(r);
        volume.value = result.toFixed(4);
        
    } else {
        volume.value = "NaN";
    }
}

function calculate(v) {
    return (4/3) * Math.PI * v * v * v;
}

window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
