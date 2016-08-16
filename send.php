<?php

//========================================================================================================================
//ENVIANDO EMAIL
//========================================================================================================================

$nome = $_POST['nome'];
$email = $_POST['email'];
$ideia = $_POST['ideia'];


// Aqui vamos configurar o cabeçalho (header) do e-mail, formatos, remetentes, destinatários de cópias
$headers = "MIME-Version: 1.0\r\n";
// Aqui definirmos o formato padrão HTML e a codificação do Texto
$headers.= "Content-type: text/html; charset=iso-8859-1\r\n";
// Abaixo estabelecemos o Remetente do E-mail com o From:
$headers.= "From: marcos@shoottheshit.cc\r\n";
// Caso se queira especificar o e-mail de Resposta, utilizamos o Reply-To:, caso você não queira, basta excluir a linha abaixo
$headers.= "Reply-To: artur@shoottheshit.cc\r\n";
// Nesta linha abaixo, configuramos o e-mail do destinatário, caso queira especificar mais de 1 destinatário, basta colocar uma virgula (,) e o outro e-mail, ex: fulano@gmail.com, fulano2@gmail.com
$destinatario = "artur@shoottheshit.cc";
// Definimos o assuntos do nosso e-mail
$assunto = "O que vocês acham dessa ideia";

// Abaixo, vamos colocar o corpo da mensagem, lembrando que como definimos que será em padrão HTML acima no cabeçalho, você terá de utilizar tags HTML abaixo, veja o exemplo
$mensagem = "
<html>
<head>
   <title>TIVE UMA IDEIA</title>
</head>
<body>
<font face=\"Arial\" size=\"2\" color=\"#333333\">
<br />
Meu nome é: <b>".$nome."</b><br>
Meu e-mail é: <b>".$email."</b><br>
<b>E a ideia é meio que essa:</b> <br>".$ideia."<br>
</font>
</body>
"; 

// Definido todos os parametros, agora podemos proceder com o envio, conforme a linha abaixo, lembre-se sempre de verificar se todos os parâmetros estão corretamente especificados
mail('artur@shoottheshit.cc', $assunto, $mensagem, $headers);


//===============================================================================================
//VOLTA
//===============================================================================================

?>
<script>
	alert('Ideia enviada com sucesso.');</script>
	<script>
    history.go(-1);
</script>