var videoPlayer = document.getElementById("video-player")
var epCounter = document.querySelector(".ep-counter")

var shows = {
    demonSlayer: [
        "Demon Slayer / Kimetsu No Yaiba",
        {epNum: "S1 E1 ", src: "https://mega.nz/embed/bQgyEBKS#SyH3NP7KASXcQZduqwLRx-wFUDctkdHdK0i2z_We9yA"},
        {epNum: "S1 E2 ", src: "https://mega.nz/embed/XIJG3DCT#dkFXXGDOmkx0_XMpCrPv8bDABGJCzsdWPPHOjflNK5Q"},
        {epNum: "S1 E3 ", src: "https://mega.nz/embed/jNox3IYQ#RJDwf7pSr4Tp7vjZTThq7WbWneNiCt032HttE4oPBJU"},
        {epNum: "S1 E4 ", src: "https://mega.nz/embed/SIhkjZjQ#eOJTcYvvlNYUx2dIIZwPx1j-pHBKvc7Oj7mYU7uT4fg"},
        {epNum: "S1 E5 ", src: "https://mega.nz/embed/SM501JBD#nhtBrc55Y1IJciX7nFEuh3c1T0u9KeXyHFN-O_Qrx7A"},
        {epNum: "S1 E6 ", src: "https://mega.nz/embed/KYIVkZ7B#z5PBujnW-CBpt6sjCBItSnPLtBHFFocMA-3HKfqTF18"},
        {epNum: "S1 E7 ", src: "https://mega.nz/embed/yBoiESbB#ukKSm8dAFZEekbMlznceLE0qp-DjnYS-G8EumgXkvmU"},
        {epNum: "S1 E8 ", src: "https://mega.nz/embed/jUgRVRAK#5f1Qn6pnCT4Ao3iYUZ-VN2MUSN7XxC3p7_-wwBXk5J0"},
        {epNum: "S1 E9 ", src: "https://mega.nz/embed/OchzkKYI#L1jNc0FTdKzcrXwQ66yOIQFLUzT61zu2vl5VhqYCcec"},
        {epNum: "S1 E10", src: "https://mega.nz/embed/2QADUAjZ#VOlC5bCm8A5hCHAQPcXqMu4-4makzavCPi2hJ6nc1Jg"},
        {epNum: "S1 E11", src: "https://mega.nz/embed/vcQVkZwa#SC3vYsoCGIrysIhr631xxZGC0me5jwiPittxmKT2MN4"},
        {epNum: "S1 E12", src: "https://mega.nz/embed/Lc4DxZAC#p2JwjVLoY6CXkaKhwrHyZmNFzdOZoubLqCbJdge215Q"},
        {epNum: "S1 E13", src: "https://mega.nz/embed/3NhxlBLL#FoBFpv3fOMZiQUoDgesv76tbBsxVc47mF3JP0DC3S6g"},
        {epNum: "S1 E14", src: "https://mega.nz/embed/aEZzyCZa#WX7FA-b7qFAlXZeh8fl9WrbQndQkBXUu2m6Hve3KxWw"},
        {epNum: "S1 E15", src: "https://mega.nz/embed/LIRXHKwS#gdPAtSAROl8gkPpIC8e73k8b9pniyA1CwTeB4AQ9qhs"},
        {epNum: "S1 E16", src: "https://mega.nz/embed/6c4SwL6A#r_oK0FpGEl3OOnn_XmhSQTwROzsr-FV575C00TBpXDU"},
        {epNum: "S1 E17", src: "https://mega.nz/embed/vJ4TUKYa#0qIsiurPxzbUugrO-eEbmfWc8zp5GD98_dPxEgHMPfc"},
        {epNum: "S1 E18", src: "https://mega.nz/embed/SU4EDQLb#Jk0-3-vvzhGZzN_u899r4uOrPyjJzuGCgTmV41rm0yM"},
        {epNum: "S1 E19", src: "https://mega.nz/embed/CZxywC7C#K4SbcqV99P0LzVN2ReYeesR9lt6a2-dMVIHc2psRkZU"},
        {epNum: "S1 E20", src: "https://mega.nz/embed/iRRlCKKS#QDvt2SllOUay4yqw8cOH4KnQehwkpZEipgXHJ6YSjfQ"},
        {epNum: "S1 E21", src: "https://mega.nz/embed/mVAzxbLR#vJLP5G3QI5FpLSFtHeiE2vNP87SvjaCVPSYb7Liw0Es"},
        {epNum: "S1 E22", src: "https://mega.nz/embed/uNABQRzT#Maev6XAFW78oHlG-4aBdbY8QrST9S4hH9RZHu6gDjvw"},
        {epNum: "S1 E23", src: "https://mega.nz/embed/mUI3wIhL#tdltJFMzpZKZ1yccFGo8MIIEtgTIzV-xbEX3TqfWKII"},
        {epNum: "S1 E24", src: "https://mega.nz/embed/rUJzEYIR#6oqdcTFAN02YkAWRF9xwNZ06C-QBvtk3zL-0n9rXF6w"},
        {epNum: "S1 E25", src: "https://mega.nz/embed/udh02JSB#MspOBtVXT4mOzDe4LTIqoZyy1a2jn-ExTnWoGU6zCRE"},
        {epNum: "S1 E26", src: "https://mega.nz/embed/zNhwlASQ#KU1MEr82Irve7lundTd9Uf5Zz0Xr7Nelxt6gVmrEA2s"},
        
        {epNum: "S2 E1 ", src: "https://mega.nz/embed/mFQVxK4Z#dlNUY_qU66YUIhCQwcM8jSYECEIuXUSkJk193xhwSSU"},
        {epNum: "S2 E2 ", src: "https://mega.nz/embed/LR5lkRRR#mV2IVpoyowEuIHPoEaYGhemd0EbLMHpUSkmMrggOzhg"},
        {epNum: "S2 E3 ", src: "https://mega.nz/embed/7MIQQCiR#Sqj486NfdTqfaRtwIsogAdGUxjhyRr24q4qgj6yFnV4"},
        {epNum: "S2 E4 ", src: "https://mega.nz/embed/uUoG1IJQ#SqwVR3dzAxX2ZfNmYCPA1pUPfxL64U6lFU3tYBpcxT0"},
        {epNum: "S2 E5 ", src: "https://mega.nz/embed/7d53yBSD#MBeEanv_hrnCm2EZ7tAnHGN_OThEX3iQUh-gs5WVrFE"},
        {epNum: "S2 E6 ", src: "https://mega.nz/embed/TRZSnSZA#_LtwG0pvp7r6aHvhlxeupo_6U6yMt3LelrSnnv_zDVw"},
        {epNum: "S2 E7 ", src: "https://mega.nz/embed/PA5iVIQK#PS2TlmMvsnitdNQK6ec0iD4aOGojFgCNPSnVW3NcfzI"},
        
        {epNum: "S3 E1 ", src: "https://mega.nz/embed/ydIA1KAZ#dcIZIS1yAUnZpNYYLwkQuVH7TlCTOkmO7i4lDfcctuw"},
        {epNum: "S3 E2 ", src: "https://mega.nz/embed/yVw3QBbK#IoKaH2OhL3IYWVKaWR81pzkwaJwX_-yRak3nftFSj-I"},
        {epNum: "S3 E3 ", src: "https://mega.nz/embed/fdJ0FCSa#hmGIBvTtxL0FmpXJIKaGyAD-KiiS3jZSFMtwNycNnF8"},
        {epNum: "S3 E4 ", src: "https://mega.nz/embed/KNJSlapa#LOI_aYBY6_ygyrrH6YuDyFkwvR6qOdD-kbYljxDXjC0"},
        {epNum: "S3 E5 ", src: "https://mega.nz/embed/vAoGhYBK#8FvBouPXVXL4T5pIuampfntZeFTjgMatEVjFOKEQFyA"},
        {epNum: "S3 E6 ", src: "https://mega.nz/embed/WM5AgSJC#k75rw8YK6wPOjFa_n3BUcQm7zyQWZLUrkGU7UdxVcro"},
        {epNum: "S3 E7 ", src: "https://mega.nz/embed/mAZGjJaJ#vY7-cYV5eVYWKVOQkiFA5McDc_a4lzLMEL1JcUApoEQ"},
        {epNum: "S3 E8 ", src: "https://mega.nz/embed/fJp0XI6C#u7vZ7Ja7Ca-3jO4qCyERWusfbj9QTs0KM6Qt5egEpF4"},
        {epNum: "S3 E9 ", src: "https://mega.nz/embed/LQY0nCDS#vN-eHpYignpxPo92-bFqD88YTKOaHMvBVC4kF9M78sc"},
        {epNum: "S3 E10", src: "https://mega.nz/embed/7FwBBKBa#Bd569WIosOn0Pe16Xa9pPiLhIWEIaK1wF03S35UpQ_E"},
        {epNum: "S3 E11", src: "https://mega.nz/embed/yEQXURwS#RpYL_PLyKH8VCK-EE_1wCpo5ZdHKV8WU5jfwxo8k3Rg"}
    ],
    thePromisedNeverland: [
        "The Promised Neverland / Yakusoku No Neverland",
        {epNum: "S1 E1 ", src: "https://mega.nz/embed/6IQVTDQD#jBqd2Wqak-m146NQEfXBiQK97osAHi3yAhYQD9-BoqA"},
        {epNum: "S1 E2 ", src: "https://mega.nz/embed/PExVDLrQ#kGrRfDSaBGyRZ1nuSF8RsPjGTtBLcZGYWagic42xe6w"},
        {epNum: "S1 E3 ", src: "https://mega.nz/embed/CcZTwbBR#qda9Jvjp849nF6vRgRxwaACPlESKH9XSL0ncjP-DVbQ"},
        {epNum: "S1 E4 ", src: "https://mega.nz/embed/nZIXQIwZ#ye73DtUIVT7CfX6d87IrcZOVUNAvj3kRzamcVddeJ2c"},
        {epNum: "S1 E5 ", src: "https://mega.nz/embed/vEQXRKpY#pGrR4iANJHT19tWLi5hWXNV-4X7ekQAVr_jRQshYZss"},
        {epNum: "S1 E6 ", src: "https://mega.nz/embed/PV5BDA5L#c5nrLATx6ubKtmkyjmJn0zJ5F9cA2vAmcyw1eQ952Ro"},
        {epNum: "S1 E7 ", src: "https://mega.nz/embed/6JpQWCrB#cFqtBsxJ11g5_hTna-Ajd4VV0B9pfB7pHOLcI5fJGZ8"},
        {epNum: "S1 E8 ", src: "https://mega.nz/embed/CNY1jJRI#WAZrpX8r0GVd85TwdUjhfCYkmT9mjaVhSdm_AQZTU98"},
        {epNum: "S1 E9 ", src: "https://mega.nz/embed/vMhFFZTB#V1C_klHDQIFgAHvVbwP9x4t0_Ljmx6lj3b8-3E9Sw08"},
        {epNum: "S1 E10", src: "https://mega.nz/embed/SJRhBSpA#2vnp3QeUf5iQqmucO_M6GL-V74cHPmXKrW6OUs_L5Lw"},
        {epNum: "S1 E11", src: "https://mega.nz/embed/iAQiSRbI#VvR2FnPaG9zoLgAsIHRZbayR78xInVfqmObYSd7ojLY"},
        {epNum: "S1 E12", src: "https://mega.nz/embed/TQoHUDAC#-S6Bf2L28LZFsRVkv_cZ_3gx0smGbLRjKcb7ypJbOUU"},
        
        {epNum: "S2 E1 ", src: "https://mega.nz/embed/iEQ3lJ7Z#R4D-srtsskIbGBWmqrPwAuyYkCvg7WRGIAO9pGRFdNY"},
        {epNum: "S2 E2 ", src: "https://mega.nz/embed/bBIUkThK#j7b98TJseTjwWu7VtEtcmbrJxunpVriu3rS1FS686uk"},
        {epNum: "S2 E3 ", src: "https://mega.nz/embed/aV5EQCbZ#YHQR38zr7-BNqOZoF64bUWLJ7Hz7uNr_O2dNf825Bqg"},
        {epNum: "S2 E4 ", src: "https://mega.nz/embed/vQxS1I4Y#wIVNLA5FQW0_Bh54r6qY1Sskrq8eehRcLSAszMhWI88"},
        {epNum: "S2 E5 ", src: "https://mega.nz/embed/qV50mZxT#-8ixLLOyycyPuwlvrMHhjmC7xN_2TjXz3Cce1mIiHBA"},
        {epNum: "S2 E6 ", src: "https://mega.nz/embed/mMBmURQZ#rM0m-Q-oB8g4hSq7Q5CgBq_FSDQrIqz7NHfWkhq5XT8"},
        {epNum: "S2 E7 ", src: "https://mega.nz/embed/ydhk2Z5R#5gw833pj0g8vK4p9wCvvzL8UnVhY_CYiG7UKXlikK6s"},
        {epNum: "S2 E8 ", src: "https://mega.nz/embed/WRoRFDpI#9IZGnbgL_4vP2Gdyy5z1aAta4HWv3kxMYHlO1gsyDKg"},
        {epNum: "S2 E9 ", src: "https://mega.nz/embed/WF4mhCqQ#Hcl4AZqbOpPO-ASK5Eq7J3khdxtzbQ26t9_vrgmUEZ8"},
        {epNum: "S2 E10", src: "https://mega.nz/embed/vVgjkKbI#Pz4rQ5cAEhTntLOoA85wEjFQlYUXhJZehfHNjSY382o"},
        {epNum: "S2 E11", src: "https://mega.nz/embed/DFJAQSpb#X-uO46ouei0VhjXE_v19AeaymxchA-VM9Q68Cd-Let8"}
    ]
}

currentEp = 1

function back() {
    if (currentEp != 1) {
        currentEp--
    }
    else {
        currentEp = currentShow.length-1
    }
    videoPlayer.src = currentShow[currentEp].src
    epCounter.textContent = currentShow[currentEp].epNum
}
function next() {
    if (currentEp != currentShow.length-1) {
        currentEp++
    }
    else {
        currentEp = 1
    }
    videoPlayer.src = currentShow[currentEp].src
    epCounter.textContent = currentShow[currentEp].epNum
}



var clickedShow = localStorage.getItem("clickedShow")
var currentShow = shows[clickedShow]

videoPlayer.src = currentShow[1].src
epCounter.src = currentShow[1].epCounter
document.querySelector(".title").textContent = currentShow[0]