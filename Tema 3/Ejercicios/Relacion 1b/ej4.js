let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]

let showAlert = name => alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`);

showAlert("Jorge");
