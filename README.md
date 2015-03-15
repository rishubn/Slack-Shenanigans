# Slack Shenanigans
Scripts designed to annoy your coworkers and abuse company resources

## Fortune_Cookie

Ask Slack for your fortune and share with your coworkers & friends! 

### Required Packages 

```
fortune
cowsay
express.js
enscript
ps2pdf
imagemagik tools
```
### How it works
Uses the famous fortune and cowsay combination and uploads the output to imgur as a PNG image. Making a PDF of the output and uploading it is much saner and easier than trying to format ASCII art into JSON

### Install

* Change the IP & Port numbers inside the `app.js` 
* Change the bot name and the icon inside the `curl` command in `script.sh`, read Slack's API for more customization * options
* Paste your unique Slack webhook URL at the end of the `curl` command
* Once you've made the necessary changes, deploy the app on to your server and set up Slack to make a POST request to your server. The easiest way to do this is through a slash command integration

Screenshots: 

![Image](http://i.imgur.com/jn7ZJAl.png)
