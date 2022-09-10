<div align="center">
  <img src="https://github.com/RahulBansal123/NIFTY/blob/main/public/favicon/android-chrome-192x192.png" alt="Logo" width="100">
  
  <h3 align="center">NIFTY</h3>

  <p align="center">
Using the graph protocol and their ethereum addresses, NIFTY displays the proof of knowledge NFTs hosted by LearnWeb3 and Buildspace on the polygon mainnet.  </p>
    <br />
    <a href="https://nifty-eta.vercel.app/">View Demo</a>
  </p>
</div>

<b>Assigned on:</b> Sep 7, 2022 1:30AM IST <br/>
<b>Finished on:</b> Sep 11, 2022
  
## How it's Made

1. Graph protocol is used to query Polygon mainnet to list the NFTs owned by an address. Graph used: https://api.thegraph.com/subgraphs/name/learnweb3dao/profile-subgraphs
2. TypeScript is used for static typing, strict null checking and to build more robust application.
3. Cypress is used to write the End-to-End testing scripts to test the NextJS application locally.
4. Sentry is used for application monitoring and to keep track of the client side errors in the production environment.
5. The landing page is animated with framer motion to make it more user-friendly.
6. NextJS is utilised since it has a server side rendering feature and is SEO-friendly.


## User Flow
1. User opens the website
2. User either connects their Ethereum wallet or search for a user's address
3. Website loads all LearnWeb3 and Buildspace NFTs owned by that address
4. Website displays all the details and images of those NFTs in a modal
5. User share the profile with other users


## Alternatives
1. <b>The Graph vs Querying blockchain:</b> In contrast to manually searching the blockchain, which requires a lot of time and resources and is not user-friendly, the Graph is faster, more reliable, and easier to query and administer beyond its ability to query up to 1000 items per collection.
2. <b>URQL vs Apollo client: </b> URQL is light in weight(~5x lighter than Apollo Client) and has flexible cache mechanism. In building NIFTY, 'cache-and-network' policy is used which allows to return cached results but also always sends an API request, which is perfect for displaying data quickly while keeping it up-to-date.


## Running the cypress tests locally

```
npm run cypress:run
```
![Screenshot 2022-09-11 at 12 37 17 AM](https://user-images.githubusercontent.com/64414414/189498231-fc4b6796-49bb-4a4b-b7f2-6bc0fb564634.png)

