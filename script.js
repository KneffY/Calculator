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
    let lb = lastButton;
    let a = [];
    let local1 = "";
    for (let i = 0; i < lb.length; i++) {
        if (lb[i]!="+" && lb[i]!="-" && lb[i]!="X" && lb[i]!="/") {
            local1+=lb[i];
            if (i == lb.length-1) {
                a.push (local1);
            }
        } else if (lb[i]=="+" || lb[i]=="-" || lb[i]=="X" || lb[i]=="/") {
            a.push (local1);
            local1 = "";
            a.push (lb[i]);
            console.log(lb[i],"operacion");
        }
    }
    console.log (a); // create vector with strings

    for (let i = 0; i<a.length; i++) {
        if (a[i]!="+" && a[i]!="-" && a[i]!="X" && a[i]!="/") {
            a[i] = Number(a[i]);
        }
    }
    console.log (a); // str to num

    let local2 = a[0];
    for (let i = 0; i<a.length; i++) {
        if (a[i]=="+" || a[i]=="-" || a[i]=="X" || a[i]=="/") {
            local2 = aux (local2, a[i],a[i+1]);
        }
    }
    console.log (local2);
    lastButton=local2;
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

