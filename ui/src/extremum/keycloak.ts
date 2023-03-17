import Keycloak from 'keycloak-js'
const REALM = 'extremum';
const DEFAULT_KEYCLOAK_CLIENT = 'crud-test';
const DEFAULT_URL = "https://auth.app-0.ajev84ud35k4m2lo4n39.y.extremum.io/";

const keycloak = new Keycloak({realm:REALM,url:DEFAULT_URL,clientId:DEFAULT_KEYCLOAK_CLIENT})

export default keycloak
