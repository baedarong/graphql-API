## Introduction

**_GraphQL_**

API를 위한 쿼리 언어

- 데이터에 대한 완전한 설명
- 클라이언트의 정확한 요청
- 시간이 지남에 따라 API를 더 쉽게 발전시킴
- 강력한 개발도구
- 정규화 캐싱 (cash store)

GraphQL은 클라이언트가 필요한 것을 정확하게 요청할 수 있는 기능을 제공하며, 시간이 지남에 따라 API를 더 쉽게 발전시키고 강력한 개발자 도구를 활성화합니다.

https://graphql.org/

**_Graphile_**

PostgreSQL를 위한 확장 가능한 고성능 자동 GraphQL API

https://www.graphile.org/

**_Hasura_**

모든 데이터에 대한 즉각적인 GraphQL

Hasura는 신규 및 기존 데이터 소스에 대한 즉각적인 GraphQL 및 REST API를 제공합니다. Hasura를 데이터에 연결하고 1분 이내에 API를 받으세요.

https://hasura.io/

## Before GraphQL

**_API (Application Programming Interface)_**

API는 컴퓨터나 컴퓨터 프로그램 사이의 연결이다. 즉, 프로그램들이 서로 소통하는 방법이다.

주로 프로그래밍할 때 사용하고, 어플리케이션과 상호작용할 때 사용한다.

**_인터페이스_**

무엇인가와(TV) 무언가를(리모컨) 이용해서 상호작용하는 방식이다. 리모컨을 이용해서 TV를 컨트롤하고, TV와 상호작용할 수 있는 것이다. ex1) REST API는 특정 URL로 요청을 통해 이루어진다.

ex2) Twitter API

https://developer.twitter.com/en/docs/api-reference-index

**_HTTP 요청 메서드_**

HTTP는 요청 메서드를 정의하여, 주어진 리소스에 수행하길 원하는 행동을 나타냅니다. 간혹 요청 메서드를 "HTTP 동사"라고 부르기도 합니다.

https://developer.mozilla.org/ko/docs/Web/HTTP/Methods

**_자주 사용하는 HTTP 요청 메서드들_**

GET: GET 메서드는 오직 데이터를 받기만 합니다.

POST: POST 메서드는 리소스를 생성할 때 쓰입니다.

PUT: PUT 메서드는 리소스를 업데이트할 때 쓰입니다.

DELETE: DELETE 메서드는 특정 리소스를 삭제합니다.

**_5분만에 제대로 설계하는 ⭐️ REST API_**

https://youtu.be/4DxHX95Lq2U

1. URL에서는 가급적 동사를 사용하지 않는다.

(동사보다는 HTTP request method를 이용)

/seeMovies (GET) -> /movies (GET)

/createMovie (POST) -> /movies (POST)

2. 검색이나 필터를 처리할 때는 query parameter를 이용하는 것이 좋다.

/getTopRatedMovies -> /movies?min_rating=9

/findMoviesFromThisYear -> /movies?release_date=2022

## WELCOME TO GRAPHQL

**_누가 GraphQL을 사용하고 있습니까?_**

Facebook의 모바일 앱은 2012년부터 GraphQL로 구동되었습니다. GraphQL spec은 2015년에 오픈 소스로 공개되었으며 현재 다양한 환경에서 사용할 수 있으며 모든 규모의 팀(페이스북, 깃허브, 핀터레스트, 트위터, 페이팔 등)에서 사용하고 있습니다.

https://graphql.org/users

**_GraphQL Spec & Docs_**

https://github.com/graphql/graphql-spec

**_GraphQL이 해결하는 문제점_**

1. Overfetching

필요한 데이터보다 더 많은 데이터를 fetch하는 것을 말합니다. GraphQL을 사용하면 API에 GraphQL 쿼리를 보내고 필요한 것만 정확히 얻을 수 있습니다. GraphQL 쿼리는 항상 예측 가능한 결과를 반환합니다.

2. Underfetching

필요한 데이터보다 적은 데이터를 fetch하는 것을 말합니다. 일반적인 REST API는 여러 URL에서 로딩해야 하지만 GraphQL API는 앱에 필요한 모든 데이터를 단일 request로 가져옵니다. GraphQL을 사용하는 앱은 느린 모바일 네트워크 연결에서도 빠를 수 있습니다.

## Your GraphQL API

**_Apollo Server소개_**

- graphQL 구축을 위한 플랫폼. [communication layer]
- front <-> backend 사이 흐름을 관리한다.

Apollo 서버는 Apollo 클라이언트를 포함한 모든 GraphQL 클라이언트와 호환되는 사양 준수(spec-compliant)의 오픈 소스 GraphQL 서버입니다. 모든 소스의 데이터를 사용할 수 있는 자체 문서화 가능한 production-ready GraphQL API를 구축하는 가장 좋은 방법입니다.

https://www.apollographql.com/docs/apollo-server/

**_Apollo Server시작하기_**

npm install apollo-server graphql

