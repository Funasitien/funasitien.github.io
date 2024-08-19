---
draft: false
---
# 🔎 Contexte
Comme le petit fufu prend des vacances aussi, il note ses idées passagères quelque part (ici) pour ne pas les oublier

# ⚙️ Optimisation

### 🏙 Lobby
- [ ] Clean

### 🛏 BedWars
- [ ] Déchargement du lobby avec l'addon payant de sync
- [ ] Optimization des games avec le système de clone

### ⚔️ PVP
- [ ] Séparer FFA et Duels
- [ ] Séparer 1.8 et 1.20
   - [ ] ☑️ Duels
   - [ ] ⚕️ FFA
   
### 💟 Cœur 
- [ ] Rework et patch les permissions actuelles
- [ ] ajouter un grade mod
   - [ ] Staff comprend Anim + Mod
- [ ] Render + simulation distance
- [ ] Calculs Ram sur les petites nodes
# 🧠 Réflexions

### 🛏 BedWars
- [ ] Rework la boutique pour un pvp 1.20

### ⚔️ PVP
- [ ] Version du PVP FFA

### 💟 Cœur
- [ ] Autres patchs rôles/nouveau(x) rôles
- [ ] Modes de jeux pas étendables à rework (Arcade)

# 💾 Code

### 🌐 Site Web
- [ ] Passer à Ore UI
- [ ] Faire une opti globale 
- [ ] Supprimer les comptes bots

### 🌌 Realms
- [ ] système de commande (ClientXCMS)
- [ ] panel GUI

### 💟 Cœur 
- [ ] DEMOPHONE
   - [ ] Dessin
   - [ ] Développement 
   - [ ] Généralisation Mondes
   - [ ] Généralisation Mini-Jeux

# 💬 Traductions
- ##### Party&Friends (PAF)
- ##### Party&Friends Bedrock (Floodgate)
- ##### E

# 7️⃣ Les 7 Jours de Maj

- ##### Thème Azuriom
- ##### Thème Plan 1984
- ##### DEMOPHONE
- ##### Maj Infra 
- ##### Maj bedrock (mais compliqué)
- ##### Maj IA + trademark
- ##### Maj Bedwars
- ##### Maj trad

# 📑  Idées une par une

## 🛏 Bedwars
Le bedwars est un gros problème : c'est un des modes de jeux qui fonctionne le plus, mais aussi celui le plus fade et le plus buggé.

C'est pourquoi, *au grand malheur de fantai*, je voudrais proposer une refonte totale de la boutique pour adapter le serveur au PVP 1.21. Il faudrais donc tout revoir, mais ça nous permettrait de rendre le jeu beaucoup plus fun. Et pourquoi pas ajouter la Mace (très très cher) ?

## ⚔️ KIT PVP
Pour l'instant, le KIT PVP est un serveur un peu mélange avec plusieurs modes de jeux dessus. Je voudrais essayer de les séparer, ce qui amènerais une superbe opti. L'idée est donc d'avoir
- un serveur Duels 1.21
- un serveur Duels 1.8
- un serveur KitPVP (pas possible pour l'instant en 1.8)
Il faudra préparer des kits pour chaque serveur (oui on a du taff)


[Better HUD](https://www.spigotmc.org/resources/%E2%AD%90betterhud%E2%AD%90a-beautiful-hud-plugin-you-havent-seen-before%E2%9C%85auto-resource-pack-build%E2%9C%85.115559/)

# ⏳️ Timeline

- Récupérer les mais des plugins (ia, mbd, vulcan) et la/les maps de vaati
- Voir l'état du plugin de staff et lancer son dev si besoin
- Lister les maps nécessaires, voir dans les archives pour alléger le travail
- css.
- coder.


from fastapi import FastAPI, Request
from fastapi.responses import RedirectResponse
import os
import requests
import sqlite3

app = FastAPI()

# Replace these with your actual Discord OAuth2 credentials
DISCORD_CLIENT_ID = "your_discord_client_id"
DISCORD_CLIENT_SECRET = "your_discord_client_secret"
DISCORD_REDIRECT_URI = "http://localhost:8000/callback"

# Initialize the SQLite database
conn = sqlite3.connect("users.db")
c = conn.cursor()
c.execute("""CREATE TABLE IF NOT EXISTS users
             (username TEXT, email TEXT)""")
conn.commit()

@app.get("/")
async def root(request: Request):
    # Construct the Discord OAuth2 authorization URL
    auth_url = f"https://discord.com/api/oauth2/authorize?client_id={DISCORD_CLIENT_ID}&redirect_uri={DISCORD_REDIRECT_URI}&response_type=code&scope=email"
    return RedirectResponse(auth_url)

@app.get("/callback")
async def callback(request: Request):
    # Get the authorization code from the request
    code = request.query_params.get("code")

    # Exchange the authorization code for an access token
    data = {
        "client_id": DISCORD_CLIENT_ID,
        "client_secret": DISCORD_CLIENT_SECRET,
        "grant_type": "authorization_code",
        "code": code,
        "redirect_uri": DISCORD_REDIRECT_URI,
    }
    try:
        token_response = requests.post("https://discord.com/api/v9/oauth2/token", data=data)
        token_response.raise_for_status()
        token_data = token_response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error fetching access token: {e}")
        print(f"Response status code: {token_response.status_code}")
        print(f"Response content: {token_response.text}")
        return {"error": "Failed to fetch access token"}

    # Use the access token to fetch the user's information
    headers = {
        "Authorization": f"Bearer {token_data['access_token']}"
    }
    try:
        user_response = requests.get("https://discord.com/api/v9/users/@me", headers=headers)
        user_response.raise_for_status()
        user_data = user_response.json()
        username = user_data["username"]
        email = user_data["email"]
    except requests.exceptions.RequestException as e:
        print(f"Error fetching user information: {e}")
        print(f"Response status code: {user_response.status_code}")
        print(f"Response content: {user_response.text}")
        return {"error": "Failed to fetch user information"}

    # Store the user's information in the SQLite database
c.execute("INSERT INTO users (username, email) VALUES (?, ?)", (username, email))
    conn.commit()

    # Print the user's email to the console
    print(f"User email: {email}")

    # Redirect the user to a success page or return a response
    return {"message": "Authentication successful!"}