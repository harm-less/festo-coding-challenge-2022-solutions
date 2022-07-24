// // const dotGeometry = new THREE.BufferGeometry();
// // dotGeometry.setAttribute('position', new THREE.BufferAttribute()).push(new THREE.Vector3( 0, 0, 0));
// // const dotMaterial = new THREE.PointsMaterial( { size: 1, sizeAttenuation: false } );
// // const dot = new THREE.Points( dotGeometry, dotMaterial );
// // scene.add( dot );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
// camera.position.set(0, 0, 100);
// camera.lookAt(0, 0, 0);

// const scene = new THREE.Scene();

// //create a blue LineBasicMaterial
// const material = new THREE.PointsMaterial({size: 3, color: 0x0000ff});

// const points = [];
// points.push(new THREE.Vector3(-10, 0, 0));
// points.push(new THREE.Vector3(0, 10, 0));
// points.push(new THREE.Vector3(10, 0, 0));

// const geometry = new THREE.BufferGeometry().setFromPoints(points);

// const line = new THREE.Points(geometry, material);

// scene.add(line);
// renderer.render(scene, camera);

// var down = false;
// var sx = 0,
// 	sy = 0;

// window.onmousedown = function (ev) {
// 	down = true;
// 	sx = ev.clientX;
// 	sy = ev.clientY;
// };
// window.onmouseup = function () {
// 	down = false;
// };
// window.onmousemove = function (ev) {
// 	if (down) {
// 		var dx = ev.clientX - sx;
// 		var dy = ev.clientY - sy;
// 		line.rotation.y += dx * 0.01;

// 		camera.position.y += dy;
// 		sx += dx;
// 		sy += dy;
// 	}
// };
// var animating = false;
// window.ondblclick = function () {
// 	animating = !animating;
// };
// var paused = false;
// var last = new Date().getTime();

// function animate(t) {
// 	if (!paused) {
// 		last = t;
// 		if (animating) {
// 			var v = pointGeo.vertices;
// 			for (var i = 0; i < v.length; i++) {
// 				var u = v[i];
// 				console.log(u);
// 				u.angle += u.speed * 0.01;
// 				u.x = Math.cos(u.angle) * u.radius;
// 				u.z = Math.sin(u.angle) * u.radius;
// 			}
// 			pointGeo.__dirtyVertices = true;
// 		}
// 		renderer.clear();
// 		camera.lookAt(scene.position);
// 		renderer.render(scene, camera);
// 	}
// 	window.requestAnimationFrame(animate, renderer.domElement);
// }
// animate(new Date().getTime());

// // /* eslint-disable */
// // // @ts-nocheck

// // function createTextCanvas(text, color, font, size) {
// // 	size = size || 16;
// // 	var canvas = document.createElement('canvas');
// // 	var ctx = canvas.getContext('2d');
// // 	var fontStr = size + 'px ' + (font || 'Arial');
// // 	ctx.font = fontStr;
// // 	var w = ctx.measureText(text).width;
// // 	var h = Math.ceil(size);
// // 	canvas.width = w;
// // 	canvas.height = h;
// // 	ctx.font = fontStr;
// // 	ctx.fillStyle = color || 'black';
// // 	ctx.fillText(text, 0, Math.ceil(size * 0.8));
// // 	return canvas;
// // }

// // function createText2D(text, color, font, size, segW, segH) {
// // 	var canvas = createTextCanvas(text, color, font, size);
// // 	var plane = new THREE.PlaneGeometry(canvas.width, canvas.height, segW, segH);
// // 	var tex = new THREE.Texture(canvas);
// // 	tex.needsUpdate = true;
// // 	var planeMat = new THREE.MeshBasicMaterial({
// // 		map: tex,
// // 		color: 0xffffff,
// // 		transparent: true
// // 	});
// // 	var mesh = new THREE.Mesh(plane, planeMat);
// // 	mesh.scale.set(0.5, 0.5, 0.5);
// // 	mesh.doubleSided = true;
// // 	return mesh;
// // }

// // // from http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
// // function hexToRgb(hex) {
// // 	//TODO rewrite with vector output
// // 	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
// // 	return result
// // 		? {
// // 				r: parseInt(result[1], 16),
// // 				g: parseInt(result[2], 16),
// // 				b: parseInt(result[3], 16)
// // 		  }
// // 		: null;
// // }

// // var renderer = new THREE.WebGLRenderer({
// // 	antialias: true
// // });
// // var w = 960;
// // var h = 500;
// // renderer.setSize(w, h);
// // console.log(document, document.body);
// // document.body.appendChild(renderer.domElement);

