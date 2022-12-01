const socket = io();

socket.on("arr-producto", (data) => {
    const html = data.reduce(
        (html, item) => '<tr><td style="width: 15%">' + item.title + '</td><td style="width: 15%">$' + item.price + '</td><td style="width: 15%"><img style="max-height: 5vh" src="' + item.thumbnail + '" /></td></tr>' + html, ""
    );
    document.getElementById("table-products").innerHTML = html;
});

socket.on("arr-chat", (data) => {
    const html = data.reduce(
        (html, item) => '<p style="padding: 16px 0px; margin: 0px"><span style="font-weight: bold; color: blue">' + item.email + '</span><span style="color: brown"> ' + item.msgDate + ': </span><span style="font-style: italic; color: green" >' + item.msg + '</span></p>' + html, ""
    );
    document.getElementById("div-msg").innerHTML = html;
});

function agregar() {
    const title = document.getElementById("in-title").value;
    const rawPrice = document.getElementById("in-price").value;
    const thumbnail = document.getElementById("in-thumbnail").value;
    const price = +rawPrice
    socket.emit("data-productos", { title, price, thumbnail });
    return false;
}

function enviar() {
    const email = document.getElementById("in-email").value;
    const msg = document.getElementById("in-msg").value;
    const date = new Date()
    const [day, month, year] = [date.getDate(), date.getMonth() + 1, date.getFullYear()];
    const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    const msgDate = day + '/' + month + '/' + year + ', ' + hour + ':' + minutes + ':' + seconds
    console.log(month)
    socket.emit("data-chat", { email, msgDate, msg });
    return false;
}

