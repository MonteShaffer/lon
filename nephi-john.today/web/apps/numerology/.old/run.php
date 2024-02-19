<?PHP
include("include.run.php");
echo"<PRE>";
switch($a)
	{
	default:
		echo"hello world";exit;
	break;

	case "calc":
		$full = calcNumber9($name,"yes");
		$num = reduceMe($full);
			echo"\n\n $name \t\t $full \t\t $num \n\n";
	break;

	case "girls":
		$lines = file($folder."girls.txt");
		$obj = array();
		foreach($lines as $girl)
			{
			$full = "0".calcNumber9($girl,"yes");
			$num = reduceMe($full);
			echo"\n\n $girl \t\t $full \t\t $num \n\n";
			$obj[$num][] = trim($girl);
			$obj[$full][] = trim($girl);
			}
			ksort($obj);
			file_put_contents($folder."girls.json",json_encode($obj));
		echo($folder."girls.json"); echo"\n";
		print_r($obj);exit;
		
		# calcNumber9

	break;


	case "boys":
		$lines = file($folder."boys.txt");
		$obj = array();
		foreach($lines as $boy)
			{
			$full = "0".calcNumber9($boy,"yes");
			$num = reduceMe($full);
			echo"\n\n $boy \t\t $full \t\t $num \n\n";
			$obj[$num][] = trim($boy);
			$obj[$full][] = trim($boy);
			}
			ksort($obj);
			file_put_contents($folder."boys.json",json_encode($obj));
		echo($folder."boys.json"); echo"\n";
		print_r($obj);exit;
		
		# calcNumber9

	break;
	}

?>