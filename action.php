<?php 
    if ( isset($_GET['action']) ) {
        $action = $_GET['action'];
        $json = json_encode(['action' => $action]);
        file_put_contents('action.json', $json);
        exit;
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Actions</title>
    <style>
        body {
            background: black;
            color: white;
            font-family: Arial, Helvetica, sans-serif;
        }
        .btn {
            padding: 1rem 0;
            font-size: 2em;
            display: block;
            width: 90%;
            margin: 10px auto;
            font-weight: 800;
        }
    </style>
</head>
<body>
    <h2>Eye Action</h2>
    <button class="btn" data-action="wink" >Wink</button>
    <button class="btn" data-action="curious" >Look Curious</button>
    <button class="btn" data-action="look-right" >Look Right</button>
    <button class="btn" data-action="look-left" >Look Left</button>
    <button class="btn" data-action="sad" >Sad</button>
    <button class="btn" data-action="angry" >Angry</button>
    <button class="btn" data-action="small-eyes" >Small Eyes</button>
    <button class="btn" data-action="face1" >Face 1</button>

    <script>
        const btns = document.querySelectorAll('.btn');
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                let action = btn.dataset.action;
                fetch(`action.php?action=${action}`);
            })
        });
    </script>
</body>
</html>