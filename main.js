const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  await delay(700);
  createCode("connecting...","");
  await delay(4900);
  createCode(".","");
  await delay(1000);
  createCode(".","");
  await delay(1000);
  createCode(".","");
  await delay(1000);
  createCode("connected!","welcome.");
  await delay(100)
  createText("suggested commands:");
 
  createCode("whois", "who i am");
  createCode("cmds", "lists all the commands");
  createCode("clear", "clears the terminal");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/root";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "cmds"){
    trueValue(value);
    
    createCode("", "list of all the projects i've worked on");
    createCode("about", "info on me");
    createCode("socials", "where to find me");
    createCode("info", "website info e.g version number");
    createCode("clear", "clears the terminal");
    createCode("ami", "shows info about who you are.");
    
  }
  else if(value === "projects"){
    trueValue(value);
    createText("coming soon")
  }
  else if(value === "about"){
    trueValue(value);
    createText("hi there, my name's *epic*")
    createText("currently learning html")
    createText("the end.")
  }
  else if(value === "socials"){
    trueValue(value);
    createText("<a href='https://github.com/rast6' target='_blank'><i class='fab fa-github white'></i>rast6</a>")
    createText("<i class='fa-brands fa-discord white'></i>Epic#0014")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }

  else if(value === "info"){
    trueValue(value);
    createCode("domain:", "github.io")
    createCode("version:", "2.1.0")
    createCode("framework:","vanilla")
    createCode("host:", "github")
    createCode("last modified:", "oct 31, 2022 @ 22:05:58pm gmt")
  }

  else if (value === "ami") {
    trueValue(value);
    createText('<i class="fa-solid fa-dog"></i> this is you.');
  }

  else if(value === "secret") {
    trueValue(value);
    createText('');
  }

  else if(value === ""){
    trueValue(value);
    createCode("please enter something.","");
  }
  
  else{
    falseValue(value);
    createText(`couldnt find ${value}.`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();
