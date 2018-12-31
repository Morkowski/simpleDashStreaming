ffmpeg ^
    -f gdigrab ^
    -r 30 ^
    -video_size 1024x768 ^
    -i desktop ^
    -f dshow ^
    -i audio="Mikrofon (Realtek High Definition Audio)" ^
    -codec:v libx264 ^
    -profile:v baseline ^
    -level 4 ^
    -pix_fmt yuv420p ^
    -preset veryfast ^
    -codec:a aac ^
    -f dash ^
    -window_size 5 ^
    -remove_at_exit 1 ^
    public/media/live.mpd