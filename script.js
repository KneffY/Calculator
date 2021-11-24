let screen = document.getElementById('display');
let lastButton = "";

let buttonClick = (a) => {
    lastButton+=a;
    screen.innerHTML = lastButton;
}

let aux = (numA, op, numb) => {
    if (op == "+") {
        return numA + numb;
    } else if (op == "-") {
        return numA - numb;
    } else if (op == "X") {
        return numA * numb;
    } else if (op == "/") {
        return numA / numb;
    }
    console.log('realiza funcion');
}

let Equal = () => {
    // lastButton = "";
    // screen.innerHTML = lastButton;
    let a = [];
    let local1 = "";
    for (let i = 0; i<lastButton.length; i++) {
        if (lastButton[i] != "+" && lastButton[i] != "-" && lastButton[i] != "X" && lastButton[i] != "/") {
            local1+=lastButton[i];
            if (i == lastButton.length-1) {
                // a.push (local1);
            }
            console.log(local1);
        } else if ((lastButton[i] == "+" || lastButton[i] == "-" || lastButton[i] == "X" || lastButton[i] == "/") && (i < lastButton.length-1)) {
            a.push (local1);
            local1 = "";
            a.push (lastButton[i]);
        } else  {
            // a.push (local1);
        }
    }
    console.log(a);
    for (let i = 0; i < a.length ; i++) {
        if (a[i] != "+" && a[i] != "-" && a[i] != "X" && a[i] != "/") {
            a[i] = Number (a[i]);
        }
    }
    console.log(a);
    let local2 = 0;
    for (let i = 0; i<a.length; i++) {
        if (a[i]=="+"||a[i]=="-"||a[i]=="X"||a[i]=="/") {
            local2 = aux(a[i-1],a[i],a[i+1]); // resultado
            console.log("se da condicion");
        }
    }
    lastButton = local2;
    screen.innerHTML = lastButton;
}

let Delete = () => {
    let a = "";
    for (let i = 0; i<lastButton.length-1; i++) {
        a+=lastButton[i];
    }
    lastButton = a;
    screen.innerHTML = lastButton;
}

let Clear = () => {
    lastButton = "";
    screen.innerHTML = lastButton;
}

