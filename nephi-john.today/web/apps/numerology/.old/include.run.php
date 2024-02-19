<?PHP
function calcNumber9($word,$reduced="yes")
	{
	$word = trim($word);
	$word = strtolower($word);
	$len = strlen($word);
	$myNum = 0;
	for($i=0;$i<$len;$i++)
		{
		$myChar = $word{$i};
		$myNum += returnNumber($myChar,$reduced);
		}
	#if($reduced == "yes")
		#{
		#return reduceMe($myNum);
		#}
	return $myNum;
	}
function returnNumber($myLet="",$reduced="yes")
		{
		switch($myLet)
			{
			default:
			case "":
				return (is_numeric($myLet)) ? $myLet : 0;
			break;

			case "a":
				return 1;
			break;
			case "j":
				$i=1;
				if($reduced == "yes") { return 1;} else { return 9 * $i + 1 ;}
			break;
			case "s":
				$i=2;
				if($reduced == "yes") { return 1;} else { return 9 * $i + 1 ;}
			break;


			case "b":
				return 2;
			break;
			case "k":
				$i=1;
				if($reduced == "yes") { return 2;} else { return 9 * $i + 2 ;}
			break;
			case "t":
				$i=2;
				if($reduced == "yes") { return 2;} else { return 9 * $i + 2 ;}
			break;

			case "c":
				return 3;
			break;
			case "l":
				$i=1;
				if($reduced == "yes") { return 3;} else { return 9 * $i + 3 ;}
			break;
			case "u":
				$i=2;
				if($reduced == "yes") { return 3;} else { return 9 * $i + 3 ;}
			break;

			case "d":
				return 4;
			break;
			case "m":
				$i=1;
				if($reduced == "yes") { return 4;} else { return 9 * $i + 4 ;}
			break;
			case "v":
				$i=2;
				if($reduced == "yes") { return 4;} else { return 9 * $i + 4 ;}
			break;

			case "e":
				return 5;
			break;
			case "n":
				$i=1;
				if($reduced == "yes") { return 5;} else { return 9 * $i + 5 ;}
			break;
			case "w":
				$i=2;
				if($reduced == "yes") { return 5;} else { return 9 * $i + 5 ;}
			break;

			case "f":
				return 6;
			break;
			case "o":
				$i=1;
				if($reduced == "yes") { return 6;} else { return 9 * $i + 6 ;}
			break;
			case "x":
				$i=2;
				if($reduced == "yes") { return 6;} else { return 9 * $i + 6 ;}
			break;

			case "g":
				return 7;
			break;
			case "p":
				$i=1;
				if($reduced == "yes") { return 7;} else { return 9 * $i + 7 ;}
			break;
			case "y":
				$i=2;
				if($reduced == "yes") { return 7;} else { return 9 * $i + 7 ;}
			break;

			case "h":
				return 8;
			break;
			case "q":
				$i=1;
				if($reduced == "yes") { return 8;} else { return 9 * $i + 8 ;}
			break;
			case "z":
				$i=2;
				if($reduced == "yes") { return 8;} else { return 9 * $i + 8 ;}
			break;

			case "i":
				return 9;
			break;
			case "r":
				$i=1;
				if($reduced == "yes") { return 9;} else { return 9 * $i + 9 ;}
			break;
			
			}
		}
	function reduceMe($myNum,$reducer=9)
		{
		$myTemp = ($myNum % $reducer);
		return ($myTemp == 0) ? $reducer : $myTemp;
		}

function parseArgs($argv)
	{
   # array_shift($argv);
    $out = array();
	if(isset($argv))
		{
		foreach ($argv as $arg)
			{
			$tA = explode("=",$arg);
			if(isset($tA[1]))
				{
				$myK = trim($tA[0]);
				$myV = trim($tA[1]);
				$out[$myK]=$myV;
				}
			}
		}
    return $out;
	}
$_ARG = parseArgs($argv);
	$args = array_merge($_GET,$_ARG);


	$a = "default";
		if(isset($args["a"]))	{$a = $args["a"];}

	$name = "Monte";
		if(isset($args["name"]))	{$name = $args["name"];} 

		#echo($name);

$folder = realpath(dirname(__FILE__)) . DIRECTORY_SEPARATOR;


?>