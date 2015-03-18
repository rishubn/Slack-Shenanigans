#!/bin/bash
8ball > file.txt
enscript -B -f Courier16 -p file.ps file.txt
ps2pdf file.ps file.pdf
convert -trim -resize 200% file.pdf file.png
link=$(./imgurb.sh file.png)
echo $link
channelname=$1
user=$2
question=$3
curl -X POST --data-urlencode 'payload={"channel": '"\"#$channelname\""', "username": "Magic 8ball", "text": '"\" $user asked $question: $link\""', "icon_emoji": ":your emoji here:"}' {your slack url here

