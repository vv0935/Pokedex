async function pFetch(){
        try{
            const userin=document.querySelector("#pname").value.toLowerCase();
            const bt=document.querySelector("button");
            if(!userin){
                throw new Error("empty input");
            }
            const pokimg=document.querySelector("#pokemonSprite");
            const pname=document.querySelector("#ppname");
            const ptype=document.querySelector("#type");
            const p=await fetch(`https://pokeapi.co/api/v2/pokemon/${userin}`);
            if(!p.ok){
                throw new Error("invalid input");
            }
            else{
            const g=await p.json();
            console.log(g.name);
            console.log(g.types[0].type.name);
            pokimg.src=g.sprites.front_default;
            pokimg.style.display="block";
            pname.style.marginTop='20px';
            pname.innerHTML=`<p>Name: ${g.name}</p>`;
            ptype.innerHTML=`<p>Type: ${g.types[0].type.name}</p>`;

            }
        }
        catch(error){
            console.error(error);
            alert("enter the valid input");
        }
};
