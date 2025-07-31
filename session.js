//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVBjTmpOY3RpRnZlMDRoQ20xNmpZZnpRbWtBdU0vbVcvWGc2bTVJdGswND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2pyMTVTclRHbDA5S0RWYzNXYy9VTWFOVjcreDg3QUh0Qis4bDlnOWFqcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSHIwS3NxMW11K2VnWC9VTVFVZVhESTVoOXJFNHUvRTY0T0xOM0tLSm1BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyajBtYTdTNWUyRnlhUFBqRklsYWMyYkxNNElvMmtFNjlIV1psYUNQWnpJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdGd05FMmd2aGkxWDliUHB2Wm43WXE0V1V4QmlGRy9seityZ1R2cms4ME09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFrUGdGRU42bXZ2eWYvOE5ZcHNPWlFydmUxT0M2bzZWY1ZzR1Y5SU1rU0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0Y0b1lzUmZRSnczOGNjQmNtbDBCM0p5eWYrWDYzdEQ3QXR6a3QxVjlrND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2NMNHVJZldLcFZBTW5qQndSNWZWNVk2YVFzM0FPYWxmbGM0OGFWcHNVcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFxZDh3R0sxNU9yWjJCSXplQlY2aUJOYVZySDRkRXFGSFNnOFNRYUJQRlhXa1I4UDUxYkNoR3NuZGFtajB4cHVWSDIxeUIvV2N6amczdU5ObXQxOWl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM3LCJhZHZTZWNyZXRLZXkiOiJwaDdTOHl5S25lc05CbmdtUEtNeERaUFpVdkhWU2w2MkV3aWRlK0E0eGk0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJNcnFKWGpvOFJ0YW81YUNJdTFId3ZRIiwicGhvbmVJZCI6Ijk5YmQyNTA5LTQwOTgtNGZiMS04MTEwLTIzNzllZDUxMWIzNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxRTNuQ3Y1Q0RoOUY0aFhjZi9kb2FZbDBWNms9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNzlFYWowOXpLanVxRDRNU21zZmhHcjA1WnNjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVYM1IzTUZOIiwibWUiOnsiaWQiOiI5MjMwNzE3ODI2MjY6MzVAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNjIyNjQxOTIwMjA3MjQ6MzVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKVE1qYTRIRUkvTHJNUUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJuUXZSMlE0WlZpMGR2c01Sd1o2Y3RBcnJqYXljRSsrZTRiaDBZVjl3Sm1RPSIsImFjY291bnRTaWduYXR1cmUiOiJVcG1uR29WaUNVMGRvZEpWa3krNXNOZ0VhZk1ndVRoOE9PTW1MZ2xJNmJNdUZMV2dwcmhPRWh0akJxaW5mblc2ZnZ6K0lOM0V2UElLeHptK04wdXNEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoibnQrVWxDZmNvSWFmblA5a1B3Y1I0bEhYbzRTRHNQUEpVMmRLQWQ4b0prRnZPYnZTSGRrVVZmNlBPTUFRVDVWeE50UTFBazBSbzFvaWh3YzZGWkZ3aXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwNzE3ODI2MjY6MzVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWjBMMGRrT0dWWXRIYjdERWNHZW5MUUs2NDJzbkJQdm51RzRkR0ZmY0NaayJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUzOTQ5NTk1LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpjNSJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "923071782626",
  PASSWORD: 
    process.env.PASSWORD || "boss",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["923071782626", "923071782626"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
