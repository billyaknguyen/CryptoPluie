<div align="center">
<img align="center" src="https://media.discordapp.net/attachments/899929905318486046/1094149965976174672/CryptoPluie_Billy_Nguyen_Logo.png?width=871&height=871" alt="crypto website" height="120" width= "120">
  <h1>CryptoPluie - Cryptocurrency Exchange Platform Simulator</h1>
  <p>
    A cryptocurrency simulator website that provides users with a risk-free environment to explore and learn about cryptocurrencies.
    <br />
    <br />
    <a href="https://www.youtube.com/watch?v=GwAczlzMtE8">View Demo</a>
    ·
    <a href="https://cryptopluie.onrender.com/">Live Website</a>
    ·
    <a href="https://github.com/billyaknguyen/CryptoPluie/issues">Report Bug</a>
  </p>
</div>

**Note : Please be aware that the initial loading of the backend may take approximately one minute if you are the first user to access it.

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#tech-stack">Tech Stack</a></li>
        <li><a href="#features">Features</a></li>
      </ul>
    </li>
    <li>
      <a href="#installation">Installation</a>
      <ul>
        <li><a href="#run-locally">Run Locally</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#acknowledgements">Acknowledgments</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


## About The Project

<img src="https://cdn.discordapp.com/attachments/899929905318486046/1111185751032463502/1.gif"/>

CryptoPluie is a cryptocurrency exchange platform simulator that allows users to explore and experience the dynamic world of cryptocurrencies in a risk-free environment. The platform integrates with the CoinGecko API to retrieve real-time market data for various cryptocurrencies, providing users with up-to-date information to make informed decisions. With CryptoPluie, users can track their cryptocurrency holdings, simulate buying and selling coins, suggest coins by writing a custom message to other users, and compete on a leaderboard based on their net worth.

## Tech Stack

* Frontend: HTML, CSS, JavaScript
* Backend: Node.js, Express.js, MongoDB
* APIs: CoinGecko
* Frameworks/Libraries: React.js, Rechart, TablerIcons, React-Toastify, Styled-components
* Authentication: Auth0


## Features

- **Real-time Market Data**: Integrated with the CoinGecko API to fetch live market data for various cryptocurrencies, providing users with up-to-date information on prices, market caps, and more.

<img src= "https://cdn.discordapp.com/attachments/899929905318486046/1111190843689291860/3.gif" alt= "picture"/>

-  **Authentication**: Secure user authentication and authorization are implemented using Auth0. Users can create accounts, log in securely, and access personalized features. This ensures the protection of user data and allows for a seamless user experience.

<img src= "https://cdn.discordapp.com/attachments/899929905318486046/1111193839269589014/6.gif" alt= "picture"/>

- **Buying and Selling**: Authenticated users can simulate buying and selling cryptocurrencies, allowing them to experience the process of investing in the market. They can specify the quantity and desired cryptocurrency to buy or sell, providing a hands-on experience in trading.

Buying
<img src= "https://cdn.discordapp.com/attachments/899929905318486046/1111192442251788319/7.gif" alt= "picture"/>

Selling
<img src= "https://cdn.discordapp.com/attachments/899929905318486046/1111194912772329523/9.gif" alt= "picture"/>

- **Portfolio Management**: Authenticated users can track their cryptocurrency holdings, view their balance, and monitor the performance of their portfolio. The portfolio holdings are updated in real-time, ensuring accurate and dynamic portfolio management.

<img src= "https://cdn.discordapp.com/attachments/899929905318486046/1111192548980035594/8.gif" alt= "picture"/>

- **Community Coin Suggestions**: Authenticated users can suggest new coins to other users, accompanied by custom messages. This feature encourages a collaborative and interactive community, allowing users to share their insights and investment ideas.

Suggest 
<img src= "https://cdn.discordapp.com/attachments/899929905318486046/1111193183800545360/11.gif" alt= "picture"/>

Suggestion Page
<img src ="https://cdn.discordapp.com/attachments/899929905318486046/1111193083007213588/12.gif" alt= "picture"/>

- **Search and Pagination**: Users can easily search for specific cryptocurrencies using a search bar and navigate through paginated results for enhanced user experience.

Pagination
<img src= "https://cdn.discordapp.com/attachments/899929905318486046/1111190477539135569/2.gif" alt= "picture"/>
Search
<img src= "https://cdn.discordapp.com/attachments/899929905318486046/1111191678578069535/4.gif" alt= "picture"/>

- **Charts**: Interactive charts are available to visualize historical price trends and analyze the performance of different cryptocurrencies over time.

- **LeaderBoard**: Users are ranked based on their net worth, calculated from the total value of their cryptocurrency holdings. The leaderboard feature adds a competitive element and allows users to compare their performance with others in the CryptoPluie community.

<img src= "https://cdn.discordapp.com/attachments/899929905318486046/1111192183568089088/14.gif" alt= "picture"/>



## Installation

### Run Locally

Clone the project

```bash
  git clone https://github.com/billyaknguyen/CryptoPluie.git
```
Go to server directory
```bash
  cd server
```
Go to client directory
```bash
  cd client
```
Install dependencies for both client and server

```bash
  npm install
```

Create  3 .env files with following variables inside root of client

.env
```bash
VITE_AUTH0_DOMAIN = [your AUTH0 DOMAIN key]
VITE_AUTH0_CLIENT_ID = [your AUTH0 CLIENT ID key]
```
.env.development

```bash
VITE_API = http://localhost:3000
```
.env.production

```bash
VITE_API= https://cryptopluie-api.onrender.com
```

Create 1 .env file with following variables inside root of server

```bash
MONGO_URI = [your MONGODB key]
```

Start server and client

```bash
npm start
```

## Roadmap
-	A watch list page
-	Trending page: The user can see all the trending cryptocurrencies
-	History of all transactions displayed in portfolio page
-	Profile avatar (with Cloudinary)
-	Public comments on stocks
-	Dark Mode


## Acknowledgements

- CoinGecko for providing the cryptocurrency market data API.
- Auth0 for enabling secure authentication and authorization.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries or suggestions, feel free to reach out to me at my <a href="https://linkedin.com/in/billyaknguyen" target="blank">Linkedin</a> or email : billyaknguyen@gmail.com
