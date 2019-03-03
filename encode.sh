#!/usr/bin/env bash

ffmpeg \
    -f x11grab \
    -r 30 \
    -i $DISPLAY \
    -map 0 \
    -map 0 \
    -b:v:0 1000k \
    -b:v:1 256k \
    -s:1 400x300 \
    -codec:v libx264 \
    -profile:v baseline \
    -level 4 \
    -pix_fmt yuv420p \
    -preset veryfast \
    -f dash \
    -window_size 5 \
    -remove_at_exit 1 \
    -adaptation_sets "id=0,streams=0 id=1,streams=1" \
    public/media/live.mpd