// // // renderer.setClearColorHex(0xeeeeee, 1.0);

// // var camera = new THREE.PerspectiveCamera(45, w / h, 1, 10000);
// // camera.position.z = 200;
// // camera.position.x = -100;
// // camera.position.y = 100;

// // var scene = new THREE.Scene();

// // var scatterPlot = new THREE.Object3D();
// // scene.add(scatterPlot);

// // scatterPlot.rotation.y = 0;

// // function v(x, y, z) {
// // 	return new THREE.Vector3(x, y, z);
// // }

// // var unfiltered = [],
// // 	lowPass = [],
// // 	highPass = [];

// // var format = d3.format('+.3f');

// // const csvData = `x,y,z,lp_x,lp_y,lp_z,hp_x,hp_y,hp_z,
// // 0.235458,-0.597702,-0.724487,0.232433,-0.593757,-0.717156,0.003025,-0.003945,-0.007332,
// // 0.235458,-0.597702,-0.724487,0.232735,-0.594152,-0.717889,0.002723,-0.003550,-0.006598,
// // 0.217346,-0.597702,-0.724487,0.231197,-0.594507,-0.718549,-0.013850,-0.003195,-0.005939,
// // 0.217346,-0.579590,-0.724487,0.229812,-0.593015,-0.719143,-0.012465,0.013425,-0.005345,
// // 0.199234,-0.579590,-0.724487,0.226754,-0.591673,-0.719677,-0.027520,0.012083,-0.004810,
// // 0.199234,-0.597702,-0.760712,0.224002,-0.592276,-0.723781,-0.024768,-0.005426,-0.036931,
// // 0.163010,-0.579590,-0.706375,0.217903,-0.591007,-0.722040,-0.054893,0.011417,0.015665,
// // 0.108673,-0.597702,-0.724487,0.206980,-0.591676,-0.722285,-0.098307,-0.006026,-0.002203,
// // 0.090561,-0.615814,-0.724487,0.195338,-0.594090,-0.722505,-0.104777,-0.021724,-0.001982,
// // 0.126785,-0.615814,-0.742599,0.188483,-0.596263,-0.724514,-0.061697,-0.019552,-0.018085,
// // 0.108673,-0.597702,-0.706375,0.180502,-0.596407,-0.722701,-0.071828,-0.001295,0.016325,
// // 0.108673,-0.615814,-0.742599,0.173319,-0.598347,-0.724690,-0.064646,-0.017467,-0.017909,
// // 0.144897,-0.597702,-0.724487,0.170477,-0.598283,-0.724670,-0.025579,0.000581,0.000183,
// // 0.126785,-0.597702,-0.760712,0.166107,-0.598225,-0.728274,-0.039322,0.000523,-0.032437,
// // 0.108673,-0.633926,-0.778824,0.160364,-0.601795,-0.733329,-0.051691,-0.032131,-0.045495,
// // -0.054337,-0.597702,-0.742599,0.138894,-0.601386,-0.734256,-0.193231,0.003684,-0.008343,
// // -0.054337,-0.615814,-0.742599,0.119571,-0.602828,-0.735091,-0.173907,-0.012986,-0.007509,
// // -0.144897,-0.633926,-0.760712,0.093124,-0.605938,-0.737653,-0.238022,-0.027988,-0.023059,
// // -0.217346,-0.543365,-0.815048,0.062077,-0.599681,-0.745392,-0.279423,0.056316,-0.069656,
// // -0.398468,-0.615814,-0.760712,0.016023,-0.601294,-0.746924,-0.414491,-0.014520,-0.013787,
// // -0.760712,-0.815048,-0.670151,-0.061651,-0.622670,-0.739247,-0.699061,-0.192379,0.069096,
// // -0.724487,-0.597702,-0.959946,-0.127935,-0.620173,-0.761317,-0.596553,0.022471,-0.198629,
// // -0.344131,-0.452805,-0.996170,-0.149554,-0.603436,-0.784802,-0.194577,0.150632,-0.211368,
// // 0.199234,0.036224,-1.430862,-0.114675,-0.539470,-0.849408,0.313909,0.575694,-0.581454,
// // 0.434692,0.380356,-1.521423,-0.059739,-0.447487,-0.916610,0.494431,0.827843,-0.604814,
// // 0.362244,0.326019,-0.815048,-0.017540,-0.370137,-0.906453,0.379784,0.696156,0.091405,
// // -0.072449,0.181122,-0.235458,-0.023031,-0.315011,-0.839354,-0.049418,0.496133,0.603896,
// // -1.032394,-0.633926,0.199234,-0.123968,-0.346902,-0.735495,-0.908427,-0.287024,0.934729,
// // -1.376526,-1.285965,0.054337,-0.249223,-0.440809,-0.656512,-1.127303,-0.845156,0.710849,
// // -1.159180,-1.503311,-0.579590,-0.340219,-0.547059,-0.648820,-0.818961,-0.956252,0.069230,
// // -0.434692,-0.941833,-1.249741,-0.349666,-0.586536,-0.708912,-0.085026,-0.355297,-0.540829,
// // 0.018112,0.126785,-1.974228,-0.312888,-0.515204,-0.835443,0.331001,0.641990,-1.138784,
// // 0.416580,0.543365,-1.720657,-0.239942,-0.409347,-0.923965,0.656522,0.952713,-0.796692,
// // 0.416580,0.452805,-0.742599,-0.174289,-0.323132,-0.905828,0.590870,0.775937,0.163229,
// // 0.144897,0.199234,0.090561,-0.142371,-0.270895,-0.806189,0.287268,0.470129,0.896750,
// // -0.579590,-0.235458,0.452805,-0.186093,-0.267352,-0.680290,-0.393497,0.031893,1.133095,
// // -1.086731,-0.778824,0.688263,-0.276156,-0.318499,-0.543435,-0.810574,-0.460325,1.231698,
// // -1.611984,-1.249741,0.489029,-0.409739,-0.411623,-0.440188,-1.202245,-0.838117,0.929217,
// // -1.485199,-1.177292,-1.014282,-0.517285,-0.488190,-0.497598,-0.967914,-0.689102,-0.516684,
// // -1.177292,-0.543365,-2.282135,-0.583286,-0.493708,-0.676051,-0.594006,-0.049658,-1.606084,
// // -0.235458,0.163010,-2.300247,-0.548503,-0.428036,-0.838471,0.313045,0.591045,-1.461776,
// // 0.289795,0.470917,-1.829330,-0.464673,-0.338141,-0.937557,0.754468,0.809057,-0.891773,
// // 0.470917,0.489029,-0.597702,-0.371114,-0.255424,-0.903571,0.842031,0.744453,0.305869,
// // 0.362244,0.344131,0.307907,-0.297779,-0.195468,-0.782424,0.660022,0.539600,1.090331,
// // -0.271683,-0.018112,0.905609,-0.295169,-0.177733,-0.613620,0.023486,0.159620,1.519229,
// // -1.376526,-0.796936,1.340302,-0.403305,-0.239653,-0.418228,-0.973221,-0.557283,1.758530,
// // -2.028564,-1.195404,0.633926,-0.565831,-0.335228,-0.313013,-1.462734,-0.860176,0.946939,
// // -2.010452,-0.742599,-1.104843,-0.710293,-0.375965,-0.392196,-1.300159,-0.366634,-0.712647,
// // -1.376526,-0.072449,-2.300247,-0.776916,-0.345614,-0.583001,-0.599610,0.273165,-1.717246,
// // -0.072449,0.199234,-2.300247,-0.706469,-0.291129,-0.754726,0.634021,0.490363,-1.545522,
// // 0.688263,0.416580,-1.122955,-0.566996,-0.220358,-0.791549,1.255259,0.636938,-0.331407,
// // 0.724487,0.416580,-0.036224,-0.437848,-0.156664,-0.716016,1.162335,0.573244,0.679792,
// // 0.199234,0.108673,1.050507,-0.374140,-0.130130,-0.539364,0.573374,0.238803,1.589870,
// // -1.050507,-0.416580,1.285965,-0.441776,-0.158775,-0.356831,-0.608730,-0.257805,1.642796,
// // -1.774994,-0.796936,1.104843,-0.575098,-0.222591,-0.210664,-1.199896,-0.574345,1.315507,
// // -2.028564,-0.941833,0.289795,-0.720445,-0.294516,-0.160618,-1.308120,-0.647318,0.450413,
// // -1.992340,-0.507141,-1.720657,-0.847634,-0.315778,-0.316622,-1.144706,-0.191363,-1.404036,
// // -1.068619,0.054337,-2.300247,-0.869733,-0.278767,-0.514984,-0.198886,0.333103,-1.785263,
// // -0.253571,0.289795,-2.245911,-0.808116,-0.221911,-0.688077,0.554546,0.511705,-1.557834,
// // 0.543365,0.271683,-0.652039,-0.672968,-0.172551,-0.684473,1.216334,0.444234,0.032434,
// // 0.507141,0.271683,0.235458,-0.554957,-0.128128,-0.592480,1.062098,0.399811,0.827938,
// // -0.253571,0.054337,1.050507,-0.524819,-0.109881,-0.428181,0.271248,0.164218,1.478688,
// // -1.104843,-0.181122,0.996170,-0.582821,-0.117005,-0.285746,-0.522022,-0.064116,1.281916,
// // -1.503311,-0.706375,0.688263,-0.674870,-0.175942,-0.188345,-0.828441,-0.530433,0.876608,
// // -2.082901,-1.213516,0.326019,-0.815673,-0.279700,-0.136909,-1.267228,-0.933816,0.462928,
// // -1.702545,-0.959946,-0.796936,-0.904360,-0.347724,-0.202911,-0.798185,-0.612221,-0.594025,
// // -0.996170,-0.760712,-1.376526,-0.913541,-0.389023,-0.320273,-0.082629,-0.371689,-1.056253,
// // -0.289795,-0.326019,-1.666321,-0.851167,-0.382723,-0.454878,0.561372,0.056703,-1.211443,
// // -0.271683,0.271683,-1.648209,-0.793218,-0.317282,-0.574211,0.521536,0.588965,-1.073998,
// // -0.253571,0.561478,-0.959946,-0.739254,-0.229406,-0.612784,0.485683,0.790884,-0.347161,
// // -0.344131,0.289795,0.470917,-0.699741,-0.177486,-0.504414,0.355610,0.467281,0.975331,
// // -0.235458,-0.217346,1.231628,-0.653313,-0.181472,-0.330810,0.417855,-0.035874,1.562438,
// // -0.688263,-0.724487,1.503311,-0.656808,-0.235774,-0.147398,-0.031455,-0.488714,1.650709,
// // -1.412750,-1.050507,1.304077,-0.732402,-0.317247,-0.002250,-0.680348,-0.733260,1.306327,
// // -2.209686,-0.815048,-0.054337,-0.880131,-0.367027,-0.007459,-1.329556,-0.448021,-0.046878,
// // -2.046677,-0.181122,-2.191574,-0.996785,-0.348437,-0.225870,-1.049891,0.167315,-1.965704,
// // -1.249741,0.036224,-2.209686,-1.022081,-0.309970,-0.424252,-0.227660,0.346195,-1.785434,
// // -0.054337,0.000000,-1.050507,-0.925306,-0.278973,-0.486877,0.870970,0.278973,-0.563629,
// // 0.470917,0.018112,-0.235458,-0.785684,-0.249265,-0.461736,1.256601,0.267377,0.226277,
// // 0.470917,0.072449,0.362244,-0.660024,-0.217093,-0.379338,1.130941,0.289542,0.741581,
// // -0.507141,0.054337,0.941833,-0.644736,-0.189950,-0.247221,0.137595,0.244287,1.189054,
// // -1.485199,-0.380356,1.104843,-0.728782,-0.208991,-0.112014,-0.756417,-0.171365,1.216857,
// // -1.919891,-0.796936,1.068619,-0.847893,-0.267786,0.006049,-1.071998,-0.529151,1.062570,
// // -1.648209,-0.887497,0.307907,-0.927925,-0.329757,0.036235,-0.720284,-0.557740,0.271672,
// // -0.796936,-0.796936,-1.032394,-0.914826,-0.376475,-0.070628,0.117890,-0.420461,-0.961766,
// // -0.778824,-0.652039,-1.430862,-0.901225,-0.404031,-0.206651,0.122402,-0.248008,-1.224211,
// // -0.597702,-0.579590,-1.285965,-0.870873,-0.421587,-0.314583,0.273171,-0.158003,-0.971382,
// // -0.525253,-0.018112,-1.448975,-0.836311,-0.381239,-0.428022,0.311058,0.363127,-1.020953,
// // -0.525253,0.869385,-0.959946,-0.805205,-0.256177,-0.481214,0.279952,1.125562,-0.478731,
// // -0.652039,1.267853,-0.579590,-0.789889,-0.103774,-0.491052,0.137850,1.371627,-0.088538,
// // -1.141068,0.670151,0.706375,-0.825007,-0.026382,-0.371309,-0.316061,0.696532,1.077684,
// // -1.358414,0.163010,0.869385,-0.878347,-0.007442,-0.247240,-0.480066,0.170452,1.116625,
// // -1.557648,-0.398468,1.376526,-0.946277,-0.046545,-0.084863,-0.611370,-0.351923,1.461389,
// // -1.358414,-0.905609,1.249741,-0.987491,-0.132451,0.048597,-0.370923,-0.773158,1.201143,
// // -1.159180,-1.104843,0.380356,-1.004660,-0.229691,0.081773,-0.154520,-0.875153,0.298583,
// // -0.851273,-0.887497,-1.267853,-0.989321,-0.295471,-0.053190,0.138049,-0.592026,-1.214663,
// // -0.380356,-0.326019,-1.774994,-0.928425,-0.298526,-0.225370,0.548069,-0.027493,-1.549624,
// // -0.416580,0.362244,-1.485199,-0.877240,-0.232449,-0.351353,0.460660,0.594693,-1.133846,
// // -0.742599,0.851273,-0.489029,-0.863776,-0.124077,-0.365120,0.121177,0.975349,-0.123908,
// // -1.032394,0.887497,0.452805,-0.880638,-0.022920,-0.283328,-0.151756,0.910416,0.736133,
// // -0.959946,0.543365,0.579590,-0.888569,0.033709,-0.197036,-0.071377,0.509656,0.776626,
// // -1.141068,-0.235458,0.978058,-0.913819,0.006792,-0.079527,-0.227249,-0.242251,1.057585,
// // -1.702545,-1.050507,1.358414,-0.992691,-0.098938,0.064267,-0.709854,-0.951569,1.294146,
// // -1.593872,-1.195404,0.000000,-1.052809,-0.208584,0.057841,-0.541063,-0.986820,-0.057841,
// // -0.996170,-0.597702,-1.304077,-1.047145,-0.247496,-0.078351,0.050975,-0.350206,-1.225726,
// // -0.597702,-0.235458,-1.430862,-1.002201,-0.246292,-0.213602,0.404499,0.010834,-1.217260,
// // -0.507141,0.670151,-1.630096,-0.952695,-0.154648,-0.355252,0.445554,0.824799,-1.274845,
// // -0.434692,0.923721,-0.724487,-0.900895,-0.046811,-0.392175,0.466202,0.970532,-0.332312,
// // -0.778824,0.760712,0.652039,-0.888688,0.033941,-0.287754,0.109864,0.726770,0.939793,
// // -1.448975,0.126785,1.539536,-0.944716,0.043226,-0.105025,-0.504258,0.083560,1.644561,
// // -1.503311,-0.688263,1.992340,-1.000576,-0.029923,0.104712,-0.502735,-0.658340,1.887629,
// // -1.086731,-0.978058,0.796936,-1.009191,-0.124737,0.173934,-0.077540,-0.853321,0.623002,
// // -0.416580,0.090561,-1.322189,-0.949930,-0.103207,0.024322,0.533350,0.193768,-1.346511,
// // -0.072449,0.036224,-1.630096,-0.862182,-0.089264,-0.141120,0.789733,0.125488,-1.488976,
// // 0.018112,-0.380356,-1.014282,-0.774153,-0.118373,-0.228436,0.792265,-0.261983,-0.785846,
// // -0.289795,-0.833160,-0.633926,-0.725717,-0.189852,-0.268985,0.435922,-0.643309,-0.364941,
// // -0.144897,-0.815048,-0.670151,-0.667635,-0.252371,-0.309102,0.522737,-0.562677,-0.361049,
// // -0.199234,-0.706375,-0.833160,-0.620795,-0.297772,-0.361508,0.421561,-0.408603,-0.471653,
// // -0.163010,-0.778824,-0.760712,-0.575016,-0.345877,-0.401428,0.412007,-0.432947,-0.359284,
// // -0.126785,-0.688263,-0.543365,-0.530193,-0.380116,-0.415622,0.403408,-0.308147,-0.127744,
// // -0.126785,-0.724487,-0.652039,-0.489852,-0.414553,-0.439264,0.363067,-0.309935,-0.212775,
// // -0.090561,-0.724487,-0.507141,-0.449923,-0.445546,-0.446051,0.359362,-0.278941,-0.061090,
// // -0.181122,-0.796936,-0.543365,-0.423043,-0.480685,-0.455783,0.241921,-0.316251,-0.087583,
// // -0.072449,-0.760712,-0.452805,-0.387984,-0.508688,-0.455485,0.315535,-0.252024,0.002680,
// // -0.072449,-0.760712,-0.579590,-0.356430,-0.533890,-0.467895,0.283981,-0.226821,-0.111694,
// // -0.090561,-0.760712,-0.615814,-0.329843,-0.556572,-0.482687,0.239282,-0.204139,-0.133127,
// // -0.090561,-0.778824,-0.470917,-0.305915,-0.578798,-0.481510,0.215354,-0.200026,0.010593,
// // -0.163010,-0.760712,-0.561478,-0.291624,-0.596989,-0.489507,0.128615,-0.163723,-0.071971,`;
// // var data = d3.csvParse(csvData);
// // data.forEach(function (d, i) {
// // 	unfiltered[i] = {
// // 		x: +d.x,
// // 		y: +d.y,
// // 		z: +d.z
// // 	};
// // 	lowPass[i] = {
// // 		x: +d.lp_x,
// // 		y: +d.lp_y,
// // 		z: +d.lp_z
// // 	};
// // 	highPass[i] = {
// // 		x: +d.hp_x,
// // 		y: +d.hp_y,
// // 		z: +d.hp_z
// // 	};
// // });

