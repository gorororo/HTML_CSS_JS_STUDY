(() => {
"use strict";
const tagColor = document.querySelector("#color");
const tagResult = document.querySelector("#result");
const records = [];
let time = {
                start:0,
                end:0,
                getTimeDiff : function(){
                    return this.end-this.start;
                }
            }
let timeoutID;
// let startTime;
// let endTime;
    


    const changeColorContent = (old,current,text)=>{
        tagColor.classList.replace(old, current);
        tagColor.textContent = text;
    }

    const rankRecodes = (time)=>{
        records.push(time);
        //평균 구하기
        // records.forEach((v)=>{
        //     sum += v;
        // });
        // average =sum/ records.length;
        const average=records.reduce((v,i)=> v+i)/records.length;
        //top3
        const top3 = records.sort((a,b)=>a-b).slice(0,5);
        //화면에 출력
        
        let htmlStr = '';
        htmlStr += `<span>현재 : ${time} ms</span>`
        htmlStr += `<span>평균 : ${average} ms</span>`
        top3.forEach((v,i)=>{
            htmlStr += `<p>${i+1}위 : ${v}ms</p>`
        });
        tagResult.innerHTML = htmlStr;
    }

    const handlerColorClick = () => {
        if (tagColor.classList.contains("waiting")) {
            changeColorContent('waiting','ready','초록색이되면 클릭 하세요')
            // tagColor.classList.remove('waiting');
            // tagColor.classList.add('ready');
            // tagColor.classList.replace("waiting", "ready");
            // tagColor.textContent = "초록색이되면 클릭 하세요";
            timeoutID = setTimeout(() => {
                time.start = new Date();
                // tagColor.classList.remove('ready')
                // tagColor.classList.add('now')
                // tagColor.classList.replace("ready", "now");
                // tagColor.textContent = "클릭하세요!";
                changeColorContent('ready','now','클릭하세요!')
            }, Math.floor(Math.random() * 2000) + 2000);

        } else if (tagColor.classList.contains("ready")) {
            clearTimeout(timeoutID);
            changeColorContent('ready','waiting','너무 성급 하시군요!')
            // tagColor.classList.replace("ready", "waiting");
            // tagColor.textContent = "너무 성급 하시군요!";

        } else if (tagColor.classList.contains("now")) {
            clearTimeout(timeoutID);
            time.end = new Date();
            // const current = endTime - startTime;
            rankRecodes(time.getTimeDiff())
            // rankRecodes(current);
            // records.push(current);
            // const average = records.reduce((a, c) => a + c) / records.length;
            // tagResult.textContent = `현재${current}ms, 평균 ${average}ms`;
            // const topFive = records.sort((p,c)=>p-c).slice(0,5);
            // topFive.forEach((top,index)=>{
            //     tagResult.append(
            //         document.createElement('br'),
            //         `${index+1}위 : ${top}ms`
            //     );
            // });
            // startTime = null;
            // endTime = null;
            // tagColor.classList.remove('now');
            // tagColor.classList.add('waiting');
            // tagColor.classList.replace("now", "waiting");
            // tagColor.textContent = "클릭해서 시작하세요";
            changeColorContent('now','waiting','클릭해서 시작하세요')
        }
    };
    tagColor.addEventListener("click", handlerColorClick);
})();
