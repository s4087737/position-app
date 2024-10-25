import{s as k,f as l,a as b,l as T,g as c,h as w,v as x,c as _,m as j,d as p,j as h,i as S,J as r,z as v}from"../chunks/scheduler.-01WbZ0C.js";import{S as C,i as G}from"../chunks/index.BESyycpN.js";function H(i){let e,a,y="Gameplay Instructions",u,s,m,d,o,f='<a href="/scoreboard" class="btn btn-primary svelte-jwakvj">Go to Scoreboard</a>';return{c(){e=l("div"),a=l("h1"),a.textContent=y,u=b(),s=l("p"),m=T(i[0]),d=b(),o=l("div"),o.innerHTML=f,this.h()},l(n){e=c(n,"DIV",{class:!0});var t=w(e);a=c(t,"H1",{class:!0,"data-svelte-h":!0}),x(a)!=="svelte-yp2jat"&&(a.textContent=y),u=_(t),s=c(t,"P",{class:!0});var g=w(s);m=j(g,i[0]),g.forEach(p),d=_(t),o=c(t,"DIV",{class:!0,"data-svelte-h":!0}),x(o)!=="svelte-1rg80si"&&(o.innerHTML=f),t.forEach(p),this.h()},h(){h(a,"class","text-3xl font-bold text-center mb-4"),h(s,"class","text-lg whitespace-pre-line text-center"),h(o,"class","text-center mt-10"),h(e,"class","container mx-auto py-10 svelte-jwakvj")},m(n,t){S(n,e,t),r(e,a),r(e,u),r(e,s),r(s,m),r(e,d),r(e,o)},p:v,i:v,o:v,d(n){n&&p(e)}}}function I(i){return[`
        Welcome to the GNSS Timed Scavenger Hunt!

        Time is Running Out!

        A timer has been started, and is beginning to tick down!
        If the time runs out, the game is over!
        BUT there are health potions.
             Once you are within 10 meters of an health potion, you will pick it up and you'll get more time.

        Your objective here is to beat monsters around the map.

        They are located in 5 adjacent suburbs (Use the toggle to help you find the suburbs)

        When you encounter an enemy there will be a prompt to roll a dice.

        If you are successful, they will drop treasure! Collect 5 treasures to win the game!

        Try to have more time remaining. The more time you have remaining, the higher your score

        This score will be recorded on the scoreboard!


        Use your device's GNSS chip to help you
        navigate to the markers.

        How to Play:
        1. Look at the map and identify the markers.
        2. Fight monsters by walking towards them, and follow the prompts
        3. When you're within 10 meters of a item, treasure or potion it will automatically be counted.
        4. Make sure the timer doesn't run out
        5. Check your score on the scoreboard page.

        Good luck and have fun!
    `]}class P extends C{constructor(e){super(),G(this,e,I,H,k,{})}}export{P as component};
