var videoPlayer = document.getElementById("video-player")
var epCounter = document.querySelector(".ep-counter")

var shows = {
    demonSlayer: [
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
    ]
}

currentEp = 0

function back() {
    if (currentEp != 0) {
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
        currentEp = 0
    }
    videoPlayer.src = currentShow[currentEp].src
    epCounter.textContent = currentShow[currentEp].epNum
}



var clickedShow = localStorage.getItem("clickedShow")
var currentShow = shows[clickedShow]

videoPlayer.src = currentShow[0].src
epCounter.src = currentShow[0].epCounter