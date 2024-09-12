# next
next

## 20240902 
- 설치

```
npm install next@14.2.4 react@18.3.1 react-dom@18.3.1
```

## 문서
- next 란 파일시스템 라우팅 : 파일 순서대로 라우팅 되는거
- App Router 추천
  - app/ 폴더 아래  layout.tsx and page.tsx  파일추가 >> 루트 페이지( /) 방문시 만나는 페이지 생성해줌

- /public 폴더는 스테틱 에셋들 제공해줌 (이미지, 폰트 등등..)


### 프로젝트 구조
- https://nextjs.org/docs/getting-started/project-structure
  - app : App Router
  - pages : Pages Router
  - public : Static assets to be served
  - src : Optional application source folder

### 탑레벨 파일
- 탑레벨 파일들 종류 의존성 관리, 미들웨어 실행, 등
```
next.config.js	Configuration file for Next.js
package.json	Project dependencies and scripts
instrumentation.ts	OpenTelemetry and Instrumentation file
middleware.ts	Next.js request middleware
.env	Environment variables
.env.local	Local environment variables
.env.production	Production environment variables
.env.development	Development environment variables
.eslintrc.json	Configuration file for ESLint
.gitignore	Git files and folders to ignore
next-env.d.ts	TypeScript declaration file for Next.js
tsconfig.json	Configuration file for TypeScript
jsconfig.json	Configuration file for JavaScript
```

### App 라우팅 컨벤션

### [Routing Files](https://nextjs.org/docs/getting-started/project-structure#routing-files)

### 연결 및 탐색 
- 경로탐색 4가지 방법
  - <Links>
  - UseRouter
  - redirect
  - 네이티브 HistoryAPI
  - 



### next js
- 파일기반 라우팅
  - page.tsx : 
  - layout.tsx : metadate, RootLayout : 왜 필요한지 알아보기, 없으면 강제로 만들어줌
  - 


### 참고 

|  |  |  |
| --- | --- | --- |
| [`layout`](https://nextjs.org/docs/app/api-reference/file-conventions/layout) | `.js` `.jsx` `.tsx` | Layout |
| [`page`](https://nextjs.org/docs/app/api-reference/file-conventions/page) | `.js` `.jsx` `.tsx` | Page |
| [`loading`](https://nextjs.org/docs/app/api-reference/file-conventions/loading) | `.js` `.jsx` `.tsx` | Loading UI |
| [`not-found`](https://nextjs.org/docs/app/api-reference/file-conventions/not-found) | `.js` `.jsx` `.tsx` | Not found UI |
| [`error`](https://nextjs.org/docs/app/api-reference/file-conventions/error) | `.js` `.jsx` `.tsx` | Error UI |
| [`global-error`](https://nextjs.org/docs/app/api-reference/file-conventions/error#global-errorjs) | `.js` `.jsx` `.tsx` | Global error UI |
| [`route`](https://nextjs.org/docs/app/api-reference/file-conventions/route) | `.js` `.ts` | API endpoint |
| [`template`](https://nextjs.org/docs/app/api-reference/file-conventions/template) | `.js` `.jsx` `.tsx` | Re-rendered layout |
| [`default`](https://nextjs.org/docs/app/api-reference/file-conventions/default) | `.js` `.jsx` `.tsx` | Parallel route fallback page |

### [Nested Routes](https://nextjs.org/docs/getting-started/project-structure#nested-routes)

### 

### 

|  |  |
| --- | --- |
| [`folder`](https://nextjs.org/docs/app/building-your-application/routing#route-segments) | Route segment |
| [`folder/folder`](https://nextjs.org/docs/app/building-your-application/routing#nested-routes) | Nested route segment |

### [Dynamic Routes](https://nextjs.org/docs/getting-started/project-structure#dynamic-routes)

### 

### 

|  |  |
| --- | --- |
| [`[folder]`](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#convention) | Dynamic route segment |
| [`[...folder]`](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#catch-all-segments) | Catch-all route segment |
| [`[[...folder]]`](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#optional-catch-all-segments) | Optional catch-all route segment |

### [Route Groups and Private Folders](https://nextjs.org/docs/getting-started/project-structure#route-groups-and-private-folders)

### 

### 

|  |  |
| --- | --- |
| [`(folder)`](https://nextjs.org/docs/app/building-your-application/routing/route-groups#convention) | Group routes without affecting routing |
| [`_folder`](https://nextjs.org/docs/app/building-your-application/routing/colocation#private-folders) | Opt folder and all child segments out of routing |

### [Parallel and Intercepted Routes](https://nextjs.org/docs/getting-started/project-structure#parallel-and-intercepted-routes)

### 

### 

|  |  |
| --- | --- |
| [`@folder`](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#slots) | Named slot |
| [`(.)folder`](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes#convention) | Intercept same level |
| [`(..)folder`](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes#convention) | Intercept one level above |
| [`(..)(..)folder`](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes#convention) | Intercept two levels above |
| [`(...)folder`](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes#convention) | Intercept from root |

### [Metadata File Conventions](https://nextjs.org/docs/getting-started/project-structure#metadata-file-conventions)

### 

### 

### [App Icons](https://nextjs.org/docs/getting-started/project-structure#app-icons)

### 

### 

|  |  |  |
| --- | --- | --- |
| [`favicon`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#favicon) | `.ico` | Favicon file |
| [`icon`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#icon) | `.ico` `.jpg` `.jpeg` `.png` `.svg` | App Icon file |
| [`icon`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#generate-icons-using-code-js-ts-tsx) | `.js` `.ts` `.tsx` | Generated App Icon |
| [`apple-icon`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#apple-icon) | `.jpg` `.jpeg`, `.png` | Apple App Icon file |
| [`apple-icon`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#generate-icons-using-code-js-ts-tsx) | `.js` `.ts` `.tsx` | Generated Apple App Icon |