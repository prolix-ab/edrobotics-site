# ED Robotics — webbplats

Föreningens webbplats, byggd med [Next.js](https://nextjs.org) och [Tailwind CSS](https://tailwindcss.com).

## Skriva ett nytt blogginlägg

Blogginlägg är vanliga textfiler (Markdown) i mappen [`src/content/posts`](src/content/posts). Ingen databas, inget admin-login — lägg till en fil, så dyker inlägget upp på `/blogg` automatiskt.

**Så gör du:**

1. I mappen `src/content/posts`, skapa en ny fil som heter något kort och beskrivande på engelska bokstäver, t.ex. `sommarlager-2026.md`. Filnamnet blir webbadressen till inlägget (`/blogg/sommarlager-2026`).
2. Klistra in den här mallen överst i filen och fyll i dina egna uppgifter:

   ```markdown
   ---
   title: "Rubriken på ditt inlägg"
   date: "2026-06-15"
   tags: ["Sommarläger", "ED Robotics"]
   excerpt: "En eller två meningar som sammanfattar inlägget. Det här visas i listan på bloggsidan."
   ---

   Här skriver du själva inlägget. Vanlig text blir vanliga stycken.

   ## En underrubrik

   Du kan använda **fetstil**, *kursiv text*, punktlistor och länkar precis som i vanlig Markdown.
   ```

3. Spara filen. Om du redigerar direkt på GitHub.com (Add file → Create new file) räcker det att skriva in texten i webbläsaren och committa — ingen installation behövs. Sidan byggs om automatiskt vid nästa driftsättning.

**Bra att veta:**

- `date` styr sorteringen (nyast överst) och vilket datum som visas.
- `tags` skapar automatiskt filterknapparna och taggarna på bloggsidan — inga andra ställen att uppdatera.
- `excerpt` är texten som visas i listvyn innan man klickar in på inlägget.
- Ta bort en fil för att ta bort ett inlägg. Inget annat behöver ändras.

## Kontaktformulär

Formuläret på [/kontakt](src/app/kontakt/page.tsx) skickas via [Web3Forms](https://web3forms.com) — meddelanden landar direkt i er inkorg, ingen egen e-postserver behövs.

**Så sätter du upp det:**

1. Gå till [web3forms.com](https://web3forms.com) och fyll i den e-postadress dit meddelanden ska skickas (t.ex. `sponsorship@edrobotics.se`). Ni får en Access Key på mejlen — inget konto krävs.
2. Kopiera [`.env.example`](.env.example) till en ny fil `.env.local` i projektets rot och klistra in nyckeln:
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=er-nyckel-här
   ```
3. Lägg samma miljövariabel hos er hosting-leverantör (t.ex. Vercel → Project Settings → Environment Variables) så att den finns med vid driftsättning.

`.env.local` är gitignorad och ska aldrig committas. Utan en nyckel visar formuläret ett tydligt felmeddelande istället för att låtsas fungera.

## Utveckling

```bash
npm install
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000) i webbläsaren.

```bash
npm run lint    # kodkontroll
npm run build   # produktionsbygge
```

## Struktur

- `src/app` — sidorna (en mapp per URL, App Router)
- `src/components` — delade UI-komponenter
- `src/content/posts` — blogginläggen (Markdown)
- `src/data/content.ts` — övrigt textinnehåll (sponsorer, EDRC-regler, sociala länkar m.m.)
- `src/lib/posts.ts` — läser och tolkar blogginläggen vid bygget
