/* ===========================
   LOADING
=========================== */

window.addEventListener("load", () => {

    const loading = document.getElementById("loading");

    loading.style.opacity = "1";

    setTimeout(() => {

        loading.style.transition = "opacity .8s";

        loading.style.opacity = "0";

        setTimeout(() => {

            loading.style.display = "none";

        },800);

    },1200);

});

/* ===========================
   攻略を見るボタン
=========================== */

function startGuide(){

    const loading = document.getElementById("loading");

    loading.style.display = "flex";

    loading.style.opacity = "1";

    setTimeout(()=>{

        loading.style.transition="opacity .5s";

        loading.style.opacity="0";

        setTimeout(()=>{

            loading.style.display="none";

            document.querySelector(".menu").scrollIntoView({

                behavior:"smooth"

            });

        },500);

    },1200);

}

/* ===========================
   スクロールフェード
=========================== */

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("fade");

        }

    });

});

document.querySelectorAll(".card").forEach(card=>{

    observer.observe(card);

});

/* ===========================
   ナビゲーション
=========================== */

const links=document.querySelectorAll("nav a");

links.forEach(link=>{

    link.addEventListener("click",function(){

        links.forEach(l=>l.classList.remove("active"));

        this.classList.add("active");

    });

});

/* ===========================
   カードクリック演出
=========================== */

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("click",()=>{

        card.animate([

            {transform:"scale(1)"},

            {transform:"scale(0.97)"},

            {transform:"scale(1.02)"},

            {transform:"scale(1)"}

        ],{

            duration:300

        });

    });

});

/* ===========================
   タイトル演出
=========================== */

const title=document.querySelector(".hero h2");

let visible=true;

setInterval(()=>{

    title.style.opacity=visible?0.8:1;

    visible=!visible;

},900);

/* ===========================
   メニュー表示アニメーション
=========================== */

window.addEventListener("scroll",()=>{

    document.querySelectorAll(".card").forEach(card=>{

        const pos=card.getBoundingClientRect().top;

        if(pos<window.innerHeight-80){

            card.style.opacity="1";

            card.style.transform="translateY(0)";

        }

    });

});

/* ===========================
   初期設定
=========================== */

document.querySelectorAll(".card").forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(40px)";

    card.style.transition=".6s";

});
