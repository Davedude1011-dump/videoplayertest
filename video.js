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
    ],

    classroomOfTheElite: [
        "Classroom of The Elite",
        {epNum: "S1 E1 ", src: "https://mega.nz/embed/tJdHzYJb#_fxHEP9EZxEzT3O0EXIoBTCyZ82_5SVmR7jVGUaPEL4"},
        {epNum: "S1 E2 ", src: "https://mega.nz/embed/pZt1WSpQ#ou-PVjqE2weoFTQxP7RGe1Nrrtr4nAXSCx596-YKlv0"},
        {epNum: "S1 E3 ", src: "https://mega.nz/embed/kFdkmA7I#BD44U3AtryoXbe0YiqkH9yAXqWuS7eWoRe1bHWTrq6A"},
        {epNum: "S1 E4 ", src: "https://mega.nz/embed/QQ8XDR7B#1gehFlt5dhoR06vIsGBMPNlx8tv_j2bf05NbKpGMhsY"},
        {epNum: "S1 E5 ", src: "https://mega.nz/embed/kE0kEAJQ#SU6DHgyoi4cLuZI0-lRfvZRj8nIsfHG4kcPypt8e2b4"},
        {epNum: "S1 E6 ", src: "https://mega.nz/embed/9J8yVTQS#NnfTjtF9cNL82MvBRJ_K0FPiZcH-d8ML2i1R8Oz-6iM"},
        {epNum: "S1 E7 ", src: "https://mega.nz/embed/oR0j3AjY#HqD2mjS3lE_W1QrBsh9eJUlbDxoh1r8XDD9KCXLaFvo"},
        {epNum: "S1 E8 ", src: "https://mega.nz/embed/4V911IDL#kJqpfnqp3-iiHjKeQIB4Ym2lV0kvB8iUbJsZ66LXhkA"},
        {epNum: "S1 E9 ", src: "https://mega.nz/embed/VF0yGBBZ#hRyDjFS6E030MXJh3gLPJyKvdxYDGVM2sI3lQu_AW_k"},
        {epNum: "S1 E10", src: "https://mega.nz/embed/4UcRjIZL#XxbCRIri7QQyigvVHgnQbsxUornR3qptWULcuBEwC8Q"},
        {epNum: "S1 E11", src: "https://mega.nz/embed/gY1kVDqY#60WUYttmQ5H2CGanx5ttbJuvym6RWTAUGISkH8fFYpc"},
        {epNum: "S1 E12", src: "https://mega.nz/embed/cclxBSZA#OCJ8XFXQfOF7EDXqDrYEcgOS_XZmj4nQ08qc-cQ12s0"},
        
        {epNum: "S2 E1 ", src: "https://mega.nz/embed/1N8xkSxZ#lhYeBWYtPwMOo43Z0UJ4zRqE8LoOKZiV9NiExmV6awI"},
        {epNum: "S2 E2 ", src: "https://mega.nz/embed/MNEEEYrL#RbH42MWuP_wRxYRnZYPSrRhOSzWjydc83sZxu8YbDe4"},
        {epNum: "S2 E3 ", src: "https://mega.nz/embed/9EE23CJb#QbfRFawIIhmY3hK1yQgOryYUOlABXc2IvhjnyDwiuIc"},
        {epNum: "S2 E4 ", src: "https://mega.nz/embed/wN1DRQxA#lagYA5LhIvNP5aWLJ3_z2ZSxitou2LHNrseTMv1IiHU"},
        {epNum: "S2 E5 ", src: "https://mega.nz/embed/pM8T3KoS#4FxjfV4NU1cyLdYlW3gcpk8wuqRlXHKcVfdGilz8YaI"},
        {epNum: "S2 E6 ", src: "https://mega.nz/embed/lctwUbBB#Ser-qcy1h8pKirD9hXpAi5Xsrovckil6bBRecQsurmg"},
        {epNum: "S2 E7 ", src: "https://mega.nz/embed/AQtXiaDa#sJLtJhxvNVWuqGGov9n3Q_gcBx3t1xuyHmSd6LM1Prc"},
        {epNum: "S2 E8 ", src: "https://mega.nz/embed/ZJk1zRAS#N46zb4rjG96B-hhnnwhqgF2UpApsD2vMwkzVEwH17xU"},
        {epNum: "S2 E9 ", src: "https://mega.nz/embed/NV9wSZQD#Hz3dGZ3wK1N1IAcYMrAiIo-OqnZhxIJ2STOJG-0pxQs"},
        {epNum: "S2 E10", src: "https://mega.nz/embed/ddMgXTJQ#tVPESsfIOTJIam-eGD6jLrJftxW9SzAv_QXQxvzNiRc"},
        {epNum: "S2 E11", src: "https://mega.nz/embed/9A03VazY#ett3Z6ifLoXFCq11EvbP-dU6zZGpS6YLg9rwgSexF_Y"},
        {epNum: "S2 E12", src: "https://mega.nz/embed/RVNxHKgJ#2fahbG7WeqHbZc-8ov2HX4fAyVTITDlCw5jCW5Q7Mcc"},
        {epNum: "S2 E13", src: "https://mega.nz/embed/wFMFSJDJ#22pYk-bQAEwoHZKD0-dqDgSxgYXtkqLpBZBgSKPU8SQ"},
    ],

    aCertainScientificRailgun: [
        "a Certain Scientific Railgun",
        {epNum: "S1 E1 ", src: "https://mega.nz/embed/kEtwxTBJ#Tvft7TpKj-WS8JQA1J_0rA8uUmhujBwL7UxX4aOXxPw"},
        {epNum: "S1 E2 ", src: "https://mega.nz/embed/tNk1kZwK#KKpczUi2f9vq_iBiUe2JYDgV0zGhaFFvg_9pCFNlAmk"},
        {epNum: "S1 E3 ", src: "https://mega.nz/embed/AN1DyRZT#cLWgLnQib-51CSFsFJuabHMIF1ZqhegQ6T32uAbaeqM"},
        {epNum: "S1 E4 ", src: "https://mega.nz/embed/MUlyTaAT#4lqNvA--god17Wt08DLZW3EdfOlEMKBCx9sJxBi_2Z8"},
        {epNum: "S1 E5 ", src: "https://mega.nz/embed/MJMkSbBb#wzkgU2w8cMyJ_jGZRBa08teqAm931qTPY9-l8bKTHSI"},
        {epNum: "S1 E6 ", src: "https://mega.nz/embed/kBEzDRJT#ooFgQBM7W9fN8xfBvCLTVN4LEp14XmylVdzm3nM9Lj0"},
        {epNum: "S1 E7 ", src: "https://mega.nz/embed/pQknFS4Y#-HVMbmPH0oTdMo135byvR9pE2_lt7wc-M1oyqkHy5nM"},
        {epNum: "S1 E8 ", src: "https://mega.nz/embed/BNFilaYS#15rIGqBcFG_4926BpsUW2Sd0W4kF2eN-gDHel0OoY4I"},
        {epNum: "S1 E9 ", src: "https://mega.nz/embed/cJ8QAZzI#f2GCHJ_hMGOaOhACHiIRA43ySody3HChyeEKPhLI7C4"},
        {epNum: "S1 E10", src: "https://mega.nz/embed/8EtykCiC#ZIOOYlQl5r6EXzj6_CFRj8PxMYKiGLRVNeukmSkXXak"},
        {epNum: "S1 E11", src: "https://mega.nz/embed/1B9UCAzD#WaeXPcCtRhmOOD0_ifav2YcQHHXZwTtBB_PW0iWy7Vk"},
        {epNum: "S1 E12", src: "https://mega.nz/embed/lE8zkTaS#0LotxmQNIdlv226C05rgEua7LYW69hNTYiavi56JV6k"},
        {epNum: "S1 E13", src: "https://mega.nz/embed/kNFkFQ5L#Mjta-noEhRJJSoqsPmqMImMvdQknkncvV-h7qA5Ai6E"},
        {epNum: "S1 E14", src: "https://mega.nz/embed/JV0XDJ7C#ZAcPKrf8-PXRLoEgGcxyxVz2v1VaTNGOqkOSxjurX4I"},
        {epNum: "S1 E15", src: "https://mega.nz/embed/sNN2xa7C#yYD_GmfRnFrQ61bi_UfP57LTdkStOxYzVp0oUeEnKLU"},
        {epNum: "S1 E16", src: "https://mega.nz/embed/dRkAQIwY#hKzgMNru-N7f08X9J8-pzEe-928TBpCeKYSQcOtq75E"},
        {epNum: "S1 E17", src: "https://mega.nz/embed/cYElVaZQ#mNnTPSqkkrPmhS0mNLyXn2pZij13UnnQrrwGheZgSk0"},
        {epNum: "S1 E18", src: "https://mega.nz/embed/gdcRiBaY#NDRVuI21IOCAl-nu4x9iy5DQCOEMks_q1_G40JmkKM0"},
        {epNum: "S1 E19", src: "https://mega.nz/embed/xd0RCRBY#9DCTV71EqAJJNCgZoOuRIVbb3qK_MSHgSFPm4hosLKo"},
        {epNum: "S1 E20", src: "https://mega.nz/embed/NNkgiTJY#OVEDsiHRuzXapLLtz42av1AENyuFbcHqnSqxfWb-6xg"},
        {epNum: "S1 E21", src: "https://mega.nz/embed/MAcESQBS#aOjrEysN3O6iUN2TPQ-gkjn2iEI4s4OwvBEpYnT5PNc"},
        {epNum: "S1 E22", src: "https://mega.nz/embed/NJ1k2QxD#5bts_4pOhEPe8B4_uolt_dpqNgc5AOgTZWv8FU7_HJE"},
        {epNum: "S1 E23", src: "https://mega.nz/embed/VNUmgChD#JYXYlWr8KGUqfgza0G9Vl9ZZoT7oFzHBOEvoZ4eXdSk"},
        {epNum: "S1 E24", src: "https://mega.nz/embed/xZk2lDRC#sT2Llhm6GRXyc8zhJMVfzrmuWmY25e5B7I6hti5-G38"},
        
        {epNum: "S2 E1 ", src: "https://mega.nz/embed/8AMCSCbB#V7S8pvz22_nZG5nPVp69QYJXMlf05wmm2FI8ELz-NDc"},
        {epNum: "S2 E2 ", src: "https://mega.nz/embed/kMEhhISS#crvCKcnNyQm_bd0vbKCGAygUfm3u-UJgu55uF20RLTo"},
        {epNum: "S2 E3 ", src: "https://mega.nz/embed/RR8WWKJC#hDImcS40_GcWkdCZorG1G18GHStQg2i6rQqKCkQB9J8"},
        {epNum: "S2 E4 ", src: "https://mega.nz/embed/JAMWxJoQ#t9G6MWGPjVbjJpOJKr4Pl_mD5RWrqjspxcyI8TyM7ZU"},
        {epNum: "S2 E5 ", src: "https://mega.nz/embed/gFkmQK6K#enUyRn-k827bI8i1ZcHAVDaRGQrQ4TEoqKItPIT6A1M"},
        {epNum: "S2 E6 ", src: "https://mega.nz/embed/8YlxASLa#4H_cP8tnjuEbYTM_EY547kGSwkvzXBDDY5xcDE5U6OU"},
        {epNum: "S2 E7 ", src: "https://mega.nz/embed/hY8lySgC#SSBa0YPFs3mStxosHgNqR-bi2J7KrPjmF0vLW2PkVzg"},
        {epNum: "S2 E8 ", src: "https://mega.nz/embed/1ZNgTATA#eXXSn3uP7QDGAFXDCm3RJgWWLBu3pHU6Wzvq34yVWvY"},
        {epNum: "S2 E9 ", src: "https://mega.nz/embed/wFs1zbAb#tQy860I-ZJ3C4am8zpZ9szdtee_2e9IAkmwY0TyS4rw"},
        {epNum: "S2 E10", src: "https://mega.nz/embed/0JN1zK6J#5MVlI0ArdfsxsFh4reA-1C-j3bXz5yjeCPnl-o4OXxo"},
        {epNum: "S2 E11", src: "https://mega.nz/embed/cFcSUTwK#KPsfMKeLmbxu8ThuzkMuC4MgnOV3DD2P0vYDWJgXYnY"},
        {epNum: "S2 E12", src: "https://mega.nz/embed/ccEmWZwD#MwHYwi3OotzD4cYlVqRBiUMedFAt29GLfP7Jw2vAypc"},
        {epNum: "S2 E13", src: "https://mega.nz/embed/UZ1ADDJB#DLMSAeBHPFUebKGcOKEVE9GIeIPg0GlAYHhWXY_1DBo"},
        {epNum: "S2 E14", src: "https://mega.nz/embed/1M1SXJ6R#8qFGA8NxHYTKcpQ3Zso2Xw2sNsR5sgY4sqPTW36roG4"},
        {epNum: "S2 E15", src: "https://mega.nz/embed/xc83zLqI#xImsdWypahk5n9Sw0hG6DOkV_78V3-Mpoj8sStIlQXU"},
        {epNum: "S2 E16", src: "https://mega.nz/embed/5cVgXYwS#CUxTdX6HDFJ0KW7AHUmFrCGocF-BHrKZESLYv6t8HPw"},
        {epNum: "S2 E17", src: "https://mega.nz/embed/gE1hjRhT#HgiclJb78-krbVSPMQqU0CNnRMh-MOCx9D0Tdbsph6M"},
        {epNum: "S2 E18", src: "https://mega.nz/embed/QUlgWDrI#t8xR3hL3SrplB13ltZFs47FS1ZSqmMZZE68X1na0jvw"},
        {epNum: "S2 E19", src: "https://mega.nz/embed/JMdgjJzQ#34Np2wHXCm7OockPn9CThgmGMpoJPNYFauelaY1AMLY"},
        {epNum: "S2 E20", src: "https://mega.nz/embed/dRc3yYLZ#z8jkLUGKrGYqtvuNeZES27YskhX242u2J4RiFZlvN0U"},
        {epNum: "S2 E21", src: "https://mega.nz/embed/4I8gWYaJ#0xaFuVbso1_u6AJgsvmNTdQjVkZmnQozF3Rg_0PqOUo"},
        {epNum: "S2 E22", src: "https://mega.nz/embed/ZEkDFaDQ#f5yEQiQL2QBwRnescwTK1M27m0JK5Y9QeXSU2gxB3Vc"},
        {epNum: "S2 E23", src: "https://mega.nz/embed/gZthzaAA#e7SwU5VBUUUQ2S8Zn3nRbzd8kJZ1LniON5qnKAfdwgY"},
        {epNum: "S2 E24", src: "https://mega.nz/embed/YZ00AZbA#B8QS7YPQ3fSpolqDU83mUtQdL0Kwe70JmUVgiRWQavc"},
        
        {epNum: "S3 E1 ", src: "https://mega.nz/embed/cQFghZSZ#hg_XkUXf3SV8YPiC71jzQgxJs0jbkUdAdv8QevbHwlE"},
        {epNum: "S3 E2 ", src: "https://mega.nz/embed/1cVg1DKC#l0bHGj-jqy22RAqTv5bl_kFHH6w0Djchz6Tn_CC4k0s"},
        {epNum: "S3 E3 ", src: "https://mega.nz/embed/5NtGmRYA#cB8HNbxwdgPG9wUO-qk0FxzhxaKaDUofseMbcIN8jhA"},
        {epNum: "S3 E4 ", src: "https://mega.nz/embed/FRkHTZRK#Hmw4V_BHsNCJK2U4ttRltNYZ1apwXzAMcoRZ7Me15CM"},
        {epNum: "S3 E5 ", src: "https://mega.nz/embed/tNdBWIRR#2PXJUE1r0VY5FwR2jHoGC9kgnwX4ODVxYBe82N2nbCE"},
        {epNum: "S3 E6 ", src: "https://mega.nz/embed/BFFwjQha#C3IBbqSarmzzMt8YQHrwNiP-h9sJa678RulJSiDlVb0"},
        {epNum: "S3 E7 ", src: "https://mega.nz/embed/EFMgmYII#DfvfjU9vw_Bezh88RJ4RzvsOz-hbYmN_5e3-gHp39Cs"},
        {epNum: "S3 E8 ", src: "https://mega.nz/embed/IFUzkRBQ#cJBsXlTsJy-Fuh-hebV2IioKDwPOv_WulQsXWwJ9RQI"},
        {epNum: "S3 E9 ", src: "https://mega.nz/embed/tFd3RIpI#StIT19bCSPsPIavTbRIHtI6ZLTN5EWj2KzxXrIdRRe0"},
        {epNum: "S3 E10", src: "https://mega.nz/embed/VUVGkaBB#fXech-fNd-1R4VrAtD9l4NgkljfBRxQy9Rd1opl0TdI"},
        {epNum: "S3 E11", src: "https://mega.nz/embed/9V0lHLba#G6JD3fafgl4Cs9bq5o7-BMDtCQs_Jeucv1zMU67ptmk"},
        {epNum: "S3 E12", src: "https://mega.nz/embed/lEURFbxY#CTJrelKBi9hmOXmSIVAFeEJ-RyNh5-IzbQQsYcwU4k0"},
        {epNum: "S3 E13", src: "https://mega.nz/embed/NI0TmI4R#rbP-xBMlfrWZOlVcTgnfbZk-_HVrayqjmN6huA4TD2s"},
        {epNum: "S3 E14", src: "https://mega.nz/embed/1FNRRL6L#mp83c8mjV0dmXjo0r1qMjOW7Ldtao5NYIOEnfjyO3BE"},
        {epNum: "S3 E15", src: "https://mega.nz/embed/1F0TABIK#TYBauOr0wvq9-SltRxrrkxyZ4-DMwLVk0u6TJZfAyTI"},
        {epNum: "S3 E16", src: "https://mega.nz/embed/AN13lARK#VsACc_9k7QDc9cUJDdQk_yahOFd7qqL05vvmNV7tcgU"},
        {epNum: "S3 E17", src: "https://mega.nz/embed/AIdjmJCY#Z7yCOTYXoP3XbLPUpLT0onaUfppQBcKQ9PSLyxiSOJc"},
        {epNum: "S3 E18", src: "https://mega.nz/embed/JMtxnRLQ#BFEo1lUNxK6L4FY3YnElGp_7DoOSM0mWXhBT2wphFM0"},
        {epNum: "S3 E19", src: "https://mega.nz/embed/VE13nLzY#MHhAY-2q-Qngo5PYUSe8gGw1sc2k2lxoF-WxD21Q-sM"},
        {epNum: "S3 E20", src: "https://mega.nz/embed/td8FQDrZ#Q84urD5DPRTZaDJo6-T1NdoExhhitzzMjhIaxpU7YuY"},
        {epNum: "S3 E21", src: "https://mega.nz/embed/sBlz0B5I#yEZIjFsIU21mDYt6Up9DCYloq-l5lzyIzFIBm24MCr0"},
        {epNum: "S3 E22", src: "https://mega.nz/embed/YUN2wC6A#06fDYU6FN6FlBA_-ZO6LyWm96OSr2aol_uNuDPiKf5c"},
        {epNum: "S3 E23", src: "https://mega.nz/embed/9FFxjL6Q#ddC80Eazh2OKhfgFbhmHfTa3BSIZim0d-gS1KokMG4E"},
        {epNum: "S3 E24", src: "https://mega.nz/embed/ldNSWbQb#b3Y4uJ0UuuCaKo1ejY6fqGxeAyuNyCKFJVxnW1Ad4wY"},
        {epNum: "S3 E25", src: "https://mega.nz/embed/pYMDyCYQ#V3YnMOvZKIm9VB7v2-M--54NAUoVP1WDsAnuISqzIbo"}
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


// watch time code:

var video = document.getElementById('video-player');

// Add an event listener to the video's 'timeupdate' event
video.addEventListener('pause', function() {
    console.log("hllo")
    var currentTime = video.currentTime;
    localStorage.setItem('video-' + video.src, currentTime);
    console.log("hllo")
  });