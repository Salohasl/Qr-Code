<!DOCTYPE html>
<html>

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>JavaScript</title>
        <link rel="stylesheet" href="style1.css">
    </head>
    <body>    
        <img src="https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&size=150x150" alt="Image" title="" />
        <input type="text" placeholder="Введите текст...">
        <button>Сгенерировать</button>
        <script>
            const image = document.querySelector('img');
            let input = document.querySelector('input');
            let button = document.querySelector('button');
            let api1 =  `https://api.qrserver.com/v1/`,
            api2 = `create-qr-code/?size=150x150&data=`;

            button.addEventListener('click', () => {
                image.src = `${api1}${api2}${input.value}`;
            });  
        </script>   
    </body>
      
