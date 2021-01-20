exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───
         
╔════════════════════
║ *Donasi Ke ${BotName}*
╠════════════════════
║├≽️⚜ *GOPAY*: 082147078449
║├≽️⚜ *DANA*: 082147078449
║├≽️⚜ *PULSA*: 082147078449
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${https://chat.whatsapp.com/D48HBu85iNc6SqnpqkrAWW}_
║│2. *YouTube <subscribe>*
║│ _${grupch2}_
║│3. *Instagram <Follow>*
║│ _${instagramlu}_
║│4. *Creator ${hendra bot}*
║│ _${wa.me/6282147078449}_
║╰───────────
╠════════════════════
║ *MADE BY hendra Bot*
╚════════════════════`
}

