    //importar selected diameter
    //import diameterSelected from './objects'
    function index(){
    //function getSelectedDiameter(diameterSelected)
    return (
    <div>
        <div class="rectangleHeader">
            <h1>Cotizador de pintura de tubos de acero</h1>
        </div>


        <div class="container">
            <div class="textInfo">
                <p>Este cotizador te dá el costo de pintura de tubos de acero y accesorios por superficie necesaria
                    [m2].
                    Para mas información contactanos.</p>
            </div>

        </div>
        <div class="container">
            <div class="bodyCalculator">
                <div class="boxInputsData">
                    <div class="rowBox">
                        <div class="titleBox"> Diámetro</div>
                        <div class="input-group mb-3">
                            <select id="inputGroupSelect02" class="custom-select" onchange="getSelectedDiameter()">
                                <option selected>Seleccionar</option>
                                <option value="1/2">1/2"</option>
                                <option value="3/4">3/4"</option>
                                <option value="1">1"</option>
                                <option value="1 1/4">1 1/4"</option>
                                <option value="1 1/2">1 1/2"</option>
                                <option value="2">2"</option>
                                <option value="2 1/2">2 1/2"</option>
                                <option value="3">3"</option>
                                <option value="4">4"</option>
                                <option value="5">5"</option>
                                <option value="6">6"</option>
                                <option value="8">8"</option>
                                <option value="10">10"</option>
                                <option value="12">12"</option>
                                <option value="14">14"</option>
                                <option value="16">16"</option>
                                <option value="18">18"</option>
                                <option value="20">20"</option>
                                <option value="24">24"</option>
                            </select>

                        </div>
                    </div>
                    <br />
                    <div class="rowBox">
                        <div class="titleBox"> Codo 90°</div>
                        <div class="input-group">
                            <input type="text" class="form-control" id="elbow90"
                                aria-label="Dollar amount (with dot and two decimal places)"></input>
                            <span class="input-group-text">Un.</span>
                        </div>
                    </div>
                    <br></br>
                    <div class="rowBox">
                        <div class="titleBox"> Codo 45°</div>
                        <div class="input-group">
                            <input type="text" class="form-control " id="elbow45"
                                aria-label="Dollar amount (with dot and two decimal places)"></input>
                            <span class="input-group-text">Un.</span>
                        </div>
                    </div>
                    <br></br>
                    <div class="rowBox">
                        <div class="titleBox"> Te</div>
                        <div class="input-group">
                            <input type="text" class="form-control" id="tee"
                                aria-label="Dollar amount (with dot and two decimal places)"></input>
                            <span class="input-group-text">Un.</span>
                        </div>
                    </div>
                    <br></br>
                    <div class="rowBox">
                        <div class="titleBox"> Reducción</div>
                        <div class="input-group">
                            <input type="text" class="form-control" id="reduction"
                                aria-label="Dollar amount (with dot and two decimal places)"></input>
                            <span class="input-group-text">Un.</span>
                        </div>
                    </div>
                    <br></br>
                    <div class="rowBox">
                        <div class="titleBox"> Brida</div>
                        <div class="input-group">
                            <input type="text" class="form-control" id="flange"
                                aria-label="Dollar amount (with dot and two decimal places)"></input>
                            <span class="input-group-text">Un.</span>
                        </div>
                    </div>

                    <br></br>
                    <div class="rowBox">
                        <div class="titleBox"> Longitud de caño</div>
                        <div class="input-group">
                            <input type="text" class="form-control" id="lengthTube"
                                aria-label="Dollar amount (with dot and two decimal places)"></input>
                            <span class="input-group-text">m</span>
                        </div>
                    </div>
                </div>
                <div class="contButtonAdd">
                    <button type="button" class="btn btn-primary">Necesitás otros diametros?, hacé click aqui</button>
                </div>
            </div>
        </div>

        <div class="container">
            <div> Revestimiento a aplicar</div>
            <div class="checkOptionsPaint">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                        value="option1" checked></input>
                    <label class="form-check-label" for="exampleRadios1">
                        Aplicación de fondo de Epoxi
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                        value="option2"></input>
                    <label class="form-check-label" for="exampleRadios2">
                        Revestimiento de poliuretano
                    </label>
                </div>
            </div>

        </div>
        <div class="container">
            <div class="calcBtn">
                <button type="button" class="btn btn-primary" id="calculateButton">CALCULAR</button>
            </div>
            <div class="container">
                <div class="areaCalc">
                    <div class="textOutput">
                        <p>SUPERFICIE TOTAL</p>
                    </div>
                    <div class="resultOutput" id="supResult">

                    </div>
                </div>

            </div>
            <div class="container">
                <div class="areaCalc">
                    <div class="textOutput">
                        <p>COSTO TOTAL</p>
                    </div>
                    <div class="resultOutput" id="totalPrice">

                    </div>
                </div>

            </div>
        </div>
    </div>
    )
    }