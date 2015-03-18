#!/bin/bash
./fortune_cookie > file.txt
enscript -B -f Courier16 -p file.ps file.txt
ps2pdf file.ps file.pdf
convert -trim -resize 200% file.pdf file.png   #too lazy to pipe everything
link=$(./imgurb.sh file.png)
echo $link
rm -f file*
channelname=$1
user=$2
curl -X POST --data-urlencode 'payload={"channel": '"\"#$channelname\""', "username": "Your Bot name here", "text": '"\" $user's fortune: $link\""', "icon_emoji": "Your Icon emoji here"}'  {Insert your hooks.slack.com link here}
