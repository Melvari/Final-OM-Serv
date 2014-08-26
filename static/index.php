<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
		<title>Showdown!</title>
	<link rel="shortcut icon" href="http://play.pokemonshowdown.com/favicon.ico" id="dynamic-favicon" />
		<link rel="stylesheet" href="http://play.pokemonshowdown.com/style/client.css?1b912498" />
		<link rel="stylesheet" href="http://play.pokemonshowdown.com/style/sim-types.css?f0675293" />
		<link rel="stylesheet" href="http://play.pokemonshowdown.com/style/battle.css?53576edf" />
		<link rel="stylesheet" href="http://play.pokemonshowdown.com/style/utilichart.css?744d03ca" />
		<link rel="stylesheet" href="http://play.pokemonshowdown.com/style/font-awesome.css?6e6af851" />
		<link rel="stylesheet" href="http://play.pokemonshowdown.com/style/jquery.slider.min.css?4c2bab9e" />
		<link rel="stylesheet" href="./js/style.css" />
		<meta id="viewport" name="viewport" content="width=640" />
		<meta name="robots" content="noindex" />
		<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
		<script>
			var Config = {};
		</script>
		<!--[if lte IE 8]><script>
			Config.oldie = true;
		</script><![endif]-->
	</head>
	<body>
		<script>
		<?php
			$h = "50.47.2.38:80";
			if (isset($_GET['h'])) {
				$h = $_GET['h'];
			}
			if (substr_count($h, ":") == 0) {
				$h = $h . ":80";
			}
			$explosion = explode(":", $h);
			$host = $explosion[0];
			$port = $explosion[1];
			echo "var host = '", $host, "';";
			echo "var port = ", $port, ";";
		?>
		</script>

 		<!-- Chrome Frame -->
		<!--[if lte IE 8]>
		<script src="http:http://ajax.googleapis.com/ajax/libs/chrome-frame/1/CFInstall.min.js"></script>
		<style>
		/* 
		CSS rules to use for styling the overlay:
		.chromeFrameOverlayContent
		.chromeFrameOverlayContent iframe
		.chromeFrameOverlayCloseBar
		.chromeFrameOverlayUnderlay
		*/
		</style> 
		<script>
			CFInstall.check({mode: "overlay"});
		</script>
		<![endif]-->
		<div id="header" class="header">
			<img class="logo" src="http://play.pokemonshowdown.com/pokemonshowdownbeta.png" alt="Pok&eacute;mon Showdown! (beta)" /><div class="maintabbarbottom"></div>
		</div>
		<div id="main">
			<div id="loading-message" class="mainmessage">Initializing... <noscript>FAILED<br /><br />Pok&eacute;mon Showdown requires JavaScript.</noscript></div>
		</div>
		<script>
			document.getElementById('loading-message').innerHTML += ' DONE<br />Loading libraries...';
		</script>
		<script src="http://play.pokemonshowdown.com/js/lib/jquery-2.0.0.min.js"></script>
		<script src="http://play.pokemonshowdown.com/js/lib/jquery-cookie.js"></script>
		<script src="http://play.pokemonshowdown.com/js/lib/autoresize.jquery.min.js?98350bc9"></script>
		<script src="http://play.pokemonshowdown.com/js/lib/jquery.json-2.3.min.js"></script>
		<script src="http://play.pokemonshowdown.com/js/lib/soundmanager2-nodebug-jsmin.js?45ffc721"></script>
		<script>
			soundManager.setup({url: '//play.pokemonshowdown.com/swf/'});
		</script>
		<script src="http://play.pokemonshowdown.com/js/lib/html-sanitizer-minified.js?949c4200"></script>
		<script src="http://play.pokemonshowdown.com/js/lib/lodash.compat.js?2e367392"></script>
		<script src="http://play.pokemonshowdown.com/js/lib/backbone.js?1adb34b9"></script>

		<script>
			document.getElementById('loading-message').innerHTML += ' DONE<br />Loading client...';
			document.getElementById('loading-message').innerHTML = 'If the client is taking a long time to load, try refreshing in a few minutes. If it still doesn\'t work, Pok&eacute;mon Showdown may be down for maintenance. We apologize for the inconvenience.<br /><br />'+document.getElementById('loading-message').innerHTML;
		</script>

		<script src="http://play.pokemonshowdown.com/js/config.js?f3c5f1ea"></script>
		<script src="http://play.pokemonshowdown.com/js/battledata.js?9d1bc43c"></script>
		<script src="./data/pokedex-mini.js"></script>
		<script src="http://play.pokemonshowdown.com/js/battle.js?a6f6824f"></script>
		<script src="http://play.pokemonshowdown.com/js/lib/sockjs-0.3.min.js"></script>

		<script src="./js/client.js"></script>
		<script src="http://play.pokemonshowdown.com/js/client-mainmenu.js?51f06ba3"></script>
		<script src="http://play.pokemonshowdown.com/js/client-teambuilder.js?ef827ae0"></script>
		<script src="http://play.pokemonshowdown.com/js/client-ladder.js?c2e6f1a2"></script>
		<script src="http://play.pokemonshowdown.com/js/client-chat.js?f2fe50ae"></script>
		<script src="http://play.pokemonshowdown.com/js/client-battle.js?059046f3"></script>
		<script src="http://play.pokemonshowdown.com/js/client-rooms.js?ac66d1b5"></script>
		<script src="http://play.pokemonshowdown.com/data/graphics.js?b6cff022"></script>

		<script>
			var app = new App();
		</script>

		<script src="./data/learnsets.js"></script>
		<script src="http://play.pokemonshowdown.com/js/lib/jquery.slider.min.js?f3ff3b0d"></script>

		<script src="./data/pokedex.js"></script>
		<script src="./data/formats-data.js"></script>
		<script src="./data/moves.js"></script>
		<script src="./data/items.js"></script>
		<script src="./data/abilities.js"></script>
		<script src="./data/typechart.js"></script>

		<script src="http://play.pokemonshowdown.com/js/utilichart.js?7852baca"></script>

		<script src="./data/aliases.js" async="async"></script>

	</body>
</html>
