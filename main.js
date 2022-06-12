var dollars = new Decimal("0")
var dollars_click = new Decimal("1")
var dollars_persec = new Decimal("0")
var cost1 = new Decimal("100")
var lvl1 = new Decimal("0")
var lvl2 = new Decimal("0")
var lvl3 = new Decimal("0")
var cost2 = new Decimal("1000")
var cost3 = new Decimal("5000")
var cost4 = new Decimal("1e1000")
var cost5 = new Decimal("eeee308")
var ip = new Decimal("0")
var lvl4 = new Decimal("0")
var lvl5 = new Decimal("0")
var timePlayed = new Decimal("0")
vars = new InfiniteVars()

function InfiniteVars() {
    this.infinity = new Decimal("1.8e308")
    this.eternity = new Decimal("ee38")
    this.reality = new Decimal("ee300008")
}

document.getElementById("click").onclick = () => {
    dollars = dollars.add(dollars_click);
    document.getElementById("dollars").innerHTML = "You Have " + dollars + " Dollars."
}

document.getElementById("cost1").onclick = () => {
    if (dollars.gte(cost1) == true) {
        dollars_persec = dollars_persec.add(1)
        dollars = dollars.sub(cost1)
        cost1 = cost1.times(1.2)
        lvl1 = lvl1.add(1)
        document.getElementById("dpersec").innerHTML = "You Have " + dollars_persec + " Dollars per second."
        document.getElementById("dollars").innerHTML = "You Have " + dollars + " Dollars."
        document.getElementById("cost1").innerHTML = "Cost:" + cost1
    }
}

document.getElementById("cost2").onclick = () => {
    if (dollars.gte(cost2) == true) {
        dollars_click = dollars_click.add(1)
        dollars = dollars.sub(cost2)
        cost2 = cost2.times(1.2)
        lvl2 = lvl2.add(1)
        document.getElementById("dpersec").innerHTML = "You Have " + dollars_persec + " Dollars per second."
        document.getElementById("dollars").innerHTML = "You Have " + dollars + " Dollars."
        document.getElementById("cost2").innerHTML = "Cost:" + cost2
    }
}

document.getElementById("cost3").onclick = () => {
    if (dollars.gte(cost3) == true) {
        dollars_click = dollars_click.times(2)
        dollars = dollars.sub(cost3)
        cost3 = cost3.times(2)
        lvl3 = lvl3.add(1)
        document.getElementById("dpersec").innerHTML = "You Have " + dollars_persec + " Dollars per second."
        document.getElementById("dollars").innerHTML = "You Have " + dollars + " Dollars."
        document.getElementById("cost3").innerHTML = "Cost:" + cost3
    }
}

document.getElementById("cost3").onclick = () => {
    if (dollars.gte(cost3) == true) {
        dollars_click = dollars_click.times(2)
        dollars = dollars.sub(cost3)
        cost3 = cost3.times(2)
        lvl3 = lvl3.add(1)
        document.getElementById("dpersec").innerHTML = "You Have " + dollars_persec + " Dollars per second."
        document.getElementById("dollars").innerHTML = "You Have " + dollars + " Dollars."
        document.getElementById("cost3").innerHTML = "Cost:" + cost3
    }
}

document.getElementById("infpoint").onclick = () => {
    if (dollars.gte("1.8e308") == true) {
        dollars_click = new Decimal("1")
        dollars = new Decimal("0")
        cost1 = new Decimal("100")
        cost2 = new Decimal("1000")
        cost3 = new Decimal("5000")
        ip = dollars.log2().sub(1024).add(1)
        document.getElementById("dpersec").innerHTML = "You Have " + dollars_persec + " Dollars per second."
        document.getElementById("dollars").innerHTML = "You Have " + dollars + " Dollars."
        document.getElementById("cost3").innerHTML = "Cost:" + cost3
    }
}

document.getElementById("cost4").onclick = () => {
    if (ip.gte(cost4) == true) {
        dollars_click = dollars_click.times("eee19096")
        ip = ip.sub(cost4)
        cost4 = cost4.times(10)
        lvl4 = lvl4.add(1)
        document.getElementById("dpersec").innerHTML = "You Have " + dollars_persec + " Dollars per second."
        document.getElementById("dollars").innerHTML = "You Have " + dollars + " Dollars."
        document.getElementById("cost3").innerHTML = "Cost:" + cost3
    }
}

document.getElementById("cost5").onclick = () => {
    if (ip.gte(cost5) == true) {
        dollars_click = dollars_click.times("2")
        ip = ip.sub(cost5)
        cost5 = cost5.times(10)
        lvl5 = lvl5.add(1)
        document.getElementById("dpersec").innerHTML = "You Have " + dollars_persec + " Dollars per second."
        document.getElementById("dollars").innerHTML = "You Have " + dollars + " Dollars."
        document.getElementById("cost3").innerHTML = "Cost:" + cost3
    }
}

