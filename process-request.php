<?php
if(isset($_POST["category"])){
    // Capture selected country
    $category = $_POST["category"];

    // Define country and city array
    $categoryArr = array(
                    "Men" => array("Sherwani", "Blazer", "Kurta-pyjama"),
                    "Women" => array("Choli", "Lehenga", "Saari"),
                    "Boy" => array("x", "y", "z"),
                    "Girls" => array("x", "y", "z")
                );

    // Display city dropdown based on country name
    if($category !== 'Select'){
        echo "<label>Subcategory:</label>";
        echo "<select id='response_val'>";
        foreach($categoryArr[$category] as $value){
            echo "<option>". $value . "</option>";
        }
        echo "</select>";
    } 
}
?>