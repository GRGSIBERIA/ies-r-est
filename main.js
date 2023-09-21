question = [
    {"id":  1, "factor": 0,"text": "どんなきっかけでも，そのことを思い出すと，そのときの気もちがぶりかえしてくる。"},
    {"id":  2, "factor": 0,"text": "睡眠の途中で目がさめてしまう。"},
    {"id":  3, "factor": 0,"text": "別のことをしていても，そのことが頭から離れない。"},
    {"id":  4, "factor": 2,"text": "イライラして，怒りっぽくなっている。"},
    {"id":  5, "factor": 1,"text": "そのことについて考えたり思い出すときは，なんとか気を落ちつかせるようにしている。"},
    {"id":  6, "factor": 0,"text": "考えるつもりはないのに，そのことを考えてしまうことがある。"},
    {"id":  7, "factor": 1,"text": "そのことは，実際には起きなかったとか，現実のことではなかったような気がする。"},
    {"id":  8, "factor": 1,"text": "そのことを思い出させるものには近よらない。"},
    {"id":  9, "factor": 0,"text": "そのときの場面が，いきなり頭にうかんでくる。"},
    {"id": 10, "factor": 2,"text": "神経が敏感になっていて，ちょっとしたことでどきっとしてしまう。"},
    {"id": 11, "factor": 1,"text": "そのことは考えないようにしている。"},
    {"id": 12, "factor": 1,"text": "そのことについては，まだいろいろな気もちがあるが，それには触れないようにしている。"},
    {"id": 13, "factor": 1,"text": "そのことについての感情は，マヒしたようである。"},
    {"id": 14, "factor": 0,"text": "気がつくと，まるでそのときにもどってしまったかのように，ふるまったり感じたりすることがある。"},
    {"id": 15, "factor": 2,"text": "寝つきが悪い。"},
    {"id": 16, "factor": 0,"text": "そのことについて，感情が強くこみあげてくることがある。"},
    {"id": 17, "factor": 1,"text": "そのことを何とか忘れようとしている。"},
    {"id": 18, "factor": 2,"text": "ものごとに集中できない。"},
    {"id": 19, "factor": 2,"text": "そのことを思い出すと，身体が反応して，汗ばんだり，息苦しくなったり，むかむかしたり，どきどきすることがある。"},
    {"id": 20, "factor": 0,"text": "そのことについての夢を見る。"},
    {"id": 21, "factor": 2,"text": "警戒して用心深くなっている気がする。"},
    {"id": 22, "factor": 1,"text": "そのことについては話さないようにしている。"}
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
    const factorEn = ["Instrucsion", "Avoidance", "Hyperarousal"];
    const factorJa = ["侵入症状", "回避症状", "過覚醒症状"];
    
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

        let tr = dce("tr");

        let td_id = dce("td");
        td_id.innerText = (i + 1).toString();

        let td_text = dce("td");
        td_text.innerText = shuffles[i]["text"];

        const makeradio = (td, fac) => {
            let b1 = dce("input");
            b1.type = "radio";
            b1.name = "id-" + shuffles[i]["id"].toString();
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