# extremum web-app starter

Create a React app with prepared dev configuration and ready extremum tools.

>This stater was created as a part of the full dev client application on extremum-cli. Check [our doc](https://test.extremum.help/ru/development/hello-world)
---
## Quick Overview

__For run your app follow next steps:__

>1. Move to app folder
>```shell
>$ cd ui
>```
>2. Install all dependencies 
>```shell
>$ npm i 
>```
>3. Run your dev serve
>```shell
>$ npm run dev
>```
>4. Having followed the previous steps, at the shell you can see that your app has been started
>```shell
><i> [webpack-dev-server] Project is running at:
><i> [webpack-dev-server] Loopback: http://localhost:8080/
><i> [webpack-dev-server] On Your Network (IPv4): http://192.168.31.136:8080/
><i> [webpack-dev-server] On Your Network (IPv6): http://[fe80::1]:8080/
> ```

## Project structure overview
There is initial project structure which is oriented on customized and clean development
```
ui
├── README.md
├── webpack.config.js 
├── tsconfig.json
├── package.json
├── .gitignore
├── static
│   └── index.html
└── src
    ├── app  //contains main application architecture context
    │   ├── App.tsx
    │   └── routes
    │       └── AppRouter.tsx
    │
    ├── extremum  //contains all tools related with extremum
    │    ├── keycloak.ts
    │    └── sdk
    │        ├── hooks   
    │        └── sdk.ts
    │
    ├── pages
    │    └── login 
    │        └── Login.tsx //example of keylock login    
    │
    ├── setupTests.ts
    ├── index.tsx
    └── config.json
```
___
 ### extremum module
1. __SDK.__ For simple using extremum sdk, call `useSdk()` hook. 
It returns client who allows us to use our API *(for additional information go to [exremum-sdk doc](https://www.npmjs.com/package/extremum-sdk))*.
```ts
    const [models,setModels] = useState<EntityModel[]>()

    const client = useSDK()


    useEffect(()=>{
        client.management.storage.models.list().then(
            res => {
                setModels(res)
            }
        ).catch(er =>console.log(er))
    },[])
```

  
## Edit app config

If you want to customize building app configuration, go to `webpack.config.js`.
It works together with `tsconfig.json` and `.babelrc.js`