// // var xExent = d3.extent(unfiltered, function (d) {
// // 		return d.x;
// // 	}),
// // 	yExent = d3.extent(unfiltered, function (d) {
// // 		return d.y;
// // 	}),
// // 	zExent = d3.extent(unfiltered, function (d) {
// // 		return d.z;
// // 	});

// // var vpts = {
// // 	xMax: xExent[1],
// // 	xCen: (xExent[1] + xExent[0]) / 2,
// // 	xMin: xExent[0],
// // 	yMax: yExent[1],
// // 	yCen: (yExent[1] + yExent[0]) / 2,
// // 	yMin: yExent[0],
// // 	zMax: zExent[1],
// // 	zCen: (zExent[1] + zExent[0]) / 2,
// // 	zMin: zExent[0]
// // };

// // var colour = d3.scaleOrdinal(d3.schemeCategory10);

// // var xScale = d3.scaleLinear().domain(xExent).range([-50, 50]);
// // var yScale = d3.scaleLinear().domain(yExent).range([-50, 50]);
// // var zScale = d3.scaleLinear().domain(zExent).range([-50, 50]);

// // // var lineGeo = new THREE.BufferGeometry();
// // // lineGeo..vertices.push(
// // // 	v(xScale(vpts.xMin), yScale(vpts.yCen), zScale(vpts.zCen)),
// // // 	v(xScale(vpts.xMax), yScale(vpts.yCen), zScale(vpts.zCen)),
// // // 	v(xScale(vpts.xCen), yScale(vpts.yMin), zScale(vpts.zCen)),
// // // 	v(xScale(vpts.xCen), yScale(vpts.yMax), zScale(vpts.zCen)),
// // // 	v(xScale(vpts.xCen), yScale(vpts.yCen), zScale(vpts.zMax)),
// // // 	v(xScale(vpts.xCen), yScale(vpts.yCen), zScale(vpts.zMin)),

