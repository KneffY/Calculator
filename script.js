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
    // console.log('realiza funcion');
}

let pap = (v) => {
    let b = v;
    // let c =[];
    while (b.includes("X") || b.includes("/")) {
        let c =[];
        for (let i = 0; i < b.length; i++) {
            if (b[i+1] != "X" && b[i+1] != "/") {
                c.push(b[i]);
                console.log(c);
            } else {
                c.push (aux (b[i], b[i+1], b[i+2]));
                for (let j = i + 3; j < b.length; j++) {
                    c.push (b[j]);
                    console.log(c);
                }
                b = c;
                break;
            }
        }
    }
    return b;
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
            // console.log(lb[i],"operacion");
        }
    }
    console.log (a); // create vector with strings

    for (let i = 0; i<a.length; i++) {
        if (a[i]!="+" && a[i]!="-" && a[i]!="X" && a[i]!="/") {
            a[i] = Number(a[i]);
        }
    }
    console.log (a); // str to num

    a = pap(a); // jer func :)

    let local2 = a[0];
    for (let i = 0; i<a.length; i++) {
        if (a[i]=="+" || a[i]=="-" || a[i]=="X" || a[i]=="/") {
            local2 = aux (local2, a[i],a[i+1]);
        }
    }
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



// let gg = [12,"+",5,"X",6,"/",7,"-",8];
// console.log (pap(gg))