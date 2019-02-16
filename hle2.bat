ffmpeg ^
-f gdigrab ^
-r 30 ^
-video_size 1024x768 ^
-i desktop ^
-b:v:0 1000k ^
-b:v:1 256k ^
-map 0:v ^
-map 0:v ^
-f hls ^
-var_stream_map "v:0 v:1" ^
-master_pl_name master.m3u8 ^
public/media/out_%%v.m3u8