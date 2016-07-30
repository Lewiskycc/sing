<?php
    header('Content-type:text/html;charset=utf-8');

    $array=array(
            array (
            'src'=>'images/detail01.jpg',
            'newPrice'=>222,
            'oldPrice'=>888
            ),
            array (
            'src'=>'images/detail02.jpg',
            'newPrice'=>108,
            'oldPrice'=>8888
            ),
            array (
                'src'=>'images/detail01.jpg',
                'newPrice'=>66,
                'oldPrice'=>666
            )
         );
         include 'index.html';
?>