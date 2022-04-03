function navbar(){
    return `
    <nav>
            <div class="links">
                <a href="index.html">HOME</a>
                <a href="receipeOfTheDay.html">RECEIPE OF THE DAY</a>
                <a href="latest.html">LATEST RECEIPE</a>
            </div>
            <div class="search">
              
                    <input type="text" placeholder="Search Dish" id="query" >
               
            
            </div>
        </nav>
    `
}


export {navbar};