setInterval(() => {
    dollars = dollars.add(dollars_persec)
    document.getElementById("dollars").innerHTML = "You Have " + dollars + " Dollars."
    document.getElementById("ip").innerHTML = "You Have " + ip + " infinity points."
    timePlayed = timePlayed.add(1)
    if (dollars_persec.gte(1) == true) {
        document.getElementById("achievement-tab").innerHTML = "<achievement class=\u0022unlocked\u0022>$<sub>1</sub> (Start!: after go)</achievement>"
    } else {
        document.getElementById("achievement-tab").innerHTML = "<achievement class=\u0022locked\u0022>$<sub>1</sub> (Start!: after go)</achievement>"
    }
    if (dollars_click.gte(2) == true) {
        document.getElementById("achievement-tab2").innerHTML = "<achievement class=\u0022unlocked\u0022>$<sub>2</sub> (Click Clicking Clicking: Reach per click 2)</achievement>"
    } else {
        document.getElementById("achievement-tab2").innerHTML = "<achievement class=\u0022locked\u0022>$<sub>2</sub> (Click Clicking Clicking: Reach per click 2)</achievement>"
    }
    if (lvl3.gte(1) == true) {
        document.getElementById("achievement-tab3").innerHTML = "<achievement class=\u0022unlocked\u0022>$<sub>2</sub> (Clicking Power: Reach level cost three 1)</achievement>"
    } else {
        document.getElementById("achievement-tab3").innerHTML = "<achievement class=\u0022locked\u0022>$<sub>3</sub> (Clicking Power: Reach level cost three 1)</achievement>"
    }
    if (dollars.gte("1.8e308") == true) {
        document.getElementById("achievement-tab4").innerHTML = "<achievement class=\u0022unlocked\u0022>$<sub>\u221E</sub> (To a infinity dollars!: Reach dollar 1.8e308)</achievement>"
    } else {
        document.getElementById("achievement-tab4").innerHTML = "<achievement class=\u0022locked\u0022>$<sub>\u221E</sub> (To a infinity dollars!: Reach dollar 1.8e308)</achievement>"
    }
    if (dollars.gte("1.8e3008") == true) {
        document.getElementById("achievement-tab5").innerHTML = "<achievement class=\u0022unlocked\u0022>👍 (cool something: What is text kaineka super ultra mega super longest)</achievement>"
    } else {
        document.getElementById("achievement-tab5").innerHTML = "<achievement class=\u0022locked\u0022>👍 (cool something: What is text kaineka super ultra mega super longest)</achievement>"
    }
    if (dollars.gte("1.8e30008") == true) {
        document.getElementById("achievement-tab6").innerHTML = "<achievement class=\u0022unlocked\u0022><p class\u0022flipped-v\u0022>⚠️</p> (you win!: Reach dollar 1.8e30,008)</achievement>"
    } else {
        document.getElementById("achievement-tab6").innerHTML = "<achievement class=\u0022locked\u0022><p class\u0022flipped-v\u0022>⚠️</p> (you win!: Reach dollar 1.8e30,008)</achievement>"
    }
    if (dollars.gte(vars.eternity) == true) {
        document.getElementById("achievement-tab7").innerHTML = "<achievement class=\u0022unlocked\u0022>$$$$$....$$$$$ (text over thats longs per second: Reach 1 eternity dollar (somehow?))</achievement>"
    } else {
        document.getElementById("achievement-tab7").innerHTML = "<achievement class=\u0022locked\u0022>$$$$$....$$$$$ (text over thats longs per second: Reach 1 eternity dollar (somehow?))</achievement>"
    }
    if (dollars.gte(vars.reality) == true) {
        document.getElementById("achievement-tab8").innerHTML = "<achievement class=\u0022unlocked\u0022>$$$$$....$$$$$ (text over power longs await?: h)</achievement>"
    } else {
        document.getElementById("achievement-tab8").innerHTML = "<achievement class=\u0022locked\u0022>$$$$$....$$$$$ (text over power longs await?: h)</achievement>"
    }
    if (lvl5.gte(1) == true) {
        document.getElementById("achievement-tab9").innerHTML = "<achievement class=\u0022unlocked\u0022>winwinwinwinwin (Go to impossible upg: what)</achievement>"
    } else {
        document.getElementById("achievement-tab9").innerHTML = "<achievement class=\u0022locked\u0022>winwinwinwinwin (Go to impossible upg: what)</achievement>"
    }
    if (timePlayed.gte(86400) == true) {
        document.getElementById("achievement-tab10").innerHTML = "<achievement class=\u0022unlocked\u0022>... (long time: what this 24 hours?)</achievement>"
    } else {
        document.getElementById("achievement-tab10").innerHTML = "<achievement class=\u0022locked\u0022>... (long time: what this 24 hours?)</achievement>"
    }
}, 1000);