// // // 	v(xScale(vpts.xMin), yScale(vpts.yMax), zScale(vpts.zMin)),
// // // 	v(xScale(vpts.xMax), yScale(vpts.yMax), zScale(vpts.zMin)),
// // // 	v(xScale(vpts.xMin), yScale(vpts.yMin), zScale(vpts.zMin)),
// // // 	v(xScale(vpts.xMax), yScale(vpts.yMin), zScale(vpts.zMin)),
// // // 	v(xScale(vpts.xMin), yScale(vpts.yMax), zScale(vpts.zMax)),
// // // 	v(xScale(vpts.xMax), yScale(vpts.yMax), zScale(vpts.zMax)),
// // // 	v(xScale(vpts.xMin), yScale(vpts.yMin), zScale(vpts.zMax)),
// // // 	v(xScale(vpts.xMax), yScale(vpts.yMin), zScale(vpts.zMax)),

// // // 	v(xScale(vpts.xMin), yScale(vpts.yCen), zScale(vpts.zMax)),
// // // 	v(xScale(vpts.xMax), yScale(vpts.yCen), zScale(vpts.zMax)),
// // // 	v(xScale(vpts.xMin), yScale(vpts.yCen), zScale(vpts.zMin)),
// // // 	v(xScale(vpts.xMax), yScale(vpts.yCen), zScale(vpts.zMin)),
// // // 	v(xScale(vpts.xMin), yScale(vpts.yMax), zScale(vpts.zCen)),
// // // 	v(xScale(vpts.xMax), yScale(vpts.yMax), zScale(vpts.zCen)),
// // // 	v(xScale(vpts.xMin), yScale(vpts.yMin), zScale(vpts.zCen)),
// // // 	v(xScale(vpts.xMax), yScale(vpts.yMin), zScale(vpts.zCen)),

