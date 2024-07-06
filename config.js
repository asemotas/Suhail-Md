const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "+2348186156162" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2348186156162";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_43_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjksXG4gICAgICAgIDM1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzLFxuICAgICAgICAyMixcbiAgICAgICAgNDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDksXG4gICAgICAgIDU2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTExLFxuICAgICAgICAzNixcbiAgICAgICAgMTUzLFxuICAgICAgICA3OCxcbiAgICAgICAgMixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDUyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTY1LFxuICAgICAgICA3OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTk1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDk0LFxuICAgICAgICAyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNixcbiAgICAgICAgNDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEsXG4gICAgICAgIDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDg2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTA2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA2MixcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDYwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA0NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDgsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE4NixcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjksXG4gICAgICAgIDYxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDkxLFxuICAgICAgICA0NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzksXG4gICAgICAgIDExNyxcbiAgICAgICAgODMsXG4gICAgICAgIDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI4LFxuICAgICAgICA2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODIsXG4gICAgICAgIDI2LFxuICAgICAgICA2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDRFpBV0JIVC9YR3Q0aGdxSGg0MU0zcnlYTUdjalBIdFJNd0dFMDJnbEZrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwVnNKcV8xWlNiU3ZJU0FIUEFBYllBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjYwNTg2MDVmLTU2ZDAtNDkwMy1iY2MzLWRhODkyMjlmYTZjZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMixcbiAgICAgIDEwNyxcbiAgICAgIDE5MixcbiAgICAgIDgzLFxuICAgICAgMTgzLFxuICAgICAgMjQsXG4gICAgICAzNSxcbiAgICAgIDAsXG4gICAgICAxNzIsXG4gICAgICAyMTQsXG4gICAgICAxNzAsXG4gICAgICAyMDYsXG4gICAgICAxODgsXG4gICAgICAxNDIsXG4gICAgICA2MixcbiAgICAgIDEzNCxcbiAgICAgIDE1NyxcbiAgICAgIDk5LFxuICAgICAgMjMzLFxuICAgICAgMTAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOSxcbiAgICAgIDI1MixcbiAgICAgIDIzNCxcbiAgICAgIDQ0LFxuICAgICAgMTg3LFxuICAgICAgMTE3LFxuICAgICAgMjE4LFxuICAgICAgNzcsXG4gICAgICAxOTksXG4gICAgICA0OSxcbiAgICAgIDE4NixcbiAgICAgIDMyLFxuICAgICAgMTkwLFxuICAgICAgODcsXG4gICAgICAxMzYsXG4gICAgICA4OSxcbiAgICAgIDEyMSxcbiAgICAgIDkzLFxuICAgICAgMjE5LFxuICAgICAgMjEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjlKSFZNUUU2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTg2MTU2MTYyOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQVNPTkVYXCIsXG4gICAgXCJsaWRcIjogXCIxMjk4ODAxODAxNzA4ODQ6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjJLcFkwQkVPalJvYlFHR0FzZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJHVWlBYnFncTFVUzBrWFprVk0yQ2k3dGMwbFE0c2lXVm9Rd2x1b0R1YjBJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlYxZmNTTmZNTTEvOW1VSXNIOXg3K1F3UUFEK3Rjc05QZTIzVHVZVzNMY2VlR0t3MFkyakxFbWlYMkxGcEZBZmw0OC9vd3kxM3JnbHVIMTJlYUlLQ0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlRwWHFFOEJ3dE1pSU13bVo5MTJ4STBCbm5UZ2JkcFBUMXhQdnhoenFYNE5vTDJrNnhYM1F0ZkUvbW9LR1VWak1zUlk0d2FFNTVna0ZZN1lKS1dOYUFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxODYxNTYxNjI6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyMTU3ODdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "🤡 ASONEX BOTS 🤡",
  ownername:process.env.OWNER_NAME|| "It'ASONEX",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
