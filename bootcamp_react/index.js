var container = document.getElementById("app");
// var title = document.createElement("h1");
// title.innerHTML = "java escripto :o"
// container.appendChild(title); 
function Counter(props) {

    // let n = 0;
    const [n, setN] = React.useState(0);

    function countVote() {
        setN(n + 1);
        console.log("vote n: ", n);
    }

    function discountVote() {
        setN(n - 1);
        console.log("discount vote: ", n);
    }

    return (
        <React.Fragment>
            {/* <h1>{props.title}</h1>
            <h2>{n}</h2>

            <button className="btn btn-outline-primary" onClick={countVote}>+</button>
            <button className="btn btn-outline-danger" onClick={discountVote}>-</button>

            <hr></hr> */}

            {/* <div class="card-group" > */}

            <div className="card" >
                <div className="card-header">
                    <h2 className="card-title">{props.title}</h2>
                </div>
                <div className="card-body text-center">
                    <img className="card-img-top" style={{ width: "15rem" }} src={props.urlImage} alt="Card image cap" />
                    <h4>number of votes: {n}</h4>
                </div>
                <div className="card-footer text-center">
                    <div className="row">
                        <a className="btn btn-primary col" onClick={countVote}>
                            <b>+</b>
                        </a>
                        <a className="col"></a>
                        <a className="btn btn-danger col" onClick={discountVote}>
                            <b>-</b>
                        </a>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </React.Fragment>
    );
}

function App(props) {
    return (
        <React.Fragment>
            <div className="container">
            <br/>
            <h1>Which is the best javascript frontend framework?</h1>
            <hr/>
            <br/>   
            <div className="row">
                <div className="col">
                    <Counter title="React" urlImage="https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png" />
                </div>
                <div className="col">
                <Counter title="Angular" urlImage="https://angular.kr/assets/images/logos/angular/angular.png" />
                </div>
                <div className="col">
                <Counter title="VueJS" urlImage="https://vuejs.org/images/logo.png" />
                </div>
            </div>
            

            </div>
        </React.Fragment>
    );
}


ReactDOM.render(React.createElement(App, null, null), container);


// PascalCase -> componenetes em react seguem esse padrão
// camelCase -> funções javascript
// Componentes só podem retornar um elemento por Componente
// saída => aninhar em React.Fragment
// podemos criar propriedades para nossos Components (props)