ffmpeg ^
-f gdigrab ^
-r 30 ^
-video_size 1024x768 ^
-i desktop ^
-c:v libx264 ^
-s 1024x768 ^
-r 30 ^
-b:v 256k ^
-profile:v high444 ^
-preset veryfast ^
-hls_list_size 10 ^
-master_pl_name master.m3u8 ^
public/media/live1.m3u8

REM -c:v libx264 -x264opts keyint=120:no-scenecut -s 1024x768 -r 60 -b:v 64k -profile:v main -preset veryfast -c:a libfdk_aac -sws_flags bilinear -hls_list_size 10 public/media/live2.m3u8