// // // 	v(xScale(vpts.xMax), yScale(vpts.yMin), zScale(vpts.zMin)),
// // // 	v(xScale(vpts.xMax), yScale(vpts.yMax), zScale(vpts.zMin)),
// // // 	v(xScale(vpts.xMin), yScale(vpts.yMin), zScale(vpts.zMin)),
// // // 	v(xScale(vpts.xMin), yScale(vpts.yMax), zScale(vpts.zMin)),
// // // 	v(xScale(vpts.xMax), yScale(vpts.yMin), zScale(vpts.zMax)),
// // // 	v(xScale(vpts.xMax), yScale(vpts.yMax), zScale(vpts.zMax)),
// // // 	v(xScale(vpts.xMin), yScale(vpts.yMin), zScale(vpts.zMax)),
// // // 	v(xScale(vpts.xMin), yScale(vpts.yMax), zScale(vpts.zMax)),

// // // 	v(xScale(vpts.xCen), yScale(vpts.yMin), zScale(vpts.zMax)),
// // // 	v(xScale(vpts.xCen), yScale(vpts.yMax), zScale(vpts.zMax)),
// // // 	v(xScale(vpts.xCen), yScale(vpts.yMin), zScale(vpts.zMin)),
// // // 	v(xScale(vpts.xCen), yScale(vpts.yMax), zScale(vpts.zMin)),
// // // 	v(xScale(vpts.xMax), yScale(vpts.yMin), zScale(vpts.zCen)),
// // // 	v(xScale(vpts.xMax), yScale(vpts.yMax), zScale(vpts.zCen)),
// // // 	v(xScale(vpts.xMin), yScale(vpts.yMin), zScale(vpts.zCen)),
// // // 	v(xScale(vpts.xMin), yScale(vpts.yMax), zScale(vpts.zCen)),

