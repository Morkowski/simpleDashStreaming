# Simple DASH streaming

Kody źródłowe dla artykułu na temat własnego streamingu na żywo
https://geek.justjoin.it/jak-stworzyc-wlasny-live-streaming/

Dodatkowo w pliku encode_camera.bat znajduje się kod pokazujący przechwytywanie treści z mikrofonu oraz kamery internetowej.

Listę dostępnych urządzeń audio/video możesz uzyskać poprzez komendę
`ffmpeg -list_devices true -f dshow -i dummy`

![alt text](https://github.com/Morkowski/simpleDashStreamingCode/blob/master/devices.png "urządzenia")

