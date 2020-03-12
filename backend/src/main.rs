#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;
#[macro_use] extern crate rocket_contrib;
#[macro_use] extern crate serde_derive;
extern crate futures;
extern crate hyper;
extern crate tokio_core;

mod cors;
mod gql;

mod bad_gql_proxy {
    #[post("/send")]
    pub fn send() -> &'static str {
        "sent request"
    }
}

#[get("/")]
fn index() -> &'static str {
    "Hello, world!"
}

fn main() {
    rocket::ignite()
        .attach(cors::CORS())
        .mount("/", routes![index])
        .mount("/gql", routes![gql::routes::pinned_repos])
        .launch();
}
