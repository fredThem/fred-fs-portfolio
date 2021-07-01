---
title: Absolunet Test
---

# Test Front End

Entrevue v2.0.2

## 1. Écrire le HTML sémantique pour le contenu texte suivant
[Contexte: Page de contact du site d'Absolunet]


```html
<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible"
        content="IE=edge" />
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0" />
  <title>Sémantique HTML</title>
</head>

<body>
  <main>
    <!-- 📖 address collection structure as per https://html.spec.whatwg.org/multipage/sections.html#the-address-element
      see => If node is an article element 👀 -->
    <article itemscope
             itemtype="http://schema.org/ContactPoint">
      <h1 itemscope
          itemtype="http://schema.org/Organization"
          itemprop="legalName">
        Absolunet
      </h1>
      <dl>
        <dt>Télécopieur :</dt>
        <dd itemprop="faxNumber">
          1 888 563-3057
        </dd>

        <dt>Sans frais :</dt>
        <dd itemtype="http://schema.org/ContactPointOption">
          <!-- 📓 https://schema.org/TollFree -->
          <a href="tel:+18779792276"
             itemprop="TollFree">1 877 979-2276</a>
        </dd>

        <dt>Courriel :</dt>
        <dd>
          <a href="mailto:info@absolunet.com"
             itemprop="email">info@absolunet.com</a>
        </dd>
      </dl>
    </article>

    <article itemscope
             itemtype="http://schema.org/ContactPoint, http://schema.org/Organization">
      <h1 itemprop="branch">Montréal</h1>

      <address itemscope
               itemtype="schema.org/PostalAddress">
        <a href="https://goo.gl/maps/STvxR1nngTnYPnJd6"
           target="_blank">
          <span itemprop="streetAddress">4398 <abbr title="boulevard">Boul.</abbr> <abbr
                  title="Saint-Laurent">St-Laurent</abbr></span>
          </br>
          <span itemprop="addressLocality"><abbr title="Sainte-Thérèse">Montréal</abbr></span>,
          <span itemprop="addressRegion">Québec</span>
          <span itemprop="postalCode">H2W 1Z5</span>
        </a>
      </address>

      <dl>
        <dt>Téléphone :</dt>
        <dd>
          <a href="tel:+15149826560">1 514 982-6560</a>
        </dd>
      </dl>
    </article>

    <article itemscope
             itemtype="http://schema.org/ContactPoint">
      <h1 itemtype="http://schema.org/Organization"
          itemprop="branch">Ste-Thérèse</h1>

      <p itemprop="headOffice">Siège social</p> <!-- non-official prop -->

      <address itemscope
               itemtype="schema.org/PostalAddress">
        <a href="https://goo.gl/maps/F3GPYbGovjpG8vCWA"
           target="_blank">
          <span itemprop="streetAddress">260 rue Sicard, bureau 300</span>
          </br>
          <span itemprop="addressLocality">
            <abbr title="Sainte-Thérèse">Ste-Thérèse</abbr>
          </span>,
          <span itemprop="addressRegion">Québec</span>
          <span itemprop="postalCode">J7E 3X4</span>
        </a>
      </address>
      <dl>
        <dt>Téléphone :</dt>
        <dd>
          <a href="tel:+14509797620">450 979-7620</a>
        </dd>
      </dl>
    </article>

    <article itemscope
             itemtype="http://schema.org/ContactPoint">
      <h1 itemtype="https://schema.org/Service"
          itemprop="provider">Hébergement par <span>Amazon Web Services</span> (<abbr
              title="Amazon Web Services">AWS</abbr>)</h1>
      <address itemscope
               itemtype="schema.org/PostalAddress">
        <a href="https://goo.gl/maps/F3GPYbGovjpG8vCWA"
           target="_blank">
          <span itemprop="streetAddress">410 Terry Ave. North</span>
          </br>
          <span itemprop="addressLocality">
            Seattle
          </span>,
          <span itemprop="addressRegion"><abbr title="Washington">WA</abbr></span>
          <span itemprop="postalCode">98109-5210</span>
        </a>
      </address>
    </article>
  </main>
</body>

</html>

```
