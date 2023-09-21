question = [
    {"ord": 0, "id":  1, "factor": 0,"text": "どんなきっかけでも，そのことを思い出すと，そのときの気もちがぶりかえしてくる。"},
    {"ord": 0, "id":  2, "factor": 0,"text": "睡眠の途中で目がさめてしまう。"},
    {"ord": 0, "id":  3, "factor": 0,"text": "別のことをしていても，そのことが頭から離れない。"},
    {"ord": 0, "id":  4, "factor": 2,"text": "イライラして，怒りっぽくなっている。"},
    {"ord": 0, "id":  5, "factor": 1,"text": "そのことについて考えたり思い出すときは，なんとか気を落ちつかせるようにしている。"},
    {"ord": 0, "id":  6, "factor": 0,"text": "考えるつもりはないのに，そのことを考えてしまうことがある。"},
    {"ord": 0, "id":  7, "factor": 1,"text": "そのことは，実際には起きなかったとか，現実のことではなかったような気がする。"},
    {"ord": 0, "id":  8, "factor": 1,"text": "そのことを思い出させるものには近よらない。"},
    {"ord": 0, "id":  9, "factor": 0,"text": "そのときの場面が，いきなり頭にうかんでくる。"},
    {"ord": 0, "id": 10, "factor": 2,"text": "神経が敏感になっていて，ちょっとしたことでどきっとしてしまう。"},
    {"ord": 0, "id": 11, "factor": 1,"text": "そのことは考えないようにしている。"},
    {"ord": 0, "id": 12, "factor": 1,"text": "そのことについては，まだいろいろな気もちがあるが，それには触れないようにしている。"},
    {"ord": 0, "id": 13, "factor": 1,"text": "そのことについての感情は，マヒしたようである。"},
    {"ord": 0, "id": 14, "factor": 0,"text": "気がつくと，まるでそのときにもどってしまったかのように，ふるまったり感じたりすることがある。"},
    {"ord": 0, "id": 15, "factor": 2,"text": "寝つきが悪い。"},
    {"ord": 0, "id": 16, "factor": 0,"text": "そのことについて，感情が強くこみあげてくることがある。"},
    {"ord": 0, "id": 17, "factor": 1,"text": "そのことを何とか忘れようとしている。"},
    {"ord": 0, "id": 18, "factor": 2,"text": "ものごとに集中できない。"},
    {"ord": 0, "id": 19, "factor": 2,"text": "そのことを思い出すと，身体が反応して，汗ばんだり，息苦しくなったり，むかむかしたり，どきどきすることがある。"},
    {"ord": 0, "id": 20, "factor": 0,"text": "そのことについての夢を見る。"},
    {"ord": 0, "id": 21, "factor": 2,"text": "警戒して用心深くなっている気がする。"},
    {"ord": 0, "id": 22, "factor": 1,"text": "そのことについては話さないようにしている。"}
];

const shuffleArray = (arr) => {
    for (let i = (arr.length - 1); 0 < i; i--) {
        let r = Math.floor(Math.random() * (i + 1));

        let tmp = arr[i];
        arr[i] = arr[r];
        arr[r] = tmp;
    }
    return arr;
};

window.addEventListener("load", (event) => {
    let tab = document.getElementById("qs-tab");

    const dce = (e) => { 
        return document.createElement(e);
    };
    let header = dce("tr");
    let idtext = dce("td");
    idtext.innerText = "番号";
    header.appendChild(idtext);
    let q_text = dce("td");
    q_text.innerText = "質問";
    header.appendChild(q_text);

    let qs = [dce("td"), dce("td"), dce("td"), dce("td"), dce("td")]
    qs[0] = dce("td");
    qs[0].innerText = "0. 全くなし";
    qs[0].width = "64";
    qs[1] = dce("td");
    qs[1].innerText = "1. 少し";
    qs[1].width = "64";
    qs[2] = dce("td");
    qs[2].innerText = "2. 中くらい";
    qs[2].width = "64";
    qs[3] = dce("td");
    qs[3].innerText = "3. かなり";
    qs[3].width = "64";
    qs[4] = dce("td");
    qs[4].innerText = "4. 非常に";
    qs[4].width = "64";
    for (let i = 0; i < qs.length; i++) {
        header.appendChild(qs[i]);
    }
    tab.appendChild(header)

    let shuffles = shuffleArray(question);
    for (let i = 0; i < shuffles.length; i++) {
        const t = shuffles[i]["text"];
        shuffles[i]["ord"] = i;

        let tr = dce("tr");

        let td_id = dce("td");
        td_id.innerText = (i + 1).toString();

        let td_text = dce("td");
        td_text.innerText = shuffles[i]["text"];

        const makeradio = (td, fac) => {
            let b1 = dce("input");
            b1.type = "radio";
            b1.name = "name-" + shuffles[i]["id"].toString();
            b1.value = fac;
            td.appendChild(b1)
        }

        tr.appendChild(td_id);
        tr.appendChild(td_text);

        for (let j = 0; j < 5; j++) {
            let td_radio = dce("td");
            makeradio(td_radio, -1);
            tr.appendChild(td_radio);
        }        

        tab.appendChild(tr);
    }

});

function calculate() {
    const factorEn = ["Instrucsion", "Avoidance", "Hyperarousal", "Total"];
    const factorJa = ["侵入症状", "回避症状", "過覚醒症状", "合計点"];
    let factors = [0, 0, 0, 0]
    
    for (let i = 0; i < question.length-1; ++i) {
        let point = 0;

        let rads = document.getElementsByName("name-" + question[i]["id"].toString());

        for (let j = 0; j < 5; j++) {
            
            if (rads.item(j).checked === true) {
                point = j;
                break;
            }
        }

        let facid = question[i]["factor"]
        factors[facid] += point;
    }
    factors[3] = factors[0] + factors[1] + factors[2];

    let tab = document.getElementById("rs-tab");
    while (fsc = tab.firstChild) {
        tab.removeChild(fsc);
    }

    const dce = (e) => { 
        return document.createElement(e);
    };

    for (let i = 0; i < factors.length; i++) {
        let tr = dce("tr");
        let td_name = dce("td");
        td_name.innerText = factorJa[i];
        let td_point = dce("td");
        td_point.innerText = factors[i].toString();
        tr.appendChild(td_name);
        tr.appendChild(td_point);
        tab.appendChild(tr);
    }
}