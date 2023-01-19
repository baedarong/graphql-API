## Introduction

***GraphQL***
API를 위한 쿼리 언어  
GraphQL은 클라이언트가 필요한 것을 정확하게 요청할 수 있는 기능을 제공하며, 시간이 지남에 따라 API를 더 쉽게 발전시키고 강력한 개발자 도구를 활성화합니다.  
https://graphql.org/  
  
***Graphile***
PostgreSQL를 위한 확장 가능한 고성능 자동 GraphQL API  
https://www.graphile.org/

***요구 사항***  
브라우저  
VSCode  
NodeJS 16버전 이상


## Before GraphQL

***API (Application Programming Interface)***  
API는 컴퓨터나 컴퓨터 프로그램 사이의 연결이다. 즉, 프로그램들이 서로 소통하는 방법이다.  
주로 프로그래밍할 때 사용하고, 어플리케이션과 상호작용할 때 사용한다.  
  
***인터페이스***  
무엇인가와(TV) 무언가를(리모컨) 이용해서 상호작용하는 방식이다.  
리모컨을 이용해서 TV를 컨트롤하고, TV와 상호작용할 수 있는 것이다.

ex1) REST API는 특정 URL로 요청을 통해 이루어진다.  
ex2) Twitter API  
https://developer.twitter.com/en/docs/api-reference-index

***HTTP 요청 메서드***  
HTTP는 요청 메서드를 정의하여, 주어진 리소스에 수행하길 원하는 행동을 나타냅니다. 간혹 요청 메서드를 "HTTP 동사"라고 부르기도 합니다.  
https://developer.mozilla.org/ko/docs/Web/HTTP/Methods  
  
***자주 사용하는 HTTP 요청 메서드들***  
GET: GET 메서드는 오직 데이터를 받기만 합니다. (읽기전용)  
POST: POST 메서드는 리소스를 생성할 때 쓰입니다.  
PUT: PUT 메서드는 리소스를 업데이트할 때 쓰입니다.  
DELETE: DELETE 메서드는 특정 리소스를 삭제합니다.  
PATCH: PATCH 메서드는 리소스의 부분만을 수정하는 데 쓰입니다.  
등등..

***5분만에 제대로 설계하는 ⭐️ REST API***  
https://youtu.be/4DxHX95Lq2U  
  
1. URL에서는 가급적 동사를 사용하지 않는다.  
(동사보다는 HTTP request method를 이용)  
/seeMovies (GET) -> /movies (GET)  
/createMovie (POST) -> /movies (POST)  
  
2. 검색이나 필터를 처리할 때는 query parameter를 이용하는 것이 좋다.  
/getTopRatedMovies -> /movies?min_rating=9  
/findMoviesFromThisYear -> /movies?release_date=2022


## WELCOME TO GRAPHQL

***누가 GraphQL을 사용하고 있습니까?***  
Facebook의 모바일 앱은 2012년부터 GraphQL로 구동되었습니다. GraphQL spec은 2015년에 오픈 소스로 공개되었으며 현재 다양한 환경에서 사용할 수 있으며 모든 규모의 팀(페이스북, 깃허브, 핀터레스트, 트위터, 페이팔 등)에서 사용하고 있습니다.  
https://graphql.org/users  
  
***GraphQL Spec & Docs***  
https://github.com/graphql/graphql-spec

***GraphQL이 해결하는 문제점***  
1. Overfetching  
필요한 데이터보다 더 많은 데이터를 fetch하는 것을 말합니다.  
GraphQL을 사용하면 API에 GraphQL 쿼리를 보내고 필요한 것만 정확히 얻을 수 있습니다.  
GraphQL 쿼리는 항상 예측 가능한 결과를 반환합니다.
2. Underfetching  
필요한 데이터보다 적은 데이터를 fetch하는 것을 말합니다.  
일반적인 REST API는 여러 URL에서 로딩해야 하지만 GraphQL API는 앱에 필요한 모든 데이터를 단일 request로 가져옵니다. GraphQL을 사용하는 앱은 느린 모바일 네트워크 연결에서도 빠를 수 있습니다.

***Swapi-GraphQL***  
GraphiQL은 GraphQL 쿼리를 작성, 검증 및 테스트하기 위한 브라우저 내 도구입니다.  
https://graphql.org/swapi-graphql

***오버패칭, 언더패칭 경험해보기***

    {
      allFilms(last: 2) {
        totalCount
        films {
          title
          releaseDate
        }
      }
      allPeople(first:5) {
        totalCount
        people {
          name
          hairColor
          eyeColor
          birthYear
        }
      }
    }


## MAKE GRAPHQL API on my self

***Apollo Server소개***  
Apollo 서버는 Apollo 클라이언트를 포함한 모든 GraphQL 클라이언트와 호환되는 사양 준수(spec-compliant)의 오픈 소스 GraphQL 서버입니다. 모든 소스의 데이터를 사용할 수 있는 자체 문서화 가능한 production-ready GraphQL API를 구축하는 가장 좋은 방법입니다.  
https://www.apollographql.com/docs/apollo-server/  
  
***Apollo Server시작하기***  
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

***Define your GraphQL schema (GraphQL 스키마 정의 : schema | modules | typeDefs)***    
모든 GraphQL 서버(Apollo Server 포함)는 스키마를 사용하여 클라이언트가 쿼리할 수 있는 데이터 구조를 정의합니다.  (스키마는 type definitions의 모음입니다.)  
```  
// 예시  
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

***Scalar types***  
GraphQL 객체 타입에는 이름과 필드가 있지만 이 필드는 더욱 구체적인 데이터로 해석되어야 합니다. 그 때 스칼라 타입을 사용할 수 있습니다.  
  
GraphQL은 기본 스칼라 타입 세트와 함께 제공됩니다.  
ID: ID 스칼라 타입은 객체를 다시 가져오거나 캐시의 키로 자주 사용되는 고유 식별자를 나타냅니다.  
https://graphql.org/learn/schema/#scalar-types

***Mutations***  
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

***Lists and Non-Null***    
아래 Character에 name에 String 타입을 사용하고 느낌표 !를 추가하여 Non-Null로 표시합니다.  
Non-Null로 표시하게 되면 서버가 항상 이 필드에 대해 null이 아닌 값을 반환할 것으로 예상합니다. 그래서 null 값을 얻게 되면 클라이언트에게 문제가 있음을 알립니다.  
```  
type Character {  
	name: String!  
	appearsIn: [Episode]!  
}  
```  
https://graphql.org/learn/schema/#lists-and-non-null

***Recap***  
- 아폴로 서버를 실행하기 위해서는 반드시 최소 1개의 Query가 필요합니다.  
- type Query는 가장 기본적인 타입입니다.  
- Query에 넣는 필드들은 request할 수 있는 것들이 됩니다.  
- !를 쓰지 않으면 해당 필드는 nullable field가 됩니다. (null값을 가질 수 있는 필드)

***Resolvers***  
resolver 함수는 데이터베이스에 액세스한 다음 데이터를 반환합니다.  

    // args는 GraphQL 쿼리의 필드에 제공된 인수입니다.  
    Query: {  
    	human(obj, args, context, info) {  
    		return context.db.loadHumanByID(args.id).then(  
	    		userData => new Human(userData)  
	    	)  
    	}  
    }  

https://graphql.org/learn/execution/#root-fields-resolvers
