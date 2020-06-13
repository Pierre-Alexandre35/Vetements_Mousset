<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>New product</title>
</head>

<body>
    <form action="" method="post">
        <div id="sexe-selector">
            <input type="radio" id="homme" name="gender" value="homme" checked>
            <label for="male">Homme</label><br>
            <input type="radio" id="female" name="gender" value="femme">
            <label for="femme">Femme</label><br>
        </div>

        <div id="men-items">
            <label for="type">Type de produit:</label>
            <select name="type" id="type" form="carform">
                <option value="volvo">T-Shirts</option>
                <option value="saab">Costumes</option>
                <option value="opel">Pantalons</option>
                <option value="audi">Chaussettes</option>
                <option value="audi">Bermudas / Shorts</option>
                <option value="audi">Manteaux</option>
            </select>
        </div>

        <div id="woman-items">
            <label for="type">Type de produit:</label>
            <select name="type" id="type" form="carform">
                <option value="volvo">T-Shirts</option>
                <option value="saab">Robes</option>
                <option value="opel">Jupes</option>
                <option value="audi">Sous-Vêtements</option>
                <option value="audi">Manteaux</option>
            </select>
        </div>

    </form>

    <script src="panel.js"></script>

</body>

</html>