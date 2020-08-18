const delay = 500 * 1000;

function abs_sin(value, phase){
    return Math.abs(Math.sin((value/ delay + phase) ));
}

function tri_phase_sin(value){
    let rgb = [];

    /* Senoidal (horrível) */
    rgb.push(max_red    * abs_sin(value, delay, Math.PI * 2/3));
    rgb.push(max_green  * abs_sin(value, delay, Math.PI * 4/3));
    rgb.push(max_blue   * abs_sin(value, delay, 0));

    return rgb;
}

function triang_wave(value, phase){
    let dist = (value + phase) % delay;

    if(dist < delay / 2){
        return 2 * dist / delay;
    }
    else{
        dist -= delay / 2;
        return 1 - 2 * dist / delay;
    }
}

function clamp(value, lower, upper){
    //console.log("Clamp");
    //console.log(value, lower, upper);
    if(value < lower) return lower;
    if(value > upper) return upper;
    return value;
}

function tri_phase_triang(value, maxmin_red, maxmin_green, maxmin_blue){
    let rgb = [];
    let max_red = maxmin_red[1],     min_red = maxmin_red[0];
    let max_green = maxmin_green[1], min_green = maxmin_green[0];
    let max_blue = maxmin_blue[1],   min_blue = maxmin_blue[0];

    //console.log(max_red, min_red);

    /* Linear periódico / dente-de-serra (perfeito) */
    rgb.push( clamp(max_red    * triang_wave(value, 0), min_red, max_red) );
    rgb.push( clamp(max_green  * triang_wave(value, delay/3), min_green, max_green) );
    rgb.push( clamp(max_blue   * triang_wave(value, delay*2/3), min_blue, max_blue) );

    return rgb;
}


let changeBackground = function() {
    let body = document.body;
    let now = Date.now();

    let std_minmax = [10, 255];

    let rgb1 = tri_phase_triang(now, std_minmax, std_minmax, std_minmax);
    let rgb2 = tri_phase_triang(now + delay*1/5, std_minmax, std_minmax, std_minmax);
    let rgb3 = tri_phase_triang(now + delay*2/5, std_minmax, std_minmax, std_minmax);
    let r1=rgb1[0], g1=rgb1[1], b1=rgb1[2];
    let r2=rgb2[0], g2=rgb2[1], b2=rgb2[2];
    let r3=rgb3[0], g3=rgb3[1], b3=rgb3[2];
    //console.log(rgb1);

    let uni = `rgba(${r1}, ${g1}, ${b1},1) 0%`;
    let duni = `rgba(${r2}, ${g2}, ${b2},1) 0%`;
    let te = `rgba(${r3}, ${g3}, ${b3}, 1) 100%`;
    let colors = `${uni}, ${duni}, ${te}`;
    
    let angle = 360 * (now % delay) / delay; //Math.abs(Math.sin(now/10000));
    body.style.background = `linear-gradient(${angle}deg, ${colors})`

    requestAnimationFrame(changeBackground);
}

changeBackground();