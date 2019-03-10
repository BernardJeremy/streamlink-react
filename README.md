# streamlink-react
Retrieve direct video URL from twitch stream/VOD links

## Goals
- Access final media URL of Twitch videos to play them in VLC. 

## Features
- Access direct media link for any videos, based on quality (audio_only included).

## Environnements configuration
- `REACT_APP_TWITCH_CLIENT_ID` : Twitch client_id, needed to use Twitch API.
- `REACT_APP_DECODER_API_HOST` : Host of API decoder, needed to retrieve media URL (see [zerafix-api](https://github.com/BernardJeremy/zeraflix-api) for example). 
