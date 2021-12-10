import React from 'react';


function HomePage(){
    return (
        <div>
            <div className='sybd'>
                
                    
                
            <center><h1>Sell Your Bike</h1></center>
                    <form>
                    <center><label for="Category">Category:</label><input type="text"></input></center>
                        <center><label for="Type">Type:</label><input type="text"></input></center>
                        <center><label for="Price">Price:</label><input type="number"></input></center>
                        <center><button>Submit:</button></center>
                    </form>

                    <h1>Your Bikes for Sale:</h1>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div>
                    <h1>Bikes for sale:</h1>
                    <br />
                    <br />
                    <h4>Name: Men's Mountain Bike | Product ID: MTN250 | Price: $350 | Description: Men's 32" Bike |</h4>
                    <button>Add to Cart</button>
                    <h4>Name: Men's Road Bike | Product ID: RD200 | Price: $300 | Description: Men's 30" Bike |</h4>
                    <button>Add to Cart</button>
                    <h4>Name: Woman's Mountain Bike | Product ID: MTN100 | Price: $150 | Description: Woman's 24" Mountain Bike |</h4>
                    <button>Add to Cart</button>
                    <h4>Name: Woman's Road Bike | Product ID: RD100 | Price: $125 | Description: Woman's 22" Road Bike |</h4>
                    <button>Add to Cart</button>
                    <h4>Name: Boys's Mountain Bike | Product ID: RD75 | Price: $100 | Description: Boys's 15" Mountain Bike |</h4>
                    <button>Add to Cart</button>
                    <h4>Name: Girls's Mountain Bike | Product ID: RD75| Price: $100 | Description: Girls's 15" Mountain Bike |</h4>
                    <button>Add to Cart</button>
                    
                    
                    
                    
                   
                    </div>
            </div>
        </div>
    )
    
}

export default HomePage;