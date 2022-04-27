<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Exercício de PHP/JQuery</title>
		<link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">
		<link rel="stylesheet" href="/resources/demos/style.css">
		<script
		  src="https://code.jquery.com/jquery-3.6.0.min.js"
		  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
		  crossorigin="anonymous"></script>
		<script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
		<script>
		  $( function() {
			$( "#accordion" ).accordion({
			  collapsible: true
			});
		  } );
		</script>
  	</head>
	
	<body>
		<div id="accordion">
		  <h3>Seção 1</h3>
		  <div>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis, leo nec blandit elementum, magna orci tincidunt quam, at efficitur dui dolor ac mi. Duis scelerisque tincidunt libero eu bibendum. Maecenas ultricies, nibh at tincidunt ullamcorper, erat metus interdum neque, et tempus massa nunc quis metus. Praesent suscipit pulvinar justo at malesuada</p>
		  </div>
		  
		  <h3>Seção 2</h3>
		  <div>
			<p>Aliquam erat volutpat. Cras purus odio, venenatis sed ex in, lobortis mollis felis. Fusce vitae turpis et lacus bibendum pellentesque. Vestibulum efficitur interdum risus sit amet finibus. Praesent magna nunc, viverra eget lectus id, efficitur convallis sem. Phasellus commodo rutrum facilisis.</p>
		  </div>
		  
		  <h3>Seção 3</h3>
		  <div>
			<p>Nunc iaculis pharetra lectus. Sed vitae varius diam. Morbi mattis malesuada laoreet. Ut velit purus, ornare vel porttitor nec, tincidunt vel elit. Mauris a eleifend tellus, et elementum purus. Vivamus bibendum iaculis cursus. Praesent dictum, ante vel hendrerit tincidunt, ex erat gravida tortor, sit amet dignissim velit nunc a elit.</p>
		
		  </div>
		  
		  <h3>Seção 4</h3>
		  <div>
			<p>Morbi elementum tellus non finibus convallis. Sed a lorem semper, semper dolor sit amet, mattis purus. In rutrum ac augue eu varius. Aenean eu maximus orci, sed eleifend turpis. Nullam condimentum justo vel quam commodo fermentum. Nulla in bibendum metus.</p>
		  </div>
		</div>

		
	</body>
</html>