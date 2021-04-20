import React from "react";
import data from './data';

function App() {
    return (
        <div classNameName="grid-container">
            <header className="row">
                <div>
                    <a className="company" href="index.html">Svasthya</a>
                </div>
                <div>
                    <a href="cart.html">Home</a>
                    <a href="cart.html">Cart</a>
                    <a href="signin.html">Logout</a>
                </div>
            </header>
            <main>
                <div>
                    <div className="row center">
                        {
                            data.medicines.map( medicine=> (
                                <div key={medicine._id} className="card">
                                <img className="medium" src={medicine.image} alt={medicine.name} />
                                <div className="card-body">
                                    <h2>{medicine.name}</h2>
                                <div className="price">{medicine.price}</div>
                            </div>
                        </div>
                            ))
                        }
                        
                    </div>
                </div>
            </main>
            <footer className="row center">All right reserved</footer>
        </div>
    )
}

export default App;