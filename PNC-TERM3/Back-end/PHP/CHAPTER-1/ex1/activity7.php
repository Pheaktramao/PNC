<?php
    $fruit = ['name' => 'mango', 'quantity' => 15, 'price' => 10, 'country' => "Cambodia"];
    // You have a discount, change the price to 8$

    $output = "<quantity> <name> from <country> cost <price>$";   
    // Change this line to dislay the data about the fruit !
    $output = $fruit['quantity'] = "8" . " " . $fruit['name']." " ."from". " "  . $fruit['country'] ." "."const"  . " " . $fruit['price'] ;
    echo $output;
?>