// // // 	v(xScale(vpts.xMax), yScale(vpts.yMax), zScale(vpts.zMin)),
// // // 	v(xScale(vpts.xMax), yScale(vpts.yMax), zScale(vpts.zMax)),
// // // 	v(xScale(vpts.xMax), yScale(vpts.yMin), zScale(vpts.zMin)),
// // // 	v(xScale(vpts.xMax), yScale(vpts.yMin), zScale(vpts.zMax)),
// // // 	v(xScale(vpts.xMin), yScale(vpts.yMax), zScale(vpts.zMin)),
// // // 	v(xScale(vpts.xMin), yScale(vpts.yMax), zScale(vpts.zMax)),
// // // 	v(xScale(vpts.xMin), yScale(vpts.yMin), zScale(vpts.zMin)),
// // // 	v(xScale(vpts.xMin), yScale(vpts.yMin), zScale(vpts.zMax)),

// // // 	v(xScale(vpts.xMin), yScale(vpts.yCen), zScale(vpts.zMin)),
// // // 	v(xScale(vpts.xMin), yScale(vpts.yCen), zScale(vpts.zMax)),
// // // 	v(xScale(vpts.xMax), yScale(vpts.yCen), zScale(vpts.zMin)),
// // // 	v(xScale(vpts.xMax), yScale(vpts.yCen), zScale(vpts.zMax)),
// // // 	v(xScale(vpts.xCen), yScale(vpts.yMax), zScale(vpts.zMin)),
// // // 	v(xScale(vpts.xCen), yScale(vpts.yMax), zScale(vpts.zMin)),
// // // 	v(xScale(vpts.xCen), yScale(vpts.yMin), zScale(vpts.zMin)),
// // // 	v(xScale(vpts.xCen), yScale(vpts.yMin), zScale(vpts.zMax))
// // // );
// // var lineMat = new THREE.LineBasicMaterial({
// // 	color: 0x000000,
// // 	lineWidth: 1
// // });
// // // var line = new THREE.Line(lineGeo, lineMat);
// // // line.type = THREE.Lines;
// // // scatterPlot.add(line);

