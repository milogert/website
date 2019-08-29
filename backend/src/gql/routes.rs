//use juniper::{FieldResult};
use rocket_contrib::json::{Json, JsonValue};

#[derive(Deserialize, Serialize)]
pub struct GraphQLRequest {
    endpoint: String,
    request: String,
}

#[post("/send", format = "json", data = "<proxy_request>")]
pub fn send(proxy_request: Json<GraphQLRequest>) -> Option<JsonValue> {
    let gql_req: GraphQLRequest = proxy_request.into_inner();
    let mut map = std::collections::HashMap::new();
    map.insert("query", gql_req.request);
    let client = reqwest::Client::new();
    let uri = gql_req.endpoint.to_owned();
    let uri_static: &str = &uri[..];
    let back = client.post(uri_static)
        .json(&map)
        .send().unwrap()
        .text().unwrap();

    Some(json!(back))
}
