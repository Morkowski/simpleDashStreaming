#!/usr/bin/env bash

ffmpeg \
    -f x11grab \
    -r 30 \
    -video_size 1024x768 \
    -i $DISPLAY \
    -codec:v libx264 \
    -profile:v baseline \
    -level 4 \
    -pix_fmt yuv420p \
    -preset veryfast \
    -codec:a aac \
    -f dash \
    -window_size 5 \
    -remove_at_exit 1 \
    public/media/live.mpd