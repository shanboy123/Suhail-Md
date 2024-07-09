const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "94759549725" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_03_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTExLFxuICAgICAgICA1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE0LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc1LFxuICAgICAgICA1MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxOSxcbiAgICAgICAgMixcbiAgICAgICAgMjA0LFxuICAgICAgICA0MixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMixcbiAgICAgICAgMTcxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAwLFxuICAgICAgICA4MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg5LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgODgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAyLFxuICAgICAgICA0NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODYsXG4gICAgICAgIDQ2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgODksXG4gICAgICAgIDQyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDU1LFxuICAgICAgICAzNCxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNSxcbiAgICAgICAgMixcbiAgICAgICAgNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA1LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTksXG4gICAgICAgIDk5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDgxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjUwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDksXG4gICAgICAgIDM1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA2MixcbiAgICAgICAgMTExLFxuICAgICAgICAxMTEsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjcsXG4gICAgICAgIDY5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjExLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTM1LFxuICAgICAgICA4LFxuICAgICAgICA3MCxcbiAgICAgICAgOTksXG4gICAgICAgIDU5LFxuICAgICAgICA4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMixcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg0LFxuICAgICAgICA3OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzksXG4gICAgICAgIDI5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiajdnMGhiZHJMTW5kcVhuLzJhbEYvZjVxMVM0cnRUMmFKaVdkM2c3cXBOaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc1OTU0OTcyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0MzQkJFQzBGNEI2MkI3NUQ0NDg5OTE1QTYzRDZBRjFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNTUxNzg5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIllEWjRXWkhYVGM2OFNyWFhwN2RUeFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzljOWVhODItODc0OS00MTk4LTg5YzEtZWMwMTY1ZTA4NWE3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOCxcbiAgICAgIDQ2LFxuICAgICAgNjIsXG4gICAgICAyMTQsXG4gICAgICAxOTksXG4gICAgICA3NixcbiAgICAgIDEyMixcbiAgICAgIDEyNCxcbiAgICAgIDIyNSxcbiAgICAgIDc5LFxuICAgICAgMTE3LFxuICAgICAgMjM0LFxuICAgICAgMTI1LFxuICAgICAgNzUsXG4gICAgICAyMDIsXG4gICAgICA3OSxcbiAgICAgIDEwMCxcbiAgICAgIDc0LFxuICAgICAgNzYsXG4gICAgICAyNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY2LFxuICAgICAgMTYyLFxuICAgICAgMjcsXG4gICAgICAxNzgsXG4gICAgICA0NCxcbiAgICAgIDIwLFxuICAgICAgMTUsXG4gICAgICAxMDQsXG4gICAgICA3NyxcbiAgICAgIDE4OSxcbiAgICAgIDE1MSxcbiAgICAgIDEwNyxcbiAgICAgIDI1MCxcbiAgICAgIDk0LFxuICAgICAgMTgxLFxuICAgICAgNzEsXG4gICAgICAzMyxcbiAgICAgIDE4NixcbiAgICAgIDIxMixcbiAgICAgIDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSjlHRllKSExcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzU5NTQ5NzI1OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTXIuU2hhbiBNb2R6XCIsXG4gICAgXCJsaWRcIjogXCIyNTkyNDQ3MjkzMTU1NzI6MjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1hzcXZJR0VPU1N0clFHR0JZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI2SUMydldmVUFIMlo3VkRmY2kvRXBNZjRGVnp3bU9RMXdiUThVaDJpV3k0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkxlRURRQTE3dzhHbkhpOXVzZTRmRkRwWUUxL25kNjBNZGs1RVJkWExzb2pxQnMvWUlXMW5jTnFaNHFGZ245SWFMeFdtNWwvaW5ETk9rdXhZZWpSa0NRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjBnZkFsUlVLM1NFNVJ1RHlMRGJJdjV4Z3g4cVU2VWZPNFNxcXFrWiswbGovdXp0dlJKM0NGZ1BNRVpZenM2dW1UVHFYcCtJTVdILzBpWEpwbnVTaEF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzU5NTQ5NzI1OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTUxNzg0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBWUFBSXVvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFZQUFJdW8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyVFhOYnhnK0dvT3d6Z1VXeGl0WlZnOFllNWFDTE1KeUgvVi8yNHhNaFVzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NTAzOTAwNTMsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDMsNiwxMiwxM119LFwidGltZXN0YW1wXCI6XCIxNzE4MTM0MTQwMzA3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