// // var titleX = createText2D('-X');
// // (titleX.position.x = xScale(vpts.xMin) - 12), (titleX.position.y = 5);
// // scatterPlot.add(titleX);

// // var valueX = createText2D(format(xExent[0]));
// // (valueX.position.x = xScale(vpts.xMin) - 12), (valueX.position.y = -5);
// // scatterPlot.add(valueX);

// // var titleX = createText2D('X');
// // titleX.position.x = xScale(vpts.xMax) + 12;
// // titleX.position.y = 5;
// // scatterPlot.add(titleX);

// // var valueX = createText2D(format(xExent[1]));
// // (valueX.position.x = xScale(vpts.xMax) + 12), (valueX.position.y = -5);
// // scatterPlot.add(valueX);

// // var titleY = createText2D('-Y');
// // titleY.position.y = yScale(vpts.yMin) - 5;
// // scatterPlot.add(titleY);

// // var valueY = createText2D(format(yExent[0]));
// // (valueY.position.y = yScale(vpts.yMin) - 15), scatterPlot.add(valueY);

// // var titleY = createText2D('Y');
// // titleY.position.y = yScale(vpts.yMax) + 15;
// // scatterPlot.add(titleY);

// // var valueY = createText2D(format(yExent[1]));
// // (valueY.position.y = yScale(vpts.yMax) + 5), scatterPlot.add(valueY);

