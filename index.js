<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        #dragElement{
            background:red;
            cursor:move;
            width:150px;
            height:50px;
            display: flex;
            margin: 0;
        }
        #dragElement #text{
            margin:auto;
            color:white;
            display:none;
            user-select: none;
        }

    </style>
</head>
<body>
<div id="dragElement">
    <span id="text">Тащи меня, тащи!</span>
</div>

<script src="mn1.js"></script>
</body>
</html>
