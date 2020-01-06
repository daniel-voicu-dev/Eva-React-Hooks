import React,{useState} from 'react'

import "../sass/header.sass"

let fakeMainMenu = [
  {"label":"Bras","id":"bras"},  
  {"label":"Lingerie","id":"lingerie"},
  {"label":"Sport","id":"sport"},
  {"label":"Beauty","id":"beauty"},
  {"label":"Accessories","id":"accessories"},
  {"label":"Swim","id":"swim"},
  {"label":"Sale","id":"sale"},
]

const headerConfigClass=["LMSC","L-M-SC","LSC--M","SC--LM","M-L-SC","LmSC--M","m--LSC--M","m-L-SC--M"];
const justify = ["nav-secondary-justify-flex-end","nav-secondary-justify-center","nav-secondary-justify-flex-start", "nav-secondary-justify-center", ];
const Header = () => {
  let [config,setConfig] = useState(headerConfigClass[0]);
  let [container,setContainer] = useState(false); 
  let [navJustify,setNavJustify] = useState(false);
  let [navSecondaryJustify,setNavSecondaryJustify] = useState(0);
  return (
    <>
      <header className={"header " + config + (container ? " container" : "") +  (navJustify ? " nav-justify-center" : "") + " " + justify[navSecondaryJustify]}> 
        <div className="logo L"><img src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" alt="Logo" /></div>
        <div className="nav--wrapper SC">
          <div className="search S"><input type="text" /> <button type="button"><i className="ion-md-search"></i></button></div>
          <nav className="nav--header C">        
            <a href="/"><i className="ion-md-person"></i></a>
            <a href="/"><i className="ion-md-heart"></i></a>
            <a href="/"><i className="ion-md-cart"></i></a>        
          </nav>
        </div>      
        <nav className="nav--secondary m" onClick={()=>setNavSecondaryJustify(justify[navSecondaryJustify + 1] !== undefined ? navSecondaryJustify + 1 : 0)}>       
          <a href="/">United States</a>
          <a href="/">Europe</a>
          <a href="/">Asia</a>       
        </nav>
        <nav className="nav--primary M" onClick={()=>setNavJustify(!navJustify)}>
          {fakeMainMenu.map(({label,id},i)=>(<a key={i} href={"/"+id}>{label}</a>))}
        </nav>
      </header>  
      {/* TO BE REPLACED */}
      <div className="config-wrapper">
        {headerConfigClass.map((v,i)=>(<button key={i} type="button" className={config===v ? "btn active" : "btn"  }onClick={()=>setConfig(v)}>{v}</button>))}
        <button type="button" onClick={()=>setContainer(!container)}>Container Switcher</button>
        </div>  
    </>
  )
}

export default Header
