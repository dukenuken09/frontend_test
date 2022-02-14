# Contador de contractes i socis d'entitats i administracions públiques

### Component
El component està format per:
- Counter -> com a component principal, on s'organitza el component amb Tabs, per les diferents seccions.
- CounterTab -> com a part lògica de cada un dels tabs, és on es fan les crides a la API per recuperar les dades.
- CounterTabData -> com a part de dades de cada un dels tabs, és on es mostren les dades.

El fet de poder dividir un component en part lògica i de mostratge de dades, et permet passar informació parametritzada que et permet una millor modulació i et facilita el fet de crear els testos ja que pots passar les dades mock, per les props dels components.

### API
- contractAPI: és on hi ha les crides a la api destinades a agafar informació dels contractes.
- memberAPI: és on hi ha les crides a la api destinades a agafar informació dels membres.

### Tests
Hi ha testos de:
- Counter -> On es prova de passar les dades que correspondrien als diferents Tabs i es comprova que el selector que canvia de Tab funcioni bé.
- CounterTab -> On es prova que les dades extretes de les crides es mostrin bé i que si alguna falla es mostri el text d'error.
- CounterTabData -> On es prova que les dades que es passen es mostrin com toca.

