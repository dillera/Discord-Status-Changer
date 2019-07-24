# Discord Status Changer
A discord selfbot coded with [discord.js](https://github.com/discordjs/discord.js/) that allows you to change your status on Discord.

# Set-up
To set this bot up you will need to install [node.js](https://nodejs.org/en/download/).
After you install node.js head to the folder with the bot and Shift + Right Click in the folder and choose Open PowerShell window here.
In the terminal type `npm i discord.js`.

Next, open index.js with any editor of your choice and enter your token where it says:
```javascript
const token = 'token here';
```
If you do not know how to get your token follow these steps:
1. Ctrl + Shift + i in discord.
2. Navigate to the network tab at the top.
3. In the filter type `api/v6`
4. Hit F5 (discord will restart)
5. Click headers
6. Scroll down and you will see authorization. The numbers and letters after that is your token.

# Usage

WARNING: Selfbots are against Discord's TOS and can get you banned! (Not my fault if you get banned)

To run the bot open PowerShell in the folder and type `node index.js`.

You can change the prefix where it says:
```javascript
const prefix = '!';
```
in the index.js file.

The three commands are as follows:

Command | Action | Example
--- | --- | ---
playing | Set your status to playing and the message after. | `!playing fortnite`
watching | Set your status to watching and the message after. | `!watching you`
listening | Set your status to listening and the message after. | `!listening you`
