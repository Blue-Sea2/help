function convert():{
	var svgElement = document.getElementById('upload');
	let {width, height} = svgElement.getBBox(); 

	let clonedSvgElement = svgElement.cloneNode(true);

	let outerHTML = clonedSvgElement.outerHTML,
		blob = new Blob([outerHTML],{type:'image/svg+xml;charset=utf-8'});

	let URL = window.URL || window.webkitURL || window;
	let blobURL = URL.createObjectURL(blob);

	let image = new Image();
	image.onload = () => {

	   let canvas = document.createElement('canvas');

	   canvas.widht = width;

	   canvas.height = height;
	   let context = canvas.getContext('2d');
	   // draw image in canvas starting left-0 , top - 0  
	   context.drawImage(image, 0, 0, width, height );
	  //  downloadImage(canvas); need to implement
	};
	image.src = blobURL;

	let png = canvas.toDataURL(); // default png
	let jpeg = canvas.toDataURL('image/jpg');
		let webp = canvas.toDataURL('image/webp');
	download(png, "image.png");
}

var download = function(href, name){
	var link = document.createElement('a');
	link.download = name;
	link.style.opacity = "0";
	document.append(link);
	link.href = href;
	link.click();
	link.remove();
}
