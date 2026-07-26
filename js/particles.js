/* ===================================
   Background Particles
=================================== */

const container = document.getElementById("particles");

const colors = [
    "#FFD700",
    "#FFF5A5",
    "#7FC8FF",
    "#FFFFFF"
];

const particleCount = 120;

for(let i=0;i<particleCount;i++){

    const p = document.createElement("div");

    p.className = "particle";

    const size = Math.random()*6+2;

    p.style.width = size+"px";
    p.style.height = size+"px";

    p.style.left = Math.random()*100+"vw";
    p.style.top = Math.random()*100+"vh";

    p.style.background =
        colors[Math.floor(Math.random()*colors.length)];

    p.style.opacity = Math.random()*0.7+0.2;

    p.style.animationDuration =
        (8+Math.random()*12)+"s";

    p.style.animationDelay =
        (-Math.random()*20)+"s";

    container.appendChild(p);

}

/* ===========================
   マウス追従
=========================== */

document.addEventListener("mousemove",(e)=>{

    const particles =
        document.querySelectorAll(".particle");

    particles.forEach((particle,index)=>{

        const speed=(index%6+1)*0.002;

        particle.style.transform=
        `translate(${e.clientX*speed}px,
                   ${e.clientY*speed}px)`;

    });

});

/* ===========================
   ランダムに光る
=========================== */

setInterval(()=>{

    const particles =
        document.querySelectorAll(".particle");

    const p =
        particles[Math.floor(Math.random()*particles.length)];

    p.animate([

        {
            transform:"scale(1)",
            opacity:.4
        },

        {
            transform:"scale(2.2)",
            opacity:1
        },

        {
            transform:"scale(1)",
            opacity:.4
        }

    ],{

        duration:1000

    });

},250);

/* ===========================
   クリックで光の爆発
=========================== */

document.addEventListener("click",(e)=>{

    for(let i=0;i<20;i++){

        const spark=document.createElement("div");

        spark.className="particle";

        spark.style.position="fixed";

        spark.style.left=e.clientX+"px";

        spark.style.top=e.clientY+"px";

        spark.style.width="6px";

        spark.style.height="6px";

        spark.style.background=
            colors[Math.floor(Math.random()*colors.length)];

        spark.style.borderRadius="50%";

        spark.style.pointerEvents="none";

        document.body.appendChild(spark);

        const angle=Math.random()*Math.PI*2;
        const distance=60+Math.random()*120;

        spark.animate([

            {
                transform:"translate(0,0) scale(1)",
                opacity:1
            },

            {
                transform:`translate(${Math.cos(angle)*distance}px,
                                      ${Math.sin(angle)*distance}px)
                                      scale(0)`,
                opacity:0
            }

        ],{

            duration:800,
            easing:"ease-out"

        });

        setTimeout(()=>{

            spark.remove();

        },800);

    }

});
