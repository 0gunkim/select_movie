# 무비셀렉터
애정하는 영화 리뷰 및 평점 등록사이트<br />
- **`Team name` :** 무비셀렉터 ( 영화 평점사이트 제작 )
- **`Project duration` :** 2023.03.13 - 2023.04.14
- **`Team members` :** 주양아(팀장) , 이인국 , 구성미 , 신현중
<br/>


![https://user-images.githubusercontent.com/122377401/232440342-4ff41ad6-b3ca-439c-8c71-35e27ddc322c.png](https://user-images.githubusercontent.com/122377401/232440342-4ff41ad6-b3ca-439c-8c71-35e27ddc322c.png)
배포링크 : http://test123bukit.s3-website.ap-northeast-2.amazonaws.com/<br /><br />


## 핵심 기능
- 페이지전환없이 미리보기가 가능합니다
- 좋아요 및 북마크 기능을 사용해 자기만의 리스트를 만들 수 있습니다
- 다른 사용자가 남긴 호감도 및 평점으로 영화에 대한 평판을 확인할 수 있습니다
- 마이페이지의 작성한 리뷰 기능을 통해 자유롭게 리뷰를 관리할 수 있습니다

- **`Service overview`:** [서비스 메뉴얼]( 노션 . pdf 파일)
- **`Tech presentation`:** [기술발표영상]( 발표 : youtube 링크)
- **`Functional Requirement`:** [사용자 요구사항 정의서]( 구글 시트 링크 )
- **`API Specification`:** [API 명세서]( 노션 . pdf 파일)
<br/>

### **`Team members`**



|주양아<br>(FE, Team lead)|이인국<br>(FE)|구성미<br>(FE)|신현중<br>(FE)|                      
| :--: | :--: | :--: | :--: |
| <img src="https://cdn.discordapp.com/attachments/1090912771551539210/1090913577608679474/image.png" height="100" width="100"> | <img src="https://cdn.discordapp.com/attachments/793349137596284930/1097386861791559710/ae34bba849941470.jpeg?width=800&height=785" height="100" width="100"> | <img src="https://media.discordapp.net/attachments/1090912771551539210/1090912798348943460/image.png?width=870&height=842" height="100" width="100"> | <img src="https://media.discordapp.net/attachments/1090912771551539210/1090913004033421372/image.png?width=642&height=595" height="100" width="100"> | <img src="https://media.discordapp.net/attachments/1090912771551539210/1090912919249752124/image.png?width=817&height=810" height="100" width="100"> |
| <p align="left">**Pages**<br/>- 상세페이지<br/>- 검색페이지 <br /><br/>**Features**<br/>- 댓글,답글 CRUD<br/>- 좋아요, 북마크 CRUD <br/> - 공감, 비공감 CRUD<br/>- 영화 검색</p> | <p align="left">**Pages**<br/>- 메인 홈페이지<br/>- 프리뷰 페이지<br/><br/>**Features**<br/>- framer-motion 애니메이션 <br/> - react-slick 구현<br/> </p> | <p align="left">**Pages**<br/>- 홈페이지<br/>- 마이페이지<br/>- 유저페이지<br/><br/>**Features**<br/>- react-slick 구현<br/>- 리뷰 조회,수정,삭제 <br/>- 사용자 조회,수정<br/>- 페이지네이션 </p> | <p align="left">**Pages**<br/>- 회원 로그인/회원가입<br/>- 관리자 로그인/회원가입<br/>- BackOffice 페이지<br /><br/>**Features**<br/>- Sign in/up 기능<br/>- 영화,리뷰,유저 수정, 삭제<br/>- 페이지네이션<br />- modal 기능</p> |



<br/>

## <span style=""> ⚙️ **Tools** </span>

### 🖥 **Communication** </span>

Notion|Github|Discord|Figma|
| :--: | :--: | :--: | :--: |
| <img alt="Notion logo" src="https://www.notion.so/cdn-cgi/image/format=auto,width=640,quality=100/front-static/shared/icons/notion-app-icon-3d.png" height="65" width="65">| <img alt="github logo" src="https://techstack-generator.vercel.app/github-icon.svg" width="65" height="65">| <img alt="Discord logo" src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/62595384e89d1d54d704ece7_3437c10597c1526c3dbd98c737c2bcae.svg" height="65" width="65"> | <img src="https://i.pinimg.com/originals/a5/58/b4/a558b426cb8973523f37bbed94cf0f09.png" alt="icon" width="65" height="65" /> | 

### Front-End

React|Scss|JavaScript|esLint|Prettier|
|  :--: | :--: | :--: | :--: | :--: |
|  <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/sass-icon.svg" alt="icon" width="65" height="65" />|  <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/eslint-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/prettier-icon.svg" alt="icon" width="65" height="65" /> |


### Other

AWS|
| :--: |
| <img src="https://techstack-generator.vercel.app/aws-icon.svg" alt="icon" width="65" height="65" /> |

<br/>


## Git Branch

`main` : 서비스 운영 브랜치 
`dev` : 메인 브랜치 배포전 릴리즈 브랜치  
`feature` : 기능 브랜치 배포전 릴리즈 브랜치 
`pages` : 기능 브랜치 배포전 릴리즈 브랜치  




<br/>

## 구현 기능 ( Front-end )


| |페이지 및 기능 구현| 설명 | 담당 개발자 |
| :--: | :--: | :--: | :--: |
|Main Page|![Main Page](https://user-images.githubusercontent.com/122377401/232974475-da31f4ba-88d7-426d-8052-7e2790befba7.gif)| - react-slick 캐러셀 구현 <br/>마우스 오버 시 평점확인 <br/>클릭 시 해당영화 프리뷰 | **FRONT-END** </br> `이인국`,`구성미` </br>|
|Preview|![Preview](https://user-images.githubusercontent.com/122377401/232979198-0e4eddbb-8ad9-4a4e-ae9b-922a22f34656.gif)| </br> - 마우스 오버 시 평점확인 </br> - 클릭시 해당영화 프리뷰 | **FRONT-END** </br> `이인국` </br> |
|Detail Page|![Detail Page](https://user-images.githubusercontent.com/122377401/232982321-8ef0b3b5-24f0-4b96-9292-de65df648279.gif)| - 댓글,답글 기능 구현 </br> - 좋아요 , 북마크 구현 </br> - 공감 , 비공감 구현 | **FRONT-END** </br> `주양아` |
|Detail page2 |![Detail page2](https://user-images.githubusercontent.com/122377401/233066445-fdb05d38-2f57-44e4-92f1-7bce6721a4d4.gif)| - 댓글,답글 기능 구현 <br/> - 호감도 체크 구현 <br/>- 댓글 정렬 기능  | **FRONT-END** </br> `주양아` </br> |
|My Page<br/>| ![My Page](https://user-images.githubusercontent.com/122377401/233066451-9f1ae44d-0de6-4d7f-90a4-77066ff62cc2.gif)| - 카테고리별 캐러셀 구현 <br /> - 호버시 좋아요 기능 구현 |  **FRONT-END** </br> `구성미` </br> |
| User Page |![UserPage](https://user-images.githubusercontent.com/122377401/233066451-9f1ae44d-0de6-4d7f-90a4-77066ff62cc2.gif)| - 타 사용자 리뷰 및 댓글 확인 기능 |**FRONT-END** </br>`구성미` </br>|
|Backoffice Page|![Backoffice Page](https://user-images.githubusercontent.com/122377401/233066447-3f488a89-ebf8-4365-89ae-f4e715eaa5d5.gif)| -  영화,리뷰,유저 수정, 삭제 구현 </br> - 페이지네이션 구현  </br> - modal 기능 구현 | **FRONT-END** </br> `신현중`|
| Login Page |![Login Page](https://user-images.githubusercontent.com/122377401/233066447-3f488a89-ebf8-4365-89ae-f4e715eaa5d5.gif)| - Sign in/up 기능| **FRONT-END** </br> `신현중` |
<br/><br/>
<br/>

## 👩🏻‍🎨 Wireframe


![wireframe](https://user-images.githubusercontent.com/113220012/228159810-aaab3fbf-ad39-47e8-b505-f5b3fa5ea0a8.png)

<br/>