npm install nodemon -D

const server = new ApolloServer({

typeDefs,

resolvers,

csrfPrevention: true,

});

server.listen().then(({ url }) => {

console.log(`🚀 Server ready at ${url}`);

});

**_Define your GraphQL schema (GraphQL 스키마 정의 : schema | modules | typeDefs)_**

모든 GraphQL 서버(Apollo Server 포함)는 스키마를 사용하여 클라이언트가 쿼리할 수 있는 데이터 구조를 정의합니다. (스키마는 type definitions의 모음입니다.)

```

// "shape" of the data

// graphql에게 모든 data의 shape에 대해 설명

// Query root type must be provided. = GET Url

const typeDefs = gql`

type Book {

title: String

author: String

}

type Query {

books: [Book]

}

`;

```

https://www.apollographql.com/docs/apollo-server/getting-started/#step-3-define-your-graphql-schema

**_Scalar and Root Types_**
GraphQL 객체 타입에는 이름과 필드가 있지만 이 필드는 더욱 구체적인 데이터로 해석되어야 합니다. 그 때 스칼라 타입을 사용할 수 있습니다. GraphQL은 기본 스칼라 타입 세트와 함께 제공됩니다.

https://graphql.org/learn/schema/#scalar-types

**_Mutations_**

GraphQL에 대한 대부분은 데이터 fetching이지만, 서버 측 데이터를 수정할 수 있는 방법이 필요합니다. 서버 측 데이터를 수정하는 모든 작업은 mutation을 통해 보내야 한다는 규칙을 설정하는 것이 유용합니다.

```

// SDL

type Review {

start: Int

commentray: String

}



type Mutation {

createReview(episode: String, review: String): Review

}



// apollo server

mutation CreateReview($ep: Episode!, $review: ReviewInput!) {

createReview(episode: $ep, review: $review) {

stars

commentary

}

}

```

https://graphql.org/learn/queries/#mutations

**_Lists and Non-Null_**

아래 Character에 name에 String 타입을 사용하고 느낌표 !를 추가하여 Non-Null로 표시합니다. Non-Null로 표시하게 되면 서버가 항상 이 필드에 대해 null이 아닌 값을 반환할 것으로 예상합니다. 그래서 null 값을 얻게 되면 클라이언트에게 문제가 있음을 알립니다.

```

type Character {

name: String!

appearsIn: [Episode]!

}

```

https://graphql.org/learn/schema/#lists-and-non-null

**_Recap_**

- 아폴로 서버를 실행하기 위해서는 반드시 최소 1개의 Query가 필요합니다.

- type Query는 가장 기본적인 타입입니다.

- Query에 넣는 필드들은 request할 수 있는 것들이 됩니다.

- GET 이외의 데이터베이스를 변경하는 메소드는 Mutation을 사용합니다.

- !를 쓰지 않으면 해당 필드는 nullable field가 됩니다. (null값을 가질 수 있는 필드)

**_Resolvers_**

resolver 함수는 데이터베이스에 액세스한 다음 데이터를 반환합니다. 맨 앞에 argument는 root여야 한다. args는 GraphQL 쿼리의 필드에 제공된 인수입니다. 상태에 따라 Query / Mutation으로 나뉜다.

[graphQL 명세] user가 arguments를 보낼 때 항상 resolver function의 두 번째 인수가 된다.

```

Query: {

human(root, args, context, info) {

return context.db.loadHumanByID(args.id).then(

userData => new Human(userData)

)

}

}

```

https://graphql.org/learn/execution/#root-fields-resolvers

**_Type Resolver Arguments_**

Resolver 함수에는 parent(root or source), args, context, info 의 네 가지 인수가 순서대로 전달됩니다.

```

User: {

fullName: (parent, args, context, info) => {

return "hello";

},

},

```

https://www.apollographql.com/docs/apollo-server/data/resolvers/#resolver-arguments

**_Docstring_**

type, field 또는 argument에 대한 설명을 제공합니다. 독스트링은 Apollo Studio Explorer를 포함한 많은 일반적인 GraphQL 도구에 자동으로 나타납니다.

```

"""

User에 대해 설명

"""

type User {

"""

firstName에 대해 설명

"""

firstName: String!



age(

"""

반드시 숫자여야 합니다.

"""

arg: Int

)

}

```

https://www.apollographql.com/docs/resources/graphql-glossary/#docstring

**Altair GraphQL Client**

Altair GraphQL Client는 GraphQL queries 및 implementations을 디버그할 때 사용할 수 있습니다. (추가적으로 파일 업로드 기능을 제공)

https://altair.sirmuel.design/

**Migrating from REST API to GraphQL API**

**node-fetch**

node-fetch를 이용해서 Fetch API를 Node.js에서 사용할 수 있습니다.

npm i node-fetch

https://www.npmjs.com/package/node-fetch

Json 응답값에 대해 graphql 타입으로 변환할 수 있습니다.

https://transform.tools/json-to-graphql