// // var titleZ = createText2D('-Z ' + format(zExent[0]));
// // titleZ.position.z = zScale(vpts.zMin) + 2;
// // scatterPlot.add(titleZ);

// // var titleZ = createText2D('Z ' + format(zExent[1]));
// // titleZ.position.z = zScale(vpts.zMax) + 2;
// // scatterPlot.add(titleZ);

// // var mat = new THREE.MeshBasicMaterial({
// // 	vertexColors: true,
// // 	size: 10
// // });

// // // var pointCount = unfiltered.length;
// // // var pointGeo = new THREE.BufferGeometry();
// // // for (var i = 0; i < pointCount; i++) {
// // // 	var x = xScale(unfiltered[i].x);
// // // 	var y = yScale(unfiltered[i].y);
// // // 	var z = zScale(unfiltered[i].z);

// // // 	pointGeo.vertices.push(new THREE.Vector3(x, y, z));
// // // 	console.log(pointGeo.vertices);
// // // 	//pointGeo.vertices[i].angle = Math.atan2(z, x);
// // // 	//pointGeo.vertices[i].radius = Math.sqrt(x * x + z * z);
// // // 	//pointGeo.vertices[i].speed = (z / 100) * (x / 100);
// // // 	pointGeo.colors.push(
// // // 		new THREE.Color().setRGB(
// // // 			hexToRgb(colour(i)).r / 255,
// // // 			hexToRgb(colour(i)).g / 255,
// // // 			hexToRgb(colour(i)).b / 255
// // // 		)
// // // 	);
// // // }
// // // var points = new THREE.ParticleSystem(pointGeo, mat);
// // // scatterPlot.add(points);

// // renderer.render(scene, camera);
// // var paused = false;
// // var last = new Date().getTime();
// // var down = false;
// // var sx = 0,
// // 	sy = 0;

// // window.onmousedown = function (ev) {
// // 	down = true;
// // 	sx = ev.clientX;
// // 	sy = ev.clientY;
// // };
// // window.onmouseup = function () {
// // 	down = false;
// // };
// // window.onmousemove = function (ev) {
// // 	if (down) {
// // 		var dx = ev.clientX - sx;
// // 		var dy = ev.clientY - sy;
// // 		scatterPlot.rotation.y += dx * 0.01;
// // 		camera.position.y += dy;
// // 		sx += dx;
// // 		sy += dy;
// // 	}
// // };
// // var animating = false;
// // window.ondblclick = function () {
// // 	animating = !animating;
// // };

// // function animate(t) {
// // 	if (!paused) {
// // 		last = t;
// // 		if (animating) {
// // 			var v = pointGeo.vertices;
// // 			for (var i = 0; i < v.length; i++) {
// // 				var u = v[i];
// // 				console.log(u);
// // 				u.angle += u.speed * 0.01;
// // 				u.x = Math.cos(u.angle) * u.radius;
// // 				u.z = Math.sin(u.angle) * u.radius;
// // 			}
// // 			pointGeo.__dirtyVertices = true;
// // 		}
// // 		renderer.clear();
// // 		camera.lookAt(scene.position);
// // 		renderer.render(scene, camera);
// // 	}
// // 	window.requestAnimationFrame(animate, renderer.domElement);
// // }
// // animate(new Date().getTime());
// // onmessage = function (ev) {
// // 	paused = ev.data == 'pause';
// // };
