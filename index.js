<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>hurry!</title>
    <style type="text/css">
      body, html {
        padding: 0;
        margin: 0;
        background: #222;
      }
      #highscore {
        position: absolute;
        top: 50%;
        left: 50%;
        color: #fff;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-weight: 500;
        font-size: 16px;
        margin-top: 265px;
        width: 400px;
        margin-left: -200px;
        text-align: center;
      }
      #main {
        border: 1px dotted #fff;
        -webkit-box-shadow: 0 0 30px -12px #fff;
           -moz-box-shadow: 0 0 30px -12px #fff;
            -ms-box-shadow: 0 0 30px -12px #fff;
             -o-box-shadow: 0 0 30px -12px #fff;
                box-shadow: 0 0 30px -12px #fff;
        width: 800px;
        height: 550px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -400px;
        margin-top: -300px;
      }
    </style>
</head>
<body>
    <div id="highscore">best score: <span id="score">0</span></div>
    <canvas id="main"></canvas>
    <script src="bundle.js" type="text/javascript"></script>
</body>
</html>
