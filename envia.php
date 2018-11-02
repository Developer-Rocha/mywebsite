<?php
	
	$para= "teste@ines.uxdevelop.com";
	$assunto= $_REQUEST['assunto'];
	$nome= $_REQUEST['nome'];
	$email= $_REQUEST['email'];
	$msg= $_REQUEST['mensagem'];
	$rgpd= $_REQUEST['checkbox-rgpd'];


		$corpo = "<strong> Mensagem de Contato</strong><br><br>";
		$corpo .= "<strong> Nome: </strong> $nome";
		$corpo .= "<br><strong> Email: </strong> $email";
		$corpo .= "<br><strong> Mensagem: </strong> $msg";
		$corpo .= "<br><strong> Aceito a política de privacidade: </strong> $rgpd";

		$header="Content-Type: text/html; charset= utf8\n";
		$header.="From: $email Reply-to: $email\n";
		

	mail($para,$assunto,$corpo,$header);

	header("location:index.html?msg=enviado");
?>